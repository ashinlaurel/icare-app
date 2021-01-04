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
  let item = req.body;
  console.log(item);
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

exports.getProductSno = (req, res) => {
  console.log("here");
  let { input, Producttype } = req.body;
  console.log(input);

  const fuzzyquery = new RegExp(escapeRegex(input), "gi");

  // -------------Product Specific Search Options -----------------
  let productoptions = {
    // populate: "asset",
    // page: pages.page,
    // limit: pages.limit,
  };
  let pfilteroptions = {
    type: Producttype,
    sno: fuzzyquery,
  };

  // ------------------------Main Call-----------------------------------------
  InvItem.paginate(pfilteroptions, productoptions, function (err, result) {
    console.log(result);
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

exports.getAllItems = (req, res) => {
  let { pages, filters } = req.body;

  let { searchquery } = filters;
  // console.log(filters);
  // console.log(searchquery);
  // console.log(searchtype);
  const fuzzyquery = new RegExp(escapeRegex(searchquery), "gi");

  let options = {
    // populate: "product",
    page: pages.page,
    limit: pages.limit,
  };

  let filteroptions = {
    // product: { brand: "IBM" },
  };

  // ---Conditional Addition of filters
  if (filters.type != "") {
    filteroptions.type = filters.type;
  }
  if (filters.location != "") {
    filteroptions.location = filters.location;
  }
  if (filters.condition != "") {
    filteroptions.condition = filters.condition;
  }
  if (filters.searchquery != "") {
    filteroptions.sno = fuzzyquery;
  }

  // -----------------------------------------------------------------------

  InvItem.paginate(filteroptions, options, function (err, result) {
    // console.log(result);
    if (err || !result) {
      return res.status(400).json({
        error: "No items found",
        err: err,
      });
    }
    // console.log(result.docs);
    let output = {
      total: result.total,
      out: result.docs,
    };
    return res.status(200).json(output);
  });
};

exports.handleAssetUpdate = (req, res) => {
  let { inventory, assetId, product } = req.body;
  // console.log(req.body);
  inventory.map(async (prod) => {
    let filter = { name: prod[0].name, sno: prod[0].sno };

    if (prod[0].op == "ADD") {
      let update = { assetId: assetId, $push: { assetsIdHistory: assetId } };
      console.log("adding", prod[0]);
      try {
        let newitem = await InvItem.findOneAndUpdate(filter, update, {
          new: true,
        });
        console.log(newitem);
        return res.status(200).json({ message: "SUCCESSFUL" });
      } catch (error) {
        return res.status(400).json({
          error: `Item not found ${prod[0]}`,
          err: err,
        });
      }
    }
    if (prod[0].op == "DEL") {
      let update = { assetId: null, condition: "Bad" };
      console.log("del", prod[0]);
      try {
        let ifitem = await InvItem.findOne(filter);

        if (ifitem) {
          let newitem = await InvItem.findOneAndUpdate(filter, update, {
            new: true,
          });
          console.log("EXISTING item updated", newitem);
          return res.status(200).json({ message: "SUCCESSFUL" });
        } else {
          ////////////---------->>> partial inventory item?
          console.log("ITEM NOT IN INVENTORY, so adding");
          let item = {
            name: prod[0].name,
            sno: prod[0].sno,
            type: product,
            condition: "Bad",
            location: "",
            invnumber: "",
          };
          const newitem = new InvItem(item);
          const result = await newitem.save();
          return res.status(200).json({ message: "SUCCESSFUL" });
        }
      } catch (error) {
        console.log(error);
        // return res.status(400).json({
        //   error: `Item not found ${prod[0]}`,
        //   err: error,
        // });
      }
    }
  });
  // return res.status(200).json({message:"SUCCESSFUL"});
};

exports.deleteInventory = async (req, res) => {
  let { id } = req.body;
  try {
    let inv = await InvItem.findByIdAndDelete({ _id: id });

    return res.status(200).json({ inv });
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.updateInventory = async (req, res) => {
  let { id, update } = req.body;
  // console.log(id, update);
  try {
    let inv = await InvItem.findByIdAndUpdate(id, update, {
      safe: true,
      useFindAndModify: false,
    });
    return res.status(200).json({ inv });
  } catch (err) {
    // console.log(id);
    return res.status(400).json({ error: err });
  }
};


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
