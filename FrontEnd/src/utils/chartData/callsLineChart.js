import axios from "axios";
import EmpProfile from "../../helpers/auth/EmpProfile";
import { API } from "../../backendapi";

export const getCallsChartData = async () => {
  //Getting inventory chart data from backend
  let tCallsChartData = await axios({
    url: `${API}/call/${EmpProfile.getId()}/getChartData`,
    method: "GET",
  });
  const dataObj = tCallsChartData.data;
  const tLabel = [];
  const tData = [];
  dataObj.map((data) => {
    tLabel.push(data.month);
    tData.push(data.count);
  });

  const callsLineOptions = {
    data: {
      labels: tLabel,
      datasets: [
        {
          label: "Calls",
          fill: false,
          backgroundColor: "#7e3af2",
          borderColor: "#7e3af2",
          data: tData,
        },
      ],
    },
    options: {
      responsive: true,
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        x: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Month",
          },
        },
        y: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value",
          },
        },
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
    legend: {
      display: false,
    },
  };

  return callsLineOptions;
};
