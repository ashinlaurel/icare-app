const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");
var validator = require("validator");

const employeeLoginSchema = mongoose.Schema({
  employeeID: {
    type: String,
    required: [true, "Please enter  a name"],
    maxlength: 32,
    trim: true,
  },
  employeeName: {
    type: String,
    required: [true, "Please enter  a name"],
    maxlength: 32,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    trim: true,
    validate: [validator.isEmail, "Enter a valid email"],
  },
  enc_password: {
    type: String,
    required: [true, "Please enter a password"],
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  salt: String,
  role: {
    type: Number,
    default: 0,
  },
  location: String,
  address: String,
  district: String,
  state: String,
  pincode: String,
  contactPerson: String,
  contactNo: String,
  contactNoLand: String,
  contactPersonOcc: String,
  altContact: String,
  whatsappNo: String,
  sex: String,
  dob: Date,
  // Qualification Form
  educational: String,
  technical: String,
  experience: String,
  DegreeCertificate: String,
  ExperienceCertificate: String,
  JoiningReport: String,
  // ---Joining Formalities form
  PAN: String,
  AadharNo: String,
  EmergencyContact: String,
  EC: String,
  Phone: String,
  BloodGr: String,
  EmplVerificationDetail: String,
  PAN: String,
  AadharNo: String,
  EmergencyContact: String,
  ECPhone: String,
  BloodGr: String,
  photo: String,
  IDProofImg: String,
  AadhaarImg: String,
  PANImg: String,
  //--- Appoinment details form
  DOJ: String,
  CurrentLocation: String,
  Department: String,
  Designation: String,
  Role: String,
  ///---External Certifications
  ExtCert_1: String,
  ExtCert_1_ID: String,
  ExtCert_1_Validity: String,
  ExtCert_2: String,
  ExtCert_2_ID: String,
  ExtCert_2_Validity: String,
  ExtCert_3: String,
  ExtCert_3_ID: String,
  ExtCert_3_Validity: String,
  // Skill set
  PC_L1: String,
  PC_L2: String,
  LAP_L1: String,
  LAP_L2: String,
  SVR_L1: String,
  SVR_L2: String,
  STO_L1: String,
  STO_L2: String,
  NW_L1: String,
  NW_L2: String,
  PRN_L1: String,
  PRN_L2: String,
  LMP_L1: String,
  LMP_L2: String,
  D_OS_L1: String,
  D_OS_L2: String,
  SVR_OS_L1: String,
  SVR_OS_L2: String,
  LIN_L1: String,
  APP_L1: String,
  // Secruty Details
  // PFNo	ESINo	UANNo	BasicDA	BplusDA	HRA	Incentive_1	Incentive_1	Gross Salary	EmplPF	EmplESI Deduction	TakeHomeSalary	EomployerPF	EomployerESI	CTC	AccountName	BankName	BankAcNo	IFSCCode	BranchName
  PFNo: String,
  ESINo: String,
  UANNo: String,
  Basic: String,
  DA: String,
  // BplusDA:String,
  HRAperc: String,
  rent: String,
  // Incentive_1:String,	Incentive_2:String,
  // GrossSalary:String,	EmplPF:String,	EmplESI:String, Deduction:String,	TakeHomeSalary:String,	EmployerPF:String,	EmployerESI:String,	CTC:String,
  AccountName: String,
  BankName: String,
  BankAcNo: String,
  IFSCCode: String,
  BranchName: String,
  //separation
  ResignDate: String,
  RelievedDate: String,
  NoticePeriodServed: String,
  Live: String,
  PFNo: String,
  ESINo: String,
  UANNo: String,
  BasicDA: String,
  BplusDA: String,
  HRA: String,
  // Incentive_1: String,
  // Incentive_2: String,
  // GrossSalary: String,
  // EmplPF: String,
  // EmplESI: String,
  // Deduction: String,
  // TakeHomeSalary: String,
  // EmployerPF: String,
  // EmployerESI: String,
  // CTC: String,
  AccountName: String,
  BankName: String,
  BankAcNo: String,
  IFSCCode: String,
  BranchName: String,
  //separation
  ResignDate: String,
  RelievedDate: String,
  NoticePeriodServed: String,
  ResignationLetter: String,
  ReleivingLetter: String,
  Live: String,
});

employeeLoginSchema.plugin(mongoosePaginate);

employeeLoginSchema.virtual("password").set(function (password) {
  this.salt = uuidv1();
  this.enc_password = this.hashPassword(password);
});

employeeLoginSchema.methods = {
  hashPassword: function (pass) {
    if (!pass) return "";
    try {
      return crypto.createHmac("sha256", this.salt).update(pass).digest("hex");
    } catch (err) {
      console.log("err at hashpass");
      throw err;
    }
  },
  authenticate: function (pass) {
    return this.hashPassword(pass) === this.enc_password;
  },
};

module.exports = mongoose.model("EmployeeLogin", employeeLoginSchema);
