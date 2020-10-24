const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");
var validator = require("validator");

const customerLoginSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter  a name"],
    maxlength: 32,
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Please enter  a username"],
    maxlength: 32,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    // unique: false,
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
  ///////////---------> 0-Admin , 1-Customer, 2-Account
  role: {
    type: Number,
    default: 0,
  },
  ///////// for CUSTOMER TYPE
  childAccountIds: [
    ////////////PASS EMPTY []
    {
      type: mongoose.Schema.ObjectId,
      ref: "CustomerLogin",
      required: true,
    },
  ],
  //////// for ACCOUNT TYPE
  parentCustomerId: {
    type: mongoose.Schema.ObjectId,
    ref: "CustomerLogin",
    // required: true,
  },
  parentCustomerName: String,
  unitIds: [
    ////////////PASS EMPTY []
    {
      type: mongoose.Schema.ObjectId,
      ref: "Unit",
      required: true,
    },
  ],
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
customerLoginSchema.plugin(mongoosePaginate);

customerLoginSchema.virtual("password").set(function (password) {
  this.salt = uuidv1();
  this.enc_password = this.hashPassword(password);
});

customerLoginSchema.methods = {
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

module.exports = mongoose.model("CustomerLogin", customerLoginSchema);
