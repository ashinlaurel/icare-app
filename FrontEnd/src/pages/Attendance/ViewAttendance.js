import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { API } from "../../backendapi";
import DatePicker from "react-date-picker";

import Emp from "../../helpers/auth/EmpProfile";

import {
  Badge,
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@windmill/react-ui";

import { TopBarContext } from "../../context/TopBarContext";

import { useHistory } from "react-router-dom";

import moment from "moment";
import { TickIcon } from "../../icons";

function ViewAttendance() {
  let history = useHistory();
  const { setTopHeading } = useContext(TopBarContext);
  // const [emparray, setEmparray] = useState([]);
  const [themonth, setThemonth] = useState(moment().format("MMMM"));
  const [theyear, setTheyear] = useState(moment().format("YYYY"));
  const [data, setData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attendDetails, setAttendDetails] = useState({});

  // ---------------imp states --------------
  const [showDate, setShowDate] = useState(false);

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

  // Modal Functions

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  // ------------------------------

  const TheModal = () => {
    return (
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader className="flex flex-row justify-between ">
          <div className="text-xl">Attendance Details</div>
          <div className="text-base">
            Date: <Badge>{attendDetails.date}</Badge>{" "}
          </div>
        </ModalHeader>
        <ModalBody>
          <hr></hr>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
          eligendi repudiandae voluptatem tempore!
        </ModalBody>
        <ModalFooter>
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button>Accept</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Accept
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    );
  };

  const PresentSquare = (dayNo) => {
    return (
      <>
        <div className=" relative w-5 h-5 bg-green-400 border-gray-600 border hover:border-black hover:bg-green-500 rounded-sm text-xs text-white flex justify-center items-center">
          {showDate ? <div>{dayNo}</div> : null}
        </div>
      </>
    );
  };
  const AbsentSquare = (dayNo) => {
    return (
      <>
        <div className="w-5 h-5 bg-red-500 border-gray-600 border hover:border-black hover:bg-red-800 rounded-sm text-xs text-white flex justify-center items-center">
          {showDate ? <div>{dayNo}</div> : null}
        </div>
      </>
    );
  };
  const LeaveSquare = (dayNo) => {
    return (
      <>
        <div className="w-5 h-5 bg-blue-500 border-blue-600 border hover:border-black hover:bg-red-800 rounded-sm text-xs text-white flex justify-center items-center">
          {showDate ? <div>{dayNo}</div> : null}
        </div>
      </>
    );
  };
  const GraySquare = (dayNo) => {
    return (
      <>
        <div className="w-5 h-5 bg-gray-200 border-gray-600 border hover:border-black hover:bg-red-800 rounded-sm text-xs text-white flex justify-center items-center">
          {showDate ? <div>{dayNo}</div> : null}
        </div>
      </>
    );
  };

  return (
    <>
      {TheModal()}
      <div className="">
        {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
        <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 relative ">
          <div class="relative mx-1 ">
            <select
              class=" text-sm border block appearance-none w-full bg-white border-gray-400 text-gray-700 pl-1 leading-tight focus:outline-none py-1   focus:bg-white focus:border-gray-500"
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
          <DatePicker
            className="bg-white"
            clearIcon={null}
            onChange={(date) => {
              console.log(moment(date).format("YYYY"));
              setTheyear(moment(date).format("YYYY"));
              // console.log(date);
            }}
            value={theyear}
            format="y"
            maxDetail="decade"
          />
          <div className="flex flex-row items-center justify-center space-x-2 absolute right-0 ">
            <div className="text-sm">Show Dates:</div>
            <Button
              className={
                showDate == true ? `bg-yellow-300 w-2 h-2` : `bg-white w-2 h-2`
              }
              icon={TickIcon}
              onClick={() => {
                setShowDate(!showDate);
              }}
              layout="outline"
              aria-label="Like"
            />
          </div>
        </div>
      </div>
      <Card className="my-8 shadow-md  overflow-x-auto">
        <CardBody>
          {data.map((user) => {
            return (
              <div className="flex flex-row justify-left items-center">
                <div className="mx-4 dark:text-white">{user.employeeName}:</div>
                <div className="flex flex-row items-center justify-center">
                  {" "}
                  {user.days.map((day) => {
                    if (parseInt(day.dayNo) > moment().format("DD")) {
                      return (
                        <div
                          onClick={() => {
                            console.log(day, moment().format("DD"));
                            setIsModalOpen(true);
                            setAttendDetails(day);
                          }}
                          className="m-2"
                        >
                          {GraySquare(day.dayNo)}
                        </div>
                      );
                    } else if (day.isPresent == "Present") {
                      return (
                        <div
                          onClick={() => {
                            console.log(day);
                            setIsModalOpen(true);
                            setAttendDetails(day);
                          }}
                          className="m-2"
                        >
                          {PresentSquare(day.dayNo)}
                        </div>
                      );
                    } else if (day.isPresent == "Absent") {
                      return (
                        <div
                          onClick={() => {
                            setIsModalOpen(true);
                            setAttendDetails(day);
                          }}
                          className="m-2"
                        >
                          {AbsentSquare(day.dayNo)}
                        </div>
                      );
                    } else if (day.isPresent == "Leave") {
                      return (
                        <div
                          onClick={() => {
                            setIsModalOpen(true);
                            setAttendDetails(day);
                          }}
                          className="m-2"
                        >
                          {LeaveSquare(day.dayNo)}
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
