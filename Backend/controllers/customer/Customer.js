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
  try {
    const customer = await CustomerLogin.findById(req.body.customerId).populate(
      "accountId"
    );
    // if(customer.account)
    return res.status(200).json(customer.accountId);
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

  let filteroptions = {};
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
    filteroptions.customerName = regex;
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
  let { customerid } = req.body;
  console.log("customerbyid");
  console.log(customerid);

  let options = {
    populate: "accountId",
    // page: 1,
    // limit: 10,
  };

  let filteroptions = {
    _id: customerid,
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

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
