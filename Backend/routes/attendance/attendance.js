const express = require("express");
const { markAttendance } = require("../../controllers/attendance/attendance");
const { getEmpById } = require("../../controllers/employee/EmployeeAuth");

const router = express.Router();
////GET USER FROM PARAMS
router.param("id", getEmpById);

router.post("/:id/markAttendance", markAttendance);

module.exports = router;
