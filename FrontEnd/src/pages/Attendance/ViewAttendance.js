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

function ViewAttendance() {
  let history = useHistory();
  const { setTopHeading } = useContext(TopBarContext);
  // const [emparray, setEmparray] = useState([]);
  const [themonth, setThemonth] = useState(moment().format("MMMM"));
  const [theyear, setTheyear] = useState(moment().format("YYYY"));
  const [data, setData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const { bbaropen, setBBarOpen, attendDetails, setAttendDetails } =
    useContext(BottomBarContext);

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("View Attendance");
    // let tempcnt = 1;
    // for (let i = 0; i < 20; i++) {
    //   tempcnt++;
    //   let temp = { isPresent: true, date: tempcnt };
    //   emparray.push(temp);
    // }
    // for (let i = 0; i < 10; i++) {
    //   let temp = { isPresent: false };
    //   emparray.push(temp);
    // }
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

  //  data pull useeffect
  useEffect(() => {
    // Using an IIFE
    (async function thegetter() {
      console.log("getter called");
      let payload = {
        pages: {
          page: 1,
          limit: 20,
        },
        filters: {
          month: themonth,
          year: theyear,
        },
      };
      try {
        let response = await axios({
          url: `${API}/attendance/${Emp.getId()}/viewAttendance`,
          method: "POST",
          data: payload,
        });
        console.log(response.data.out);
        setTotalResults(response.data.total);
        // const { total, data } = response.data;
        // console.log(response.data.out);

        setData(response.data.out);
      } catch (error) {
        throw error;
      }
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [themonth, theyear]);

  // ------------------------------

  const PresentSquare = () => {
    return (
      <>
        <div className=" relative w-4 h-4 bg-green-400 border-gray-600 border hover:border-black hover:bg-green-500 rounded-sm"></div>
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
  const GraySquare = () => {
    return (
      <>
        <div className="w-4 h-4 bg-gray-200 border-gray-600 border hover:border-black hover:bg-red-800 rounded-sm"></div>
      </>
    );
  };

  return (
    <>
      <div className="">
        {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
        <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 ">
          <div class="relative mx-1 ">
            <select
              class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
              value={themonth}
              onChange={(e) => {
                setThemonth(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Select the Month
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">March</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>

            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Card className="my-8 shadow-md">
        <CardBody>
          {data.map((user) => {
            return (
              <div className="flex flex-row justify-left items-center">
                <div className="mx-4 dark:text-white">Samraj:</div>
                <div className="flex flex-row items-center justify-center">
                  {" "}
                  {user.days.map((day) => {
                    if (parseInt(day.dayNo) > moment().format("DD")) {
                      return (
                        <div
                          onClick={() => {
                            console.log(day, moment().format("DD"));
                            setAttendDetails(day);
                          }}
                          className="m-2"
                        >
                          {GraySquare()}
                        </div>
                      );
                    } else if (day.isPresent == "Present") {
                      return (
                        <div
                          onClick={() => {
                            console.log(day);
                            setAttendDetails(day);
                          }}
                          className="m-2"
                        >
                          {PresentSquare()}
                        </div>
                      );
                    } else if (day.isPresent == "Absent") {
                      return (
                        <div
                          onClick={() => {
                            setAttendDetails(day);
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
            );
          })}
        </CardBody>
      </Card>
    </>
  );
}

export default ViewAttendance;
