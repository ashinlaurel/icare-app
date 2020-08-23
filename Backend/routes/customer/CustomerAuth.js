const express = require("express");
const {
  signup,
  signin,
  isSignedIn,
} = require("../../controllers/customer/CustomerAuth");
const {
  getAllCust,
  AccountsOfCustomer,
} = require("../../controllers/customer/Customer");
const router = express.Router();

// router.post("/signup", signup);
// router.post("/signup", signup);
router.get("/logout", (req, res) => {
  return res.send("LOGOUT");
});

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/customers", getAllCust);
router.post("/accounts", AccountsOfCustomer);

//test route
router.get("/signInTest", isSignedIn, (req, res) => {
  console.log(req.auth);
  res.json({ user: req.auth });
});

module.exports = router;
