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
  TickIcon,
  MenuIcon,
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
  Avatar,
  Badge,
  Label,
  Select,
  Pagination,
  Dropdown,
  Input,
  DropdownItem,
} from "@windmill/react-ui";

import { API } from "../../backendapi";
// import EngineerListModal from "../../components/Modal/EngineerListModal";
import { BottomBarContext } from "../../context/BottomBarContext";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import { isAutheticated } from "../../helpers/auth";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";
import { saveAs } from "file-saver";

function ViewCalls() {
  // Bottom bar stuff
  // const [bbaropen, setBBarOpen] = useContext(BottomBarContext);
  // const [assetdetails, setAssetDetails] = useContext(BottomBarContext);
  const [isSetStatusModal, setisSetStatusModal] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);

  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } =
    useContext(BottomBarContext);
  // table variable styles
  const [activerowid, setActiveRowId] = useState(0);

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [viewId, setViewId] = useState("");
  // dropdown and modals
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);
  const [callStatus, setCallStatus] = useState("");
  const [callType, setCallType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // filterhooks
  const [Business, setBusiness] = useState("");
  const [product, setProduct] = useState("");
  const [unit, setUnit] = useState({ _id: "", unitName: "" });
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });

  /////// engineer
  const [engineer, setEngineer] = useState({ _id: "", enggName: "" });
  const [isEnggModalOpen, setIsEnggModalOpen] = useState(false);
  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  // Image States
  const [isHistoryImgViewModal, setIsHistoryImgViewModal] = useState(false);
  const [goodSpareHistoryImg, setGoodSpareHistoryImg] = useState("");
  const [defectiveHistoryImg, setDefectiveHistoryImg] = useState("");
  const [ccfrHistoryImg, setCcfrHistoryImg] = useState("");

  //download
  const [isDwnldModalOpen, setIsDwnldModalOpen] = useState(false);

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // const SetStatusModal = () => {
  //   return (
  //     <>
  //       <Modal
  //         isOpen={isSetStatusModal}
  //         onClose={() => setisSetStatusModal(false)}
  //       >
  //         <ModalHeader>Set Call Status</ModalHeader>
  //         <ModalBody>
  //           <div className="flex-col flex">
  //             <div className="font-xl dark:text-white">Current Status:</div>
  //             <Button className="font-xl">Set Status</Button>
  //             <Button className="font-xl my-2 mx-10 inline">
  //               Pending for Allocation
  //             </Button>
  //             <Button className="font-xl my-2 mx-10 inline">
  //               Pending for Allocation
  //             </Button>
  //             <Button className="font-xl my-2 mx-10 inline">
  //               Pending for Allocation
  //             </Button>
  //             <Button className="font-xl my-2 mx-10 inline">
  //               Pending for Allocation
  //             </Button>
  //           </div>
  //         </ModalBody>
  //         <ModalFooter>
  //           <Button
  //             className="w-full sm:w-auto"
  //             onClick={async () => {
  //               console.log("SELECTED", selectedprod);
  //               let payload = {
  //                 id: selectedprod._id,
  //                 update: {
  //                   employeeId: engineer._id,
  //                   employeeName: engineer.enggName,
  //                   callStatus: 1,
  //                 },
  //               };
  //               try {
  //                 let response = await axios({
  //                   url: `${API}/call/${Emp.getId()}/ViewCallsg`,
  //                   method: "POST",
  //                   data: payload,
  //                 });
  //                 let temp = data;
  //                 console.log(temp);
  //                 temp = temp.filter((c) => {
  //                   if (c._id === selectedprod._id) {
  //                     c.callStatus = 1;
  //                     c.employeeName = engineer.enggName;
  //                     c.employeeId = engineer._id;
  //                     return c;
  //                   }
  //                   setData(temp);
  //                 });
  //                 // console.log(response.data);
  //                 setisSetStatusModal(false);
  //               } catch (error) {
  //                 throw error;
  //               }
  //             }}
  //           >
  //             Confirm Assignment
  //           </Button>
  //         </ModalFooter>
  //       </Modal>
  //     </>
  //   );
  // };

  const HistoryImgViewModal = () => {
    return (
      <>
        <Modal
          isOpen={isHistoryImgViewModal}
          onClose={() => {
            setDefectiveHistoryImg("");
            setGoodSpareHistoryImg("");
            setCcfrHistoryImg("");
            setIsHistoryImgViewModal(false);
          }}
          className="w-9/12 dark:bg-gray-800 px-5 my-10 bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-auto"
          // className="w-6/12 h-8/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll text-cente items-center justify-center"
        >
          <ModalHeader>Images</ModalHeader>
          <ModalBody>
            <div className="flex flex-col justify-center ">
              <hr></hr>
              <div className="flex flex-row justify-evenly flex-wrap items-center ">
                {defectiveHistoryImg != "" ? (
                  <div>
                    <div
                      onClick={() => {
                        console.log(defectiveHistoryImg);
                      }}
                      className="text-lg font-semibold my-2 w-full"
                    >
                      Replaced Item
                    </div>

                    <a href={defectiveHistoryImg} target="_blank">
                      {/* <figure
                      onMouseMove={handleMouseMove}
                      style={{
                        backgroundImage: `url(${defectiveHistoryImg})`,
                        backgroundPosition: `${defectiveHistoryImgPos}`,
                      }}
                    >
                      <img src={defectiveHistoryImg} width="350" height="350" />
                    </figure> */}
                      <img
                        src={defectiveHistoryImg}
                        className="my-4 border-4"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                ) : null}

                {goodSpareHistoryImg != "" ? (
                  <div>
                    <div className="text-lg font-semibold my-2 w-full">
                      {" "}
                      Replaced by
                    </div>
                    <a href={goodSpareHistoryImg} target="_blank">
                      <img
                        src={goodSpareHistoryImg}
                        className="my-4 border-4"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                ) : null}

                {ccfrHistoryImg != "" ? (
                  <div>
                    <div className="text-lg font-semibold my-2 w-full">
                      {" "}
                      CCFR
                    </div>
                    <a href={ccfrHistoryImg} target="_blank">
                      <img
                        src={ccfrHistoryImg}
                        className="my-4 border-4"
                        width="350"
                        height="350"
                      />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button
              className="w-full sm:w-auto"
              onClick={() => {
                setDefectiveHistoryImg("");
                setGoodSpareHistoryImg("");
                setCcfrHistoryImg("");
                setIsHistoryImgViewModal(false);
              }}
            >
              Okay!
            </Button> */}
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const getCallStatusString = (num) => {
    let finalstatus = "";
    switch (num) {
      case 0:
        return "Pending For Allocation";
        break;
      case 1:
        return "Pending for Percall Approval";
        break;
      case 2:
        return "Pending for Response";
        break;
      case 3:
        return "Pending for OEM Response";
        break;
      case 4:
        return "Pending for 2nd Response";
        break;
      case 5:
        return "Pending for Customer";
        break;
      case 6:
        return "Under Observation";
        break;
      case 7:
        return "Pending for Others";
        break;
      case 8:
        return "Pending for Spare";
        break;
      case 9:
        return "Spare in Transit";
        break;
      case 10:
        return "Cancelled Calls";
        break;
      case 11:
        return "Closed Calls";
        break;
      case 12:
        return "Spare Taken CMRR";
        break;
      case 13:
        return "Pending For Spare Collection";
        break;
      case 14:
        return "Standby Given";
        break;
      case 15:
        return "Pending For Verification";
        break;

      default:
        return "Status Number Unknown";
        break;
    }
  };

  const DwnldModal = () => {
    return (
      <>
        <Modal
          isOpen={isDwnldModalOpen}
          onClose={() => setIsDwnldModalOpen(false)}
          className=" sdark:bg-gray-800 p-5 my-6 mx-10 px-5  bg-gray-50 text-gray-900 dark:text-white text-center  rounded-lg "
        >
          <ModalHeader className="flex flex-row justify-between text-xl mx-10 px-10">
            <div className="text-lg">Download Call Data?</div>
          </ModalHeader>
          <ModalBody>
            <Button
              layout="outline"
              onClick={() => {
                downloadAssets();
              }}
            >
              Download
            </Button>
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
        </Modal>
      </>
    );
  };

  const downloadAssets = async () => {
    let csv = `CallNo,Date,Time,Unit,Phone,Product,SerialNumber,Problem,CallStatus,Engineer\n`;

    let array;
    let payload = {
      pages: {
        page: page,
        limit: 10000000,
      },
      filters: {
        callType: callType,
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

      array = response.data.out;
    } catch (error) {
      throw error;
    }

    console.log("download calls call", array);
    // let csv = `CallNo,Date,Time,Unit,Phone,Product,SerialNumber,Problem,CallStatus,Engineer\n`;
    array.map((call) => {
      csv =
        csv +
        `${call.callNo},${moment(call.date).format("DD-MM-YYYY")},${moment(
          `${"2018-04-02"}T${call.time}`
        ).format("h:mm a")},${call.unitName},${call.phone},${
          call.assetId.producttype
        },${call.assetId.ponumber},${call.problem},${getCallStatusString(
          call.callStatus
        )},${call.employeeName},\n`;
    });
    // console.log(csv); //product.
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(csvData, "CallsExport.csv");
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
    setTopHeading("View Calls");
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
          callType: callType,
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

        console.log(response.data.out);

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
    callType,
  ]);

  // console.log(selectedprod);

  const ReviewSubmit = () => {
    return (
      <>
        <Modal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        >
          <ModalHeader>Updated Successfully!</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsReviewModalOpen(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const HistoryModal = () => {
    if (data[viewId]) {
      let item = data[viewId];
      let history = data[viewId].history;
      console.log(history);

      return (
        <>
          <Modal
            isOpen={historyModalOpen}
            onClose={() => setHistoryModalOpen(false)}
            className="w-9/12  dark:bg-gray-800 p-10 my-3  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-auto"
          >
            <ModalHeader className="flex flex-row justify-between text-xl">
              {/* <div>{item.name}</div> */}
              <div>Call No: {item.callNo}</div>
            </ModalHeader>
            <ModalBody>
              {/* <div className="font-semibold text-xl my-2">Call History</div> */}
              {/* ------------------------- Table ------------------------------ */}
              <TableContainer className="mt-4 max-h-xl overflow-scroll">
                <Table>
                  <TableHeader>
                    <tr>
                      <TableCell>Date</TableCell>
                      <TableCell>Engineer</TableCell>
                      <TableCell>Attended Date</TableCell>
                      <TableCell>Start Of Service</TableCell>
                      <TableCell>End Of Service</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Notes</TableCell>
                      <TableCell>Action Taken</TableCell>
                      <TableCell>Images</TableCell>
                    </tr>
                  </TableHeader>
                  <TableBody className=" max-h-64">
                    {history.map((entry, i) => (
                      <TableRow
                        className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                          activerowid == entry._id
                            ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                            : "white"
                        } `}
                        key={i}
                        onClick={() => {
                          // setActiveRowId(user._id);
                          // console.log("the id is " + user._id);
                          // setSelectedProd(user);
                          // setAssetDetails(user);
                          // console.log(user.product.keyboard[0].keyboardname);
                        }}
                      >
                        <TableCell className="w-8">
                          <div className="flex items-center text-sm ">
                            <div>
                              <p className="font-semibold">
                                {moment(entry.date).format("DD-MM-YYYY")}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">
                            {capitalize(entry.engineer)}
                          </span>
                        </TableCell>

                        <TableCell>
                          <span className="text-sm">
                            {entry.callAttendDate}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">
                            {entry.startOfService}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{entry.endOfService}</span>
                        </TableCell>
                        <TableCell>
                          <span>
                            {entry.callStatus == 0 ? (
                              <Badge>Pending For Allocation</Badge>
                            ) : null}
                            {entry.callStatus == 1 ? (
                              <Badge>Pending for Percall Approval</Badge>
                            ) : null}
                            {entry.callStatus == 2 ? (
                              <Badge>Pending for Response</Badge>
                            ) : null}
                            {entry.callStatus == 3 ? (
                              <Badge>Pending for OEM Response</Badge>
                            ) : null}
                            {entry.callStatus == 4 ? (
                              <Badge>Pending for 2nd Response</Badge>
                            ) : null}
                            {entry.callStatus == 5 ? (
                              <Badge>Pending for Customer</Badge>
                            ) : null}
                            {entry.callStatus == 6 ? (
                              <Badge>Under Observation</Badge>
                            ) : null}
                            {entry.callStatus == 7 ? (
                              <Badge>Pending for Others</Badge>
                            ) : null}
                            {entry.callStatus == 8 ? (
                              <Badge>Pending for Spare</Badge>
                            ) : null}
                            {entry.callStatus == 9 ? (
                              <Badge>Spare in Transit</Badge>
                            ) : null}
                            {entry.callStatus == 10 ? (
                              <Badge>Cancelled Calls</Badge>
                            ) : null}
                            {entry.callStatus == 11 ? (
                              <Badge>Closed Calls</Badge>
                            ) : null}
                            {entry.callStatus == 12 ? (
                              <Badge>Spare Taken CMRR</Badge>
                            ) : null}
                            {entry.callStatus == 13 ? (
                              <Badge>Pending For Spare Collection</Badge>
                            ) : null}
                            {entry.callStatus == 14 ? (
                              <Badge>Standby Given</Badge>
                            ) : null}
                            {entry.callStatus == 15 ? (
                              <Badge>Pending For Verification</Badge>
                            ) : null}
                          </span>
                        </TableCell>
                        <TableCell className="flex flex-row max-w-sm">
                          <span className="w-full overflow-auto">
                            {entry.note}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{entry.actionTaken}</span>
                        </TableCell>
                        <TableCell>
                          <Button
                            layout="outline"
                            onClick={() => {
                              if (entry.newUrl)
                                setGoodSpareHistoryImg(entry.newUrl);
                              if (entry.existUrl)
                                setDefectiveHistoryImg(entry.existUrl);
                              if (entry.ccfrImgUrl)
                                setCcfrHistoryImg(entry.ccfrImgUrl);
                              setIsHistoryImgViewModal(true);
                            }}
                          >
                            Show
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/* <TableFooter>
                  <Pagination
                    totalResults={totalResults}
                    resultsPerPage={resultsPerPage}
                    label="Table navigation"
                    onChange={onPageChange}
                  />
                </TableFooter> */}
              </TableContainer>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </Modal>
        </>
      );
    }
  };

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
      {/* <SetStatusModal /> */}
      <ReviewSubmit />
      {HistoryModal()}
      {HistoryImgViewModal()}
      {DwnldModal()}

      {/* ---------------------Customer Selection Modal----------------------------------------- */}

      {/* {floatbox ? <AssetFloat /> : null} */}
      <div className="mb-64 mt-4">
        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-6 ">
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
                className="mt-1 p-2 rounded-sm mx-1"
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </Label>

            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={callType}
                onChange={(e) => {
                  setCallType(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Call Type
                </option>
                <option value="">All</option>
                <option value="internal">Internal</option>
                <option value="internalinv">Internal Inv</option>
                <option value="external">External</option>
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
                <option value="">All (No Closed And Cancelled)</option>
                <option selected value="0">
                  Pending For Allocation
                </option>
                <option value="1">Pending for Percall Approval</option>
                <option value="2">Pending for Response</option>
                <option value="3">Pending for OEM Response</option>
                <option value="4">Pending for 2nd Response</option>
                <option value="5">Pending for Customer</option>
                <option value="6">Under Observation</option>
                <option value="7">Pending for Others</option>
                <option value="8">Pending for Spare</option>
                <option value="13">Pending For Spare Collection</option>
                <option value="12">Spare Taken CMRR</option>
                <option value="14"> Standby Given</option>
                <option value="9">Spare in Transit</option>
                <option value="10">Cancelled Calls</option>
                <option value="15">Pending For Verification</option>
                <option value="11">Closed Calls</option>
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
          {/* ----------------------------------------Row 2 -------------------------------------------------------------------- */}
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Call No</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Unit Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Product</TableCell>
                {/* <TableCell>Serial</TableCell> */}
                <TableCell>Call Status</TableCell>
                <TableCell>Problem</TableCell>
                {/* <TableCell>Assigned Employee</TableCell> */}
                <TableCell>Actions</TableCell>
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
                    console.log("SELECTD", call);
                    setAssetDetails(call.assetId);
                    // console.log(call.product.keyboard[0].keyboardname);
                  }}
                >
                  <TableCell className="">
                    <div className="flex items-center text-sm justify-center">
                      <div className="flex flex-col items-center ">
                        <Link
                          key={call._id}
                          to={
                            call.callType == "internalinv"
                              ? `/app/call/updateinvcall/${call._id}/${call.assetId._id}`
                              : `/app/call/updatecall/${call._id}/${call.assetId._id}`
                          }
                        >
                          <div className=" cursor-pointer">
                            <p className="font-semibold py-1 px-12 hover:underline text-white bg-blue-600 rounded-lg mb-1">
                              {call.callNo}
                            </p>
                          </div>
                        </Link>
                        <span className="text-xs ">
                          SL:{call.assetId.ponumber}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-sm">
                        {moment(call.date).format("DD/MM/YYYY")}
                      </span>
                      {call.regtimestamp ? (
                        <span className="text-xs">
                          {moment(`${"2018-04-02"}T${call.time}`).format(
                            "h:mm a"
                          )}
                        </span>
                      ) : null}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{call.unitName}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{call.phone}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{call.assetId.producttype}</span>
                  </TableCell>
                  {/* <TableCell>
                    <span className="text-sm">{call.assetId.ponumber}</span>
                  </TableCell> */}
                  <TableCell>
                    <span className=" text-xs">
                      {call.callStatus == 0 ? (
                        <Badge>Pending For Allocation</Badge>
                      ) : null}
                      {call.callStatus == 1 ? (
                        <Badge>Pending for Percall Approval</Badge>
                      ) : null}
                      {call.callStatus == 2 ? (
                        <Badge>Pending for Response</Badge>
                      ) : null}
                      {call.callStatus == 3 ? (
                        <Badge>Pending for OEM Response</Badge>
                      ) : null}
                      {call.callStatus == 4 ? (
                        <Badge>Pending for 2nd Response</Badge>
                      ) : null}
                      {call.callStatus == 5 ? (
                        <Badge>Pending for Customer</Badge>
                      ) : null}
                      {call.callStatus == 6 ? (
                        <Badge>Under Observation</Badge>
                      ) : null}
                      {call.callStatus == 7 ? (
                        <Badge>Pending for Others</Badge>
                      ) : null}
                      {call.callStatus == 8 ? (
                        <Badge>Pending for Spare</Badge>
                      ) : null}
                      {call.callStatus == 9 ? (
                        <Badge>Spare in Transit</Badge>
                      ) : null}
                      {call.callStatus == 10 ? (
                        <Badge>Cancelled Calls</Badge>
                      ) : null}
                      {call.callStatus == 11 ? (
                        <Badge>Closed Calls</Badge>
                      ) : null}
                      {call.callStatus == 12 ? (
                        <Badge>Spare Taken CMRR</Badge>
                      ) : null}
                      {call.callStatus == 13 ? (
                        <Badge>Pending For Spare Collection</Badge>
                      ) : null}
                      {call.callStatus == 14 ? (
                        <Badge>Standby Given</Badge>
                      ) : null}
                      {call.callStatus == 15 ? (
                        <Badge>Pending For Verification</Badge>
                      ) : null}
                    </span>
                  </TableCell>

                  <TableCell className="flex flex-row ">
                    <div className="flex items-center justify-center ">
                      <div className="flex flex-col items-start overflow-auto text-sm w-40 ">
                        <span className=" ">{call.problem}</span>
                        {call.employeeId ? (
                          <span>Engineer: {call.employeeName}</span>
                        ) : (
                          <span>Engineer Not Assigned</span>
                        )}
                      </div>
                    </div>
                    {/* <span>Engineer: {call.engineer}</span> */}
                  </TableCell>

                  {/* <TableCell> */}
                  {/* <div className="flex ">
                      {/* <Label className="w-full"> */}
                  {/* <Select
                        className="inline"
                        onChange={(e) => {
                          // setAccType(parseInt(e.target.value));
                          let temp = data;
                          console.log(temp);
                          temp = temp.filter((c) => {
                            if (c._id === call._id) {
                              c.callStatus = e.target.value;
                              return c;
                            } else return c;
                          });
                          setData(temp);
                        }}
                        value={call.callStatus}
                      >
                        <option value="0">Not Allocated</option>
                        <option value="1">Pending for Percall Approval</option>
                        <option value="2"> Pending for Response</option>
                        <option value="3"> Pending for OEM Response</option>
                        <option value="4"> Pending for 2nd Response</option>
                        <option value="5"> Pending for Customer</option>
                        <option value="6"> Under Observation</option>
                        <option value="7"> Pending for Others</option>
                        <option value="8"> Pending for Spare</option>
                        <option value="9"> Spare in Transit</option>
                        <option value="10"> Cancelled Calls</option>
                        <option value="11"> Closed Calls</option>
                      </Select> */}
                  {/* </Label> */}
                  {/* <div
                        className="p-1 m-2 dark:hover:bg-green-700 hover:bg-green-200 rounded-full text-green-400"
                        onClick={async () => {
                          let payload = {
                            id: call._id,
                            update: {
                              callStatus: call.callStatus,
                            },
                          };
                          try {
                            let response = await axios({
                              url: `${API}/call/${Emp.getId()}/assignEngg`,
                              method: "POST",
                              data: payload,
                            });
                            console.log("updated");
                            setIsReviewModalOpen(true);
                          } catch (error) {
                            throw error;
                          }
                        }}
                      >
                        <TickIcon
                          className="w-5 h-5 fill-current"
                          aria-hidden="true"
                        />
                      </div> */}
                  {/* </div> */}
                  {/* </TableCell> */}
                  {/* <TableCell>
                    {call.employeeId ? (
                      <>
                        {call.employeeName}
                        {/* <Button layout="link" size="icon" aria-label="Edit" onClick={()=>setIsEnggModalOpen(true)} className="rounded-full mx-2 ">
                       
                          <EditIcon className="w-5 h-5" aria-hidden="true" />
                        
                      </Button> */}
                  {/* </> */}
                  {/* ) : ( */}
                  <>
                    {/* <Button onClick={()=>setIsEnggModalOpen(true)}> */}
                    {/* Not Assigned */}
                    {/* </Button> */}
                  </>

                  {/* </TableCell> */}
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Link
                        key={call._id}
                        to={
                          call.callType == "internalinv"
                            ? `/app/call/updateinvcall/${call._id}/${call.assetId._id}`
                            : `/app/call/updatecall/${call._id}/${call.assetId._id}`
                        }
                      >
                        <Button layout="link" size="icon" aria-label="Edit">
                          {/* <Link
                          key={user._id}
                          to={`/app/unit/update/${user._id}`}
                        > */}
                          <EditIcon className="w-5 h-5" aria-hidden="true" />
                          {/* </Link>{" "} */}
                        </Button>
                      </Link>

                      <Button
                        onClick={() => {
                          setViewId(i);
                          setHistoryModalOpen(true);
                        }}
                        layout="link"
                        size="icon"
                        aria-label="Edit"
                      >
                        <MenuIcon className="w-5 h-5" aria-hidden="true" />
                      </Button>
                      {/* <div>
            <Button className="mx-3 mt02">
              {" "}
              <Link
                key={selectedprod._id}
                to={`/app/unit/update/${selectedprod._id}`}
              >
                Edit
              </Link>{" "}
            </Button>
            <Button
              className="mx-3 mt02"
              onClick={async () => {
                console.log("delete Asset");
                try {
                  let response = await axios({
                    url: `${API}/asset/${Emp.getId()}/delete`,
                    method: "POST",
                    data: { id: selectedprod._id },
                  });
                  console.log(response.data);
                  // let temp = data.filter((x) => x._id != selectedprod._id);
                  // setData(temp);

                  // setData(response.data);
                } catch (error) {
                  throw error;
                }
              }}
            >
              Delete
            </Button>
          </div> */}
                    </div>
                  </TableCell>
                  {/* <TableCell>
                    <div className="flex justify-start items-center space-x-2">
                      <Link
                        key={call._id}
                        to={
                          call.callType == "internalinv"
                            ? `/app/call/updateinvcall/${call._id}/${call.assetId._id}`
                            : `/app/call/updatecall/${call._id}/${call.assetId._id}`
                        }
                      >
                        <Button
                          layout="outline"
                          onClick={() => {}}
                          className=" "
                        >
                          Update
                        </Button>
                      </Link>
                      <Button
                        onClick={() => {
                          setViewId(i);
                          setHistoryModalOpen(true);
                        }}
                        layout="outline"
                      >
                        History
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

        <div className="mt-10">
          <Button
            onClick={() => {
              setIsDwnldModalOpen(true);
            }}
          >
            Export
          </Button>
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
      </div>

      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default ViewCalls;
