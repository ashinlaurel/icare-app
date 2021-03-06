const express = require("express");

const { getEmpById } = require("../../controllers/employee/EmployeeAuth");
const {
  createLeaveForm,
  getAll,
  approveLeave,
  countSubmittedLeaves,
} = require("../../controllers/leaveForm/leaveForm");

const router = express.Router();
////GET USER FROM PARAMS
router.param("id", getEmpById);

router.post("/:id/getall", getAll);
router.post("/:id/create", createLeaveForm);
router.post("/:id/approve", approveLeave);
router.post("/:id/countsubmitted", countSubmittedLeaves);

module.exports = router;
