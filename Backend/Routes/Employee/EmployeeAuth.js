const express = require("express");
const {
  signup,
  signin,
  isSignedIn,
} = require("../../Controllers/employee/EmployeeAuth");
const router = express.Router();

// router.post("/signup",signup);
// router.post("/signup",signup);
router.get("/logout", (req, res) => {
  return res.send("LOGOUT");
});

router.post("/signup", signup);
router.post("/signin", signin);
//test route
router.get("/signInTest", isSignedIn, (req, res) => {
  console.log(req.auth);
  res.json({ user: req.auth });
});

module.exports = router;
