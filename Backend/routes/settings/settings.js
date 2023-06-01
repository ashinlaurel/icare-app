const express = require("express");
const {
  getReportsEmail,
  setReportsEmail,
} = require("../../controllers/settings/settings");

const router = express.Router();

//Admin Email settings routes
router.get("/getReportsEmails", getReportsEmail);
router.post("/setReportsEmails", setReportsEmail);

module.exports = router;
