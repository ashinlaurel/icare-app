const express = require("express");
const {
  markAttendance,
  getAllAttendance,
  checkIfPresent,
  updateAttendance,
} = require("../../controllers/attendance/attendance");
const { getEmpById } = require("../../controllers/employee/EmployeeAuth");

const router = express.Router();
////GET USER FROM PARAMS
router.param("id", getEmpById);

router.post("/:id/markAttendance", markAttendance);
router.post("/:id/viewAttendance", getAllAttendance);
router.post("/:id/checkAttendance", checkIfPresent);
router.post("/:id/updateAttendance", updateAttendance);

module.exports = router;
