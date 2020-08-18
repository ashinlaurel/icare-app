const express = require("express");
// const { getUserById } = require("../controllers/user");
const {
  createConsole,
  //   getProductById,
  //   getProduct,
} = require("../../controllers/products/console");
// const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const router = express.Router();

// params route handling
// router.param("userId", getUserById);
// router.param("productId", getProductById);
// Routes
router.post(
  "/create",
  //   "/product/create/:userId"
  //   isSignedIn,
  //   isAuthenticated,
  //   isAdmin,
  createConsole
);
// router.get("/product/:productId", getProduct);
module.exports = router;
