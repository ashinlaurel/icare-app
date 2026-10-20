const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');
const source = fs.readFileSync(path.join(__dirname, 'repair-self-unit-references.cjs'), 'utf8');
const planningSource = source.slice(0, source.indexOf('\n(async () => {'));
const ids = { asset: '1'.repeat(24), customer: '2'.repeat(24), account: '3'.repeat(24),
  unit: '4'.repeat(24), secondAccount: '5'.repeat(24), secondUnit: '6'.repeat(24) };
function fixture() {
  return {
    assets: [{ _id: ids.asset, unitId: ids.asset, customerId: ids.customer, accountId: ids.account, unitName: 'dairy' }],
    units: [{ _id: ids.unit, customerId: ids.customer, accountId: ids.account, unitName: 'DAIRY', assetsId: [ids.asset] }],
    people: [{ _id: ids.customer, role: 1 }, { _id: ids.account, role: 2, parentCustomerId: ids.customer },
      { _id: ids.secondAccount, role: 2, parentCustomerId: ids.customer }],
  };
}
function run(data, aliases = []) {
  const context = {
    fixture: data,
    process: { argv: ['node', 'repair', 'icare_audit_20990101', '/var/lib/icare-audits/test'],
      env: { APP_ENV: 'staging', MONGO_AUDIT_PASSWORD: 'synthetic' } },
    require(name) {
      if (name.endsWith('/mongoose')) return { mongo: { MongoClient: class {} } };
      if (name === 'fs') return { existsSync: () => true, readFileSync: () => JSON.stringify(aliases) };
      return require(name);
    },
  };
  return vm.runInNewContext(planningSource + '\nplan(fixture)', context);
}
let data = fixture(), result = run(data);
assert.strictEqual(result.repairs.length, 1);
assert.strictEqual(result.repairs[0].afterUnitId, ids.unit);

// Same display name under another account must not affect a valid account match.
data.units.push({ ...data.units[0], _id: ids.secondUnit, accountId: ids.secondAccount, assetsId: [] });
result = run(data);
assert.strictEqual(result.repairs[0].afterUnitId, ids.unit);

// Legacy account shortcut requires exactly one match or a unique back-reference.
data.assets[0].accountId = ids.customer;
result = run(data);
assert.strictEqual(result.repairs[0].afterUnitId, ids.unit);
assert.strictEqual(result.repairs[0].accountConflictRetained, true);
assert.match(result.repairs[0].match, /unique_unit_backref/);
data.units[0].assetsId = [];
assert.strictEqual(run(data).unresolved[0].reason, 'ambiguous_name');
data.units.forEach(u => { u.assetsId = [ids.asset]; });
assert.strictEqual(run(data).unresolved[0].reason, 'ambiguous_name');

data.units.forEach(u => { u.assetsId = []; });
data.calls = [{ _id: 'call-a', assetId: ids.asset, unitId: ids.unit },
  { _id: 'call-b', assetId: ids.asset, unitId: ids.asset }];
result = run(data);
assert.strictEqual(result.repairs[0].afterUnitId, ids.unit);
assert.strictEqual(result.repairs[0].historicalCallEvidence.length, 1);
data.calls.push({ _id: 'call-c', assetId: ids.asset, unitId: ids.secondUnit });
assert.strictEqual(run(data).unresolved[0].reason, 'ambiguous_name');
data.calls = [{ _id: 'call-b', assetId: ids.asset, unitId: ids.asset }];
assert.strictEqual(run(data).unresolved[0].reason, 'ambiguous_name');

data = fixture(); data.units[0].accountId = ids.secondAccount;
assert.strictEqual(run(data).unresolved[0].reason, 'no_name_match');
data = fixture(); data.people[0].role = 2;
assert.strictEqual(run(data).unresolved[0].reason, 'invalid_customer_or_account');
data = fixture(); data.assets[0].unitId = ids.unit;
assert.strictEqual(run(data).repairs.length, 0);

// Spelling aliases are explicit, owner-scoped, and require a back-reference.
data = fixture(); data.assets[0].unitName = 'DIARY';
const alias = [{ customerId: ids.customer, accountId: ids.account, from: 'DIARY', to: 'DAIRY' }];
assert.strictEqual(run(data).repairs.length, 0);
assert.strictEqual(run(data, alias).repairs.length, 1);
data.units[0].assetsId = [];
assert.strictEqual(run(data, alias).repairs.length, 0);
console.log('Unit repair matching regressions passed (14 cases).');
