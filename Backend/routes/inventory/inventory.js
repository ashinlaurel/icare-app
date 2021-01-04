const express = require("express");
// const { getUserById } = require("../controllers/user");
const {
  createItem,
  getProductSno,
  getAllItems,
  handleAssetUpdate,
  deleteInventory,
  updateInventory,
} = require("../../controllers/inventory/inventory");
const {
  isSignedIn,
  isAuthenticated,
  getEmpById,
} = require("../../controllers/employee/EmployeeAuth");
// const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const router = express.Router();

// router.param("id", getEmpById);
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

router.post("/:id/delete", isSignedIn, isAuthenticated, deleteInventory);
// --------------------DropDown Searches --------------------------------
// router.post("/:id/getkbd", isSignedIn, isAuthenticated, getKbdSno);
router.post("/:id/getproduct", isSignedIn, isAuthenticated, getProductSno);
//------------------ Migration create route----------------------------
// router.post("/create", createAsset);
// router.get("/product/:productId", getProduct);

router.post("/:id/getall", isSignedIn, isAuthenticated, getAllItems);
router.post("/:id/assetupdate", isSignedIn, isAuthenticated,handleAssetUpdate);
router.post("/:id/invupdate", isSignedIn, isAuthenticated,updateInventory);
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
