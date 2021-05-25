import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { API } from "../../backendapi";

import Emp from "../../helpers/auth/EmpProfile";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import {
  Input,
  HelperText,
  Label,
  Button,
  Badge,
  Select,
  Card,
  CardBody,
} from "@windmill/react-ui";

import { signup, signin, authenticate } from "../../helpers/auth";
import CustomerCreateModal from "../../components/Modal/CustomerCreateModal";
import EmpProfile from "../../helpers/auth/EmpProfile";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";
import { resetIdCounter } from "react-tabs";
import { TopBarContext } from "../../context/TopBarContext";

import { useHistory } from "react-router-dom";
import { BottomBarContext } from "../../context/BottomBarContext";
import moment from "moment";
import Axios from "axios";

function MarkAttendance() {
  let history = useHistory();
  const { setTopHeading } = useContext(TopBarContext);
  const [emparray, setEmparray] = useState([]);

  const { bbaropen, setBBarOpen, attendDetails, setAttendDetails } =
    useContext(BottomBarContext);

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Mark Attendance");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  const handleButton = async () => {
    let payload = {
      employee: Emp.getId(),
      month: moment().format("MMMM"),
      year: moment().format("YYYY"),
      monthDayCount: moment().daysInMonth(),
      today: {
        date: moment().format("DD-MM-YY"),
        dayNo: moment().format("DD"),
        isPresent: true,
      },
    };
    await Axios({
      url: `${API}/attendance/${Emp.getId()}/markAttendance`,
      method: "POST",
      data: payload,
    })
      .then((data) => {
        console.log("hello");
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
              >
                {" "}
                Mark Attendance
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default MarkAttendance;
