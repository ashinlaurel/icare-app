const express = require("express");

const {
  getEmpById,
  isSignedIn,
  isAuthenticated,
} = require("../../controllers/employee/EmployeeAuth");
const { VendorCreate, updateVendor,getAllItems } = require("../../controllers/Vendor/Vendor");

const router = express.Router();

router.param("id", getEmpById);

router.post("/:id/create", isSignedIn, isAuthenticated, VendorCreate);

router.post("/:id/getall", isSignedIn, isAuthenticated, getAllItems);

router.post("/:id/update", isSignedIn, isAuthenticated, updateVendor);


module.exports = router;
