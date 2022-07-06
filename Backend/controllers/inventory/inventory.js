const Asset = require("../../models/assets/assets");
const Server = require("../../models/products/server");
const InvItem = require("../../models/inventory/InvItem");
const PurchaseHistory = require("../../models/PurchaseHistory/PurchaseHistory");
const { Schema } = require("mongoose");
const { result, filter, toInteger } = require("lodash");
const Unit = require("../../models/customer/Unit");
const server = require("../../models/products/server");
const ScrapSaleHistory = require("../../models/ScrapSaleHistory/ScrapSaleHistory");

// ---------------Counter Controllers -------------------
exports.getStockStats = async (req, res) => {
  let thefinal = {
    mouse: {
      tripurgoodmouse: 0,
      tripurdefmouse: 0,
      tripurscrapmouse: 0,
      tripurvendormouse: 0,
      triservgoodmouse: 0,
      triservdefmouse: 0,
      triservscrapmouse: 0,
      triservvendormouse: 0,
      kotpurgoodmouse: 0,
      kotpurdefmouse: 0,
      kotpurscrapmouse: 0,
      kotpurvendormouse: 0,
      kotservgoodmouse: 0,
      kotservdefmouse: 0,
      kotservscrapmouse: 0,
      kotservvendormouse: 0,
      kozpurgoodmouse: 0,
      kozpurdefmouse: 0,
      kozpurscrapmouse: 0,
      kozpurvendormouse: 0,
      kozservgoodmouse: 0,
      kozservdefmouse: 0,
      kozservscrapmouse: 0,
      kozservvendormouse: 0,
      totalpurgoodmouse: 0,
      totalpurdefmouse: 0,
      totalpurscrapmouse: 0,
      totalpurvendormouse: 0,
      totalservgoodmouse: 0,
      totalservdefmouse: 0,
      totalservscrapmouse: 0,
      totalservvendormouse: 0,
      subtotmouse: 0,
    },
  };
  let tm = thefinal.mouse; // mouse
  //----mouse----
  // trivandrum
  //purchased
  tm.tripurgoodmouse = await InvItem.count({
    type: "mouse",
    location: "Trivandrum",
    stocktype: "Purchased",
    condition: "Good",
  });
  tm.tripurdefmouse = await InvItem.count({
    type: "mouse",
    location: "Trivandrum",
    stocktype: "Purchased",
    condition: "Bad",
  });
  tm.tripurscrapmouse = await InvItem.count({
    type: "mouse",
    location: "Trivandrum",
    stocktype: "Purchased",
    condition: "Scrap",
  });
  tm.tripurvendormouse = await InvItem.count({
    type: "mouse",
    location: "Trivandrum",
    stocktype: "Purchased",
    condition: "Scrap",
  });
  // //serviced
  tm.triservgoodmouse = await InvItem.count({
    type: "mouse",
    location: "Trivandrum",
    stocktype: "Serviced",
    condition: "Good",
  });
  tm.triservdefmouse = await InvItem.count({
    type: "mouse",
    location: "Trivandrum",
    stocktype: "Serviced",
    condition: "Bad",
  });
  tm.triservscrapmouse = await InvItem.count({
    type: "mouse",
    location: "Trivandrum",
    stocktype: "Serviced",
    condition: "Scrap",
  });
  tm.triservvendormouse = await InvItem.count({
    type: "mouse",
    location: "Trivandrum",
    stocktype: "Serviced",
    condition: "Scrap",
  });
  // //kottayam
  // //purchased
  tm.kotpurgoodmouse = await InvItem.count({
    type: "mouse",
    location: "Kottayam",
    stocktype: "Purchased",
    condition: "Good",
  });
  tm.kotpurdefmouse = await InvItem.count({
    type: "mouse",
    location: "Kottayam",
    stocktype: "Purchased",
    condition: "Bad",
  });
  tm.kotpurscrapmouse = await InvItem.count({
    type: "mouse",
    location: "Kottayam",
    stocktype: "Purchased",
    condition: "Scrap",
  });
  tm.kotpurscrapmouse = await InvItem.count({
    type: "mouse",
    location: "Kottayam",
    stocktype: "Purchased",
    condition: "Scrap",
  });
  // //serviced
  tm.kotservgoodmouse = await InvItem.count({
    type: "mouse",
    location: "Kottayam",
    stocktype: "Serviced",
    condition: "Good",
  });
  tm.kotservdefmouse = await InvItem.count({
    type: "mouse",
    location: "Kottayam",
    stocktype: "Serviced",
    condition: "Bad",
  });
  tm.kotservscrapmouse = await InvItem.count({
    type: "mouse",
    location: "Kottayam",
    stocktype: "Serviced",
    condition: "Scrap",
  });
  tm.kotservvendormouse = await InvItem.count({
    type: "mouse",
    location: "Kottayam",
    stocktype: "Serviced",
    condition: "Scrap",
  });
  // //kozhikode
  // //purchased
  tm.kozpurgoodmouse = await InvItem.count({
    type: "mouse",
    location: "Kozhikode",
    stocktype: "Purchased",
    condition: "Good",
  });
  tm.kozpurdefmouse = await InvItem.count({
    type: "mouse",
    location: "Kozhikode",
    stocktype: "Purchased",
    condition: "Bad",
  });
  tm.kozpurscrapmouse = await InvItem.count({
    type: "mouse",
    location: "Kozhikode",
    stocktype: "Purchased",
    condition: "Scrap",
  });
  tm.kozpurscrapmouse = await InvItem.count({
    type: "mouse",
    location: "Kozhikode",
    stocktype: "Purchased",
    condition: "Scrap",
  });
  // //serviced
  tm.kozservgoodmouse = await InvItem.count({
    type: "mouse",
    location: "Kozhikode",
    stocktype: "Serviced",
    condition: "Good",
  });
  tm.kozservdefmouse = await InvItem.count({
    type: "mouse",
    location: "Kozhikode",
    stocktype: "Serviced",
    condition: "Bad",
  });
  tm.kozservscrapmouse = await InvItem.count({
    type: "mouse",
    location: "Kozhikode",
    stocktype: "Serviced",
    condition: "Scrap",
  });
  tm.kozservvendormouse = await InvItem.count({
    type: "mouse",
    location: "Kozhikode",
    stocktype: "Serviced",
    condition: "Scrap",
  });
  //total
  //purchase
  tm.totalpurgoodmouse =
    tm.tripurgoodmouse + tm.kotpurgoodmouse + tm.kozpurgoodmouse;
  tm.totalpurdefmouse =
    tm.tripurdefmouse + tm.kotpurdefmouse + tm.kozpurdefmouse;
  tm.totalpurscrapmouse =
    tm.tripurscrapmouse + tm.kotpurscrapmouse + tm.kozpurscrapmouse;
  // tm.totalpurvendormouse=
  //service
  tm.totalservgoodmouse =
    tm.triservgoodmouse + tm.kotservgoodmouse + tm.kozservgoodmouse;
  tm.totalservdefmouse =
    tm.triservdefmouse + tm.kotservdefmouse + tm.kozservdefmouse;
  tm.totalservscrapmouse =
    tm.triservscrapmouse + tm.kotservscrapmouse + tm.kozservscrapmouse;

  tm.subtotmouse =
    tm.totalpurgoodmouse +
    tm.totalpurdefmouse +
    tm.totalpurscrapmouse +
    tm.totalservgoodmouse +
    tm.totalservdefmouse +
    tm.totalservscrapmouse;
  // console.log(thefinal);
  console.log(thefinal);
  return res.status(200).json({ out: thefinal });
};

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

