const express = require("express");

const { getEmpById } = require("../../controllers/employee/EmployeeAuth");
const {
  createLeaveForm,
  getAll,
} = require("../../controllers/leaveForm/leaveForm");

const router = express.Router();
////GET USER FROM PARAMS
router.param("id", getEmpById);

router.post("/:id/getall", getAll);
router.post("/:id/create", createLeaveForm);

module.exports = router;
