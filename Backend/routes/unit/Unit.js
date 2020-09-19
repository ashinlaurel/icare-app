const express = require("express");
const {
  unitCreate,
  getAllUnits,
  updateUnit,
  deleteUnit,
  getUnitById,
  getUnitByName,
  countUnits,
} = require("../../controllers/unit/unit");
const {
  getEmpById,
  isSignedIn,
  isAuthenticated,
} = require("../../controllers/employee/EmployeeAuth");

const router = express.Router();

router.param("id", getEmpById);

router.post("/:id/create", isSignedIn, isAuthenticated, unitCreate);

router.get("/count", countUnits);
router.post("/delete", deleteUnit);
router.get("/units", getAllUnits);
router.post("/:id/getbyid", isSignedIn, isAuthenticated, getUnitById);
router.post("/:id/update", isSignedIn, isAuthenticated, updateUnit);

router.post("/getUnitByName", getUnitByName);

module.exports = router;