// ------Multiple Inventory Addition -------

exports.createItems = async (req, res) => {
  let newitems = req.body;

  let flag = false;
  // Searching in assets////////////////////////////////////////
  newitems.map((item) => {
    console.log(item.sno);
    let options = {};
    let filteroptions = {
      $or: [
        {
          mouse: {
            $elemMatch: {
              mousesno: item.sno,
            },
          },
        },
        {
          keyboard: {
            $elemMatch: {
              keyboardsno: item.sno,
            },
          },
        },
        {
          cpu: {
            $elemMatch: {
              cpusno: item.sno,
            },
          },
        },
        {
          ram: {
            $elemMatch: {
              ramsno: item.sno,
            },
          },
        },

        {
          hdd: {
            $elemMatch: {
              hddsno: item.sno,
            },
          },
        },
        {
          smps: {
            $elemMatch: {
              smpssno: item.sno,
            },
          },
        },
        {
          fan: {
            $elemMatch: {
              fansno: item.sno,
            },
          },
        },
        {
          motherboard: {
            $elemMatch: {
              motherboardsno: item.sno,
            },
          },
        },
        {
          opticaldrive: {
            $elemMatch: {
              opticaldrivesno: item.sno,
            },
          },
        },
        {
          monitor: {
            $elemMatch: {
              monitorsno: item.sno,
            },
          },
        },
        {
          gcard: {
            $elemMatch: {
              gcardsno: item.sno,
            },
          },
        },
        {
          enetcard: {
            $elemMatch: {
              enetcardsno: item.sno,
            },
          },
        },
        {
          serialcard: {
            $elemMatch: {
              serialcardsno: item.sno,
            },
          },
        },
        {
          parallelcard: {
            $elemMatch: {
              parallelcardsno: item.sno,
            },
          },
        },
        {
          hbacard: {
            $elemMatch: {
              hbacardsno: item.sno,
            },
          },
        },
        {
          raidcontroller: {
            $elemMatch: {
              raidcontrollersno: item.sno,
            },
          },
        },
        {
          tapecontroller: {
            $elemMatch: {
              tapecontrollersno: item.sno,
            },
          },
        },
        {
          others: {
            $elemMatch: {
              otherssno: item.sno,
            },
          },
        },
      ],
    };
    // Server.find({"mouse.mousesno":"123"},function (err, result) {
    Server.paginate(filteroptions, options, function (err, result) {
      // console.log(result);
      // if (err || !result) {
      //   return res.status(400).json({
      //     error: "No items found",
      //     err: err,
      //   });
      // }
      console.log(result.docs.length);
      if (result.docs.length > 0) {
        console.log("asset found");
        let message = "Item with this serial number already exists in Assets.";
        // return res.status(400).json({message});
      }
      // let output = {
      //   total: result.total,
      //   out: result.docs,
      // };
      // console.log(output)
      // return res.status(200).json(output);
    });
  });

  ////////////////////////////////////////////////////////////////////////////////
  // return res.status(400).json("NOT SUPPOSED TO BE HERE") ;
  // Saving the asset
  try {
    const result = await InvItem.insertMany(newitems);
    return res.status(200).json(result);
  } catch (err) {
    console.log("Inventory Item Creating error", err.message);
    let message = err.message;
    console.log(err.message);
    if (err.code == 11000) {
      message = "Item with this serial number already exists in Inventory.";
      // console.log(message)
      // res.statusMessage="Item exists with serial Number"
    }
    return res.status(400).json({ message });

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
    sort: {
      type: 1,
    },
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
  if (filters.stocktype && filters.stocktype != "") {
    filteroptions.stocktype = filters.stocktype;
  }

  if (filters.condition != "") {
    if (filters.condition == "Available") {
      filteroptions.condition = { $in: ["Good", "Bad"] };
    } else {
      filteroptions.condition = filters.condition;
    }
  }

  // if (filters.searchquery != "") {
  //   filteroptions.sno = fuzzyquery;
  // }
  // console.log(filteroptions);

  // console.log(filteroptions);
  let finalquery = {
    $and: [{ $or: [{ name: fuzzyquery }, { sno: fuzzyquery }] }, filteroptions],
  };
  // console.log(finalquery);
  // -----------------------------------------------------------------------

  InvItem.paginate(finalquery, options, function (err, result) {
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

exports.scrapSaleUpdate = async (req, res) => {
  let {
    selectedids,
    invoiceNum,
    scrapsaledate,
    grossvalue,
    gstperc,
    netvalue,
  } = req.body;
  console.log(invoiceNum);

  let newinvhistory = {
    histtype: "Condition",
    date: scrapsaledate,
    location: "Nil",
    callId: "Nil",
    assetId: "Nil",
    status: "ScrapSold",
    note: `Scrap Item Sold with invoice: ${invoiceNum}`,
  };
  try {
    selectedids.map(async (item, i) => {
      let inv = await InvItem.findByIdAndUpdate(selectedids[i], {
        condition: "ScrapSold",
        $push: { history: newinvhistory },
      });
    });

    let item = {
      invnumber: invoiceNum,
      scrapsaledate: scrapsaledate,
      grossvalue: grossvalue,
      gstperc: gstperc,
      netvalue: netvalue,
      invItems: selectedids,
    };
    const newitem = new ScrapSaleHistory(item);
    const result = await newitem.save();

    return res.status(200).json({ result });
  } catch (err) {
    // console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.getInvById = async (req, res) => {
  try {
    let vend = await InvItem.findById(req.body.id);
    return res.status(200).json(vend);
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};
// ------------history-------------------------------------------

exports.createPurchaseHistrory = async (req, res) => {
  let item = req.body;
  console.log(item);
  try {
    // Saving the asset
    const newitem = new PurchaseHistory(item);
    const result = await newitem.save();
    return res.status(200).json(result);
  } catch (err) {
    console.log("Purchase history Item Creating error", err.message);
    let message = err.message;
    res.status(400).json({ message });
    // throw error;
  }
};

exports.getAllHistory = (req, res) => {
  let { pages, filters } = req.body;

  let { searchquery, vendorsearchquery } = filters;
  // console.log(filters);
  // console.log(searchquery);
  // console.log(searchtype);
  const fuzzyquery = new RegExp(escapeRegex(searchquery), "gi");
  const vendorfuzzyquery = new RegExp(escapeRegex(vendorsearchquery), "gi");

  let options = {
    // populate: "product",
    page: pages.page,
    limit: pages.limit,
    populate: "invItems",
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
  if (filters.stocktype != "") {
    filteroptions.stocktype = filters.stocktype;
  }
  if (filters.searchquery != "") {
    filteroptions.invnumber = fuzzyquery;
  }
  if (filters.vendorsearchquery != "") {
    filteroptions.vendor = vendorfuzzyquery;
  }

  // -----------------------------------------------------------------------

  PurchaseHistory.paginate(filteroptions, options, function (err, result) {
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

exports.getScrapHistory = (req, res) => {
  let { pages, filters } = req.body;

  let { searchquery } = filters;
  // console.log(filters);
  // console.log(searchquery);
  // console.log(searchtype);
  const fuzzyquery = new RegExp(escapeRegex(searchquery), "gi");

  let options = {
    // populate: "product",
    sort: { scrapsaledate: -1 },
    page: pages.page,
    limit: pages.limit,
    populate: "invItems",
  };

  let filteroptions = {
    // product: { brand: "IBM" },
  };

  // ---Conditional Addition of filters

  if (filters.searchquery != "") {
    filteroptions.invnumber = fuzzyquery;
  }
  if (filters.toDate != "" && filters.fromDate != "") {
    filteroptions.scrapsaledate = {
      $gte: filters.fromDate,
      $lt: filters.toDate,
    };
  } else if (filters.fromDate != "") {
    filteroptions.scrapsaledate = {
      $gte: filters.fromDate,
    };
  } else if (filters.toDate != "") {
    filteroptions.scrapsaledate = {
      $lt: filters.toDate,
    };
  }

  // -----------------------------------------------------------------------

  ScrapSaleHistory.paginate(filteroptions, options, function (err, result) {
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
