import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";

import Emp from "../../helpers/auth/EmpProfile";
import { EditIcon, TrashIcon } from "../../icons";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";

import {
  TableBody,
  TableContainer,
  Table,
  Button,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Dropdown,
  DropdownItem,
  Input,
  Label,
} from "@windmill/react-ui";

import { API } from "../../backendapi";
import CustomerSelection from "../../components/Modal/AssetFilters/CustomerSelection";
import { BottomBarContext } from "../../context/BottomBarContext";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";
import EmpProfile from "../../helpers/auth/EmpProfile";

function LeaveHistory() {
  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } =
    useContext(BottomBarContext);
  // table variable styles
  const [activerowid, setActiveRowId] = useState(0);

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // dropdown and modals

  const [refresh, setRefresh] = useState(true);

  // filterhooks
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");

  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  //modal
  const [isapproveModal, setIsapproveModal] = useState(false);

  const [messageModal, setMessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Getting data states

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);
  const [selected, setSelected] = useState(false);

  // on page change, load new sliced data
  // here you would make another server request for new data

  // -------Enabling Bottom Bar----
  useEffect(() => {
    // setBBarOpen(1);
    return () => {
      setBBarOpen(0);
      setAssetDetails({});
    };
  }, []);
  // -------------------------------
  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    setTopHeading("Leave History");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  useEffect(() => {
    // Using an IIFE
    (async function thegetter() {
      console.log("getter called");
      let payload = {
        pages: {
          page: page,
          limit: resultsPerPage,
        },
        filters: {
          status: status,
        },
      };
      // console.log(`${API}/asset/${Emp.getId()}/getall`);
      try {
        let response = await axios({
          url: `${API}/leave/${Emp.getId()}/getall`,
          method: "POST",
          data: payload,
        });
        console.log(response.data.out);
        setTotalResults(response.data.total);
        // const { total, data } = response.data;
        console.log(location, "LOCATIO!!!");
        console.log(`response.data.out`, response.data.out);
        setData(response.data.out);
      } catch (error) {
        throw error;
      }
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, status, refresh]);

  const handleChange = (name) => (e) => {
    setSelected({ ...selected, [name]: e.target.value });
  };

  console.log(selectedprod);

  // useEffect(() => {
  //   console.log("LOACTION",EmpProfile.getLocation())
  //      if(EmpProfile.getRole()>12&& EmpProfile.getLocation()!="All") setLocation(EmpProfile.getLocation())
  //      setRefresh(!refresh);
  //    }, [])
  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  const messageModalComponent = () => {
    return (
      <>
        <Modal isOpen={messageModal} onClose={() => setMessageModal(false)}>
          <ModalHeader>{modalMessage}</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setMessageModal(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const ApproveModal = () => {
    return (
      <>
        <Modal isOpen={isapproveModal} onClose={() => setIsapproveModal(false)}>
          <ModalHeader>Leave Information.</ModalHeader>
          <ModalBody>
            <div>
              <div className="flex-row flex space-x-3 w-full">
                <div className="flex flex-col w-full">
                  <Label className="w-full">
                    <span>Start Date*</span>
                    <Input
                      className="mt-1"
                      type="date"
                      value={selected.startdate}
                      onChange={handleChange("startdate")}
                    />
                  </Label>
                  {/* <HelperText valid={false}>{err.invnumber}</HelperText> */}
                </div>

                <div className="flex flex-col w-full">
                  <Label className="w-full">
                    <span>End Date*</span>
                    <Input
                      className="mt-1"
                      type="date"
                      value={selected.enddate}
                      onChange={handleChange("enddate")}
                    />
                  </Label>
                  {/* <HelperText valid={false}>{err.invnumber}</HelperText> */}
                </div>
                <div className="flex flex-col w-full">
                  <Label className="w-full">
                    <div>Number of Days</div>
                    <div className="text-xl font-semibold my-2 p-2 mx-5 text-black dark:text-white">
                      {selected.startdate != "" && selected.enddate != "" ? (
                        Math.floor(
                          (Date.parse(selected.enddate) -
                            Date.parse(selected.startdate)) /
                            86400000
                        ) >= 0 ? (
                          Math.floor(
                            (Date.parse(selected.enddate) -
                              Date.parse(selected.startdate)) /
                              86400000
                          ) + 1
                        ) : (
                          <>Invalid Dates</>
                        )
                      ) : null}
                    </div>
                  </Label>
                  {/* <HelperText valid={false}>{err.invnumber}</HelperText> */}
                </div>
              </div>
              {/* ----------------------Row 2 ----------------------------- */}
              <div className="flex-row flex space-x-3 my-2">
                <div className="flex flex-col w-full ">
                  <Label className="w-full">
                    <span>Reason</span>
                    <div className="text-lg">{selected.reason}</div>
                  </Label>
                  {/* <HelperText valid={false}>{err.invnumber}</HelperText> */}
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                if (selected.startdate === "") {
                  setModalMessage("Start Date necessary");
                  setMessageModal(true);
                  console.log("missing inputs");
                  return;
                }
                if (selected.enddate === "") {
                  setModalMessage("End Date necessary");
                  setMessageModal(true);
                  console.log("missing inputs");
                  return;
                }

                if (
                  Math.floor(
                    (Date.parse(selected.enddate) -
                      Date.parse(selected.startdate)) /
                      86400000
                  ) < 0
                ) {
                  setModalMessage("Invalid Date");
                  setMessageModal(true);
                  console.log("invalid inputs");
                  return;
                }
                let payload = {
                  id: selected._id,
                  update: {
                    employeeName: selected.employeeName,
                    employeeId: selected.employeeId,
                    reason: selected.reason,
                    startdate: selected.startdate,
                    enddate: selected.enddate,
                    status: "Approved",
                  },
                };
                console.log(payload);
                await axios({
                  url: `${API}/leave/${Emp.getId()}/approve`,
                  method: "POST",
                  data: payload,
                })
                  .then((data) => {
                    console.log("Updated", data);
                    setIsapproveModal(false);
                    setModalMessage("Leave Approved");
                    setMessageModal(true);
                  })
                  .catch((err) => {
                    setModalMessage("Error");
                    setMessageModal(true);
                    console.log("err", err);
                  });
                setRefresh(!refresh);
              }}
            >
              Approve
            </Button>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                console.log(`slected`, selected);
                let payload = {
                  id: selected._id,
                  update: {
                    status: "Rejected",
                  },
                };
                // console.log(newitems);
                await axios({
                  url: `${API}/leave/${Emp.getId()}/approve`,
                  method: "POST",
                  data: payload,
                })
                  .then((data) => {
                    console.log("Updated", data);
                    setIsapproveModal(false);
                    setModalMessage("Leave Rejected");
                    setMessageModal(true);
                  })
                  .catch((err) => {
                    setModalMessage("Error");
                    setMessageModal(true);
                    console.log("err", err);
                  });
                setRefresh(!refresh);
              }}
            >
              Reject
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  return (
    <>
      <div className="mb-64 mt-4">
        {ApproveModal()}
        {messageModalComponent()}
        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 ">
            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Status
                </option>
                <option value="">All</option>
                <option value="Submitted">Submitted</option>
                <option value="Rejected">Rejected</option>
                <option value="Approved">Approved</option>
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

            {/* -----------------------------------------Location ----------------------- */}
          </div>
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Employee Name</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>Days</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell>Status</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map((user, i) => (
                <TableRow
                  className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                    activerowid == user._id
                      ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                      : "white"
                  } `}
                  key={i}
                  onClick={() => {
                    setActiveRowId(user._id);

                    // console.log("the id is " + user._id);
                    // setSelectedProd(user);
                    // setAssetDetails(user);
                    // console.log(user.product.keyboard[0].keyboardname);
                  }}
                >
                  <TableCell>
                    <span className="text-sm">{user.employeeName}</span>
                  </TableCell>

                  <TableCell>
                    <span className="text-sm">
                      {moment(user.startdate).format("DD-MM-YYYY")}
                    </span>
                  </TableCell>
                  <TableCell className="w-8">
                    <div>
                      <p className="">
                        {moment(user.enddate).format("DD-MM-YYYY")}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="w-8">
                    <div>
                      {Math.floor(
                        (Date.parse(user.enddate) -
                          Date.parse(user.startdate)) /
                          86400000
                      ) + 1}
                    </div>
                  </TableCell>
                  <TableCell className=" w-64 break-all ">
                    <div
                      className="break-all w-80  overflow-hidden"
                      style={{ textOverflow: "clip" }}
                    >
                      {/* <p className="font-semibold   w-48  break-words"> */}
                      {user.reason}
                      {/* </p> */}
                    </div>
                  </TableCell>

                  <TableCell>
                    {user.status == "Submitted" ? (
                      <Button
                        layout="outline"
                        className="text-sm"
                        onClick={() => {
                          setSelected(user);
                          setIsapproveModal(true);
                        }}
                      >
                        Approve
                      </Button>
                    ) : (
                      <div className="text-purple-700 dark:text-purple-400 font-semibold">
                        {user.status}
                      </div>
                    )}
                  </TableCell>

                  {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              label="Table navigation"
              onChange={onPageChange}
            />
          </TableFooter>
        </TableContainer>

        {/* ----------------------------------------------Table----------------------------------------------------- */}
      </div>

      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default LeaveHistory;
