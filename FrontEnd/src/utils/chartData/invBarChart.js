import axios from "axios";
import EmpProfile from "../../helpers/auth/EmpProfile";
import { API } from "../../backendapi";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";

export const getInvChartData = async () => {
  //Getting inventory chart data from backend
  let tInventoryChartData = await axios({
    url: `${API}/inventory/${EmpProfile.getId()}/getChartData`,
    method: "GET",
  });
  const dataObj = tInventoryChartData.data;
  const tLabel = [];
  const tData = [];
  const tempOptions = ["Cpu", "ram"];
  dataObj.map((data) => {
    tLabel.push(capitalize(data._id));
    tData.push(data.count);
  });

  const invBarOptions = {
    data: {
      //TODO
      labels: tLabel,
      datasets: [
        {
          label: "Bags",
          backgroundColor: "#7e3af2",
          // borderColor: window.chartColors.blue,
          borderWidth: 1,
          //TODO
          data: tData,
        },
      ],
    },
    options: {
      responsive: true,
    },
    legend: {
      display: false,
    },
  };

  return invBarOptions;
};
