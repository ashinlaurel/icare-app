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
});

leaveFormSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("leaveForm", leaveFormSchema);
