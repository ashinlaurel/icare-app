const {
  capitalize,
  getCallStatusAsString,
} = require("../../helpers/toolfunctions");
const Call = require("../../models/call/call");
const EmployeeLogin = require("../../models/employee/EmployeeLogin");
const moment = require("moment");

exports.TotalCallsGenerate = async () => {
  const result = await EmployeeLogin.find({});
  // getting data of each employee
  let finaldata = [];
  for (let i = 0; i < result.length; i++) {
    const callResult = await Call.find({
      employeeId: result[i]._id,
      callStatus: { $nin: [10, 11] },
    });
    finaldata.push(callResult);
  }
  let csv = `CallNo,Date,Time,Unit,Phone,Product,SerialNumber,Problem,CallStatus,AssignedTo,AssignedDate,ETA,Priority,Age,\n`;
  for (let j = 0; j < finaldata.length; j++) {
    if (finaldata[j][0]) {
      csv = csv + `${capitalize(finaldata[j][0].employeeName)},\n`;
    }
    finaldata[j].map((call, i) => {
      csv =
        csv +
        `${call.callNo},${moment(call.date).format("DD-MM-YYYY")},${moment(
          `${"2018-04-02"}T${call.time}`
        ).format("h:mm a")},${call.unitName},${call.phone},${
          call.assetId.producttype
        },${call.assetId.ponumber},${call.problem},${getCallStatusAsString(
          call.callStatus
        )},${call.employeeName ? call.employeeName : "Not Assigned"},${moment(
          call.assignedDate
        ).format("DD-MM-YYYY")},${call.assignedETA},${i + 1},${Math.round(
          moment
            .duration(moment().startOf("day") - moment(call.assignedDate))
            .asDays() + 1
        )}\n`;
    });
  }
  return csv;
};

exports.CallsGreaterThanAgeGenerate = async (age) => {
  const result = await EmployeeLogin.find({});
  // getting data of each employee
  let finaldata = [];
  for (let i = 0; i < result.length; i++) {
    const callResult = await Call.find({
      employeeId: result[i]._id,
      callStatus: { $nin: [10, 11] },
    });
    finaldata.push(callResult);
  }
  let csv = `CallNo,Date,Time,Unit,Phone,Product,SerialNumber,Problem,CallStatus,AssignedTo,AssignedDate,ETA,Priority,Age,\n`;
  for (let j = 0; j < finaldata.length; j++) {
    if (finaldata[j][0]) {
      csv = csv + `${capitalize(finaldata[j][0].employeeName)},\n`;
    }
    finaldata[j]
      .filter((call) => {
        if (
          Math.round(
            moment
              .duration(moment().startOf("day") - moment(call.assignedDate))
              .asDays() + 1
          ) < age
        ) {
          return false;
        }
        return true;
      })
      .map((call, i) => {
        csv =
          csv +
          `${call.callNo},${moment(call.date).format("DD-MM-YYYY")},${moment(
            `${"2018-04-02"}T${call.time}`
          ).format("h:mm a")},${call.unitName},${call.phone},${
            call.assetId.producttype
          },${call.assetId.ponumber},${call.problem},${getCallStatusAsString(
            call.callStatus
          )},${call.employeeName ? call.employeeName : "Not Assigned"},${moment(
            call.assignedDate
          ).format("DD-MM-YYYY")},${call.assignedETA},${i + 1},${Math.round(
            moment
              .duration(moment().startOf("day") - moment(call.assignedDate))
              .asDays() + 1
          )}\n`;
      });
  }
  return csv;
};
