import React from "react";
import moment from "moment";
import SectionTitle from "../Typography/SectionTitle";
import { API } from "../../backendapi";
import Emp from "../../helpers/auth/EmpProfile";
import axios from "axios";
import { Button } from "@windmill/react-ui";
import { Link } from "react-router-dom";
const AttendanceModule = ({ asset }) => {
  console.log(asset);
  const { date, time, isPresent } = asset;

  return (
    <div>
      <div className="mt-1 flex flex-row ">
        <div className="flex flex-col  text-sm my-1 w-full ">
          <div>
            <span className="font-semibold w-1/5">Employee Name:</span>
            Samraj
          </div>
          <div>
            <span className="font-semibold w-1/5">Date </span> {asset.date}
          </div>

          <div>
            <span className="font-semibold w-1/5">Status </span>{" "}
            {asset.isPresent ? "Present" : "Absent"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceModule;
