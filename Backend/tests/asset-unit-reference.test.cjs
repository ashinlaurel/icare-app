// Exercise actual controllers and validation with isolated in-memory storage.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const validation = require('../validation/assetHierarchy');
const ids = { asset: '1'.repeat(24), unit: '2'.repeat(24), customer: '3'.repeat(24),
  account: '4'.repeat(24), otherCustomer: '5'.repeat(24), otherAccount: '6'.repeat(24),
  otherUnit: '7'.repeat(24), product: '8'.repeat(24) };
function harness() {
  const writes = [], people = new Map(), units = new Map(), assets = new Map(), products = new Map();
  let next = 100;
  const model = (collection, store) => class {
    constructor(fields) { Object.assign(this, fields); this._id = fields._id || (next++).toString(16).padStart(24, '0'); this.history = this.history || []; }
    set(fields) { Object.assign(this, fields); }
    async validate() { if (collection !== 'assets' && !this.brand) throw Error('Brand is required'); }
    async save() { writes.push(collection); store.set(String(this._id), this); return this; }
    static async findById(id) { return store.get(String(id)) || null; }
    static async findOne(filter) { return [...store.values()].find(d => Object.keys(filter).every(k => String(d[k]) === String(filter[k]))) || null; }
  };
  const Asset = model('assets', assets), Server = model('servers', products);
  const Original = model('originalproducts', new Map());
  people.set(ids.customer, { _id: ids.customer, role: 1, name: 'SAME NAME' });
  people.set(ids.account, { _id: ids.account, role: 2, name: 'SAME NAME', parentCustomerId: ids.customer });
  people.set(ids.otherCustomer, { _id: ids.otherCustomer, role: 1, name: 'OTHER CUSTOMER' });
  people.set(ids.otherAccount, { _id: ids.otherAccount, role: 2, name: 'OTHER ACCOUNT', parentCustomerId: ids.otherCustomer });
  units.set(ids.unit, { _id: ids.unit, unitName: 'UNIT', customerId: ids.customer, accountId: ids.account, assetsId: [ids.asset] });
  units.set(ids.otherUnit, { _id: ids.otherUnit, unitName: 'OTHER UNIT', customerId: ids.otherCustomer, accountId: ids.otherAccount, assetsId: [] });
  assets.set(ids.asset, new Asset({ _id: ids.asset, customerId: ids.customer, accountId: ids.account, unitId: ids.unit, product: ids.product }));
  products.set(ids.product, new Server({ _id: ids.product, asset: ids.asset, brand: 'Example' }));
  const Unit = {
    async findById(id) { return units.get(String(id)) || null; },
    async updateOne(filter, change) {
      const u = units.get(String(filter._id));
      if (!u || String(u.customerId) !== String(filter.customerId) || String(u.accountId) !== String(filter.accountId)) return { matchedCount: 0 };
      writes.push('units'); if (!u.assetsId.includes(change.$addToSet.assetsId)) u.assetsId.push(change.$addToSet.assetsId);
      return { matchedCount: 1 };
    },
    async updateMany(filter, change) {
      writes.push('unit-cleanup');
      for (const u of units.values()) if (u._id !== filter._id.$ne) u.assetsId = u.assetsId.filter(v => v !== change.$pull.assetsId);
      return { matchedCount: 1 };
    },
  };
  const CustomerLogin = { async findById(id) { return people.get(String(id)) || null; } };
  const modules = { '../../models/assets/assets': Asset, '../../models/products/server': Server,
    '../../models/products/originalproduct': Original, '../../models/customer/Unit': Unit,
    '../../models/customer/CustomerLogin': CustomerLogin, '../../validation/assetHierarchy': validation,
    mongoose: {}, lodash: {}, mongodb: {} };
  const box = { exports: {}, console: { log() {} }, require(name) { assert.ok(name in modules, name); return modules[name]; } };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../controllers/assets/assets.js'), 'utf8'), box);
  async function call(name, body) {
    const res = { code: 200, status(code) { this.code = code; return this; }, json(body) { this.body = body; return this; } };
    await box.exports[name]({ body }, res); return res;
  }
  return { call, writes, people, units, assets, products };
}
const good = () => ({ customerId: ids.customer, accountId: ids.account, unitId: ids.unit,
  customerName: 'spoofed customer', accountName: 'spoofed account', unitName: 'spoofed unit' });
