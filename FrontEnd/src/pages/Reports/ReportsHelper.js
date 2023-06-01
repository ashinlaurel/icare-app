const { default: Axios } = require("axios");
const { API } = require("../../backendapi");

const { saveAs } = require("file-saver");

export const TotalCallsGenerate = async () => {
  let csv;
  try {
    const result = await Axios({
      url: `${API}/reports/totalcalls`,
    });
    csv = result.data.csv;
  } catch (error) {
    throw error;
  }
  // console.log(csv); //product.
  const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(csvData, "CallsExport.csv");
};

export const CallsGreaterThanAgeGenerate = async (age) => {
  let csv;
  try {
    let result = await Axios({
      url: `${API}/reports/callsbyage`,
      method: "POST",
      data: { age },
    });
    csv = result.data.csv;
  } catch (error) {
    throw error;
  }

  const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(csvData, "CallsExport.csv");
};
