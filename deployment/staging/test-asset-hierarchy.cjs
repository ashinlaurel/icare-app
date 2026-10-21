// Disposable integration fixtures on the synthetic staging app database only.
const assert = require('assert');
const crypto = require('crypto');
const { MongoClient, ObjectId } = require('/srv/icare/current/Backend/node_modules/mongoose').mongo;
if (process.env.APP_ENV !== 'staging' || !process.env.DATABASE || !process.env.DATABASE.includes('/icare_staging?')) {
  throw Error('Hierarchy integration tests require the synthetic staging database');
}
const tag = 'hierarchy-test-' + crypto.randomBytes(6).toString('hex');
const id = Object.fromEntries(['customer', 'account', 'unit', 'otherCustomer', 'otherAccount', 'otherUnit'].map(k => [k, new ObjectId()]));
const assetIds = [];
const checks = [];
let client;
(async () => {
  client = await MongoClient.connect(process.env.DATABASE);
  const db = client.db('icare_staging');
  const request = async (route, body, token) => {
    const res = await fetch('http://127.0.0.1:8081/api/' + route, { method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) },
      body: JSON.stringify(body) });
    return { status: res.status, body: await res.json() };
  };
  try {
    const login = await request('admin/signin', { email: process.env.TEST_ADMIN_EMAIL, password: process.env.TEST_ADMIN_PASSWORD });
    assert.strictEqual(login.status, 200);
    const token = login.body.token, actor = login.body.user._id;
    const people = [
      { _id: id.customer, name: 'SAME NAME', role: 1, childAccountIds: [id.customer] },
      { _id: id.account, name: 'SAME NAME', role: 2, parentCustomerId: id.customer, unitIds: [] },
      { _id: id.otherCustomer, name: 'OTHER CUSTOMER', role: 1, childAccountIds: [] },
      { _id: id.otherAccount, name: 'OTHER ACCOUNT', role: 2, parentCustomerId: id.otherCustomer, unitIds: [] },
    ].map((p, i) => ({ ...p, username: tag + i, enc_password: crypto.randomBytes(32).toString('hex'), salt: crypto.randomBytes(16).toString('hex') }));
    await db.collection('customerlogins').insertMany(people);
    await db.collection('units').insertMany([
      { _id: id.unit, unitName: 'UNIT A', customerId: id.customer, accountId: id.account, assetsId: [] },
      { _id: id.otherUnit, unitName: 'UNIT B', customerId: id.otherCustomer, accountId: id.otherAccount, assetsId: [] },
    ]);
    const accounts = await request('customer/accounts', { customerId: String(id.customer) });
    assert.strictEqual(accounts.status, 200);
    assert.deepStrictEqual(accounts.body.map(a => a._id), [String(id.account)]);
    assert.ok(!('enc_password' in accounts.body[0]));
    checks.push('account picker uses role and parent, despite poisoned child array');
    const units = await request('customer/units', { accountId: String(id.account) });
    assert.strictEqual(units.status, 200); assert.deepStrictEqual(units.body.map(u => u._id), [String(id.unit)]);
    assert.strictEqual((await request('customer/units', { accountId: String(id.customer) })).status, 400);
    checks.push('unit picker rejects a customer used as account');
    const good = () => ({ business: 'NOS', producttype: 'Desktop', ponumber: tag,
      servicelocation: 'Trivandrum', customerId: String(id.customer), accountId: String(id.account), unitId: String(id.unit),
      customerName: 'spoofed', accountName: 'spoofed', unitName: 'spoofed' });
    const product = () => ({ brand: 'SYNTHETIC', model: 'Hierarchy test', serialno: tag });
    const counts = async () => Promise.all(['assets', 'servers', 'originalproducts'].map(c => db.collection(c).countDocuments({})));
    for (const change of [
      { accountId: String(id.customer) }, { customerId: String(id.account) },
      { accountId: String(id.otherAccount) }, { unitId: String(id.otherUnit) },
      { unitId: String(new ObjectId()) }, { accountId: { $ne: null } },
      { customerId: null }, { unitId: '' }, { $set: { accountId: String(id.account) } },
    ]) {
      const before = await counts();
      const result = await request('asset/' + actor + '/create', { asset: { ...good(), ...change }, product: product() }, token);
      assert.strictEqual(result.status, 400, JSON.stringify(result.body));
      assert.deepStrictEqual(await counts(), before, 'Invalid creation wrote documents');
    }
    checks.push('nine invalid creation payloads reject before any write');
    for (const bad of [{ asset: { ...good(), servicelocation: '' }, product: product() },
      { asset: good(), product: { ...product(), brand: '' } }]) {
      const before = await counts(); const result = await request('asset/' + actor + '/create', bad, token);
      assert.strictEqual(result.status, 400); assert.deepStrictEqual(await counts(), before);
    }
    checks.push('model validation runs before the first write');
    const created = await request('asset/' + actor + '/create', { asset: good(), product: product() }, token);
    assert.strictEqual(created.status, 200, JSON.stringify(created.body));
    const assetId = new ObjectId(created.body._id); assetIds.push(assetId);
    let asset = await db.collection('assets').findOne({ _id: assetId });
    assert.strictEqual(String(asset.customerId), String(id.customer));
    assert.strictEqual(String(asset.accountId), String(id.account));
    assert.strictEqual(asset.customerName, 'SAME NAME'); assert.strictEqual(asset.accountName, 'SAME NAME');
    assert.strictEqual(asset.unitName, 'UNIT A');
    assert.ok((await db.collection('units').findOne({ _id: id.unit })).assetsId.some(x => String(x) === String(assetId)));
    checks.push('same-name creation saves distinct IDs and canonical names');
    for (const change of [{ accountId: String(id.customer) }, { unitId: String(id.otherUnit) }, { product: String(new ObjectId()) }]) {
      const before = JSON.stringify(await db.collection('assets').findOne({ _id: assetId }));
      const result = await request('asset/' + actor + '/update', { id: String(assetId), newasset: change, newproduct: {} }, token);
      assert.strictEqual(result.status, 400); assert.strictEqual(JSON.stringify(await db.collection('assets').findOne({ _id: assetId })), before);
    }
    checks.push('invalid updates preserve the stored asset');
    const partial = await request('asset/' + actor + '/update', { id: String(assetId), newasset: { ponumber: tag + '-edited' }, newproduct: {} }, token);
    assert.strictEqual(partial.status, 200, JSON.stringify(partial.body));
    checks.push('valid partial edits preserve ancestry');
    const moved = await request('asset/' + actor + '/update', { id: String(assetId), newasset: {
      customerId: String(id.otherCustomer), accountId: String(id.otherAccount), unitId: String(id.otherUnit),
      customerName: 'spoofed', accountName: 'spoofed', unitName: 'spoofed' }, newproduct: {} }, token);
    assert.strictEqual(moved.status, 200, JSON.stringify(moved.body));
    asset = await db.collection('assets').findOne({ _id: assetId });
    assert.strictEqual(asset.customerName, 'OTHER CUSTOMER'); assert.strictEqual(asset.unitName, 'UNIT B');
    assert.ok(!(await db.collection('units').findOne({ _id: id.unit })).assetsId.some(x => String(x) === String(assetId)));
    assert.strictEqual((await db.collection('units').findOne({ _id: id.otherUnit })).assetsId.filter(x => String(x) === String(assetId)).length, 1);
    checks.push('valid ownership move reconciles both unit lists');
    console.log(JSON.stringify({ status: 'passed', checks, database: 'icare_staging', productionChanged: false }));
  } finally {
    // Clean only this run's tagged assets and exact fixture IDs, even on failure.
    const owned = await db.collection('assets').find({ ponumber: { $regex: '^' + tag } }, { projection: { _id: 1 } }).toArray();
    const ownedIds = [...assetIds, ...owned.map(a => a._id)];
    await db.collection('servers').deleteMany({ asset: { $in: ownedIds } });
    await db.collection('originalproducts').deleteMany({ asset: { $in: ownedIds } });
    await db.collection('assets').deleteMany({ _id: { $in: ownedIds } });
    await db.collection('units').deleteMany({ _id: { $in: [id.unit, id.otherUnit] } });
    await db.collection('customerlogins').deleteMany({ _id: { $in: [id.customer, id.account, id.otherCustomer, id.otherAccount] } });
  }
})().catch(error => { console.error(error.message); process.exitCode = 1; }).finally(async () => { if (client) await client.close(); });
