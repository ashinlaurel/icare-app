const CustomerLogin = require("../../models/customer/CustomerLogin");
// const CustomerInfo = require("../../models/customer/CustomerInfo");

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
  console.log(req);
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
  let { search } = req.body;
  // console.log("hello");

  let options = {
    // populate: "product",
    page: 1,
    limit: 10,
  };

  let filteroptions = { role: req.body.role };
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
    if (err || !result) {
      return res.status(400).json({
        error: "No customer found",
        err: err,
      });
    }
    // console.log("findone");

    // console.log(result[0]._id);
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
