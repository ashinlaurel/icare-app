const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const leaveFormSchema = mongoose.Schema({
  employeeId: { type: mongoose.Schema.ObjectId, ref: "EmployeeLogin" },
  startdate: {
    type: String,
    required: true,
  },
  enddate: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
  },

  employeeName: {
    type: String,
  },
  status: {
    type: String,
    default: "Submitted",
  },
});

leaveFormSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("leaveForm", leaveFormSchema);
