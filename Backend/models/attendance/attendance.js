const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const attendanceSchema = mongoose.Schema({
  employee: { type: mongoose.Schema.ObjectId, ref: "EmployeeLogin" },
  employeeName: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  monthNo: {
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
      timeOfMark: String,
      date: String,
      dayNo: String,
      isPresent: String, // Present,Absent,Leave
      //   dayName:String,
    },
  ],
});

attendanceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Attendance", attendanceSchema);
