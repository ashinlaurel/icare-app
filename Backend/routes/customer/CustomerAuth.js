const express = require("express");
const {
  signup,
  signin,
  isCustSignedIn,
  getCustById,
  isCustAuthenticated,
  resetPasswordByAdmin,
} = require("../../controllers/customer/CustomerAuth");
const {
  getAllCust,
  AccountsOfCustomer,
  getAllCustomers,
  unitsFromAccount,
  getCustomerById,
  updateCustomer,
  getCustomerByName,
  deleteAccount,
  deleteCustomer,
  countCustomers,
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

router.post("/accounts", AccountsOfCustomer);
// get customers with search enabled and initially returning a few
router.post("/customers", getAllCustomers);
// --------------Counters-----------------------
router.get("/countcustomers", countCustomers);
// ----------------------------------------------
router.post("/:id/getCustomerById", getCustomerById);
router.post("/getCustomerByName", getCustomerByName);
router.post("/:id/update", isSignedIn, isAuthenticated, updateCustomer);
router.post("/:id/deleteacc", isSignedIn, isAuthenticated, deleteAccount);
router.post("/:id/deletecust", isSignedIn, isAuthenticated, deleteCustomer);
router.post(
  "/:id/resetPassByAdmin",
  isSignedIn,
  isAuthenticated,
  resetPasswordByAdmin
);

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
