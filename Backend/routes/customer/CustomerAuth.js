const express = require("express");
const {
  signup,
  signin,
  isSignedIn,
  isAuthenticated,
} = require("../../controllers/customer/CustomerAuth");
const {
  getAllCust,
  AccountsOfCustomer,
  getAllCustomers,
  getCustomerById,
  unitsFromAccount,
} = require("../../controllers/customer/Customer");
const router = express.Router();

// router.post("/signup", signup);
// router.post("/signup", signup);
router.get("/logout", (req, res) => {
  return res.send("LOGOUT");
});

router.post("/signup", signup);
router.post("/signin", signin);

// router.get("/customers", getAllCust);
router.post("/accounts", AccountsOfCustomer);
// get customers with search enabled and initially returning a few
router.post("/customers", getAllCustomers);
router.post("/getCustomerById", getCustomerById);
router.post("/units", unitsFromAccount);

//test route
router.get("/signInTest", isSignedIn, isAuthenticated, (req, res) => {
  console.log(req.auth);
  res.json({ user: req.auth });
});

module.exports = router;
