const express = require("express");
// const { getUserById } = require("../controllers/user");
const {
  createAsset,
  getAllAssets,
  countAssets,
  deleteAsset,
  updateAsset,
  getAssetById,
  //   getProduct,
} = require("../../controllers/assets/assets");
const {
  isSignedIn,
  isAuthenticated,
  getEmpById,
} = require("../../controllers/employee/EmployeeAuth");
// const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const router = express.Router();

router.param("id", getEmpById);
// params route handling
// router.param("userId", getUserById);
// router.param("productId", getProductById);
// Routes
router.post(
  "/:id/create",
  //   "/product/create/:userId"
  isSignedIn,
  isAuthenticated,
  //   isAdmin,
  createAsset
);
// Migration create route
// router.post("/create", createAsset);
// router.get("/product/:productId", getProduct);
router.post("/:id/getall", isSignedIn, isAuthenticated, getAllAssets);
router.get("/count", countAssets);
router.post("/:id/getbyid", isSignedIn, isAuthenticated, getAssetById);
router.post("/:id/delete", isSignedIn, isAuthenticated, deleteAsset);
router.post("/:id/update", isSignedIn, isAuthenticated, updateAsset);
module.exports = router;
