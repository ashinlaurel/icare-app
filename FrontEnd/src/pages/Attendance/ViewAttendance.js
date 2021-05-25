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

function ViewAttendance() {
  let history = useHistory();
  const { setTopHeading } = useContext(TopBarContext);
  const [emparray, setEmparray] = useState([]);

  const { bbaropen, setBBarOpen, attendDetails, setAttendDetails } =
    useContext(BottomBarContext);

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("View Attendance");
    let tempcnt = 1;
    for (let i = 0; i < 20; i++) {
      tempcnt++;
      let temp = { isPresent: true, date: tempcnt };
      emparray.push(temp);
    }
    for (let i = 0; i < 10; i++) {
      let temp = { isPresent: false };
      emparray.push(temp);
    }
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  // -------Enabling Bottom Bar----
  useEffect(() => {
    setBBarOpen(1);
    return () => {
      setBBarOpen(0);
    };
  }, []);
  //   -------------------------------

  const PresentSquare = () => {
    return (
      <>
        <div className=" relative w-4 h-4 bg-blue-300 border-gray-600 border hover:border-black hover:bg-blue-500 rounded-sm"></div>
      </>
    );
  };
  const AbsentSquare = () => {
    return (
      <>
        <div className="w-4 h-4 bg-red-500 border-gray-600 border hover:border-black hover:bg-red-800 rounded-sm"></div>
      </>
    );
  };

  return (
    <>
      <Card className="my-8 shadow-md">
        <CardBody>
          {/*  ------- Employee Row  --------- */}
          <div className="flex flex-row justify-left items-center">
            <div className="mx-4 dark:text-white">Samraj:</div>
            <div className="flex flex-row items-center justify-center">
              {" "}
              {emparray.map((data) => {
                if (data.isPresent) {
                  return (
                    <div
                      onClick={() => {
                        // console.log(data);
                        setAttendDetails(data);
                      }}
                      className="m-2"
                    >
                      {PresentSquare()}
                    </div>
                  );
                } else {
                  return (
                    <div
                      onClick={() => {
                        setAttendDetails(data);
                      }}
                      className="m-2"
                    >
                      {AbsentSquare()}
                    </div>
                  );
                }
              })}
            </div>
          </div>
          {/* ----------------------------------------- */}
        </CardBody>
      </Card>
    </>
  );
}

export default ViewAttendance;
