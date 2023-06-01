const {
  TotalCallsGenerate,
  CallsGreaterThanAgeGenerate,
} = require("./ReportsHelper");

exports.totalCallsReport = async (req, res) => {
  const reportCsv = await TotalCallsGenerate();
  res.json({ csv: reportCsv });
};

exports.callsWithAgeReport = async (req, res) => {
  const age = req.body.age;
  if (!age) {
    res.status(400).json({ msg: "Age has not been specified" });
  }
  const reportCsv = await CallsGreaterThanAgeGenerate(age);
  res.json({ csv: reportCsv });
};
