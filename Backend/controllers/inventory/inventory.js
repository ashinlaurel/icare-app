const Asset = require("../../models/assets/assets");
const Server = require("../../models/products/server");
const InvItem = require("../../models/inventory/InvItem");
const { Schema } = require("mongoose");
const { result, filter } = require("lodash");
const Unit = require("../../models/customer/Unit");


// ---------------Counter Controllers -------------------
// exports.countAssets = (req, res) => {
//   Asset.count({}, function (err, result) {
//     if (err) {
//       return res.status(400).json({
//         error: "Cant count assets",
//         err: err,
//       });
//     }
//     // console.log(result);
//     return res.status(200).json(result);
//   });
// };
// exports.countAmcAssets = (req, res) => {
//   Asset.count({ business: "AMC" }, function (err, result) {
//     if (err) {
//       return res.status(400).json({
//         error: "Cant count amc assets",
//         err: err,
//       });
//     }
//     // console.log(result);
//     return res.status(200).json(result);
//   });
// };
// exports.countWtyAssets = (req, res) => {
//   Asset.count({ business: "WTY" }, function (err, result) {
//     if (err) {
//       return res.status(400).json({
//         error: "Cant count wty assets",
//         err: err,
//       });
//     }
//     // console.log(result);
//     return res.status(200).json(result);
//   });
// };
// exports.countNosAssets = (req, res) => {
//   Asset.count({ business: "NOS" }, function (err, result) {
//     if (err) {
//       return res.status(400).json({
//         error: "Cant count nos assets",
//         err: err,
//       });
//     }
//     // console.log(result);
//     return res.status(200).json(result);
//   });
// };

// -------------------------------------------------------

exports.createItem = async (req, res) => {
  let item  = req.body;
console.log(item)
  try {
    // Saving the asset
    const newitem = new InvItem(item);
    const result = await newitem.save();
    return res.status(200).json(result);
  } catch (err) {
    console.log("Inventory Item Creating error", err.message);
    let message = err.message;
    if (err.code == 11000) message = "Item exists with serial Number.";
    res.status(400).json({ message });
    // throw error;
  }
};

// exports.getAllAssets = (req, res) => {
//   let { pages, filters } = req.body;

//   let { searchquery, searchtype } = filters;
//   // console.log(searchquery);
//   // console.log(searchtype);
//   const fuzzyquery = new RegExp(escapeRegex(searchquery), "gi");

//   let options = {
//     populate: "product",
//     page: pages.page,
//     limit: pages.limit,
//   };

//   let filteroptions = {
//     // product: { brand: "IBM" },
//   };
//   // -------------Product Specific Search Options -----------------
//   let productoptions = {
//     populate: "asset",
//     page: pages.page,
//     limit: pages.limit,
//   };
//   let pfilteroptions = {
//     // "keyboard.kbdsno": "21321",
//   };

//   // -----------------------------------------------------------------------
//   if (searchquery == "") {
//     // Logic to add to filter when required
//     if (filters.business != "") {
//       filteroptions.business = filters.business;
//     }
//     if (filters.producttype != "") {
//       filteroptions.producttype = filters.producttype;
//     }
//     // -----------------Customer,Account,Unit ID filters-------
//     if (filters.unitId != "") {
//       filteroptions.unitId = filters.unitId;
//     } else if (filters.accountId != "") {
//       filteroptions.accountId = filters.accountId;
//     } else if (filters.customerId != "") {
//       // console.log(filters.customerId);
//       filteroptions.customerId = filters.customerId;
//     }

