const express = require("express");
const { unitCreate } = require("../../controllers/unit/unit");

const router = express.Router();

router.post("/create", unitCreate);

module.exports = router;
