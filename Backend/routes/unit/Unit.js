const express = require("express");
const {
  unitCreate,
  getAllUnits,
  updateUnit,
  deleteUnit,
  getUnitById,
} = require("../../controllers/unit/unit");
const {
  getEmpById,
  isSignedIn,
  isAuthenticated,
} = require("../../controllers/employee/EmployeeAuth");

const router = express.Router();

router.param("id", getEmpById);

router.post("/:id/create", isSignedIn, isAuthenticated, unitCreate);

router.post("/delete", deleteUnit);
router.get("/units", getAllUnits);
router.post("/:id/getbyid", isSignedIn, isAuthenticated, getUnitById);
router.post("/:id/update", isSignedIn, isAuthenticated, updateUnit);

module.exports = router;
