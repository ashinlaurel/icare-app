const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const InvItemSchema = mongoose.Schema({
  
  type: {
    type: String,
    required: [true, "Please select the item type"],
  },
  name: {
    type: String,
    maxlength: 32,
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

  sno: String,
  condition: String,
  location: String,
  invnumber: String,
  invdate: String,
  invtype: String,
  // ----------------
  purchtype: String,
  purchlocation: String,
  vendor: String,
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
  brand:String,
  model:String,
  systype:String,
   // ----------------
   caseId:String, 
});
InvItemSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("InvItem", InvItemSchema);
