// Test-copy repair only. Never connects to production or the public app DB.
// Run as root on staging, with APP_ENV=staging and MONGO_AUDIT_PASSWORD set.
// Usage: node staging-repair.cjs DATABASE PRIVATE_OUTPUT_DIRECTORY [--apply]
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { MongoClient } = require('/srv/icare/current/Backend/node_modules/mongoose').mongo;
const [database, output, mode] = process.argv.slice(2);
if (process.env.APP_ENV !== 'staging' || !/^icare_audit_\d{8}$/.test(database || '') ||
    !output || !output.startsWith('/var/lib/icare-audits/') || !process.env.MONGO_AUDIT_PASSWORD ||
    (mode && mode !== '--apply')) {
  throw new Error('Requires staging, a dated isolated audit DB, private output directory, and admin credentials');
}
const client = new MongoClient('mongodb://127.0.0.1:27017', {
  auth: { username: 'staging_admin', password: process.env.MONGO_AUDIT_PASSWORD },
  authSource: 'admin', replicaSet: 'icare-staging', serverSelectionTimeoutMS: 10000,
});
const sid = (v) => v == null ? null : String(v);
const norm = (s) => typeof s === 'string' ? s.trim().replace(/\s+/g, ' ').toUpperCase() : '';
function write(name, value) {
  fs.writeFileSync(path.join(output, name), JSON.stringify(value, null, 2) + '\n', { mode: 0o600, flag: 'wx' });
}
const digest = (value) => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
// Optional reviewed spelling aliases remain private alongside the dry-run plan.
const aliasPath = path.join(output, 'unit-name-aliases.json');
const aliases = fs.existsSync(aliasPath) ? JSON.parse(fs.readFileSync(aliasPath, 'utf8')) : [];

async function read(db) {
  const [assets, units, people] = await Promise.all([
    db.collection('assets').find({}, { projection: { customerId: 1, accountId: 1, unitId: 1, unitName: 1 } }).maxTimeMS(15000).toArray(),
    db.collection('units').find({}, { projection: { customerId: 1, accountId: 1, unitName: 1, assetsId: 1 } }).maxTimeMS(15000).toArray(),
    db.collection('customerlogins').find({}, { projection: { role: 1, parentCustomerId: 1 } }).maxTimeMS(15000).toArray(),
  ]);
  const affectedIds = assets.filter(a => sid(a.unitId) === sid(a._id)).flatMap(a => [a._id, sid(a._id)]);
  const calls = affectedIds.length ? await db.collection('calls').find({ assetId: { $in: affectedIds } },
    { projection: { assetId: 1, unitId: 1 } }).maxTimeMS(15000).toArray() : [];
  return { assets, units, people, calls };
}

function plan(data) {
  const people = new Map(data.people.map(p => [sid(p._id), p]));
  const repairs = [], unresolved = [];
  for (const a of data.assets.filter(a => sid(a.unitId) === sid(a._id))) {
    const customer = people.get(sid(a.customerId));
    const account = people.get(sid(a.accountId));
    const legacyAccount = sid(a.accountId) === sid(a.customerId) && account && account.role === 1;
    const accountValid = account && account.role === 2 && sid(account.parentCustomerId) === sid(a.customerId);
    const scope = data.units.filter(u => sid(u.customerId) === sid(a.customerId) &&
      (!accountValid || sid(u.accountId) === sid(a.accountId)));
    let candidates = scope.filter(u => norm(u.unitName) && norm(u.unitName) === norm(a.unitName));
    let match = accountValid ? 'customer_account_normalized_unit_name' : 'customer_normalized_unit_name_legacy_account';
    if (!candidates.length) {
      const alias = aliases.find(x => x.customerId === sid(a.customerId) && x.accountId === sid(a.accountId) && norm(x.from) === norm(a.unitName));
      if (alias) {
        candidates = scope.filter(u => norm(u.unitName) === norm(alias.to) &&
          (u.assetsId || []).some(v => sid(v) === sid(a._id)));
        match += '_reviewed_alias_and_unit_backref';
      }
    }
    if (candidates.length > 1) {
      const linked = candidates.filter(u => (u.assetsId || []).some(v => sid(v) === sid(a._id)));
      if (linked.length === 1) { candidates = linked; match += '_unique_unit_backref'; }
    }
    let historicalCallEvidence = [];
    if (candidates.length > 1) {
      const knownUnitIds = new Set(data.units.map(u => sid(u._id)));
      const calls = (data.calls || []).filter(c => sid(c.assetId) === sid(a._id) && knownUnitIds.has(sid(c.unitId)));
      const historicIds = [...new Set(calls.map(c => sid(c.unitId)))];
      const supported = candidates.filter(u => historicIds.includes(sid(u._id)));
      // Ignore copied self-ID references that do not resolve to any unit.
      // Conflicting valid historical units must remain unresolved.
      if (historicIds.length === 1 && supported.length === 1) {
        candidates = supported; match += '_consistent_historical_call_unit';
        historicalCallEvidence = calls.map(c => sid(c._id));
      }
    }
    if (!customer || customer.role !== 1 || (!accountValid && !legacyAccount)) {
      unresolved.push({ assetId: sid(a._id), reason: 'invalid_customer_or_account', candidateCount: candidates.length });
      continue;
    }
    // A copied unit name must identify exactly one unit within the known owner.
    // Legacy customer-as-account records can match within the customer only;
    // this repair deliberately leaves their separate account defect unchanged.
    if (candidates.length !== 1) {
      unresolved.push({ assetId: sid(a._id), customerId: sid(a.customerId), accountId: sid(a.accountId),
        unitName: a.unitName, reason: candidates.length ? 'ambiguous_name' : 'no_name_match',
        candidates: candidates.map(u => sid(u._id)) });
      continue;
    }
    const target = candidates[0], targetAccount = people.get(sid(target.accountId));
    if (!targetAccount || targetAccount.role !== 2 || sid(targetAccount.parentCustomerId) !== sid(a.customerId)) {
      unresolved.push({ assetId: sid(a._id), reason: 'target_unit_has_invalid_account' });
      continue;
    }
    repairs.push({ assetId: sid(a._id), beforeUnitId: sid(a.unitId), afterUnitId: sid(target._id),
      customerId: sid(a.customerId), accountId: sid(a.accountId), unitName: a.unitName,
      targetAccountId: sid(target.accountId), targetUnitName: target.unitName,
      match, historicalCallEvidence,
      accountConflictRetained: sid(a.accountId) !== sid(target.accountId),
      beforeUnitMemberships: data.units.filter(u => (u.assetsId || []).some(v => sid(v) === sid(a._id)))
        .map(u => sid(u._id)) });
  }
  const membershipBackup = data.units.map(u => ({ unitId: sid(u._id), assetsId: (u.assetsId || []).map(sid) }));
  return { database, aliases, repairs, unresolved, membershipBackup };
}

