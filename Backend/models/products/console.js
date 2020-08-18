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
  //   ------------------------------
  keyboard: { kbd: String, kbdsno: String },
  mouse: { mouse: String, mousesno: String },
  monitor: { monitor: String, monitorsno: String },
});

module.exports = mongoose.model("Console", consoleSchema);
