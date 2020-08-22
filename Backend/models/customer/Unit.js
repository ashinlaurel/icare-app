const mongoose = require("mongoose");

const unitSchema = mongoose.Schema({
  unitName: {
    type: String,
    required: [true, "Please enter unit name"],
  },
  customerId: {
    type: mongoose.Schema.ObjectId,
    ref: "CustomerLogin",
  },
  customerName: String,

  accountId: {
    type: mongoose.Schema.ObjectId,
    ref: "Account",
  },
  accountName: String,

  assetsId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Asset",
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

module.exports = mongoose.model("Unit", unitSchema);
