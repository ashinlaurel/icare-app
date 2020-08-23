const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");
var validator = require("validator");

const customerLoginSchema = mongoose.Schema({
  customerName: {
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
  accountId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Account",
      required: true,
    },
  ],
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