(async () => {
  await client.connect();
  try {
    const hello = await client.db('admin').command({ hello: 1 });
    if (hello.setName !== 'icare-staging') throw new Error('Not the staging replica set');
    const db = client.db(database);
    const data = await read(db), current = plan(data);
    if (!mode) {
      const summary = { database, assets: data.assets.length, units: data.units.length,
        selfUnitReferences: current.repairs.length + current.unresolved.length,
        repairable: current.repairs.length, unresolved: current.unresolved.length,
        accountConflictsRetained: current.repairs.filter(r => r.accountConflictRetained).length,
        planSha256: digest(current), created: new Date().toISOString() };
      write('unit-repair-plan.json', current); write('unit-repair-plan-summary.json', summary);
      console.log(JSON.stringify(summary));
      return;
    }
    const saved = JSON.parse(fs.readFileSync(path.join(output, 'unit-repair-plan.json'), 'utf8'));
    if (digest(saved) !== digest(current)) throw new Error('Database changed since dry run; refusing to apply stale plan');
    const { ObjectId } = require('/srv/icare/current/Backend/node_modules/mongoose').mongo;
    const session = client.startSession();
    let updated = 0;
    try {
      await session.withTransaction(async () => {
        updated = 0;
        for (const r of saved.repairs) {
          const assetId = new ObjectId(r.assetId), target = new ObjectId(r.afterUnitId);
          const result = await db.collection('assets').updateOne({ _id: assetId,
            unitId: new ObjectId(r.beforeUnitId), customerId: new ObjectId(r.customerId),
            accountId: new ObjectId(r.accountId), unitName: r.unitName },
          { $set: { unitId: target } }, { session });
          if (result.modifiedCount !== 1) throw new Error('Asset precondition failed: ' + r.assetId);
          const linked = await db.collection('units').updateOne({ _id: target,
            customerId: new ObjectId(r.customerId), accountId: new ObjectId(r.targetAccountId), unitName: r.targetUnitName },
          { $addToSet: { assetsId: assetId } }, { session });
          if (linked.matchedCount !== 1) throw new Error('Target unit changed: ' + r.afterUnitId);
          await db.collection('units').updateMany({ _id: { $ne: target }, assetsId: assetId },
            { $pull: { assetsId: assetId } }, { session });
          updated++;
        }
      }, { readConcern: { level: 'snapshot' }, writeConcern: { w: 'majority' }, maxCommitTimeMS: 15000 });
    } finally { await session.endSession(); }
    const after = await read(db);
    let verified = 0;
    for (const r of saved.repairs) {
      const a = after.assets.find(a => sid(a._id) === r.assetId);
      const membership = after.units.filter(u => (u.assetsId || []).some(v => sid(v) === r.assetId));
      if (sid(a.unitId) !== r.afterUnitId || membership.length !== 1 || sid(membership[0]._id) !== r.afterUnitId)
        throw new Error('Post-repair relationship verification failed: ' + r.assetId);
      verified++;
    }
    const summary = { database, appliedAt: new Date().toISOString(), updated, verified,
      remainingSelfUnitReferences: after.assets.filter(a => sid(a.unitId) === sid(a._id)).length,
      remainingAccountConflictsAmongRepaired: saved.repairs.filter(r => r.accountConflictRetained).length,
      productionChanged: false, publicAppDatabaseChanged: false, planSha256: digest(saved) };
    write('unit-repair-applied.json', summary);
    console.log(JSON.stringify(summary));
  } finally { await client.close(); }
})().catch(error => { console.error(error.message); process.exitCode = 1; });
