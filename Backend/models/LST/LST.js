const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const LSTSchema = new Schema({
  LSTNo: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  from: {
    type: String,
    required: true,
    trim: true,
  },
  to: {
    type: String,
    required: true,
    trim: true,
  },
  invItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "InvItem",
    },
  ],

  status: {
    type: String,
    trim: true,
  },
  vendorId: {
    type: Schema.Types.ObjectId,
    ref: "Vendor",
  },
  vendorName: String,
  LSTtype: String,
  CMRRItems: [],

  DocketType: {
    type: String,
    default: "",
  },
  CourierNumber: {
    type: String,
    default: "",
  },
  unitId: {
    type: mongoose.Schema.ObjectId,
    ref: "Unit",
  },
  unitName: String,
  accountId: {
    type: mongoose.Schema.ObjectId,
    ref: "Account",
  },
  accountName: String,
  customerId: {
    type: mongoose.Schema.ObjectId,
    ref: "CustomerLogin",
  },
  customerName: String,
  isDeleted: {
    type: String,
    default: "false",
  },
});
LSTSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("LST", LSTSchema);
