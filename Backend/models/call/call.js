const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const callSchema = mongoose.Schema({
  callNo: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    // required: true,
  },
  time: {
    type: String,
    // required: true,
  },
  regtimestamp: {
    type: String,
    // required: true,
  },
  unitId: {
    type: mongoose.Schema.ObjectId,
    ref: "Unit",
    // required: true,
  },
  unitName: String,
  accountId: {
    type: mongoose.Schema.ObjectId,
    ref: "Account",
    // required: true,
  },
  accountName: String,
  customerId: {
    type: mongoose.Schema.ObjectId,
    ref: "Customer",
    // required: true,
  },
  unitName: String,
  contactPerson: {
    type: String,
  },
  phone: {
    type: String,
  },
  assetId: {
    type: mongoose.Schema.ObjectId,
    ref: "Asset",
    required: true,
  },
  callStatus: Number,
  problem: String,
  employeeId: {
    type: mongoose.Schema.ObjectId,
    ref: "EmployeeLogin",
    default: null,
  },
  employeeName: {
    type: String,
  },
  assignedDate: {
    type: Date,
  },
  assignedETA: {
    type: String,
  },
  // callAttendDate: {
  //   type: String,
  // },
  // startOfService: {
  //   type: String,
  // },
  // endOfService: {
  //   type: String,
  // },
  // spareUsed: {
  //   type: String,
  // },
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
});

callSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Call", callSchema);
