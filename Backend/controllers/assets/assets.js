const Asset = require("../../models/assets/assets");
const Server = require("../../models/products/server");
const { Schema } = require("mongoose");
const { result } = require("lodash");
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

exports.createAsset = async (req, res) => {
  let { asset, product, unit } = req.body;

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
    const final = await reasset.save();

    console.log("unit", unit);
    const unitres = await Unit.findById(unit.unitId).exec();
    // console.log("EHRE", unitres);
    let assets = unitres.assetsId;
    assets.push(String(result._id));
    unitres.assetsId = assets;
    // console.log("assets", assets);
    unitres.save();

    return res.status(200).json(final);
  } catch (error) {
    throw error;
  }
};

exports.getAllAssets = (req, res) => {
  let { pages, filters } = req.body;

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

  Asset.paginate(filteroptions, options, function (err, result) {
    // console.log(result);
    if (err || !result) {
      return res.status(400).json({
        error: "No assets found",
        err: err,
      });
    }
    console.log(result.docs);
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