let cases = 0;
async function rejectCreate(change, configure) {
  const h = harness(); if (configure) configure(h);
  const res = await h.call('createAsset', { asset: { ...good(), ...change }, product: { brand: 'Example', model: 'Example', serialno: 'SYNTHETIC' } });
  assert.strictEqual(res.code, 400, JSON.stringify(res.body)); assert.strictEqual(h.writes.length, 0); cases++;
}
(async () => {
  await rejectCreate({ accountId: ids.customer });
  await rejectCreate({ accountId: ids.otherAccount });
  await rejectCreate({ unitId: ids.otherUnit });
  await rejectCreate({ unitId: ids.asset });
  await rejectCreate({ customerId: ids.account });
  for (const bad of [null, '', 'bad', { $ne: null }, 123]) await rejectCreate({ accountId: bad });
  await rejectCreate({ $set: { accountId: ids.account } });
  await rejectCreate({ product: ids.product });
  await rejectCreate({}, h => h.people.delete(ids.customer));
  await rejectCreate({}, h => { h.units.get(ids.unit).customerId = ids.otherCustomer; });
  await rejectCreate({}, h => { h.people.get(ids.account).parentCustomerId = ids.otherCustomer; });
  let h = harness(), res = await h.call('createAsset', { asset: good(), product: { brand: '', serialno: 'SYNTHETIC' } });
  assert.strictEqual(res.code, 400); assert.strictEqual(h.writes.length, 0); cases++;
  h = harness(); res = await h.call('createAsset', { asset: good(), product: { brand: 'Example', model: 'Example', serialno: 'SYNTHETIC' } });
  assert.strictEqual(res.code, 200); assert.strictEqual(res.body.customerName, 'SAME NAME');
  assert.strictEqual(res.body.accountName, 'SAME NAME'); assert.notStrictEqual(res.body.customerId, res.body.accountId);
  assert.strictEqual(res.body.unitName, 'UNIT'); assert.ok(h.units.get(ids.unit).assetsId.includes(res.body._id)); cases++;
  for (const change of [{ accountId: ids.customer }, { unitId: ids.otherUnit }, { $set: { unitId: ids.unit } }, { originalproduct: ids.product }]) {
    h = harness(); res = await h.call('updateAsset', { id: ids.asset, newasset: change, newproduct: {} });
    assert.strictEqual(res.code, 400); assert.strictEqual(h.writes.length, 0); cases++;
  }
  h = harness(); res = await h.call('updateAsset', { id: ids.asset, newasset: { ponumber: 'PARTIAL', customerName: 'spoofed' }, newproduct: {} });
  assert.strictEqual(res.code, 200); assert.strictEqual(res.body.asset.customerName, 'SAME NAME'); cases++;
  h = harness(); h.assets.get(ids.asset).accountId = ids.customer;
  res = await h.call('updateAsset', { id: ids.asset, newasset: { ponumber: 'PARTIAL' }, newproduct: {} });
  assert.strictEqual(res.code, 400); assert.strictEqual(h.writes.length, 0); cases++;
  h = harness(); res = await h.call('updateAsset', { id: ids.asset, newasset: { customerId: ids.otherCustomer, accountId: ids.otherAccount, unitId: ids.otherUnit }, newproduct: { $push: { history: { note: 'changed owner' } } } });
  assert.strictEqual(res.code, 200); assert.ok(!h.units.get(ids.unit).assetsId.includes(ids.asset));
  assert.ok(h.units.get(ids.otherUnit).assetsId.includes(ids.asset)); assert.strictEqual(h.products.get(ids.product).history.length, 1); cases++;
  for (const update of [{ asset: ids.otherUnit }, { $unset: { asset: 1 } }, { $push: { history: { $each: [] } } }]) {
    h = harness(); res = await h.call('updateAsset', { id: ids.asset, newasset: {}, newproduct: update });
    assert.strictEqual(res.code, 400); assert.strictEqual(h.writes.length, 0); cases++;
  }
  h = harness(); h.products.clear(); res = await h.call('updateAsset', { id: ids.asset, newasset: {}, newproduct: {} });
  assert.strictEqual(res.code, 409); assert.strictEqual(h.writes.length, 0); cases++;
  console.log(`Asset hierarchy controller regressions passed (${cases} cases).`);
})().catch(error => { console.error(error); process.exitCode = 1; });
