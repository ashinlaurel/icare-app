const express = require("express");
// const { getUserById } = require("../controllers/user");
const {
  createAsset,
  getAllAssets,
  //   getProduct,
} = require("../../controllers/assets/assets");
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
  createAsset
);
// router.get("/product/:productId", getProduct);
router.get("/getall", getAllAssets);
module.exports = router;
