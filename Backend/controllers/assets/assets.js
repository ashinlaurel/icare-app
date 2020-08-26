const Asset = require("../../models/assets/assets");
const Server = require("../../models/products/server");
const { Schema } = require("mongoose");
const { result, filter } = require("lodash");
const Unit = require("../../models/customer/Unit");
const ObjectId = require("mongodb").ObjectID;

// get category by id when params passed
// exports.getCategoryById = (req, res, next, id) => {
//   Category.findById(id).exec((err, category) => {
//     if (err || !category) {
//       return res.status(400).json({
//         error: "No category found",
//       });
//     }
//     req.category = category;
//     next();
//   });
// };
exports.countAssets = (req, res) => {
  Asset.count({}, function (err, result) {
    if (err || !result) {
      return res.status(400).json({
        error: "Cant count assets",
        err: err,
      });
    }
    // console.log(result);
    return res.status(200).json(result);
  });
};

exports.createAsset = async (req, res) => {
  let { asset, product } = req.body;

  try {
    // Saving the asset
    const newasset = new Asset(asset);
    const result = await newasset.save();
    // console.log(result);
    // Making the product
    product.asset = String(result._id);
    // console.log(product);
    const newprod = new Server(product);
    const prodres = await newprod.save();
    // console.log(prodres);
    // Linking the product back to the original asset
    const reasset = await Asset.findById(result._id).exec();
    reasset.product = prodres._id;
    const final = reasset.save();

    ////////////////----------- ADDING ASSET ID TO UNIT
    console.log("unit", asset.unitId);
    const unitres = await Unit.findById(asset.unitId).exec();
    let assets = unitres.assetsId;
    assets.push(String(result._id));
    unitres.assetsId = assets;
    const unitfinal = await unitres.save();

    return res.status(200).json(final);
  } catch (error) {
    throw error;
  }
};

exports.getAllAssets = (req, res) => {
  let { pages, filters } = req.body;

  let { searchquery, searchtype } = filters;
  console.log(searchquery);
  console.log(searchtype);

  let options = {
    populate: "product",
    page: pages.page,
    limit: pages.limit,
  };

  let filteroptions = {};
  // Logic to add to filter when required
  if (filters.business != "") {
    filteroptions.business = filters.business;
  }
  if (filters.producttype != "") {
    filteroptions.producttype = filters.producttype;
  }
  // -----------------Customer,Account,Unit ID filters-------
  if (filters.unitId != "") {
    filteroptions.unitId = filters.unitId;
  } else if (filters.accountId != "") {
    filteroptions.accountId = filters.accountId;
  } else if (filters.customerId != "") {
    filteroptions.customerId = filters.customerId;
  }
  //--------------------search logic----------------------------
  if (searchtype == "kbdsno") {
    // filteroptions.keyboard = {kbsno:};
    // product.keyboard: { $elemMatch: { kbdsno: "987654" } }
    console.log(searchquery);
  }

  Asset.paginate(filteroptions, options, function (err, result) {
    // console.log(result);
    if (err || !result) {
      return res.status(400).json({
        error: "No assets found",
        err: err,
      });
    }
    // console.log(result.docs);
    return res.json(result.docs);
  });
};

// exports.updateCategory = (req, res) => {
//   const category = req.category;
//   category.name = req.body.name;
//   category.save((err, updatedCategory) => {
//     if (err || !updatedCategory) {
//       return res.status(400).json({
//         error: " Cant Update the Category",
//       });
//     }
//     return res.json(updatedCategory);
//   });
// };

// TODO : Note this was done by my method diff from guide so check if working!!!!!!!
// exports.deleteCategory = (req, res) => {
//   Category.deleteOne({ _id: req.category._id }).exec((err, deletedCategory) => {
//     if (err || !deletedCategory) {
//       return res.status(400).json({
//         error: " Cant Delete the Category",
//       });
//     }
//     return res.json(deletedCategory);
//   });
// };
