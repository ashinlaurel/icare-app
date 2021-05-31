import React, { useState, useEffect, useContext } from "react";
import { API } from "../../backendapi";

import Emp from "../../helpers/auth/EmpProfile";

import { Button, Card, CardBody } from "@windmill/react-ui";

import { TopBarContext } from "../../context/TopBarContext";

import { useHistory } from "react-router-dom";
import moment from "moment";
import Axios from "axios";

function MarkAttendance() {
  let history = useHistory();
  const { setTopHeading } = useContext(TopBarContext);
  const [statusChecker, setStatusChecker] = useState("");

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Mark Attendance");
    PresentChecker();
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  const PresentChecker = async () => {
    let payload = {
      employee: Emp.getId(),
      employeeName: Emp.getName(),
      month: moment().format("MMMM"),
      monthNo: moment().format("MM"),
      year: moment().format("YYYY"),
      monthDayCount: moment().daysInMonth(),
      today: {
        date: moment().format("DD-MM-YY"),
        dayNo: moment().format("DD"),
        isPresent: "",
      },
    };
    await Axios({
      url: `${API}/attendance/${Emp.getId()}/checkAttendance`,
      method: "POST",
      data: payload,
    })
      .then((data) => {
        console.log("********88***********");
        console.log(data.data.isPresent);
        setStatusChecker(data.data.isPresent);
      })
      .catch((err) => {
        console.log("err", err);
        // setErr({ ...err });
      });
  };
  const handleButton = async () => {
    let payload = {
      employee: Emp.getId(),
      employeeName: Emp.getName(),
      month: moment().format("MMMM"),
      monthNo: moment().format("MM"),
      year: moment().format("YYYY"),
      monthDayCount: moment().daysInMonth(),
      today: {
        date: moment().format("DD-MM-YY"),
        dayNo: moment().format("DD"),
        isPresent: "Present",
      },
    };
    await Axios({
      url: `${API}/attendance/${Emp.getId()}/markAttendance`,
      method: "POST",
      data: payload,
    })
      .then((data) => {
        console.log("hello");
        PresentChecker();
      })
      .catch((err) => {
        console.log("err", err);
        // setErr({ ...err });
      });
  };

  return (
    <>
      <div className="w-1/4">
        <Card className="my-8 shadow-md">
          <CardBody>
            <div className="dark:text-white text-xl font-bold">
              {" "}
              Date: {moment().format("DD-MM-YY")}
            </div>
            <hr className="my-3"></hr>
            <div className="flex-row flex items-center justify-center">
              <Button
                onClick={() => {
                  handleButton();
                }}
                disabled={statusChecker == "Present" ? true : false}
              >
                {statusChecker == "Present"
                  ? "Already Marked"
                  : "Mark Attendance"}
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default MarkAttendance;
