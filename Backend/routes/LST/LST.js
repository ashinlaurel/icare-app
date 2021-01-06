const express = require("express");

const {
  getEmpById,
  isSignedIn,
  isAuthenticated,
} = require("../../controllers/employee/EmployeeAuth");
const { LSTCreate, getAllItems, updateLST } = require("../../controllers/LST/LST");

const router = express.Router();

router.param("id", getEmpById);

router.post("/:id/create", isSignedIn, isAuthenticated, LSTCreate);

router.post("/:id/getall", isSignedIn, isAuthenticated, getAllItems);

router.post("/:id/update", isSignedIn, isAuthenticated, updateLST);


module.exports = router;
