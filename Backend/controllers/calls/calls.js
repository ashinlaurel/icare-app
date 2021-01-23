const { result } = require("lodash");
const assets = require("../../models/assets/assets");
const Call = require("../../models/call/call");
const Server = require("../../models/products/server");
const InvItem = require("../../models/inventory/InvItem");

const { createItem } = require("../inventory/inventory");
const server = require("../../models/products/server");

exports.callCreate = async (req, res) => {
  //////// dont forget to pass customer name and CustId is login from frontend
  const call = req.body;
  try {
    const temp = new Call(call);
    const newcall = await temp.save();

    return res.status(201).json(newcall);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getCalls = async (req, res) => {
  //////// dont forget to pass customer name and CustId is login from frontend
  let { pages, filters } = req.body;

  let { searchquery, searchtype } = filters;

  let options = {
    sort: {
      date: -1,
    },
    populate: {
      path: "assetId",
      populate: {
        path: "product",
      },
    },
    page: pages.page,
    limit: pages.limit,
  };

  let filteroptions = {
    // product: { brand: "IBM" },
  };

  searchquery = "";
  if (searchquery == "") {
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
      // console.log(filters.customerId);
      filteroptions.customerId = filters.customerId;
    }

    if (filters.employeeId && filters.employeeId != "") {
      filteroptions.employeeId = filters.employeeId;
    }
    Call.paginate(filteroptions, options, function (err, result) {
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
  }
};

exports.assignEnggToCall = async (req, res) => {
  let { id, update } = req.body;
  console.log(id, update);
  try {
    let cust = await Call.findByIdAndUpdate(id, update, {
      safe: true,
      useFindAndModify: false,
    });
    return res.status(200).json({ cust });
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.getCallById = async (req, res) => {
  try {
    let call = await Call.findById(req.body.id);
    return res.status(200).json(call);
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.swapItems = async (req, res) => {
  let { existswap, newswap, call, type } = req.body;

  console.log(existswap);
  console.log(newswap);
  console.log(call);

  let newexisthistory = {
    histtype: "swap",
    date: call.date,
    location: "Error",
    callId: call.callNo,
    assetId: call.assetId,
    status: "Bad",
    note: "Item Removed From Asset",
  };
  let newswaphistory = {
    histtype: "swap",
    date: call.date,
    location: "Error",
    callId: call.callNo,
    assetId: call.assetId,
    status: "Used",
    note: "Item Added to Asset",
  };

  try {
    let doesexist = await InvItem.exists({ sno: existswap.sno });
    console.log(doesexist);

    // ----Code To Be Completed ----------
    if (doesexist) {
      // Updating the existswap inventory

      const resultone = await InvItem.findOneAndUpdate(
        { sno: existswap.sno },
        {
          condition: "Bad",
          assetId: null,
          $push: { history: newexisthistory },
        }
      );
    } else {
      console.log("new addition");
      // // Creating new item in inventory
      existswap.history = [newexisthistory];

      const newitem = new InvItem(existswap);
      await newitem.save();
    }
    // Updating the newswap inventory

    const result = await InvItem.findByIdAndUpdate(newswap._id, {
      condition: "Used",
      assetId: call.assetId,
      $push: { history: newswaphistory },
    });
    console.log(result);
    // Asset update

    const theasset = await assets.findById(call.assetId).populate("product");
    // console.log(theasset);
    // console.log(type);
    // console.log(theasset.product[type]);
    await theasset.product[type].map((item, i) => {
      if (item[`${type}sno`] == existswap.sno) {
        console.log("here");
        item[`${type}name`] = newswap.name;
        item[`${type}sno`] = newswap.sno;
      }
    });
    // console.log(theasset.product[type]);
    const theproduct = theasset.product;

    let prod = await server.findById(theproduct._id);
    console.log(prod);
    prod = theproduct;
    prod.save();
    // let call = await Call.findById(req.body.id);
    return res.status(200).json({ hello: "hello" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
};
