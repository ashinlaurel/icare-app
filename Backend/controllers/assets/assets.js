const Asset = require("../../models/assets/assets");
const Server = require("../../models/products/server");
const { Schema } = require("mongoose");
const { result, filter } = require("lodash");
const Unit = require("../../models/customer/Unit");
const originalproduct = require("../../models/products/originalproduct");
const ObjectId = require("mongodb").ObjectID;
const CustomerLogin = require("../../models/customer/CustomerLogin");
const { isId, invalid, validateAssetFields, validateAssetHierarchy } = require("../../validation/assetHierarchy");

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
// ---------------Counter Controllers -------------------
exports.countAssets = (req, res) => {
  Asset.count({}, function (err, result) {
    if (err) {
      return res.status(400).json({
        error: "Cant count assets",
        err: err,
      });
    }
    // console.log(result);
    return res.status(200).json(result);
  });
};
exports.countAssetsByCustomer = (req, res) => {
  let options = req.body;
  console.log("options,", options);
  Asset.count(options, function (err, result) {
    if (err) {
      return res.status(400).json({
        error: "Cant count assets",
        err: err,
      });
    }
    // console.log(result);
    return res.status(200).json(result);
  });
};
exports.countAmcAssets = (req, res) => {
  Asset.count({ business: "AMC" }, function (err, result) {
    if (err) {
      return res.status(400).json({
        error: "Cant count amc assets",
        err: err,
      });
    }
    // console.log(result);
    return res.status(200).json(result);
  });
};
exports.countWtyAssets = (req, res) => {
  Asset.count({ business: "WTY" }, function (err, result) {
    if (err) {
      return res.status(400).json({
        error: "Cant count wty assets",
        err: err,
      });
    }
    // console.log(result);
    return res.status(200).json(result);
  });
};
exports.countNosAssets = (req, res) => {
  Asset.count({ business: "NOS" }, function (err, result) {
    if (err) {
      return res.status(400).json({
        error: "Cant count nos assets",
        err: err,
      });
    }
    // console.log(result);
    return res.status(200).json(result);
  });
};

exports.countAmcContract = (req, res) => {
  Asset.distinct("ponumber")
    .count()
    .exec(function (err, count) {
      // console.log("The number of unique users is: %d", count);
      return res.status(200).json(count);
    });
};

exports.countAssetValue = (req, res) => {
  Asset.find({}, function (err, results) {
    if (err) {
      //handle error
    }
    let sum = 0;

    results.map((asset) => {
      // console.log(asset.amcrate);
      if (asset.amcrate) {
        sum += parseInt(asset.amcrate);
      }
    });

    return res.status(200).json(sum);
  });

  // Asset.count({ business: "NOS" }, function (err, result) {
  //   if (err) {
  //     return res.status(400).json({
  //       error: "Cant count nos assets",
  //       err: err,
  //     });
  //   }
  // console.log(result);
  //   return res.status(200).json(sum);
  // });
  // return res.status(200).json(sum);
};

// -------------------------------------------------------

exports.createAsset = async (req, res) => {
  try {
    const { asset, product } = req.body;
    validateAssetFields(asset);
    const hierarchy = await validateAssetHierarchy(asset, { CustomerLogin, Unit });
    if (!product || typeof product !== "object" || Array.isArray(product) ||
        Object.keys(product).some(key => key.startsWith("$") || key.includes(".")) ||
        ["_id", "asset"].some(key => Object.prototype.hasOwnProperty.call(product, key))) {
      invalid("Invalid product fields.");
    }
    // Validate all three documents before the first database write.
    const newasset = new Asset({ ...asset, ...hierarchy });
    const hardware = { ...product, asset: newasset._id };
    const newprod = new Server(hardware);
    const original = new originalproduct(hardware);
    await Promise.all([newasset.validate(), newprod.validate(), original.validate()]);
    await newasset.save();
    await newprod.save();
    await original.save();
    newasset.product = newprod._id;
    newasset.originalproduct = original._id;
    await newasset.save();
    const linked = await Unit.updateOne({ _id: hierarchy.unitId,
      customerId: hierarchy.customerId, accountId: hierarchy.accountId },
      { $addToSet: { assetsId: newasset._id } });
    if (linked.matchedCount !== 1) throw new Error("The selected unit changed during creation.");
    return res.status(200).json(newasset);
  } catch (err) {
    const message = err.code === 11000 ? "Product exists with serial Number." : err.message;
    return res.status(err.status || 400).json({ error: message, message });
  }
};

