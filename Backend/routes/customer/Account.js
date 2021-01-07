const express = require("express");
const {
  signup,
  getAllAccs,
  unitsFromAccount,
  //   signin,
  //   isSignedIn,
} = require("../../controllers/customer/Account");
// const { getAllCust } = require("../../controllers/customer/Customer");
const router = express.Router();

router.post("/signup", signup);
router.get("/accounts", getAllAccs);
router.post("/units", unitsFromAccount);

//test route

module.exports = router;
