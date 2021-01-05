const express = require("express");

const {
  getEmpById,
  isSignedIn,
  isAuthenticated,
} = require("../../controllers/employee/EmployeeAuth");
const { LSTCreate, getAllItems } = require("../../controllers/LST/LST");

const router = express.Router();

router.param("id", getEmpById);

router.post("/:id/create", isSignedIn, isAuthenticated, LSTCreate);

router.post("/:id/getall", isSignedIn, isAuthenticated, getAllItems);


module.exports = router;
