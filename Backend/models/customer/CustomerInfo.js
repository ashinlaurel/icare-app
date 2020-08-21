const mongoose = require("mongoose");

const customerInfoSchema = mongoose.Schema({
  customerId: {
    type: mongoose.Schema.ObjectId,
    ref: "CustomerLogin",
  },
  assets: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Asset",
    },
  ],
  account: String,
  unit: String,
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

module.exports = mongoose.model("CustomerInfo", customerInfoSchema);
