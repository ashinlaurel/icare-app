export const recordId = value => typeof value === 'string' ? value : (value && value._id) || '';
const isId = value => typeof value === 'string' && /^[a-f\d]{24}$/i.test(value);
export const hasHierarchyIds = (customer, account, unit) =>
  [customer, account, unit].every(value => value && isId(recordId(value._id)));
export const validHierarchySelection = (customer, account, unit) =>
  hasHierarchyIds(customer, account, unit) && customer.role === 1 && account.role === 2 &&
  recordId(account.parentCustomerId) === recordId(customer._id) &&
  recordId(unit.customerId) === recordId(customer._id) &&
  recordId(unit.accountId) === recordId(account._id);
