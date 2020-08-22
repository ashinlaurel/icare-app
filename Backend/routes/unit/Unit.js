const express = require("express");
const { unitCreate, getAllUnits } = require("../../controllers/unit/unit");

const router = express.Router();

router.post("/create", unitCreate);
router.get("/units", getAllUnits);

module.exports = router;
