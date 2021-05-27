const leaveForm = require("../../models/LeaveForm/leaveForm");


exports.createLeaveForm = async (req, res) => {
  let item = req.body;
  console.log(item);
  try {
    // Saving the asset
    const newform = new leaveForm(item);
    const result = await newform.save();
    return res.status(200).json(result);
  } catch (err) {
    console.log("Leave Form Creating error", err.message);
  
    res.status(400).json( err);
    // throw error;
  }
};

// --------------------Get attendance of all employees in a month -----------------
exports.getAll = (req, res) => {
  let { pages, filters } = req.body;

  // let { searchquery } = filters;

  // const fuzzyquery = new RegExp(escapeRegex(searchquery), "gi");

  let options = {
    // populate: "product",
    page: pages.page,
    limit: pages.limit,
  };

  let filteroptions = {
    // product: { brand: "IBM" },
    month: filters.month,
    year: filters.year,
  };

  // ---Conditional Addition of filters
  // if (filters.type != "") {
  //   filteroptions.type = filters.type;
  // }
  // if (filters.location != "") {
  //   filteroptions.location = filters.location;
  // }
  // if (filters.condition != "") {
  //   if (filters.condition == "Available") {
  //     filteroptions.condition = { $in: ["Good", "Bad"] };
  //   } else {
  //     filteroptions.condition = filters.condition;
  //   }
  // }
  // if (filters.searchquery != "") {
  //   filteroptions.sno = fuzzyquery;
  // }

  // -----------------------------------------------------------------------

  leaveForm.paginate(filteroptions, options, function (err, result) {
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
