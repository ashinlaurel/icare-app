const leaveForm = require("../../models/LeaveForm/leaveForm");
const moment = require("moment");
const attendance = require("../../models/attendance/attendance");

exports.createLeaveForm = async (req, res) => {
  let item = req.body;
  console.log(item);

  try {
    let newform = new leaveForm(item);
    let result = await newform.save();
    result = {};
    return res.status(200).json(result);
  } catch (err) {
    console.log("Leave Form Creating error->", err.message);

    res.status(400).json(err);
    // throw error;
  }
};

exports.approveLeave = async (req, res) => {
  let { id, update } = req.body;
  // console.log(item);
  let item = update;

  if (update.status == "Rejected") {
    try {
      let inv = await leaveForm.findByIdAndUpdate(id, update, {
        safe: true,
        useFindAndModify: false,
      });
      return res.status(200).json({ inv });
    } catch (err) {
      // console.log(id);
      console.log("Leave Form Rejecting error->", err.message);
      return res.status(400).json({ error: err });
    }
  } else {
    try {
      let inv = await leaveForm.findByIdAndUpdate(id, update, {
        safe: true,
        useFindAndModify: false,
      });

      console.log(moment(item.startdate), moment(item.enddate));
      var nowdate = moment(item.startdate);
      let payload = {};
      while (nowdate.isBefore(moment(item.enddate), "day")) {
        console.log(`Loop at ${nowdate.format("YYYY-MM-DD")}`);

        payload = {
          employee: item.employeeId,
          employeeName: item.employeeName,
          month: moment(nowdate).format("MMMM"),
          year: moment(nowdate).format("YYYY"),
          monthDayCount: moment(nowdate).daysInMonth(),
          today: {
            date: moment(nowdate).format("DD-MM-YY"),
            dayNo: moment(nowdate).format("DD"),
            isPresent: "Leave",
          },
        };

        await markAttendance(payload);

        nowdate.add(1, "days");
      }

      payload = {
        employee: item.employeeId,
        employeeName: item.employeeName,
        month: moment(item.enddate).format("MMMM"),
        year: moment(item.enddate).format("YYYY"),
        monthDayCount: moment(item.enddate).daysInMonth(),
        today: {
          date: moment(item.enddate).format("DD-MM-YY"),
          dayNo: moment(item.enddate).format("DD"),
          isPresent: "Leave",
        },
      };

      await markAttendance(payload);

      return res.status(200).json({ inv });
    } catch (err) {
      // console.log(id);
      console.log("Leave Form Updating error->", err.message);
      return res.status(400).json({ error: err });
    }
  }
};

/// count remaining calls

exports.countSubmittedLeaves = (req, res) => {
  // let { date, callType, startdate, enddate } = req.body;
  // console.log(`Counting leave`);
  leaveForm.countDocuments({ status: "Submitted" }, function (err, result) {
    if (err) {
      return res.status(400).json({
        error: "Cant count leaveform",
        err: err,
      });
    }
    // console.log(result);
    return res.status(200).json(result);
  });
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
  if (filters.status && filters.status != "") {
    filteroptions.status = filters.status;
  }
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

const markAttendance = async (payload) => {
  let { employee, employeeName, month, year, monthDayCount, today } = payload;

  if (parseInt(today.dayNo) < 10) {
    console.log("here", parseInt(today.dayNo).toString());
    today.dayNo = parseInt(today.dayNo).toString();
  }
  console.log(`marking attendace`, payload);
  try {
    // checking whether document exists
    let cnt = await attendance.count({
      employee: employee,
      month: month,
      year: year,
    });
    // console.log(cnt);
    // conditional code
    if (cnt > 0) {
      let tempdoc = await attendance.findOne({
        employee: employee,
        month: month,
        year: year,
      });

      tempdoc.days.map((day) => {
        // console.log("hello");
        // console.log("****************************");

        // console.log(today.dayNo);
        if (day.dayNo == today.dayNo) {
          day.isPresent = today.isPresent;
        }
      });
      let result = await tempdoc.save();
      // console.log("****************************");
      // console.log("result" + result);
      return result;
    } else {
      let temp = [];
      for (let i = 0; i < monthDayCount; i++) {
        if (i == today.dayNo - 1) {
          let doc = { date: "", dayNo: i + 1, isPresent: today.isPresent };
          temp.push(doc);
        } else {
          let doc = { date: "", dayNo: i + 1, isPresent: "Absent" };
          temp.push(doc);
        }
      }
      let payload = {
        employee: employee,
        month: month,
        year: year,
        monthDayCount: monthDayCount,
        days: temp,
        employeeName: employeeName,
      };

      const temppush = new attendance(payload);
      const newattend = await temppush.save();
      return newattend;
    }
  } catch (error) {
    throw error;
  }
};
