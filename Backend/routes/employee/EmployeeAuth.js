const express = require("express");
const {
  signup,
  signin,
  isSignedIn,
  getEmpById,
  isAdmin,
} = require("../../controllers/employee/EmployeeAuth");
const { isAuthenticated } = require("../../controllers/employee/EmployeeAuth");
const router = express.Router();
////GET USER FROM PARAMS
router.param("id", getEmpById);
// router.post("/signup",signup);
// router.post("/signup",signup);
router.get("/logout", (req, res) => {
  return res.send("LOGOUT");
});

router.post("/signup", signup);
router.post("/signin", signin);
//test route
router.post("/signInTest/:id", isSignedIn, isAuthenticated, (req, res) => {
  console.log("Authenticated Successfull", req.auth);
  res.json({ user: req.auth });
});
router.post(
  "/isadmintest/:id",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  (req, res) => {
    console.log("Admin Account", req.auth);
    res.json({ user: req.auth });
  }
);

module.exports = router;
