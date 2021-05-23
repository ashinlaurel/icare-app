const express = require("express");

const { contactus } = require("../../controllers/contactus/contactus");

const router = express.Router();

router.post("/", contactus);

module.exports = router;