//     Asset.paginate(filteroptions, options, function (err, result) {
//       // console.log(result);
//       if (err || !result) {
//         return res.status(400).json({
//           error: "No assets found",
//           err: err,
//         });
//       }
//       // console.log(result.docs);
//       let output = {
//         total: result.total,
//         out: result.docs,
//       };
//       return res.json(output);
//     });
//   } else {
//     // ----------------Conditional addition of query attributes---------
//     if (searchtype == "kbdsno") {
//       pfilteroptions["keyboard.kbdsno"] = fuzzyquery;
//       // console.log("inside");
//     }
//     if (searchtype == "mousesno") {
//       pfilteroptions["mouse.mousesno"] = fuzzyquery;
//       // console.log("inside");
//     }
//     if (searchtype == "motherboardsno") {
//       pfilteroptions["motherboard.motherboardsno"] = fuzzyquery;
//       // console.log("inside");
//     }
//     if (searchtype == "monitorsno") {
//       pfilteroptions["monitor.monitorsno"] = fuzzyquery;
//       // console.log("inside");
//     }
//     if (searchtype == "hddsno") {
//       pfilteroptions["hdd.hddsno"] = fuzzyquery;
//       // console.log("inside");
//     }
//     if (searchtype == "cpusno") {
//       pfilteroptions["cpu.cpusno"] = fuzzyquery;
//       // console.log("inside");
//     }
//     if (searchtype == "ramsno") {
//       pfilteroptions["ram.ramsno"] = fuzzyquery;
//       // console.log("inside");
//     }
//     if (searchtype == "smpssno") {
//       pfilteroptions["smps.smpssno"] = fuzzyquery;
//       // console.log("inside");
//     }
//     if (searchtype == "fansno") {
//       pfilteroptions["fan.fansno"] = fuzzyquery;
//       // console.log("inside");
//     }
//     if (searchtype == "opticaldrivesno") {
//       pfilteroptions["opticaldrive.opticaldrivesno"] = fuzzyquery;
//       // console.log("inside");
//     }

//     // ------------------------Main Call-----------------------------------------
//     Server.paginate(pfilteroptions, productoptions, function (err, result) {
//       // console.log(result);
//       if (err || !result) {
//         return res.status(400).json({
//           error: "No assets found",
//           err: err,
//         });
//       }
//       // console.log(result.docs);
//       let final = [];
//       // console.log("---------------final-------------------------------");
//       result.docs.map((product, i) => {
//         // console.log(product);
//         let tasset = product.asset;
//         final[i] = {
//           ...tasset._doc,
//           product: product,
//         };
//         // console.log(tasset);
//         // console.log(final);
//       });
//       let output = {
//         total: result.total,
//         out: final,
//       };
//       return res.json(output);
//       // console.log(final);
//       // return res.json(final);
//     });
//   }
// };

// exports.deleteAsset = async (req, res) => {
//   let { id } = req.body;
//   try {
//     let asset = await Asset.findByIdAndDelete({ _id: id });
//     let unitId = asset.unitId;
//     let unit = await Unit.update({ _id: unitId }, { $pull: { assetsId: id } });
//     let productId = asset.product;
//     let product = await Server.findByIdAndDelete(productId);

//     return res.status(200).json({ asset, unit });
//   } catch (err) {
//     console.log(id);
//     return res.status(400).json({ error: err });
//   }
// };

// exports.updateAsset = async (req, res) => {
//   let { id, newasset, newproduct } = req.body;
//   console.log(id, newasset);
//   try {
//     let asset = await Asset.findByIdAndUpdate(id, newasset, {
//       safe: true,
//       useFindAndModify: false,
//     });
//     let prod = await Server.findOneAndUpdate({ asset: id }, newproduct);
//     // console.log("SERVER",prod)
//     return res.status(200).json({ asset });
//   } catch (err) {
//     console.log(id);
//     return res.status(400).json({ error: err });
//   }
// };

// exports.getAssetById = async (req, res) => {
//   try {
//     let asset = await Asset.findById(req.body.id).populate("product");
//     return res.status(200).json(asset);
//   } catch (err) {
//     console.log(id);
//     return res.status(400).json({ error: err });
//   }
// };

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

// -----------------------Fuzzy Search Regex----------------
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
