const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const salarySchema = mongoose.Schema({
  //   employeeName: {
  //     type: String,
  //     required: [true, "Please enter  a name"],
  //     maxlength: 32,
  //     trim: true,
  //   },
  queryID: String,
  employeeID: String,
  employeeName: String,
  date: Date,
  PFNo: String,
  ESINo: String,
  UANNo: String,
  Basic: String,
  DA: String,
  // BplusDA: values.BplusDA,
  HRAperc: String,
  rent: String,
  // ---from salvalues
  BplusDA: String,
  EligibleDays: String,
  HRA: String,
  PerformanceAllowance: String,
  Incentive: String,
  Bonus: String,
  GrossSalary: String,
  EmplPF: String,
  EmplESI: String,
  ExtraMobileUsage: String,
  LostDamage: String,
  OtherDeductions: String,

  Deduction: String,
  TakeHomeSalary: String,
  EmployerPF: String,
  EmployerESI: String,
  CTC: String,
  // ------------------------------
  AccountName: String,
  BankName: String,
  BankAcNo: String,
  IFSCCode: String,
  BranchName: String,
});

salarySchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Salary", salarySchema);
