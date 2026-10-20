// Exercise the real controller without connecting to MongoDB or starting the app.
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const assetId = "111111111111111111111111";
const unitId = "222222222222222222222222";
const source = fs.readFileSync(
  path.join(__dirname, "../controllers/assets/assets.js"), "utf8"
);

async function update(newasset, exists = true) {
  const writes = [];
  const lookups = [];
  const models = {
    "../../models/assets/assets": {
      findByIdAndUpdate: async (...args) => {
        writes.push({ collection: "assets", args });
        return { _id: assetId };
      },
    },
    "../../models/products/server": {
      findOneAndUpdate: async (...args) => {
        writes.push({ collection: "servers", args });
        return {};
      },
    },
    "../../models/customer/Unit": {
      exists: async (query) => {
        lookups.push(query);
        if (exists instanceof Error) throw exists;
        return exists ? { _id: unitId } : null;
      },
    },
    "../../models/products/originalproduct": {},
    mongoose: {}, lodash: {}, mongodb: {},
  };
  const context = {
    exports: {}, console: { log() {} },
    require(name) {
      assert.ok(Object.prototype.hasOwnProperty.call(models, name), name);
      return models[name];
    },
  };
  vm.runInNewContext(source, context);
  const response = {
    code: 200, body: null,
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; return this; },
  };
  await context.exports.updateAsset(
    { body: { id: assetId, newasset, newproduct: { model: "Example" } } },
    response
  );
  return { response, writes, lookups };
}

(async () => {
  // The original failure: saving a real-looking asset ID as a nonexistent unit.
  let result = await update({ unitId: assetId }, false);
  assert.strictEqual(result.response.code, 400);
  assert.match(result.response.body.error, /unit does not exist/);
  assert.strictEqual(result.writes.length, 0);

  for (const badId of [null, "", "not-an-id", 123, { $ne: null }]) {
    result = await update({ unitId: badId });
    assert.strictEqual(result.response.code, 400);
    assert.strictEqual(result.lookups.length, 0);
    assert.strictEqual(result.writes.length, 0);
  }

  // Existence-check failure must not fall through and perform either write.
  result = await update({ unitId }, new Error("Database unavailable"));
  assert.strictEqual(result.response.code, 400);
  assert.strictEqual(result.writes.length, 0);

  // MongoDB operators must not bypass validation of submitted unit references.
  for (const fields of [{ $set: { unitId: assetId } }, { $unset: { unitId: 1 } }, null, []]) {
    result = await update(fields);
    assert.strictEqual(result.response.code, 400);
    assert.strictEqual(result.writes.length, 0);
  }

  result = await update({ unitId, ponumber: "PO-UNCHANGED-UNIT" });
  assert.strictEqual(result.response.code, 200);
  assert.strictEqual(result.lookups[0]._id, unitId);
  assert.strictEqual(result.writes[0].args[1].unitId, unitId);
  assert.strictEqual(result.writes.length, 2);

  // Existing partial-update callers that do not submit unitId keep working.
  result = await update({ ponumber: "PO-PARTIAL" });
  assert.strictEqual(result.response.code, 200);
  assert.strictEqual(result.lookups.length, 0);
  assert.strictEqual(result.writes.length, 2);
  console.log("Asset unit-reference regressions passed (13 cases).");
})().catch((error) => { console.error(error); process.exitCode = 1; });
