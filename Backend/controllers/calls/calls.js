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

  let { searchquery } = filters;

  const fuzzyquery = new RegExp(escapeRegex(searchquery), "gi");

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
  if (filters.toDate != "" && filters.fromDate != "") {
    filteroptions.date = {
      $gte: filters.fromDate,
      $lt: filters.toDate,
    };
  } else if (filters.fromDate != "") {
    filteroptions.date = {
      $gte: filters.fromDate,
    };
  } else if (filters.toDate != "") {
    filteroptions.date = {
      $lt: filters.toDate,
    };
  }

  if (filters.searchquery != "") {
    filteroptions.callNo = fuzzyquery;
  }

  if (filters.callStatus != "") {
    if (filters.callStatus == "priority") {
      filteroptions.callStatus = { $not: { $gt: 10 } };
      options.sort = {
        assignedDate: 1,
        assignedETA: 1,
      };
    } else filteroptions.callStatus = filters.callStatus;
  }
  if (filters.employeeId && filters.employeeId != "") {
    // console.log(filters.callStatus);
    options.sort = {
      assignedDate: 1,
      assignedETA: 1,
    };
    filteroptions.callStatus = { $not: { $gt: 10 } };
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
  // }
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
  let {
    existswap,
    newswap,
    call,
    type,
    servicelocation,
    assetserial,
  } = req.body;

  console.log(existswap);
  console.log(newswap);
  // console.log(call);

  let newexisthistory = {
    histtype: "swap",
    date: call.date,
    location: servicelocation,
    callId: call.callNo,
    assetId: assetserial,
    status: "Bad",
    note: "Item Removed From Asset",
  };
  let newswaphistory = {
    histtype: "swap",
    date: call.date,
    location: servicelocation,
    callId: call.callNo,
    assetId: assetserial,
    status: "Used",
    note: "Item Added to Asset",
  };

  // let newcallhistory = {
  //   date: moment().format(),
  //   callStatus: call.callStatus,
  //   engineer: call.employeeName,
  //   callAttendDate: callAttendDate,
  //   startOfService: startOfService,
  //   endOfService: endOfService,
  //   note: `Call Status Updated to ${call.callStatus}`,
  //   actionTaken: actionTaken,
  // };

  console.log("---------------------------------------------------");

  // ---------Adding Into Asset ------------------
  if (!existswap._id && newswap._id) {
    console.log("add new item into asset");

    let additem = {
      [`${type}name`]: newswap.name,
      [`${type}sno`]: newswap.sno,
    };

    console.log(additem);

    try {
      // Updating the newswap inventory
      const result = await InvItem.findByIdAndUpdate(newswap._id, {
        condition: "Used",
        assetId: call.assetId,
        $push: { history: newswaphistory },
      });

      const theasset = await assets.findById(call.assetId).populate("product");
      await theasset.product[type].push(additem);
      // console.log(theasset.product[type]);
      const theproduct = theasset.product;

      let prod = await server.findById(theproduct._id);
      console.log(prod);
      prod = theproduct;
      prod.save();
      return res.status(200).json({ hello: "hello" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
  }

  // --------------Taking Asset Item into inventory -------------
  if (existswap._id && !newswap._id) {
    console.log("receive");
    try {
      let doesexist = await InvItem.exists({ sno: existswap.sno });
      console.log(doesexist);

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
        existswap.location = servicelocation;

        const newitem = new InvItem(existswap);
        await newitem.save();
      }

      // Asset update

      const theasset = await assets.findById(call.assetId).populate("product");

      theasset.product[type] = theasset.product[type].filter(
        (item) => !(item[`${type}sno`] == existswap.sno)
      );

      // console.log("here baby");
      // console.log(theasset.product[type]);
      const theproduct = theasset.product;

      let prod = await server.findById(theproduct._id);
      console.log(prod);
      prod = theproduct;
      prod.save();

      return res.status(200).json({ hello: "hello" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
  }
  // --------------------Swapping Both --------------
  if (existswap._id && newswap._id) {
    console.log("swap");
    try {
      // ------------
      let doesexist = await InvItem.exists({ sno: existswap.sno });
      console.log(doesexist);

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
        existswap.location = servicelocation;

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
      // -----------------------------------
      // let call = await Call.findById(req.body.id);
      return res.status(200).json({ hello: "hello" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
  }

  // ------------When both not there ------

  return res.status(200).json({ hello: "empty" });
};

// -----COunters ----

exports.countCallsByDate = (req, res) => {
  let { date } = req.body;
  // console.log(date);
  Call.count({ date: date }, function (err, result) {
    if (err) {
      return res.status(400).json({
        error: "Cant count customers",
        err: err,
      });
    }
    // console.log(result);
    return res.status(200).json(result);
  });
};

// -----------------------Fuzzy Search Regex----------------
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
