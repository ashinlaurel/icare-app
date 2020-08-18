const express = require("express");
const { signup, signin } = require("../Controllers/CustomerAuth");
const router = express.Router();

// router.post("/signup",signup);
// router.post("/signup",signup);
router.get("/logout", (req, res) => {
  return res.send("LOGOUT");
});

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
