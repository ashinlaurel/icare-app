import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";

import Cust from "../../helpers/auth/CustProfile";
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
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import { isAutheticated } from "../../helpers/auth";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";

function CustomerViewCalls() {
  // Bottom bar stuff
  const [isSetStatusModal, setisSetStatusModal] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);

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

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  // info modal
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [infoModalAsset, setInfoModalAsset] = useState({
    product: {
      brand: "",
      model: "",
      serialno: "",
      os: "",
      cpu: [],
      ram: [],
      hdd: [],
      smps: [],
      fan: [],
      motherboard: [],
      opticaldrive: [],
      keyboard: [],
      kbd: [],
      mouse: [],
      monitor: [],
      gcard: [],
      enetcard: [],
      serialcard: [],
      parallelcard: [],
      hbacard: [],
      raidcontroller: [],
      tapecontroller: [],
      others: [],
    },
  });

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  const SetStatusModal = () => {
    return (
      <>
        <Modal
          isOpen={isSetStatusModal}
          onClose={() => setisSetStatusModal(false)}
        >
          <ModalHeader>Set Call Status</ModalHeader>
          <ModalBody>
            <div className="flex-col flex">
              <div className="font-xl dark:text-white">Current Status:</div>
              <Button className="font-xl">Set Status</Button>
              <Button className="font-xl my-2 mx-10 inline">
                Pending for Allocation
              </Button>
              <Button className="font-xl my-2 mx-10 inline">
                Pending for Allocation
              </Button>
              <Button className="font-xl my-2 mx-10 inline">
                Pending for Allocation
              </Button>
              <Button className="font-xl my-2 mx-10 inline">
                Pending for Allocation
              </Button>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                console.log("SELECTED", selectedprod);
                let payload = {
                  id: selectedprod._id,
                  update: {
                    employeeId: engineer._id,
                    employeeName: engineer.enggName,
                    callStatus: 1,
                  },
                };
                try {
                  let response = await axios({
                    url: `${API}/call/${Cust.getId()}/ViewCallsg`,
                    method: "POST",
                    data: payload,
                  });
                  let temp = data;
                  console.log(temp);
                  temp = temp.filter((c) => {
                    if (c._id === selectedprod._id) {
                      c.callStatus = 1;
                      c.employeeName = engineer.enggName;
                      c.employeeId = engineer._id;
                      return c;
                    }
                    setData(temp);
                  });
                  // console.log(response.data);
                  setisSetStatusModal(false);
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

  // on page change, load new sliced data
  // here you would make another server request for new data

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
          callStatus: callStatus,
          searchquery: searchquery,
          fromDate: fromDate,
          toDate: toDate,
        },
      };

      if (Cust.getRole() == 1) {
        payload.filters.customerId = Cust.getId();
      } else if (Cust.getRole() == 2) {
        payload.filters.accountId = Cust.getId();
      } else return;
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/call/${Cust.getId()}/customergetall`,
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
            className="w-9/12  dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-auto"
          >
            <ModalHeader className="flex flex-row justify-between text-xl">
              <div>{item.name}</div>
              <div>
                Call No: <Badge>{item.callNo}</Badge>{" "}
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="font-semibold text-xl my-2">Call History</div>
              {/* ------------------------- Table ------------------------------ */}
              <TableContainer className="mt-4">
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
                  <TableBody>
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

  const InformationModal = () => {
    console.log(infoModalAsset);
    return (
      <>
        <Modal
          isOpen={isInfoModalOpen}
          onClose={() => setIsInfoModalOpen(false)}
          className=" bg-white dark:bg-gray-800 px-10 w-205    py-10 rounded-lg"
        >
          <ModalHeader>Product Information</ModalHeader>
          <ModalBody>
            <div className="  ">
              <div className=" ">
                <div className=" dark:text-gray-200 text-black flex flex-row flex-wrap items-center   rounded-md justify-between lg:space-x-2  w-full ">
                  {/* /////////////////////////////// . PRODUCT INFO  ///////////////////////////////////////////// */}
                  <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-2  w-full  bg-gray-100 dark:bg-cool-gray-900 px-2  rounded-md">
                    <div className="my-2  ">
                      <span>Brand :</span>
                      <span className="font-semibold">
                        {" "}
                        {infoModalAsset.product.brand}
                      </span>
                    </div>
                    <div className="my-2 ">
                      <span>Model:</span>
                      <span className="font-semibold">
                        {" "}
                        {infoModalAsset.product.model}
                      </span>
                    </div>
                    <div className="my-2 ">
                      <span>Serial Number: </span>
                      <span className="font-semibold">
                        {" "}
                        {infoModalAsset.product.serialno}
                      </span>
                    </div>

                    {infoModalAsset.producttype == "Laptop" ||
                    infoModalAsset.producttype == "Server" ||
                    infoModalAsset.producttype == "Desktop" ? (
                      <>
                        <div className="">
                          <span>Operating System : </span>
                          <span className="font-semibold">
                            {infoModalAsset.product.os}
                          </span>
                        </div>
                      </>
                    ) : null}
                  </div>
                  <br />
                </div>
                {/* <div className="flex flex-row flex-wrap items-center justify-start lg:space-x-2  "> */}
                {/* -------------------CPU and RAM-------------------------- */}
                <div className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:space-x-1 justify-between ">
                  {/* ----------------CPU------------------------------- */}
                  {infoModalAsset.producttype == "Laptop" ||
                  infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">CPU</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {/* <hr className="mb-2 mt-1" /> */}
                        {infoModalAsset.product.cpu.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.cpuname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.cpusno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}
                  {/* ----------------CPU------------------------------- */}
                  {/* ----------------ram------------------------------- */}
                  {infoModalAsset.producttype == "Laptop" ||
                  infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">RAM</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.ram.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.ramname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.ramsno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}
                  {/* </div> */}
                  {/* ----------------ram------------------------------- */}
                  {/* </div> */}
                  {/* <div className="flex flex-col lg:flex-row items-start lg:space-x-1"> */}
                  {/* ----------------fan------------------------------- */}
                  {infoModalAsset.producttype == "Laptop" ||
                  infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ||
                  infoModalAsset.producttype == "Storage" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">FAN</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.fan.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.fanname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.fansno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}
                  {/* ----------------fan------------------------------- */}
                  {/* ----------------motherboard------------------------------- */}

                  {infoModalAsset.producttype == "Laptop" ||
                  infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">Mother-Board</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.motherboard.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 mx-2">
                                <div className="w-full my-1">
                                  <span>{item.motherboardname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.motherboardsno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}
                  {/* ----------------motherboard------------------------------- */}
                  {/* </div>
                <div className="flex flex-col lg:flex-row items-start lg:space-x-1"> */}
                  {/* ----------------hdd------------------------------- */}
                  {infoModalAsset.producttype == "Laptop" ||
                  infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ||
                  infoModalAsset.producttype == "Storage" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">HDD</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.hdd.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.hddname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>S.No:{item.hddsno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------hdd------------------------------- */}

                  {/* ----------------smps------------------------------- */}
                  {infoModalAsset.producttype == "Laptop" ||
                  infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ||
                  infoModalAsset.producttype == "Storage" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">SMPS</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.smps.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.smpsname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.smpssno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}
                  {/* </div> */}

                  {/* ----------------smps------------------------------- */}

                  {/* <div className="flex flex-col lg:flex-row items-start lg:space-x-1"> */}
                  {/* ----------------kbd------------------------------- */}
                  {infoModalAsset.producttype == "Laptop" ||
                  infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ||
                  infoModalAsset.producttype == "Router" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">Keyboard</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.keyboard.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.keyboardname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.keyboardsno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------keyboard------------------------------- */}

                  {/* ----------------mouse------------------------------- */}
                  {infoModalAsset.producttype == "Laptop" ||
                  infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ||
                  infoModalAsset.producttype == "Storage" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">Mouse</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.mouse.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.mousename}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.mousesno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------mouse------------------------------- */}
                  {/* </div>

                <div className="flex flex-col lg:flex-row items-start lg:space-x-1"> */}
                  {/* ----------------monitor------------------------------- */}
                  {infoModalAsset.producttype == "Laptop" ||
                  infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ||
                  infoModalAsset.producttype == "Router" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">Monitor</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.monitor.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.monitorname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.monitorsno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------monitor------------------------------- */}

                  {/* ----------------gcard------------------------------- */}
                  {infoModalAsset.producttype == "Laptop" ||
                  infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">Graphics Card</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.gcard.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.gcardname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.gcardsno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------gcard------------------------------- */}
                  {/* </div> */}

                  {/* <div className="flex flex-col lg:flex-row items-start lg:space-x-1"> */}
                  {/* ----------------enetcard------------------------------- */}
                  {infoModalAsset.producttype == "Laptop" ||
                  infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">ENET Card</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.enetcard.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.enetcardname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.enetcardsno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------enetcard------------------------------- */}

                  {/* ----------------serialcard------------------------------- */}
                  {infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">Serial Card</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.serialcard.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.serialcardname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.serialcardsno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------serialcard------------------------------- */}
                  {/* </div>

                <div className="flex flex-col lg:flex-row items-start lg:space-x-1"> */}
                  {/* ----------------parallelcard------------------------------- */}
                  {infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">Parallel Card</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.parallelcard.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.parallelcardname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.parallelcardsno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------parallelcard------------------------------- */}

                  {/* ----------------hbacard------------------------------- */}
                  {infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Storage" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">HBA Card</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.hbacard.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.hbacardname}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.hbacardsno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------hbacard------------------------------- */}

                  {/* ----------------raidcontroller------------------------------- */}
                  {infoModalAsset.producttype == "Server" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">Raid Controller</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.raidcontroller.map(
                          (item, i) => {
                            return (
                              <div key={i}>
                                <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                  <div className="w-full my-1">
                                    <span>{item.raidcontrollername}</span>
                                  </div>
                                  <div className="w-full my-1">
                                    <span>{item.raidcontrollersno}</span>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------raidcontroller------------------------------- */}
                  {/* </div>
                <div className="flex flex-col lg:flex-row items-start lg:space-x-1"> */}
                  {/* ----------------tapecontroller------------------------------- */}
                  {infoModalAsset.producttype == "Server" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">Tape Controller</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.tapecontroller.map(
                          (item, i) => {
                            return (
                              <div key={i}>
                                <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                  <div className="w-full my-1">
                                    <span>{item.tapecontrollername}</span>
                                  </div>
                                  <div className="w-full my-1">
                                    <span>{item.tapecontrollersno}</span>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------tapecontroller------------------------------- */}

                  {/* ----------------opticaldrive------------------------------- */}
                  {infoModalAsset.producttype == "Server" ||
                  infoModalAsset.producttype == "Desktop" ||
                  infoModalAsset.producttype == "Laptop" ? (
                    <div className=" w-64 text-gray-800 dark:text-gray-200 my-4 bg-gray-100 dark:bg-cool-gray-900 p-2 rounded-md">
                      <>
                        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2 font-semibold">
                          <div className="w-full my-1">Optical Drive</div>
                          <div className="w-full my-1">Serial No.</div>
                        </div>
                        {infoModalAsset.product.opticaldrive.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>{item.opticaldrivename}</span>
                                </div>
                                <div className="w-full my-1 break-all">
                                  <span>{item.opticaldrivesno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  ) : null}

                  {/* ----------------opticaldrive------------------------------- */}

                  {/* ----------------others------------------------------- */}
                  {/* <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                    {true ? (
                      <>
                        <div className="flex flex-row items-center">
                          <div className="font-semibold">
                            <span>others</span>
                          </div>
                        </div>
                        <hr className="mb-2 mt-1" />
                        {infoModalAsset.product.others.map((item, i) => {
                          return (
                            <div key={i}>
                              <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-2">
                                <div className="w-full my-1">
                                  <span>
                                    item.othersname}
                                  </span>
                                </div>
                                <div className="w-full my-1">
                                  <span>{item.otherssno}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    ) : null}
                  </div> */}

                  {/* ----------------others------------------------------- */}
                </div>
                {/* //////////////////////////////////////////////////////////////////////////// */}
              </div>
              {/* //////////////////////////////////////////////////////////////////////////// */}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsInfoModalOpen(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
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
      <SetStatusModal />
      <ReviewSubmit />
      {HistoryModal()}
      {HistoryImgViewModal()}
      {InformationModal()}

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
                value={callStatus}
                onChange={(e) => {
                  setCallStatus(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Call Status
                </option>
                <option value="">All</option>
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
                <TableCell>Call Status</TableCell>
                <TableCell>Assigned Employee</TableCell>
                <TableCell> History</TableCell>
                <TableCell>Product Info</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map((call, i) => (
                <TableRow
                  className={`hover:shadow-lg dark:hover:bg-gray-900 
                    `}
                  key={i}
                  onClick={() => {
                    setActiveRowId(call._id);
                    // console.log("the id is " + call._id);
                    setSelectedProd(call);
                    console.log("SELECTD", call);
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
                    <span>
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
                    </span>
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
                  <TableCell>
                    {call.employeeId ? (
                      <>
                        {call.employeeName}
                        {/* <Button layout="link" size="icon" aria-label="Edit" onClick={()=>setIsEnggModalOpen(true)} className="rounded-full mx-2 ">
                       
                          <EditIcon className="w-5 h-5" aria-hidden="true" />
                        
                      </Button> */}
                      </>
                    ) : (
                      <>
                        {/* <Button onClick={()=>setIsEnggModalOpen(true)}> */}
                        Not Assigned
                        {/* </Button> */}
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-start items-center space-x-2">
                      {/* <Link
                        key={call._id}
                        to={`/app/call/updatecall/${call._id}/${call.assetId._id}`}
                      >
                        <Button
                          layout="outline"
                          onClick={() => {}}
                          className=" "
                        >
                          Update
                        </Button>
                      </Link> */}
                      <Button
                        onClick={() => {
                          setViewId(i);
                          setHistoryModalOpen(true);
                        }}
                        className=" text-gray-600 dark:text-gray-200 px-3 py-3 text-sm bg-gray-200 dark:bg-gray-700 tetx-white rounded-md font-semibold cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800"
                        // layout="outline"
                      >
                        History
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={() => {
                        setInfoModalAsset(call.assetId);
                        setIsInfoModalOpen(true);
                      }}
                      className=" text-gray-600 dark:text-gray-200 px-3 py-3 text-sm bg-gray-200 dark:bg-gray-700 tetx-white rounded-md font-semibold cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800"
                    >
                      Product
                    </span>
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

export default CustomerViewCalls;
