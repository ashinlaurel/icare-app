const express = require("express");
const {
  totalCallsReport,
  callsWithAgeReport,
} = require("../../controllers/reports/reports");
const router = express.Router();

router.get("/totalCalls", totalCallsReport);
router.post("/callsbyage", callsWithAgeReport);

module.exports = router;
