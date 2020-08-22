const express = require("express");
const {
  signup,
  //   signin,
  //   isSignedIn,
} = require("../../controllers/customer/Account");
// const { getAllCust } = require("../../controllers/customer/Customer");
const router = express.Router();

router.post("/signup", signup);

//test route

module.exports = router;
