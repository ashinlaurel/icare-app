const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const attendanceSchema = mongoose.Schema({
  employee: { type: mongoose.Schema.ObjectId, ref: "EmployeeLogin" },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  monthDayCount: {
    type: String,
    required: true,
  },

  days: [
    {
      date: String,
      dayNo: String,
      isPresent: Boolean,
      //   dayName:String,
    },
  ],
});

attendanceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Attendance", attendanceSchema);