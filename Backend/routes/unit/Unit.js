const express = require("express");
const {
  unitCreate,
  getAllUnits,
  updateUnit,
  deleteUnit,
} = require("../../controllers/unit/unit");

const router = express.Router();

router.post("/create", unitCreate);
router.post("/update", updateUnit);
router.post("/delete", deleteUnit);
router.get("/units", getAllUnits);

module.exports = router;
