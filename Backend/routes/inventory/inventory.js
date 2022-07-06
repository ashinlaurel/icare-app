const express = require("express");
// const { getUserById } = require("../controllers/user");
const {
  createItem,
  getProductSno,
  getAllItems,
  handleAssetUpdate,
  deleteInventory,
  updateInventory,
  createItems,
  createPurchaseHistrory,
  getAllHistory,
  getInvById,
  downloadInventory,
  scrapSaleUpdate,
  getScrapHistory,
  getStockStats,
} = require("../../controllers/inventory/inventory");
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
  createItem
);

router.post(
  "/:id/createitems",

  isSignedIn,
  isAuthenticated,
  //   isAdmin,
  createItems
);

router.post("/:id/delete", isSignedIn, isAuthenticated, deleteInventory);
router.post(
  "/:id/createpurchasehistory",
  isSignedIn,
  isAuthenticated,
  createPurchaseHistrory
);
// --------------------DropDown Searches --------------------------------
// router.post("/:id/getkbd", isSignedIn, isAuthenticated, getkeyboardsno);
router.post("/:id/getproduct", isSignedIn, isAuthenticated, getProductSno);
//------------------ Migration create route----------------------------
// router.post("/create", createAsset);
// router.get("/product/:productId", getProduct);

router.post("/:id/getall", isSignedIn, isAuthenticated, getAllItems);
router.post("/:id/getbyid", isSignedIn, isAuthenticated, getInvById);
router.post("/:id/getallhistory", isSignedIn, isAuthenticated, getAllHistory);
router.post("/:id/assetupdate", isSignedIn, isAuthenticated, handleAssetUpdate);
router.post("/:id/invupdate", isSignedIn, isAuthenticated, updateInventory);
router.post("/:id/getstockstats", isSignedIn, isAuthenticated, getStockStats);
router.post("/:id/invscrapsale", isSignedIn, isAuthenticated, scrapSaleUpdate);
router.post(
  "/:id/getscraphistory",
  isSignedIn,
  isAuthenticated,
  getScrapHistory
);
// -------------------Counter Routes------------------
// router.get("/count", countAssets);
// router.get("/countamc", countAmcAssets);
// router.get("/countwty", countWtyAsset);
// router.get("/countnos", countNosAssets);
// -----------------------------------------------------
// router.post("/:id/getbyid", isSignedIn, isAuthenticated, getAssetById);
// router.post("/:id/delete", isSignedIn, isAuthenticated, deleteAsset);
// router.post("/:id/update", isSignedIn, isAuthenticated, updateAsset);
module.exports = router;
