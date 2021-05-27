const leaveForm = require("../../models/LeaveForm/leaveForm");
const moment = require("moment");
const attendance = require("../../models/attendance/attendance");

exports.createLeaveForm = async (req, res) => {
  let item = req.body;
  console.log(item);

  try {
    // Saving the asset
    console.log(moment(item.startdate), moment(item.enddate));
    var nowdate = moment(item.startdate);
    let payload = {};
    while (nowdate.isBefore(moment(item.enddate), "day")) {
      console.log(`Loop at ${nowdate.format("YYYY-MM-DD")}`);

      payload = {
        employee: item.employeeId,
        month: moment(nowdate).format("MMMM"),
        year: moment(nowdate).format("YYYY"),
        monthDayCount: moment(nowdate).daysInMonth(),
        today: {
          date: moment(nowdate).format("DD-MM-YY"),
          dayNo: moment(nowdate).format("DD"),
          isPresent: "Leave",
        },
      };

      let res = await markAttendance(payload, {});

      nowdate.add(1, "days");
    }

    // const newform = new leaveForm(item);
    // const result = await newform.save();
    result = {};
    return res.status(200).json(result);
  } catch (err) {
    console.log("Leave Form Creating error->", err.message);

    res.status(400).json(err);
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
