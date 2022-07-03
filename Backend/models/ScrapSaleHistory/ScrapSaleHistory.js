const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const ScrapSaleHistorySchema = mongoose.Schema({
  invItems: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "InvItem",
    },
  ],
  invnumber: String,
  scrapsaledate: Date,
  grossvalue: String,
  gstperc: String,
  netvalue: String,
  //   location: String,
});
ScrapSaleHistorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model("ScrapSaleHistory", ScrapSaleHistorySchema);
