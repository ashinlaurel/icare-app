// Run the actual load/save handlers with synthetic API responses and React state
// setters. No browser, application startup, dependencies, or network are needed.
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const source = fs.readFileSync(path.join(
  __dirname, "../../FrontEnd/src/pages/Assets/UpdateAsset.js"
), "utf8");
function handler(name) {
  const match = source.match(new RegExp(
    `const ${name} = async \\([^)]*\\) => \\{[\\s\\S]*?\\n  \\};`
  ));
  assert.ok(match, `Missing ${name} handler`);
  return `${match[0]}\n${name}`;
}

(async () => {
  const assetId = "111111111111111111111111";
  const unitId = "222222222222222222222222";
  const customerId = "333333333333333333333333";
  const accountId = "444444444444444444444444";
  const asset = {
    unitId, unitName: "Example dairy", customerId, accountId,
    customerName: "Example customer", accountName: "Example account",
    ponumber: "PO-ORIGINAL", product: {},
  };
  const requests = [];
  const axios = async (request) => {
    requests.push(request);
    return { data: {} };
  };
  axios.post = async () => ({ data: asset });
  const context = {
    id: assetId, API: "/api", Emp: { getId: () => "employee" },
    axios, console: { log() {} },
    moment: () => ({ format: () => "2026-10-20" }),
  };
  for (const match of source.matchAll(/const\s+\[\s*(\w+),\s*(\w+)\s*\]/g)) {
    const [, state, setter] = match;
    context[state] = "";
    context[setter] = (value) => { context[state] = value; };
  }
  context.refresh = false;
  vm.createContext(context);
  await vm.runInContext(handler("getAsset"), context)();
  assert.strictEqual(context.unit._id, unitId);
  assert.strictEqual(context.unit.unitName, asset.unitName);

  // Edit an unrelated PO field and save, without opening the unit selector.
  context.POnumber = "PO-EDITED";
  await vm.runInContext(handler("handleSubmit"), context)({ preventDefault() {} });
  const update = requests.find((r) => r.url.endsWith("/update"));
  assert.ok(update, "No asset update request was sent");
  assert.strictEqual(update.data.id, assetId);
  assert.strictEqual(update.data.newasset.unitId, unitId);
  assert.notStrictEqual(update.data.newasset.unitId, assetId);
  assert.strictEqual(update.data.newasset.ponumber, "PO-EDITED");
  assert.strictEqual(update.data.newasset.customerId, customerId);
  assert.strictEqual(update.data.newasset.accountId, accountId);
  console.log("Asset form regression passed: unrelated edits preserve the unit reference.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
