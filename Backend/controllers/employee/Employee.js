const EmployeeLogin = require("../../models/employee/EmployeeLogin");
const Salary = require("../../models/salary/Salary");

exports.getAllEmployees = (req, res) => {
  let { search } = req.body;
  console.log("employee list");

  let options = {
    // populate: "product",
    page: 1,
    limit: 10,
  };

  // let filteroptions = { role: req.body.role };
  let filteroptions = {};
  // Logic to add to filter when required

  if (search == "") {
    EmployeeLogin.paginate(filteroptions, options, function (err, result) {
      // console.log(result);
      if (err || !result) {
        return res.status(400).json({
          error: "No customers found",
          err: err,
        });
      }
      console.log(result.docs);
      return res.json(result.docs);
    });
  } else {
    const regex = new RegExp(escapeRegex(search), "gi");
    filteroptions.employeeName = regex;
    EmployeeLogin.paginate(filteroptions, {}, function (err, result) {
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

exports.getAllEmpData = (req, res) => {
  EmployeeLogin.paginate({}, {}, function (err, result) {
    // console.log(result);
    if (err || !result) {
      return res.status(400).json({
        error: "No employees found",
        err: err,
      });
    }
    console.log(result.docs);
    return res.json(result.docs);
  });
};

exports.getEmployeeById = (req, res) => {
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

  EmployeeLogin.paginate(filteroptions, options, function (err, result) {
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

exports.deleteEmployee = async (req, res) => {
  let { id } = req.body;
  try {
    let employee = await EmployeeLogin.findByIdAndDelete(id);

    return res.status(200).json({ employee });
  } catch (err) {
    console.log("del Error", err);
    return res.status(400).json({ error: err });
  }
};

exports.updateEmployee = async (req, res) => {
  let { id, update } = req.body;
  console.log(id, update);
  try {
    let employee = await EmployeeLogin.findByIdAndUpdate(id, update, {
      safe: true,
      useFindAndModify: false,
    });
    return res.status(200).json({ employee });
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

// ----Salary Controllers-------------------------------------------
// Create Salary Entry
exports.createSalary = async (req, res) => {
  try {
    const user = await Salary.create(req.body);
    return res.status(201).json({
      user: {
        _id: user.id,
        employeeName: user.employeeName,
        email: user.email,
      },
    });
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

exports.getAllSalary = (req, res) => {
  let { pages, filters } = req.body;
  console.log("employee list");

  let options = {
    // populate: "product",
    page: pages.page,
    limit: pages.limit,
  };

  // let filteroptions = { role: req.body.role };
  let filteroptions = {
    queryID: filters.queryID,
  };
  // Logic to add to filter when required

  Salary.paginate(filteroptions, options, function (err, result) {
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
    // result.docs.map((product, i) => {
    //   console.log(product);
    //   // let tasset = product.asset;
    //   // final[i] = {
    //   //   ...tasset._doc,
    //   //   product: product,
    //   // };
    //   // console.log(tasset);
    //   // console.log(final);
    // });
    let output = {
      total: result.total,
      out: result.docs,
    };
    return res.json(output);
    // console.log(final);
    // return res.json(final);
  });
};
