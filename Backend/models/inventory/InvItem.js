const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const InvItemSchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please select the item type"],
  },
  name: {
    type: String,
    trim: true,
  },

  //   customerId: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "CustomerLogin",
  //   },

  assetsIdHistory: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Asset",
    },
  ],
  // to be set null if in inventory
  assetId: {
    type: mongoose.Schema.ObjectId,
    ref: "Asset",
    default: null,
  },
  history: [
    {
      histtype: String,
      date: String,
      location: String,
      callId: String,
      assetId: String,
      status: String,
      note: String,
    },
  ],

  sno: {
    type:String,
    unique:true,
    required:true
  },
  condition: String,
  location: String,
  invnumber: String,
  invdate: Date,
  invtype: String,
  // ----------------
  purchtype: String,
  purchlocation: String,
  vendor: String,
  vendorId: {
    type: mongoose.Schema.ObjectId,
    ref: "Vendor",
    default: null,
  },
  gstno: String,
  panno: String,
  aadharno: String,
  taxcategory: String,
  taxperc: String,
  rate: String,
  igst: String,
  cgst: String,
  sgst: String,
  nettax: String,
  amount: String,
  tcs: String,
  invamount: String,
  wty: String,
  expirydate: String,
  //------
  brand: String,
  model: String,
  systype: String,
  stocktype: String,
  // ----------------
  caseId: String,
  LSTtype:String,
  LSTCustomer:String,
});
InvItemSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("InvItem", InvItemSchema);
