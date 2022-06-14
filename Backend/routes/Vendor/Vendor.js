const express = require("express");

const {
  getEmpById,
  isSignedIn,
  isAuthenticated,
} = require("../../controllers/employee/EmployeeAuth");
const {
  VendorCreate,
  updateVendor,
  getAllItems,
  getVendorById,
  deleteVendor,
  getVendorLazy,
  getVendorsExport,
} = require("../../controllers/Vendor/Vendor");

const router = express.Router();

router.param("id", getEmpById);

router.post("/:id/create", isSignedIn, isAuthenticated, VendorCreate);

router.post("/:id/getall", isSignedIn, isAuthenticated, getAllItems);
// router.post("/:id/getlazy", isSignedIn, isAuthenticated, getVendorLazy);
router.post("/getall", getAllItems);
router.post("/getVendorsExport", getVendorsExport);

router.post("/:id/update", isSignedIn, isAuthenticated, updateVendor);

router.post("/:id/delete", isSignedIn, isAuthenticated, deleteVendor);

router.post("/:id/getbyid", isSignedIn, isAuthenticated, getVendorById);
router.post("/getbyid", getVendorById);

module.exports = router;
