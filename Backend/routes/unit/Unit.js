const express = require("express");
const {
  unitCreate,
  getAllUnits,
  updateUnit,
  deleteUnit,
} = require("../../controllers/unit/unit");
const {
  getEmpById,
  isSignedIn,
  isAuthenticated,
} = require("../../controllers/employee/EmployeeAuth");

const router = express.Router();

router.param("id", getEmpById);

router.post("/:id/create", isSignedIn, isAuthenticated, unitCreate);
router.post("/update", updateUnit);
router.post("/delete", deleteUnit);
router.get("/units", getAllUnits);

module.exports = router;
