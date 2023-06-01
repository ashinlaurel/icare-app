const ReportsEmail = require("../../models/settings/ReportsEmail");

//Get emails in settings
exports.getReportsEmail = async (req, res) => {
  const existingEmails = await ReportsEmail.findOne({});
  if (existingEmails) {
    res.json({ emails: existingEmails.emails });
  } else {
    res.json({ emails: [] });
  }
};

//Set emails in settings
exports.setReportsEmail = async (req, res) => {
  const emails = req.body.emails;
  const empId = req.body.empId;
  // console.log(emails);
  try {
    const existingEmails = await ReportsEmail.findOne({});

    let updatedEmails;
    if (existingEmails) {
      existingEmails.emails = emails;
      existingEmails.lastUpdatedEmployeeId = empId;
      updatedEmails = await existingEmails.save();
    }
    //No emails exist in mongoDb, create a new record
    else {
      updatedEmails = await ReportsEmail.create({
        emails: emails,
        lastUpdatedEmployeeId: empId,
      });
    }

    return res.json(updatedEmails);
  } catch (e) {
    console.log("Error update reports email: ", e);
    return res
      .status(500)
      .json({ error: "Error occured while setting reports email:" + e });
  }
  // res.json({ msg: "Successfully hit set reports email route" });
};
