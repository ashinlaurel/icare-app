const mongoose = require("mongoose");
var validator = require("validator");

const reportsEmailSchema = mongoose.Schema({
  emails: {
    type: [
      {
        type: String,
        validate: [validator.isEmail, "Enter a valid email"],
        trim: true,
      },
    ],
  },
  lastUpdatedEmployeeId: {
    type: mongoose.Schema.ObjectId,
    ref: "EmployeeLogin",
    default: null,
  },
});

module.exports = mongoose.model("reportsEmail", reportsEmailSchema);
