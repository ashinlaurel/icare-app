const CustomerLogin = require("../../models/customer/CustomerLogin");
const Unit = require("../../models/customer/Unit");
const Asset = require("../../models/assets/assets");

// ---------------Counter Controllers -------------------
exports.countCustomers = (req, res) => {
  CustomerLogin.count({ role: "1" }, function (err, result) {
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
// ---------------------------------------

exports.getAllCust = async (req, res) => {
  try {
    const users = await CustomerLogin.find(); //populate("infoId");
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "getAll Error" });
  }
};

exports.AccountsOfCustomer = async (req, res) => {
  // console.log(req);
  try {
    const customer = await CustomerLogin.findById(req.body.customerId).populate(
      "childAccountIds"
    );
    // if(customer.account)
    return res.status(200).json(customer.childAccountIds);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "getAll Error" });
  }
};

exports.getAllCustomers = (req, res) => {
  let { search, page, role } = req.body;
  // console.log("hello");

  let options = {
    // populate: "product",
    page: page,
    limit: 3,
  };

  let filteroptions = { role: role };
  // Logic to add to filter when required

  if (search == "") {
    CustomerLogin.paginate(filteroptions, options, function (err, result) {
      // console.log(result);
      if (err || !result) {
        return res.status(400).json({
          error: "No customers found",
          err: err,
        });
      }
      // console.log(result.docs);
      return res.json(result.docs);
    });
  } else {
    const regex = new RegExp(escapeRegex(search), "gi");
    filteroptions.name = regex;
    CustomerLogin.paginate(filteroptions, {}, function (err, result) {
      // console.log(result);
      if (err || !result) {
        return res.status(400).json({
          error: "No customers found",
          err: err,
        });
      }
      // console.log(result.docs);
      return res.json(result.docs);
    });

    // console.log("not empty");
  }
};

exports.getCustomerById = (req, res) => {
  let { id } = req.body;
  // console.log("customerbyid");
  // console.log(customerid);

  let options = {
    populate: "accountIds",
    // page: 1,
    // limit: 10,
  };

  let filteroptions = {
    _id: id,
  };

  // Logic to add to filter when required

  CustomerLogin.paginate(filteroptions, options, function (err, result) {
    // console.log(result);
    if (err || !result) {
      return res.status(400).json({
        error: "No accounts found",
        err: err,
      });
    }
    // console.log(result.docs);
    return res.json(result.docs);
  });
};

exports.getCustomerByName = (req, res) => {
  let { name } = req.body;
  // console.log("Got into the ");
  // console.log(customerid);

  // Logic to add to filter when required

  CustomerLogin.find({ name: name }, function (err, result) {
    // console.log(result);
    if (err || result.length == 0) {
      return res.status(400).json({
        error: "No customer found",
        err: err,
      });
    }
    // console.log("findone");

    console.log(result);
    return res.json(result[0]._id);
  });
};

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

exports.unitsFromAccount = async (req, res) => {
  try {
    const account = await CustomerLogin.findById(req.body.accountId).populate(
      "unitIds"
    );
    return res.status(200).json(account.unitIds);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "getAll Error" });
  }
};

exports.updateCustomer = async (req, res) => {
  let { id, update } = req.body;
  console.log(id, update);
  try {
    let cust = await CustomerLogin.findByIdAndUpdate(id, update, {
      safe: true,
      useFindAndModify: false,
    });
    return res.status(200).json({ cust });
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

// exports.deleteCustomer = async (req, res) => {
//   let { id } = req.body;
//   try {
//     let asset = await CustomerLogin.findByIdAndDelete({ _id: id });
//     let unitId = asset.unitId;
//     let unit = await Unit.update({ _id: unitId }, { $pull: { assetsId: id } });
//     return res.status(200).json({ asset, unit });
//   } catch (err) {
//     console.log(id);
//     return res.status(400).json({ error: err });
//   }
// };

exports.deleteAccount = async (req, res) => {
  let { id } = req.body;
  try {
    let account = await CustomerLogin.findByIdAndDelete(id);
    // // delete AssetId from cust
    let custId = account.parentCustomerId;
    let cust = await CustomerLogin.update(
      { _id: custId },
      { $pull: { childAccountIds: id } }
    );
    account.unitIds.map(async (unitId, i) => {
      let unit = await Unit.findByIdAndDelete(unitId);
      // console.log("Unit--> " + unitId + " deleted");
      // // delete unitId from acc
      // let accId = unit.accountId;
      // let acc = await CustomerLogin.update(
      //   { _id: accId },
      //   { $pull: { unitIds: id } }
      // );
      // delete assets under Unit
      unit.assetsId.map(async (assetId, i) => {
        // console.log(assetId);
        let asset = await Asset.findByIdAndDelete(assetId);
        let productId = asset.product;
        let product = await Server.findByIdAndDelete(productId);
      });
    });
    return res.status(200).json({ account });
  } catch (err) {
    console.log("del Error", err);
    return res.status(400).json({ error: err });
  }
};

exports.deleteCustomer = async (req, res) => {
  let { id } = req.body;
  try {
    let customer = await CustomerLogin.findByIdAndDelete(id);

    customer.childAccountIds.map(async (accId, i) => {
      let account = await CustomerLogin.findByIdAndDelete(accId);
      // console.log("Account--> " + accId + " deleted");
      // // delete AssetId from cust

      account.unitIds.map(async (unitId, i) => {
        let unit = await Unit.findByIdAndDelete(unitId);
        // console.log("Unit--> " + unitId + " deleted");
        // // delete unitId from acc
        // let accId = unit.accountId;
        // let acc = await CustomerLogin.update(
        //   { _id: accId },
        //   { $pull: { unitIds: id } }
        // );
        // delete assets under Unit
        unit.assetsId.map(async (assetId, i) => {
          // console.log(assetId);
          let asset = await Asset.findByIdAndDelete(assetId);
          let productId = asset.product;
          let product = await Server.findByIdAndDelete(productId);
        });
      });
    });
    return res.status(200).json({ customer });
  } catch (err) {
    console.log("del Error", err);
    return res.status(400).json({ error: err });
  }
};
