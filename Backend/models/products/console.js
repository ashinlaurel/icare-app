const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const consoleSchema = new Schema({
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  serialno: {
    type: String,
    required: true,
    trim: true,
  },
  contractfrom: {
    type: String,
    required: true,
    trim: true,
  },
  contractto: {
    type: String,
    required: true,
    trim: true,
  },
  billingfrom: {
    type: String,
    required: true,
    trim: true,
  },
  billingto: {
    type: String,
    required: true,
    trim: true,
  },
  amcrate: {
    type: Number,
    required: true,
    trim: true,
  },
  gstperc: {
    type: Number,
    required: true,
    trim: true,
  },
  gstamt: {
    type: Number,
    required: true,
    trim: true,
  },
  netamt: {
    type: Number,
    required: true,
    trim: true,
  },
  //   ------------------------------
  keyboard: { kbd: String, kbdNo: String },
  mouse: { mouse: String, mouseNo: String },
  monitor: { monitor: String, monitorNo: String },
});

module.exports = mongoose.model("Console", consoleSchema);