exports.getAllAssets = (req, res) => {
  let { pages, filters } = req.body;

  let { searchquery, searchtype } = filters;
  // console.log(searchtype);
  const fuzzyquery = new RegExp(escapeRegex(searchquery), "gi");

  let options = {
    populate: "product",
    page: pages.page,
    limit: pages.limit,
  };

  let filteroptions = {
    // product: { brand: "IBM" },
  };
  // -------------Product Specific Search Options -----------------
  let productoptions = {
    populate: "asset",
    page: pages.page,
    limit: pages.limit,
  };
  let pfilteroptions = {
    // "keyboard.keyboardsno": "21321",
  };

  // -----------------------------------------------------------------------
  if (searchquery == "") {
    // Logic to add to filter when required
    if (filters.business == "") {
      filteroptions.business = { $nin: ["DEAD"] };
    }
    if (filters.business != "") {
      filteroptions.business = filters.business;
    }
    if (filters.producttype != "") {
      filteroptions.producttype = filters.producttype;
    }
    // -----------------Customer,Account,Unit ID filters-------

    if (filters.unitId && filters.unitId != "") {
      filteroptions.unitId = filters.unitId;
    } else if (filters.accountId && filters.accountId != "") {
      filteroptions.accountId = filters.accountId;
    } else if (filters.customerId && filters.customerId != "") {
      filteroptions.customerId = filters.customerId;
    }
    // console.log(filters);
    Asset.paginate(filteroptions, options, function (err, result) {
      // console.log(result);
      if (err || !result) {
        return res.status(400).json({
          error: "No assets found",
          err: err,
        });
      }
      // console.log(result.docs);
      let output = {
        total: result.total,
        out: result.docs,
      };
      return res.json(output);
    });
  } else {
    // ----------------Conditional addition of query attributes---------
    if (searchtype == "prodserial") {
      pfilteroptions["serialno"] = fuzzyquery;
      // console.log("inside");
    }
    if (searchtype == "keyboardsno") {
      pfilteroptions["keyboard.keyboardsno"] = fuzzyquery;
      // console.log("inside");
    }
    if (searchtype == "mousesno") {
      pfilteroptions["mouse.mousesno"] = fuzzyquery;
      // console.log("inside");
    }
    if (searchtype == "motherboardsno") {
      pfilteroptions["motherboard.motherboardsno"] = fuzzyquery;
      // console.log("inside");
    }
    if (searchtype == "monitorsno") {
      pfilteroptions["monitor.monitorsno"] = fuzzyquery;
      // console.log("inside");
    }
    if (searchtype == "hddsno") {
      pfilteroptions["hdd.hddsno"] = fuzzyquery;
      // console.log("inside");
    }
    if (searchtype == "cpusno") {
      pfilteroptions["cpu.cpusno"] = fuzzyquery;
      // console.log("inside");
    }
    if (searchtype == "ramsno") {
      pfilteroptions["ram.ramsno"] = fuzzyquery;
      // console.log("inside");
    }
    if (searchtype == "smpssno") {
      pfilteroptions["smps.smpssno"] = fuzzyquery;
      // console.log("inside");
    }
    if (searchtype == "fansno") {
      pfilteroptions["fan.fansno"] = fuzzyquery;
      // console.log("inside");
    }
    if (searchtype == "opticaldrivesno") {
      pfilteroptions["opticaldrive.opticaldrivesno"] = fuzzyquery;
      // console.log("inside");
    }

    // ------------------------Main Call-----------------------------------------
    Server.paginate(pfilteroptions, productoptions, function (err, result) {
      // console.log(result);
      if (err || !result) {
        return res.status(400).json({
          error: "No assets found",
          err: err,
        });
      }
      // console.log(result.docs);
      let final = [];
      // console.log("---------------final-------------------------------");
      result.docs.map((product, i) => {
        // console.log(product);
        let tasset = product.asset;
        final[i] = {
          ...(tasset?._doc || {}),
          product: product,
        };
        // console.log(tasset);
        // console.log(final);
      });
      let output = {
        total: result.total,
        out: final,
      };
      return res.json(output);
      // console.log(final);
      // return res.json(final);
    });
  }
};

