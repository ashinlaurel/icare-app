const express = require("express");
const {
  signup,
  getAllAccs,
  //   signin,
  //   isSignedIn,
} = require("../../controllers/customer/Account");
// const { getAllCust } = require("../../controllers/customer/Customer");
const router = express.Router();

router.post("/signup", signup);
router.get("/accounts", getAllAccs);

//test route

module.exports = router;
