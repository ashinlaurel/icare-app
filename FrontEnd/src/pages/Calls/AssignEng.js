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

function AssignEng() {
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

  // filterhooks
  const [type, setType] = useState("");
  const [callStatus, setCallStatus] = useState("0");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [Business, setBusiness] = useState("");
  const [product, setProduct] = useState("");
  const [unit, setUnit] = useState({ _id: "", unitName: "" });
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });

  /////// engineer
  const [engineer, setEngineer] = useState({ _id: "", enggName: "" });
  const [isEnggModalOpen, setIsEnggModalOpen] = useState(false);
  const [isProblemDesc, setIsProblemDesc] = useState(false);
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
              {moment(selectedprod.date).format("YYYY-MM-DD") >
              moment(assignedDate).format("YYYY-MM-DD") ? (
                <span className="text-red-700">
                  Error: Selected date is before the call date!
                </span>
              ) : null}
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
                if (
                  moment(selectedprod.date).format("YYYY-MM-DD") >
                  moment(assignedDate).format("YYYY-MM-DD")
                ) {
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
                  setRefresh(!refresh);
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

  const ProblemModal = () => {
    return (
      <>
        <Modal isOpen={isProblemDesc} onClose={() => setIsProblemDesc(false)}>
          <ModalHeader>Problem Description</ModalHeader>
          <ModalBody>
            <div className="font-xl text-xl overflow-scroll">
              {selectedprod.problem}
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  };

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
    setTopHeading("Assign Engineer");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  useEffect(() => {
    // Using an IIFE
    (async function thegetter() {
      // console.log("getter called");
      let payload = {
        pages: {
          page: page,
          limit: resultsPerPage,
        },
        filters: {
          callStatus: callStatus,
          searchquery: searchquery,
          fromDate: fromDate,
          toDate: toDate,
        },
      };
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/call/${Emp.getId()}/getall`,
          method: "POST",
          data: payload,
        });
        // console.log(response.data.out);
        setTotalResults(response.data.total);
        // const { total, data } = response.data;
        // console.log(data + "Now");

        setData(response.data.out);
      } catch (error) {
        throw error;
      }
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [
    page,
    Business,
    product,
    refresh,
    callStatus,
    searchquery,
    fromDate,
    toDate,
  ]);

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
      <EngineerListModal
        isModalOpen={isEnggModalOpen}
        setIsModalOpen={setIsEnggModalOpen}
        setEngineer={setEngineer}
        nextModal={setaddEnggModalOpen}
      />
      <AddEnggModal />
      {ProblemModal()}
      {/* ---------------------Customer Selection Modal----------------------------------------- */}

      {/* {floatbox ? <AssetFloat /> : null} */}
      <div className="mb-64 mt-4">
        {/* <div className="flex items-center">
          <PageTitle>Assets Management</PageTitle>
          <div>
            <Button
              className="mx-3"
              onClick={() => {
                setFloatBox(!floatbox);
              }}
              icon={HeartIcon}
              layout="link"
              aria-label="Like"
            />
          </div>
        </div> */}
        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 ">
            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={callStatus}
                onChange={(e) => {
                  setCallStatus(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Call Status
                </option>
                <option value="all">All But Closed</option>
                <option selected value="0">
                  Pending For Allocation
                </option>
                <option value="priority">Priority</option>
                {/* <option value="-1">Allocated</option> */}
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

            <Label className="">
              <span>From Date</span>
              <input
                className="mt-1 p-2 rounded-sm mx-1"
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </Label>
            <Label className="">
              <span>To Date</span>
              <input
                className="mt-1 p-2 rounded-sm mx-1 mr-5"
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </Label>

            {/* -----------------Search Bar------------------------------------ */}
            <div class="block relative xl:ml-64">
              <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  viewBox="0 0 24 24"
                  class="h-4 w-4 fill-current text-gray-500"
                >
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                </svg>
              </span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setRefresh(!refresh);
                }}
              >
                <input
                  value={searchquery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by Call No."
                  class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </form>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Call No</TableCell>
                <TableCell>Date</TableCell>
                {callStatus == "priority" ? (
                  <>
                    <TableCell>Assigned Date</TableCell>
                    <TableCell>Assigned ETA</TableCell>
                  </>
                ) : null}

                <TableCell>Type</TableCell>
                <TableCell>Product SNO.</TableCell>
                <TableCell>Unit Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Call Status</TableCell>
                <TableCell>Problem Description</TableCell>
                <TableCell>Assigned Employee</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map((call, i) => (
                <TableRow
                  className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                    activerowid == call._id
                      ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                      : "white"
                  } `}
                  key={i}
                  onClick={() => {
                    setActiveRowId(call._id);
                    setBBarOpen(1);
                    // console.log("the id is " + call._id);
                    setSelectedProd(call);
                    if (call.assetId) setAssetDetails(call.assetId);
                    else setAssetDetails({});
                    console.log("CALL ASSET", call.assetId);
                    // console.log(call.product.keyboard[0].keyboardname);
                  }}
                >
                  <TableCell className="w-8">
                    <div className="flex items-center text-sm ">
                      <div>
                        <p className="font-semibold">{call.callNo}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-sm">
                        {moment(call.date).format("DD/MM/YYYY")}
                      </span>
                      {call.time ? (
                        <span className="text-xs">
                          {moment(`${"2018-04-02"}T${call.time}`).format(
                            "h:mm a"
                          )}
                        </span>
                      ) : null}
                    </div>
                  </TableCell>
                  {callStatus == "priority" ? (
                    <>
                      <TableCell>
                        <span className="text-sm">
                          {moment(call.assignedDate).format("DD/MM/YYYY")}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{call.assignedETA}</span>
                      </TableCell>
                    </>
                  ) : null}
                  <TableCell>
                    <span className="text-sm">{call.assetId.producttype}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {call.assetId.product.serialno}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{call.unitName}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{call.phone}</span>
                  </TableCell>
                  <TableCell>
                    {call.callStatus == 0 ? (
                      <span className="text-sm">Pending For Allocation</span>
                    ) : null}
                    {call.callStatus == 1 ? (
                      <span className="text-sm">
                        Pending for Percall Approval
                      </span>
                    ) : null}
                    {call.callStatus == 2 ? (
                      <span className="text-sm">Pending for Response</span>
                    ) : null}
                    {call.callStatus == 3 ? (
                      <span className="text-sm">Pending for OEM Response</span>
                    ) : null}
                    {call.callStatus == 4 ? (
                      <span className="text-sm">Pending for 2nd Response</span>
                    ) : null}
                    {call.callStatus == 5 ? (
                      <span className="text-sm">Pending for Customer</span>
                    ) : null}
                    {call.callStatus == 6 ? (
                      <span className="text-sm">Under Observation</span>
                    ) : null}
                    {call.callStatus == 7 ? (
                      <span className="text-sm">Pending for Others</span>
                    ) : null}
                    {call.callStatus == 8 ? (
                      <span className="text-sm">Pending for Spare</span>
                    ) : null}
                    {call.callStatus == 9 ? (
                      <span className="text-sm">Spare in Transit</span>
                    ) : null}
                    {call.callStatus == 10 ? (
                      <span className="text-sm">Cancelled Calls</span>
                    ) : null}
                    {call.callStatus == 11 ? (
                      <span className="text-sm">Closed Calls</span>
                    ) : null}
                    {call.callStatus == 12 ? (
                      <span className="text-sm">Spare Taken CMRR</span>
                    ) : null}
                    {call.callStatus == 13 ? (
                      <span className="text-sm">
                        Pending For Spare Collection
                      </span>
                    ) : null}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center">
                      <Button
                        layout="outline"
                        onClick={() => setIsProblemDesc(true)}
                      >
                        View
                      </Button>{" "}
                    </div>
                  </TableCell>
                  <TableCell>
                    {call.employeeId ? (
                      <>
                        <div className="px-4 py-2 dark:border-purple-400 border-purple-600 dark:bg-gray-700 bg-purple-100 inline-block rounded-lg dark:text-purple-400 text-purple-700">
                          {call.employeeName}
                          <Button
                            layout="link"
                            size="icon"
                            aria-label="Edit"
                            onClick={() => {
                              setIsEnggModalOpen(true);
                              setAssignedETA(call.assignedETA);
                              setAssignedDate(call.assignedDate);
                            }}
                            className="rounded-full mx-2 "
                          >
                            <EditIcon className="w-5 h-5" aria-hidden="true" />
                          </Button>
                        </div>
                      </>
                    ) : (
                      <Button
                        layout="outline"
                        onClick={() => setIsEnggModalOpen(true)}
                      >
                        Assign Now
                      </Button>
                    )}
                  </TableCell>
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

export default AssignEng;
