const assetFields = new Set([
  'business', 'producttype', 'unitId', 'unitName', 'accountId', 'accountName',
  'customerId', 'customerName', 'ponumber', 'podate', 'contractfrom', 'contractto',
  'billingfrom', 'billingto', 'amcrate', 'gstperc', 'gstamount', 'netamount', 'servicelocation',
]);
const isId = value => typeof value === 'string' && /^[a-f\d]{24}$/i.test(value);
const sameId = (a, b) => a != null && b != null && String(a).toLowerCase() === String(b).toLowerCase();
function invalid(message) { const error = new Error(message); error.status = 400; throw error; }
function validateAssetFields(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) invalid('Invalid asset update fields.');
  for (const key of Object.keys(value)) {
    if (!assetFields.has(key)) invalid('Unsupported asset field: ' + key);
    if (['customerId', 'accountId', 'unitId'].includes(key) && !isId(value[key])) invalid('A valid ' + key + ' is required.');
  }
}
async function validateAssetHierarchy(ids, { CustomerLogin, Unit }) {
  for (const key of ['customerId', 'accountId', 'unitId']) {
    if (!isId(ids[key])) invalid('A valid ' + key + ' is required.');
  }
  const [customer, account, unit] = await Promise.all([
    CustomerLogin.findById(ids.customerId, '_id name role'),
    CustomerLogin.findById(ids.accountId, '_id name role parentCustomerId'),
    Unit.findById(ids.unitId, '_id unitName customerId accountId'),
  ]);
  if (!customer || customer.role !== 1) invalid('Select an existing customer.');
  if (!account || account.role !== 2) invalid('Select an existing account, not a customer.');
  if (!sameId(account.parentCustomerId, customer._id)) invalid('The account does not belong to the selected customer.');
  if (!unit) invalid('The selected unit does not exist.');
  if (!sameId(unit.customerId, customer._id) || !sameId(unit.accountId, account._id)) {
    invalid('The unit does not belong to the selected customer and account.');
  }
  if (![customer.name, account.name, unit.unitName].every(v => typeof v === 'string' && v.trim())) {
    invalid('The selected customer, account and unit must have names.');
  }
  return {
    customerId: customer._id, customerName: customer.name,
    accountId: account._id, accountName: account.name,
    unitId: unit._id, unitName: unit.unitName,
  };
}
module.exports = { isId, sameId, invalid, validateAssetFields, validateAssetHierarchy };
