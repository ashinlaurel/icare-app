const attendance = require("../../models/attendance/attendance");
const moment = require("moment");

exports.markAttendance = async (req, res) => {
  const { employee, employeeName, month, monthNo, year, monthDayCount, today } =
    req.body;
  // console.log(req.body);

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
        if (parseInt(day.dayNo) == parseInt(today.dayNo)) {
          day.isPresent = today.isPresent;
        }
      });
      let result = await tempdoc.save();
      // console.log("****************************");
      // console.log("result" + result);
      return res.status(200).json(result);
    } else {
      let temp = [];
      for (let i = 0; i < monthDayCount; i++) {
        let tempdate = `${year}-${monthNo}-${i + 1}`;

        if (i == today.dayNo - 1) {
          let doc = {
            date: moment(tempdate).format(),
            dayNo: i + 1,
            isPresent: today.isPresent,
          };
          temp.push(doc);
        } else {
          let doc = {
            date: moment(tempdate).format(),
            dayNo: i + 1,
            isPresent: "Absent",
          };
          temp.push(doc);
        }
      }
      let payload = {
        employee: employee,
        employeeName: employeeName,
        month: month,
        monthNo: monthNo,
        year: year,
        monthDayCount: monthDayCount,
        days: temp,
      };

      const temppush = new attendance(payload);
      const newattend = await temppush.save();
      return res.status(200).json(newattend);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }

  return res.status(200).json();
};

// --------------------Get attendance of all employees in a month -----------------
exports.getAllAttendance = (req, res) => {
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

  attendance.paginate(filteroptions, options, function (err, result) {
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

// -------------------------- Check If Marked Today -----------------------------------
exports.checkIfPresent = async (req, res) => {
  const { employee, month, year, monthDayCount, today } = req.body;
  // console.log(req.body);

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
      // console.log(tempdoc);
      tempdoc.days.map((day) => {
        // console.log(day);
        if (parseInt(day.dayNo) == parseInt(today.dayNo)) {
          if (day.isPresent == "Present") {
            const newattend = { isPresent: "Present" };
            return res.status(200).json(newattend);
          } else if (day.isPresent == "Absent") {
            const newattend = { isPresent: "Absent" };
            return res.status(200).json(newattend);
          } else if (day.isPresent == "Leave") {
            const newattend = { isPresent: "Leave" };
            return res.status(200).json(newattend);
          }
        }
      });
    }
  } catch (error) {
    res.status(400).json(err);
  }

  return res.status(200).json();
};
// -------------------------- Updating Attendance -----------------------------------
exports.updateAttendance = async (req, res) => {
  let user = req.body;

  try {
    let tempdoc = await attendance.findOne({
      employee: user.employee,
      month: user.month,
      year: user.year,
    });
    tempdoc.days = user.days;
    // console.log(tempdoc);
    // tempdoc.markModified("Updated days array");
    await tempdoc.save();
    return res.status(200).json();
  } catch (error) {
    res.status(400).json(err);
  }

  return res.status(200).json();
};
