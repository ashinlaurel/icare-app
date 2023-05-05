const express = require("express");
// const { getUserById } = require("../controllers/user");
const {
  createAsset,
  getAllAssets,
  countAssets,
  deleteAsset,
  updateAsset,
  getAssetById,
  countAmcAssets,
  countWtyAssets,
  countNosAssets,
  assetUpdateWithId,
  countAssetsByCustomer,
  countAssetValue,
  countAmcContract,
  getOriginalAssetById,
  multiAssetUpdate,
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
//------------------ Migration create route----------------------------
router.post("/create", createAsset);
// router.get("/product/:productId", getProduct);

router.post("/:id/getall", isSignedIn, isAuthenticated, getAllAssets);
router.post("/getallbycust", getAllAssets);
// -------------------Counter Routes------------------
router.get("/count", countAssets);
router.get("/countamc", countAmcAssets);
router.get("/countwty", countWtyAssets);
router.get("/countnos", countNosAssets);
router.get("/countamccontract", countAmcContract);
router.get("/countassetvalue", countAssetValue);
router.post("/countbycustomer", countAssetsByCustomer);
// -----------------------------------------------------
router.post("/:id/getbyid", isSignedIn, isAuthenticated, getAssetById);
router.post(
  "/:id/getorgassetbyid",
  isSignedIn,
  isAuthenticated,
  getOriginalAssetById
);
router.post("/:id/delete", isSignedIn, isAuthenticated, deleteAsset);
router.post("/:id/update", isSignedIn, isAuthenticated, updateAsset);
router.post(
  "/:id/updateProductWithID",
  isSignedIn,
  isAuthenticated,
  assetUpdateWithId
);
router.post(
  "/:id/multiAssetUpdate",
  isSignedIn,
  isAuthenticated,
  multiAssetUpdate
);

router.post("/:id/apitest", (req, res) => {

  console.log(req.body);
  return res.json(req.body);
});
module.exports = router;
