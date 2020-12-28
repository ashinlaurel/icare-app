const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");
var validator = require("validator");

const employeeLoginSchema = mongoose.Schema({
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
  address: String,
  district: String,
  state: String,
  locationType: String, //( Remote/ Local/ Outlocation )
  pincode: String,
  GSTnumber: String,
  contactPerson: String,
  contactNo: String,
  altContact: String,
  whatsappNo: String,
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
