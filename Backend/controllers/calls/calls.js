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
    if (call.callType == "external") {
      let ifexist = await Call.find({ assetId: call.assetId }).exec();
      // console.log(ifexist);
      ifexist.map((call) => {
        console.log(call.callStatus);
        if (call.callStatus != 10 && call.callStatus != 11)
          throw { errid: 1, message: call.callNo };
      });
    }

    // return res.status(201).json(newcall);
    const temp = new Call(call);
    const newcall = await temp.save();

    return res.status(201).json(newcall);
  } catch (err) {
    console.log("Call create error");
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

  if (filters.callType && filters.callType != "") {
    filteroptions.callType = filters.callType;
  }

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

  // note that generally in getall cancelled and closed wont come
  if (filters.callStatus != "") {
    if (filters.callStatus == "priority" || filters.callStatus == "all") {
      console.log(filters.callStatus);
      filteroptions.callStatus = { $nin: [10, 11] };
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
    filteroptions.callStatus = { $nin: [10, 11] };
    filteroptions.employeeId = filters.employeeId;
  }

  if (filters.unitId && filters.unitId != "") {
    filteroptions.unitId = filters.unitId;
  } else if (filters.accountId && filters.accountId != "") {
    filteroptions.accountId = filters.accountId;
  } else if (filters.customerId && filters.customerId != "") {
    filteroptions.customerId = filters.customerId;
  }
  console.log(filteroptions);
  // servicelocation filters
  // if (filters.servicelocation && filters.servicelocation != "") {
  //   filteroptions.assetId.servicelocation = filters.servicelocation;
  // }

  let dynamicStatus = {};

  if (filters.callStatus == "") {
    dynamicStatus = { callStatus: { $nin: [11, 10] } };
  }

  let finalquery = {
    $and: [
      dynamicStatus,
      {
        $or: [{ callNo: fuzzyquery }, { "assetId.amcrate": fuzzyquery }],
      },
      filteroptions,
    ],
  };

  Call.paginate(finalquery, options, function (err, result) {
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
  let { existswap, newswap, call, type, servicelocation, assetserial } =
    req.body;

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

exports.invCallUpdate = async (req, res) => {
  let {
    inventoryid,
    callid,
    calldate,
    condition,
    servicelocation,
    assetserial,
  } = req.body;

  console.log("success");
  console.log(inventoryid);
  // console.log(call);

  let newinvhistory = {
    histtype: "Condition",
    date: calldate,
    location: servicelocation,
    callId: callid,
    assetId: "Nil",
    status: condition,
    note: `Item Condition Updated To ${condition} `,
  };

  // updating the inventory along with history
  try {
    const result = await InvItem.findByIdAndUpdate(inventoryid, {
      condition: condition,
      // assetId: call.assetId,
      $push: { history: newinvhistory },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: err });
  }

  return res.status(200).json({ hello: "testing" });
};

exports.checkAssetHasCall = async (req, res) => {
  // console.log(req.body);
  const { assetId } = req.body;
  let filteroptions = {
    assetId: assetId,
  };
  filteroptions.callStatus = { $nin: [10, 11] };
  try {
    let call = await Call.find(filteroptions);
    // return res.status(200).json(call);
    return res.status(200).json({ call });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

// -----Counters ----

exports.countCallsByDate = (req, res) => {
  let { date, callType, startdate, enddate } = req.body;
  // console.log(date);
  if (callType == "external") {
    Call.count({ date: date, callType: "external" }, function (err, result) {
      if (err) {
        return res.status(400).json({
          error: "Cant count customers",
          err: err,
        });
      }
      // console.log(result);
      return res.status(200).json(result);
    });
  } else if (callType == "internal" || callType == "internalinv") {
    Call.count(
      {
        callType: { $in: ["internal", "internalinv"] },
        date: { $gte: startdate, $lte: enddate },
      },
      function (err, result) {
        if (err) {
          return res.status(400).json({
            error: "Cant count customers",
            err: err,
          });
        }
        // console.log(result);
        return res.status(200).json(result);
      }
    );
  }
};

//Sid Updates
exports.getCallsChartData = (req, res) => {
  // Calculate the start and end dates for the last 6 months
  const startDate = new Date();
  //Use this startDate to change current date for data retrieval
  // const startDate = new Date("2022-10-25");
  startDate.setMonth(startDate.getMonth() - 6);
  startDate.setDate(1);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date();
  // const endDate = new Date("2022-10-25");
  endDate.setDate(1);
  endDate.setHours(0, 0, 0, 0);

  Call.aggregate([
    { $match: { date: { $gte: startDate, $lt: endDate } } }, // Filter calls for last 6 months
    { $group: { _id: { $month: "$date" }, count: { $sum: 1 } } }, // Group calls by month and count the number of calls in each group
    {
      $sort: {
        _id: 1,
      },
    }, // Sort the results by month in ascending order // Group calls by month and
    { $project: { _id: 0, month: "$_id", count: 1 } }, // Project the month and count fields and exclude the _id field
  ]).exec((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Error occured while getting " });
    } else {
      //result returned by mongoose doesn't contain months with no calls. Also sorting is an issue if month range between years
      //create newResult which solves these two issues
      const monthCountMap = {};
      for (const data of result) {
        monthCountMap[data.month] = data.count;
      }
      //newResult array contains value correponding to all months in range in sorted order
      const newResult = [];
      const startMonth = startDate.getMonth();
      //Fill newResult for 6 months starting from startMonth+1
      for (let i = 0; i < 6; i++) {
        const curMonth = ((startMonth + i) % 12) + 1;
        const monthObj = {};
        const monthName = new Date(Date.UTC(0, curMonth - 1, 1)).toLocaleString(
          "en-US",
          { month: "long" }
        );
        monthObj.month = monthName;
        monthObj.count = monthCountMap[curMonth] || 0;
        newResult.push(monthObj);
      }
      res.json(newResult);
    }
  });
};

// ----------------------- Search Regex----------------
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
