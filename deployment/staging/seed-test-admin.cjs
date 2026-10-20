// Run on staging only, with /etc/icare/staging.env and test-admin.env loaded.
const mongoose = require('../../Backend/node_modules/mongoose');
const Employee = require('../../Backend/models/employee/EmployeeLogin');
(async () => {
  if (process.env.APP_ENV !== 'staging' || !process.env.DATABASE.includes('/icare_staging?')) {
    throw new Error('Refusing to seed outside the isolated staging database');
  }
  await mongoose.connect(process.env.DATABASE);
  const existing = await Employee.findOne({ email: process.env.TEST_ADMIN_EMAIL });
  if (!existing) await Employee.create({
    employeeID: 'STAGING-ADMIN', employeeName: 'Staging Administrator',
    email: process.env.TEST_ADMIN_EMAIL, password: process.env.TEST_ADMIN_PASSWORD,
    role: 0, location: 'Trivandrum', Live: 'Yes'
  });
  console.log('Synthetic staging administrator ready; no production records copied.');
  await mongoose.disconnect();
})().catch(error => { console.error(error.message); process.exit(1); });
