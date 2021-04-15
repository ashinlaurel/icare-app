import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";

import Emp from "../../helpers/auth/EmpProfile";
import PageTitle from "../../components/Typography/PageTitle";
import {
  ChatIcon,
  CartIcon,
  MoneyIcon,
  PeopleIcon,
  ButtonsIcon,
  HeartIcon,
  EditIcon,
  TrashIcon,
} from "../../icons";
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
  Input,
  HelperText,
  Label,
  Avatar,
  Badge,
  Pagination,
  Dropdown,
  DropdownItem,
} from "@windmill/react-ui";

import AssetFloat from "../../components/FloatDetails/AssetFloat";
import { API } from "../../backendapi";
import UnitListModal from "../../components/Modal/UnitListModal";
import CustomerSelection from "../../components/Modal/AssetFilters/CustomerSelection";
import EngineerListModal from "../../components/Modal/EngineerListModal";
import { BottomBarContext } from "../../context/BottomBarContext";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import { isAutheticated } from "../../helpers/auth";
import SelectEmployeeModal from "../../components/Modal/SelectEmployeeModal";
import SelectEmployeeModalForCalls from "../../components/Modal/SelectEmployeeModalForCalls";

function EnggPriorityList() {
  // Bottom bar stuff
  // const [bbaropen, setBBarOpen] = useContext(BottomBarContext);
  // const [assetdetails, setAssetDetails] = useContext(BottomBarContext);
  const [addEnggModalOpen, setaddEnggModalOpen] = useState(false);

  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } = useContext(
    BottomBarContext
  );
  // table variable styles
  const [activerowid, setActiveRowId] = useState(0);

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // dropdown and modals
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);

  /////// engineer
  const [engineer, setEngineer] = useState(null);
  const [isEnggModalOpen, setIsEnggModalOpen] = useState(false);
  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  // Dates of call
  const [assignedDate, setAssignedDate] = useState("");
  const [assignedETA, setAssignedETA] = useState("");
  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  const AddEnggModal = () => {
    return (
      <>
        <Modal
          isOpen={addEnggModalOpen}
          onClose={() => setaddEnggModalOpen(false)}
        >
          <ModalHeader>Confirm Assignment</ModalHeader>
          <ModalBody>
            <div className="font-xl text-xl">
              Assign {engineer.enggName} to call {selectedprod.callNo}
            </div>

            <div className="flex flex-col w-full mt-2">
              <Label className="w-full">
                <span>Assign Date</span>
                <Input
                  className=""
                  type="date"
                  value={moment(assignedDate).format("YYYY-MM-DD")}
                  onChange={(e) => {
                    // setCall({ ...call, callAttendDate: e.target.value });
                    setAssignedDate(e.target.value);
                  }}
                />
              </Label>
            </div>
            <div className="flex flex-col w-full">
              <Label className="w-full">
                <span>Assign ETA</span>
                <Input
                  className=""
                  type="time"
                  value={assignedETA}
                  onChange={(e) => {
                    // setCall({ ...call, startOfService: e.target.value });
                    setAssignedETA(e.target.value);
                  }}
                />
              </Label>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                console.log(selectedprod);
                if (assignedDate == "" || assignedETA == "") {
                  return;
                }

                // ----- history ---
                let newcallhistory = {
                  date: moment().format(),
                  callStatus: "2",
                  engineer: engineer.enggName,
                  callAttendDate: "Nil",
                  startOfService: "Nil",
                  endOfService: "Nil",
                  note: `${engineer.enggName} has been assigned to the call. Assigned Date: ${assignedDate} Assigned ETA: ${assignedETA}`,
                  actionTaken: "Nil",
                };

                let payload = {
                  id: selectedprod._id,
                  update: {
                    employeeId: engineer._id,
                    employeeName: engineer.enggName,
                    callStatus: 2,
                    assignedDate: assignedDate,
                    assignedETA: assignedETA,
                    $push: { history: newcallhistory },
                  },
                };
                let employeepayload = {
                  id: engineer._id,
                  update: {
                    $push: {
                      assignedCalls: {
                        priority: 99,
                        callId: selectedprod._id,
                        date: new Date(),
                      },
                    },
                  },
                };
                try {
                  let response = await axios({
                    url: `${API}/call/${Emp.getId()}/assignEngg`,
                    method: "POST",
                    data: payload,
                  });
                  let temp = data;
                  console.log(temp);
                  temp = temp.filter((c) => {
                    if (c._id === selectedprod._id) {
                      c.callStatus = 2;
                      c.employeeName = engineer.enggName;
                      c.employeeId = engineer._id;
                      return c;
                    }
                    setData(temp);
                  });
                  // updating employee modal

                  await axios({
                    url: `${API}/admin/${Emp.getId()}/update`,
                    method: "POST",
                    data: employeepayload,
                  });
                  // console.log(response.data);
                  setaddEnggModalOpen(false);
                  setAssignedDate("");
                  setAssignedETA("");
                } catch (error) {
                  throw error;
                }
              }}
            >
              Confirm Assignment
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  // useEffect(() => {
  //   setData(engineer.assignedCalls);
  // }, [engineer]);

  useEffect(() => {
    (async () => {
      if (engineer) {
        let payload = {
          pages: {
            page: 1,
            limit: 10000,
          },
          filters: {
            callStatus: "",
            searchquery: "",
            fromDate: "",
            toDate: "",
            employeeId: engineer._id,
          },
        };
        console.log("HERE", payload);
        try {
          let response = await axios({
            url: `${API}/call/${Emp.getId()}/getall`,
            method: "POST",
            data: payload,
          });
          console.log(response.data.out);
          setTotalResults(response.data.total);
          setData(response.data.out);
          // const { total, data } = response.data;
          // console.log(data + "Now");

          setData(response.data.out);
        } catch (error) {
          throw error;
        }
        // console.log(engineer)
      }
    })();
  }, [engineer]);

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
    setTopHeading("Engineer Call Priority");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  const submitCustomer = async () => {
    console.log("DATA", data);
    // e.preventDefault();
    const newuser = {
      assignedCalls: [...data],
    };
    console.log(newuser);

    const payload = {
      id: engineer._id,
      update: newuser,
    };
    try {
      await axios({
        url: `${API}/admin/${Emp.getId()}/update`,
        method: "POST",
        data: payload,
      });
      // setIsReviewModalOpen(true);
      console.log("Done");
    } catch (error) {
      throw error;
    }
  };

  // console.log(selectedprod);

  return (
    <>
      {/* ---------------------Customer Selection Modal----------------------------------------- */}
      {/* <CustomerSelection
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setUnit={setUnit}
        unit={unit}
        customer={customer}
        setCustomer={setCustomer}
        account={account}
        setAccount={setAccount}
        refresh={refresh}
        setRefresh={setRefresh}
      /> */}
      <SelectEmployeeModalForCalls
        isModalOpen={isEnggModalOpen}
        setIsModalOpen={setIsEnggModalOpen}
        setEmployee={setEngineer}
      />
      <SelectEmployeeModalForCalls />
      {/* ---------------------Customer Selection Modal----------------------------------------- */}

      {/* {floatbox ? <AssetFloat /> : null} */}
      <div className="mb-64 mt-4">
        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="flex flex-row items-center justify-start space-x-2">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <Button layout="outline" onClick={() => setIsEnggModalOpen(true)}>
            Select Engineer
          </Button>
          <Button onClick={() => submitCustomer(true)}>Submit</Button>
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Call No</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Assigned Date</TableCell>
                <TableCell>Assigned ETA</TableCell>
                <TableCell>Unit Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Call Status</TableCell>
                <TableCell>Priority</TableCell>
                {/* <TableCell>Edit </TableCell> */}
              </tr>
            </TableHeader>
            <TableBody>
              {engineer &&
                data.map((item, i) => (
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                      activerowid == item._id
                        ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                        : "white"
                    } `}
                    key={i}
                    onClick={() => {
                      // setActiveRowId(callId._id);
                      // setBBarOpen(1);
                      // // console.log("the id is " + call._id);
                      // setSelectedProd(callId);
                      // if (callId.assetId) setAssetDetails(callId.assetId);
                      // else setAssetDetails({});
                      // console.log(callId.assetId);
                      // console.log(call.product.keyboard[0].keyboardname);
                    }}
                  >
                    <TableCell className="w-8">
                      <div className="flex items-center text-sm ">
                        <div>
                          <p className="font-semibold">{item.callNo}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {moment(item.date).format("DD/MM/YYYY")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {moment(item.assignedDate).format("DD/MM/YYYY")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{item.assignedETA}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{item.unitName}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{item.phone}</span>
                    </TableCell>
                    <TableCell>
                      {item.callStatus == 0 ? (
                        <span className="text-sm">Pending For Allocation</span>
                      ) : null}
                      {item.callStatus == 1 ? (
                        <span className="text-sm">
                          Pending for Percall Approval
                        </span>
                      ) : null}
                      {item.callStatus == 2 ? (
                        <span className="text-sm">Pending for Response</span>
                      ) : null}
                      {item.callStatus == 3 ? (
                        <span className="text-sm">
                          Pending for OEM Response
                        </span>
                      ) : null}
                      {item.callStatus == 4 ? (
                        <span className="text-sm">
                          Pending for 2nd Response
                        </span>
                      ) : null}
                      {item.callStatus == 5 ? (
                        <span className="text-sm">Pending for Customer</span>
                      ) : null}
                      {item.callStatus == 6 ? (
                        <span className="text-sm">Under Observation</span>
                      ) : null}
                      {item.callStatus == 7 ? (
                        <span className="text-sm">Pending for Others</span>
                      ) : null}
                      {item.callStatus == 8 ? (
                        <span className="text-sm">Pending for Spare</span>
                      ) : null}
                      {item.callStatus == 9 ? (
                        <span className="text-sm">Spare in Transit</span>
                      ) : null}
                      {item.callStatus == 10 ? (
                        <span className="text-sm">Cancelled Calls</span>
                      ) : null}
                      {item.callStatus == 11 ? (
                        <span className="text-sm">Closed Calls</span>
                      ) : null}
                      {item.callStatus == 12 ? (
                        <span className="text-sm">Spare Taken CMRR</span>
                      ) : null}
                      {item.callStatus == 13 ? (
                        <span className="text-sm">Closed Calls</span>
                      ) : null}
                      {item.callStatus == 14 ? (
                        <span className="text-sm">Standby Given</span>
                      ) : null}
                    </TableCell>
                    <TableCell>
                      {i + 1}
                      {/* <input
                      value={priority}
                      onChange={(e) => {
                        let temp = data;
                        // newuser["caseId"]=e.target.value
                        temp = temp.filter((x) => {
                          if (x._id != _id) return x;
                          else {
                            console.log("here", e.target.value);
                            let t = x;
                            t.priority = e.target.value;
                            return t;
                          }
                        });
                        console.log(temp);
                        setData(temp);
                      }} */}
                    </TableCell>
                    {/* <TableCell>
                    
                      
                        <div className="px-2 py-2 dark:border-purple-400 border-purple-600 dark:bg-gray-700 bg-purple-100 inline-block rounded-full dark:text-purple-400 text-purple-700">
                          
                          <Button
                            layout="link"
                            size="icon"
                            aria-label="Edit"
                            onClick={() => {
                              setIsEnggModalOpen(true);
                              setAssignedETA(item.assignedETA);
                              setAssignedDate(item.assignedDate);
                            }}
                            className="rounded-full mx-2 "
                          >
                            <EditIcon className="w-5 h-5" aria-hidden="true" />
                          </Button>
                        </div>
                      
                  </TableCell> */}
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

export default EnggPriorityList;
