const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const orgProdSchema = new Schema({
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
    unique: true,
  },
  history: [
    {
      date: String,
      callStatus: String,
      engineer: String,
      callAttendDate: String,
      startOfService: String,
      endOfService: String,
      note: String,
      actionTaken: String,
      existUrl: String,
      newUrl: String,
      ccfrImgUrl: String,
      existserial: String,
      newserial: String,
    },
  ],
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
  motherboard: [{ motherboardname: String, motherboardsno: String }],
  opticaldrive: [{ opticaldrivename: String, opticaldrivesno: String }],
  keyboard: [{ keyboardname: String, keyboardsno: String }],
  mouse: [{ mousename: String, mousesno: String }],
  monitor: [{ monitorname: String, monitorsno: String }],
  gcard: [{ gcardname: String, gcardsno: String }],
  enetcard: [{ enetcardname: String, enetcardsno: String }],
  serialcard: [{ serialcardname: String, serialcardsno: String }],
  parallelcard: [{ parallelcardname: String, parallelcardsno: String }],
  hbacard: [{ hbacardname: String, hbacardsno: String }],
  raidcontroller: [{ raidcontrollername: String, raidcontrollersno: String }],
  tapecontroller: [{ tapecontrollername: String, tapecontrollersno: String }],
  others: [{ othersname: String, otherssno: String }],
  asset: {
    type: Schema.Types.ObjectId,
    ref: "Asset",
  },
});
orgProdSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("OriginalProduct", orgProdSchema);
