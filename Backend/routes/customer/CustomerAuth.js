const express = require("express");
const {
  signup,
  signin,
  isCustSignedIn,
  getCustById,
  isCustAuthenticated,
} = require("../../controllers/customer/CustomerAuth");
const {
  getAllCust,
  AccountsOfCustomer,
  getAllCustomers,
  unitsFromAccount,
} = require("../../controllers/customer/Customer");
const {
  getEmpById,
  isSignedIn,
  isAuthenticated,
} = require("../../controllers/employee/EmployeeAuth");
const router = express.Router();

router.param("Cid", getCustById);
router.param("id", getEmpById);

// router.post("/signup", signup);
// router.post("/signup", signup);
router.get("/logout", (req, res) => {
  return res.send("LOGOUT");
});

router.post("/:id/signup", isSignedIn, isAuthenticated, signup);
router.post("/signin", signin);

// router.get("/customers", getAllCust);
router.post("/accounts", AccountsOfCustomer);
// get customers with search enabled and initially returning a few
router.post("/customers", getAllCustomers);
// router.post("/getCustomerById", getCustomerById);
router.post("/units", unitsFromAccount);

//test route
router.post(
  "/signInTest/:Cid",
  isCustSignedIn,
  isCustAuthenticated,
  (req, res) => {
    console.log("Authenticated Successfull", req.profile);
    res.json({
      user: {
        username: req.profile.username,
        role: req.profile.role,
      },
    });
  }
);

module.exports = router;
