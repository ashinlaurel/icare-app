const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const assetSchema = new Schema({
  business: {
    type: String,
    required: true,
    trim: true,
  },
  // TODO: Must add customer connection
  ponumber: {
    type: String,
    required: true,
    trim: true,
  },
  podate: {
    type: Date,
    required: false,
    trim: true,
  },
  contractfrom: {
    type: Date,
    required: false,
    trim: true,
  },
  contractto: {
    type: Date,
    required: false,
    trim: true,
  },
  billingfrom: {
    type: Date,
    required: false,
    trim: true,
  },
  billingto: {
    type: Date,
    required: false,
    trim: true,
  },
  amcrate: {
    type: Number,
    required: false,
    trim: true,
  },
  gstpercent: {
    type: Number,
    required: false,
    trim: true,
  },
  gstamount: {
    type: Number,
    required: false,
    trim: true,
  },
  netamount: {
    type: Number,
    required: false,
    trim: true,
  },
  producttype: {
    type: String,
    required: false,
    trim: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Server",
  },
});
assetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Asset", assetSchema);
