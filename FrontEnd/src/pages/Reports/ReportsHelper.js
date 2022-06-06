import moment from "moment";
import Emp from "../../helpers/auth/EmpProfile";

const { default: Axios } = require("axios");
const { API } = require("../../backendapi");

const { saveAs } = require("file-saver");
const {
  capitalize,
  getCallStatusAsString,
} = require("../../helpers/toolfuctions/toolfunctions");

export const TotalCallsGenerate = async () => {
  //   console.log("we are here");
  let temp = [];
  let payload = {
    search: "",
    limit: 1000000,
  };
  // here we are just getting all the employees not their calls

  try {
    let users = await Axios({
      url: `${API}/admin/${Emp.getId()}/getAllEmpCalls`,
      method: "POST",
      data: payload,
    });
    console.log(users.data);
    users.data.map((user) => {
      temp.push(user);
    });
    // console.log(temp);
    // setValues(temp);
  } catch (error) {
    throw error;
  }
  console.log(temp);
  // getting data of each employee
  let finaldata = [];
  for (let i = 0; i < temp.length; i++) {
    let payloadtwo = {
      pages: {
        page: 1,
        limit: 100000,
      },
      filters: {
        callStatus: "",
        searchquery: "",
        fromDate: "",
        toDate: "",
        employeeId: temp[i]._id,
        // servicelocation:"Trivandrum"
      },
    };
    try {
      let response = await Axios({
        url: `${API}/call/${Emp.getId()}/getall`,
        method: "POST",
        data: payloadtwo,
      });
      console.log(response.data.out);
      finaldata.push(response.data.out);
    } catch (error) {
      throw error;
    }
  }
  // console.log(finaldata);
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
  // console.log(csv); //product.
  const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(csvData, "CallsExport.csv");
};

export const CallsGreaterThanAgeGenerate = async (age) => {
  //   console.log("we are here");
  let temp = [];
  let payload = {
    search: "",
    limit: 1000000,
  };
  // here we are just getting all the employees not their calls

  try {
    let users = await Axios({
      url: `${API}/admin/${Emp.getId()}/getAllEmpCalls`,
      method: "POST",
      data: payload,
    });
    console.log(users.data);
    users.data.map((user) => {
      temp.push(user);
    });
    // console.log(temp);
    // setValues(temp);
  } catch (error) {
    throw error;
  }
  console.log(temp);
  // getting data of each employee
  let finaldata = [];
  for (let i = 0; i < temp.length; i++) {
    let payloadtwo = {
      pages: {
        page: 1,
        limit: 100000,
      },
      filters: {
        callStatus: "",
        searchquery: "",
        fromDate: "",
        toDate: "",
        employeeId: temp[i]._id,
        // servicelocation:"Trivandrum"
      },
    };
    try {
      let response = await Axios({
        url: `${API}/call/${Emp.getId()}/getall`,
        method: "POST",
        data: payloadtwo,
      });
      console.log(response.data.out);
      finaldata.push(response.data.out);
    } catch (error) {
      throw error;
    }
  }
  // console.log(finaldata);
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
          ) < 3
        )
          return false;
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
  // console.log(csv); //product.
  const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(csvData, "CallsExport.csv");
};
