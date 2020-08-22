const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");
var validator = require("validator");

const AccountSchema = mongoose.Schema({
  accountName: {
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

  customerId: {
    type: mongoose.Schema.ObjectId,
    ref: "CustomerLogin",
    required: true,
  },
  customerName: String,
  unitId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Unit",
    },
  ],
});

AccountSchema.virtual("password").set(function (password) {
  this.salt = uuidv1();
  this.enc_password = this.hashPassword(password);
});

AccountSchema.methods = {
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

module.exports = mongoose.model("Account", AccountSchema);
