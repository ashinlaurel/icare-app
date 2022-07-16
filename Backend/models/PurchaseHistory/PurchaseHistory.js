const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const PurchaseHistorySchema = mongoose.Schema({
  invItems: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "InvItem",
    },
  ],
  // to be set null if in inventory

  // ----------------
  purchtype: String,
  purchlocation: String,
  vendor: String,
  vendorId: String,
  gstno: String,
  panno: String,
  aadharno: String,
  invnumber: String,
  invdate: Date,
  invtype: String,
  location: String,
});
PurchaseHistorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model("PurchaseHistory", PurchaseHistorySchema);
