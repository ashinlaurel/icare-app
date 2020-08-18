const express = require("express");
// const { getUserById } = require("../controllers/user");
const {
  createServer,
  //   getProductById,
  //   getProduct,
} = require("../../controllers/products/server");
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
  createServer
);
// router.get("/product/:productId", getProduct);
module.exports = router;