exports.deleteAsset = async (req, res) => {
  let { id } = req.body;
  try {
    let asset = await Asset.findByIdAndDelete({ _id: id });
    let unitId = asset.unitId;
    let unit = await Unit.update({ _id: unitId }, { $pull: { assetsId: id } });
    let productId = asset.product;
    let product = await Server.findByIdAndDelete(productId);

    return res.status(200).json({ asset, unit });
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.updateAsset = async (req, res) => {
  try {
    const { id, newasset, newproduct } = req.body;
    if (!isId(id)) invalid("A valid asset ID is required.");
    validateAssetFields(newasset);
    const existing = await Asset.findById(id);
    if (!existing) return res.status(404).json({ error: "Asset not found." });
    const ids = {};
    for (const key of ["customerId", "accountId", "unitId"]) {
      ids[key] = Object.prototype.hasOwnProperty.call(newasset, key) ? newasset[key] :
        (existing[key] ? String(existing[key]) : "");
    }
    const hierarchy = await validateAssetHierarchy(ids, { CustomerLogin, Unit });
    const product = await Server.findOne({ _id: existing.product, asset: existing._id });
    if (!product) return res.status(409).json({ error: "The asset hardware link needs review before editing." });
    const update = newproduct || {};
    if (typeof update !== "object" || Array.isArray(update) || Object.keys(update).some(key =>
        key.includes(".") || ["_id", "asset"].includes(key) || (key.startsWith("$") && key !== "$push"))) {
      invalid("Invalid product update fields.");
    }
    if (update.$push && (typeof update.$push !== "object" || Array.isArray(update.$push) ||
        Object.keys(update.$push).some(key => key !== "history"))) invalid("Invalid product history update.");
    const { $push, ...fields } = update;
    existing.set({ ...newasset, ...hierarchy });
    product.set(fields);
    if ($push && Object.prototype.hasOwnProperty.call($push, "history")) {
      if (!$push.history || typeof $push.history !== "object" || Array.isArray($push.history) ||
          Object.keys($push.history).some(key => key.startsWith("$"))) invalid("Invalid history entry.");
      product.history.push($push.history);
    }
    await Promise.all([existing.validate(), product.validate()]);
    await existing.save();
    await product.save();
    const linked = await Unit.updateOne({ _id: hierarchy.unitId,
      customerId: hierarchy.customerId, accountId: hierarchy.accountId },
      { $addToSet: { assetsId: existing._id } });
    if (linked.matchedCount !== 1) throw new Error("The selected unit changed during editing.");
    await Unit.updateMany({ _id: { $ne: hierarchy.unitId }, assetsId: existing._id },
      { $pull: { assetsId: existing._id } });
    return res.status(200).json({ asset: existing });
  } catch (err) {
    return res.status(err.status || 400).json({ error: err.message });
  }
};

exports.getAssetById = async (req, res) => {
  try {
    let asset = await Asset.findById(req.body.id)
      .populate("product")
      .populate("customerId");
    return res.status(200).json(asset);
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.getOriginalAssetById = async (req, res) => {
  try {
    let asset = await Asset.findById(req.body.id)
      .populate("originalproduct")
      .populate("customerId");
    return res.status(200).json(asset);
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.assetUpdateWithId = async (req, res) => {
  let { id, update } = req.body;
  console.log(id, update);
  try {
    let product = await Server.findByIdAndUpdate(id, update, {
      safe: true,
      useFindAndModify: false,
    });
    return res.status(200).json({ product });
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.multiAssetUpdate = async (req, res) => {
  let {
    selectedids,
    billingenable,
    contractenable,
    ContractFrom,
    ContractTo,
    BillingFrom,
    BillingTo,
  } = req.body;
  let update = {};
  // console.log(ContractFrom);
  if (contractenable) {
    update["contractfrom"] = ContractFrom;
    update["contractto"] = ContractTo;
  }
  if (billingenable) {
    update["billingfrom"] = BillingFrom;
    update["billingto"] = BillingTo;
  }
  console.log(update);
  // console.log(selectedids);
  try {
    selectedids.map(async (id, i) => {
      let product = await Asset.findByIdAndUpdate(id, update, {
        safe: true,
        useFindAndModify: false,
      });
    });

    return res.status(200).json({ hello: "hello" });
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
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

// -----------------------Fuzzy Search Regex----------------
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
