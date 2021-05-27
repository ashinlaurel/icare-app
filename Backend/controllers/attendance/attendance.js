const attendance = require("../../models/attendance/attendance");

exports.markAttendance = async (req, res) => {
<<<<<<< HEAD
  const { employee, month, year, monthDayCount, today } = req.body;
  console.log(`marking attendace`);
=======
  const { employee, employeeName, month, year, monthDayCount, today } =
    req.body;
>>>>>>> 13a314dacd33c7719dacde42afd6b10914209a2b
  console.log(req.body);

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
        console.log("****************************");

        console.log(today.dayNo);
        if (day.dayNo == today.dayNo) {
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
        employeeName: employeeName,
        month: month,
        year: year,
        monthDayCount: monthDayCount,
        days: temp,
      };

      const temppush = new attendance(payload);
      const newattend = await temppush.save();
      return res.status(200).json(newattend);
    }
  } catch (error) {
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
  console.log(req.body);

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
        // console.log(day);
        if (day.dayNo == today.dayNo) {
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
