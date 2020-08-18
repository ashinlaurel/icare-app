const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const serverSchema = new Schema({
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
  os: {
    type: String,
    required: false,
    trim: true,
  },
  cpu: [{ cpuname: String, cpusno: String }],
  ram: [{ ramname: String, ramsno: String }],
  hdd: [{ hddname: String, hddsno: String }],
  smps: [{ smpsname: String, smpssno: String }],
  fan: [{ fanname: String, fansno: String }],
  motherboard: [{ motherboard: String, motherboardsno: String }],
  opticaldrive: [{ opticaldrive: String, opticalDrivesno: String }],
  keyboard: { kbd: String, kbdsno: String },
  mouse: { mouse: String, mousesno: String },
  monitor: { monitor: String, monitorsno: String },
  graphics: [{ graphics: String, grapgicssno: String }],
  ecard: [{ ecard: String, grapgicssno: String }],
  serialcard: [{ serialcard: String, serialcardsno: String }],
  paralellcard: [{ paralellcard: String, paralellcardsno: String }],
  hba: { hba: String, hbasno: String },
  raid: { raid: String, raidsno: String },
  tape: { tape: String, tapesno: String },
  others: [{ tape: String, tapesno: String }],
});

module.exports = mongoose.model("Server", serverSchema);
