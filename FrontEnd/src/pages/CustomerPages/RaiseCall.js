import React, { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { API } from "../../backendapi";
import moment from "moment";

import Emp from "../../helpers/auth/EmpProfile";

import {
  Input,
  HelperText,
  Label,
  Button,
  Badge,
  Select,
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Pagination,
  Dropdown,
  DropdownItem,
} from "@windmill/react-ui";

import { signup, signin, authenticate } from "../../helpers/auth";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";
import { TopBarContext } from "../../context/TopBarContext";

import { useHistory } from "react-router-dom";

// --------ASSET
import { Link } from "react-router-dom";
import { TickIcon } from "../../icons";
import Cust from "../../helpers/auth/CustProfile";
/////////////----------------->>>>>> bug <<<<<------------customerList refresh-------------------------

function RaiseCall() {
  let history = useHistory();

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isReqFieldModal, setIsReqFieldModal] = useState(false);
  const [isAssetModal, setIsAssetModal] = useState(false);
  const [IsassetexistModal, setIsassetexistModal] = useState(false);
  const [assetexistmessage, setAssetexistmessage] = useState("");
  const { setTopHeading } = useContext(TopBarContext);
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

  //---------------------------------- ASSETS VIEW STATES
  // *
  // *
  // *
  // *
  // *
  // *
  // *
  // *

  // Bottom bar stuff

  // table variable styles
  const [activerowid, setActiveRowId] = useState(0);

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // dropdown and modals
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);

  // filterhooks
  const [Business, setBusiness] = useState("");
  const [product, setProduct] = useState("");
  const [unit, setUnit] = useState({ _id: "", unitName: "" });
  const [theunitdetails, setTheUnitDetails] = useState({});
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });

  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  // call history
  const [callhistory, setCallHistory] = useState([
    {
      date: "",
      callStatus: "0",
      engineer: "Yet To Be Assigned",
      callAttendDate: "Nil",
      startOfService: "Nil",
      endOfService: "Nil",
      note: `Call has been registered (Customer:${localStorage.getItem(
        "name"
      )})`,
      actionTaken: "Nil",
    },
  ]);

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);
  const [successfulCallNo, setSuccessfulCallNo] = useState("");

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // -------------------------------
  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    setTopHeading("Raise Call");
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
          business: "",
          producttype: product,
          // customer: customer,
          // account: account,
          unitId: "",
          customerId: "",
          accountId: "",
          searchtype: searchtype,
          searchquery: searchquery,
        },
      };
      console.log(Cust.getRole(), Cust.getId());
      if (Cust.getRole() == 1) {
        payload.filters.customerId = Cust.getId();
      } else if (Cust.getRole() == 2) {
        payload.filters.accountId = Cust.getId();
      } else return;
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/asset/getallbycust`,
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
  }, [page, Business, product, refresh]);

  // ----------------------Unit Details ------------------------------
  // useEffect(() => {
  //   console.log("-----------------------unit details ------------------------");
  //   console.log(theunitdetails);
  //   setValues({
  //     ...values,
  //     contactPerson: theunitdetails.contactPerson,
  //     phone: theunitdetails.contactNo,
  //   });
  // }, [refresh]);

  const Asset = () => {
    return (
      <>
        {/* ---------------------Customer Selection Modal----------------------------------------- */}

        {/* ---------------------Customer Selection Modal----------------------------------------- */}

        {/* {floatbox ? <AssetFloat /> : null} */}
        <div className="mb-64 mt-1">
          <div className="dark:text-white flex items-center font-bold my-2 text-xl">
            Pick Faulty Product
          </div>
          {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
          <div className="">
            {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
            <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-6 ">
              {/* ---------------------------Product Drop Down-------------------------------------- */}
              <div className="relative z-40 ">
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  aria-label="Notifications"
                  aria-haspopup="true"
                >
                  {product ? product : "Pick Product"}
                </button>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("");
                    }}
                  >
                    <span>All</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Console");
                    }}
                  >
                    <span>Console</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("DMP");
                    }}
                  >
                    <span>DMP</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Inkjet");
                    }}
                  >
                    <span>Inkjet</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("KVM");
                    }}
                  >
                    <span>KVM</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Laptop");
                    }}
                  >
                    <span>Laptop</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Laser");
                    }}
                  >
                    <span>Laser</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("LMP");
                    }}
                  >
                    <span>LMP</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Module");
                    }}
                  >
                    <span>Module</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Router");
                    }}
                  >
                    <span>Router</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Scanner");
                    }}
                  >
                    <span>Scanner</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Server");
                    }}
                  >
                    <span>Server</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Desktop");
                    }}
                  >
                    <span>Desktop</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Storage");
                    }}
                  >
                    <span>Storage</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Switch");
                    }}
                  >
                    <span>Switch</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("UPS");
                    }}
                  >
                    <span>UPS</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpen(false);
                      setProduct("Others");
                    }}
                  >
                    <span>Others</span>
                  </DropdownItem>
                </Dropdown>
              </div>

              {/* -------------------------------Search Type--------------------------------------- */}
              <div className="relative ">
                <button
                  onClick={() => {
                    setIsOpenTwo(!isOpenTwo);
                  }}
                  className="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  aria-label="Notifications"
                  aria-haspopup="true"
                >
                  {searchtype ? searchlabel : "Pick Item Type"}
                </button>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
                <Dropdown
                  isOpen={isOpenTwo}
                  onClose={() => setIsOpenTwo(false)}
                >
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("");
                      setSearchLabel("");
                      setDisabler(true);
                      setSearchQuery("");
                      setRefresh(!refresh);
                    }}
                  >
                    <span>All</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("prodserial");
                      setSearchLabel("Product Serial");
                      setDisabler(false);
                    }}
                  >
                    <span>Product Serial</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("keyboardsno");
                      setSearchLabel("Keyboard Serial");
                      setDisabler(false);
                    }}
                  >
                    <span>Keyboard Serial</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("mousesno");
                      setSearchLabel("Mouse Serial");
                      setDisabler(false);
                    }}
                  >
                    <span>Mouse Serial</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("motherboardsno");
                      setSearchLabel("Motherboard Serial");
                      setDisabler(false);
                    }}
                  >
                    <span>Motherboard Serial</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("monitorsno");
                      setSearchLabel("Monitor Serial");
                      setDisabler(false);
                    }}
                  >
                    <span>Monitor Serial</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("hddsno");
                      setSearchLabel("HDD Serial");
                      setDisabler(false);
                    }}
                  >
                    <span>HDD Serial</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("cpusno");
                      setSearchLabel("CPU Serial");
                      setDisabler(false);
                    }}
                  >
                    <span>CPU Serial</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("ramsno");
                      setSearchLabel("Ram Serial");
                      setDisabler(false);
                    }}
                  >
                    <span>RAM Serial</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("smpssno");
                      setSearchLabel("SMPS Serial");
                      setDisabler(false);
                    }}
                  >
                    <span>SMPS Serial</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("fansno");
                      setSearchLabel("Fan Serial");
                      setDisabler(false);
                    }}
                  >
                    <span>Fan Serial</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setIsOpenTwo(false);
                      setSearchType("opticaldrivesno");
                      setSearchLabel("Optical Drive Serial");
                      setDisabler(false);
                    }}
                  >
                    <span>Optical Drive Serial</span>
                  </DropdownItem>
                </Dropdown>
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
                    placeholder="Search Serial Number"
                    disabled={disabler}
                    class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  />
                </form>
              </div>
            </div>
            {/* ----------------------------------------Row 2 -------------------------------------------------------------------- */}
            {/* <div className="my-4 flex ">
            <div class="relative ">
              <select
                class=" shadow-md appearance-none h-full rounded border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                // value={sortBy}
                // onChange={onSortToggle}
              >
                <option value="TIME_ASC">Time(Latest)</option>
                <option value="TIME_DESC">Time(Oldest)</option>
                <option value="NAME_ASC">Name(A-Z)</option>
                <option value="NAME_DESC">Name(Z-A)</option>
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
          </div> */}
          </div>
          {/* ----------------------------------------------Table----------------------------------------------------- */}
          <TableContainer className="mt-4">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>Customer</TableCell>
                  <TableCell>Unit</TableCell>
                  {/* <TableCell>Business</TableCell> */}
                  <TableCell>Product</TableCell>
                  <TableCell>Product Serial</TableCell>
                  {/* <TableCell>Contract From</TableCell> */}
                  {/* <TableCell>Contract To</TableCell> */}
                  <TableCell>Purchase Number</TableCell>
                  <TableCell>Purchase Date</TableCell>
                  <TableCell>Selected</TableCell>
                  <TableCell>Info</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.map((user, i) => (
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-900 ${
                      activerowid == user._id
                        ? "bg-gray-100 shadow-lg dark:bg-gray-900"
                        : "white"
                    } `}
                    key={i}
                    onClick={() => {
                      setActiveRowId(user._id);
                      // console.log("the id is " + user._id);
                      setSelectedProd(user);
                      // setAssetDetails(user);
                      // console.log(user.product.keyboard[0].keyboardname);
                    }}
                  >
                    <TableCell className="w-8">
                      <div className="flex items-center text-sm ">
                        {/* <Avatar
                        className="hidden ml-2 mr-3 md:block"
                        src="https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg"
                        alt="User image"
                      /> */}
                        <div>
                          <p className="font-semibold">{user.customerName}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {user.accountName}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.unitName}</span>
                    </TableCell>
                    {/* <TableCell>
                      <Badge
                        type={user.business == "AMC" ? "primary" : "success"}
                      >
                        {user.business}
                      </Badge>
                    </TableCell> */}
                    <TableCell>
                      <span className="text-sm">{user.producttype}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.product.serialno}</span>
                    </TableCell>
                    {/* <TableCell>
                      <span className="text-sm">
                        {moment(user.contractfrom).format("DD/MM/YYYY")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {moment(user.contractto).format("DD/MM/YYYY")}
                      </span>
                    </TableCell> */}
                    <TableCell>
                      <span className="text-sm">{user.ponumber}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {moment(user.podate).format("DD/MM/YYYY")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm ">
                        {user._id == selectedprod._id ? (
                          <TickIcon
                            fill="green"
                            className="w-5 h-5"
                            aria-hidden="true"
                          />
                        ) : null}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        onClick={() => {
                          setInfoModalAsset(user);
                          setIsInfoModalOpen(true);
                        }}
                        className=" text-gray-600 dark:text-gray-200 px-3 py-3 text-sm bg-gray-200 dark:bg-gray-700 tetx-white rounded-md font-semibold cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800"
                      >
                        More Info
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
            <div className="flex justify-end">
              <Button className=" mb-10 my-2 " onClick={submitCall}>
                Register Call
              </Button>
            </div>
          </TableContainer>

          {/* ----------------------------------------------Table----------------------------------------------------- */}
        </div>

        {/* ------------------------------------Bottom Bar---------------------------------- */}
      </>
    );
  };
  // *
  // *
  // *
  // *
  // *
  // *
  // *
  //---------------------------------- ASSETS VIEW STATES

  let valobj = {
    //both
    callNo: "",
    date: moment().format("YYYY-MM-DD"),
    contactPerson: localStorage.getItem("name"),
    phone: localStorage.getItem("phone"),
    callStatus: "Pending for allocation",
    problem: "",
    time: moment().format("HH:MM"),
  };
  const [values, setValues] = useState(valobj);

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Register Call");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  const handleChange = (name) => (e) => {
    let thedate = e.target.value;
    setValues({ ...values, [name]: e.target.value });
    if (name == "date") {
      callNumberSetter(thedate);
    }
  };

  const callNumberSetter = async (date) => {
    let payload = {
      date: date,
    };
    let thecallcount = 0;
    try {
      thecallcount = await axios({
        url: `${API}/call/custcallsbydate`,
        method: "POST",
        data: payload,
      });
    } catch (error) {
      throw error;
    }

    let year = moment(date).format("YY");
    let month = moment(date).format("MM");
    let day = moment(date).format("DD");
    let callnumber = thecallcount.data + 1;
    if (callnumber < 10) {
      callnumber = "0" + callnumber;
    }

    let thestring = year + month + day + callnumber;
    setValues({ ...values, callNo: thestring, date: date });
    // ------history management
    let temp = callhistory;
    temp[0].date = date;
    setCallHistory(temp);

    console.log(thestring);
  };

  useEffect(() => {
    callNumberSetter(moment());
  }, []);

  const submitCall = async () => {
    if (
      values.callNo === "" ||
      // (values.contactPerson === "") |
      // (values.phone === "") |
      values.problem === "" ||
      values.date === "" ||
      values.time === ""
    ) {
      setIsReqFieldModal(true);
      return;
    }
    if (JSON.stringify(selectedprod) == JSON.stringify({})) {
      setIsAssetModal(true);
      return;
    }
    // e.preventDefault();
    setSuccessfulCallNo(values.callNo);
    const newcall = {
      callNo: values.callNo,
      date: values.date,
      time: values.time,
      contactPerson: values.contactPerson,
      phone: values.phone,
      problem: values.problem,
      unitId: selectedprod.unitId,
      unitName: selectedprod.unitName,
      accountId: selectedprod.accountId,
      accountName: selectedprod.accountName,
      customerId: selectedprod.customerId,
      customerName: selectedprod.customerName,
      assetId: selectedprod._id,
      callStatus: 0,
      history: callhistory,
      regtimestamp: moment().format(),
      // employeeId:""
    };
    console.log("CALL->", newcall);
    try {
      await axios({
        url: `${API}/call/${Cust.getId()}/customercreate`,
        method: "POST",
        data: newcall,
      });
      setIsReviewModalOpen(true);
      setValues(valobj);
      console.log("Done");
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data.errid == 1) {
        setAssetexistmessage(error.response.data.message);
        setIsassetexistModal(true);
      }
    }
  };

  const ReviewSubmit = () => {
    return (
      <>
        <Modal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        >
          <ModalHeader>
            Created Call No. {successfulCallNo} Successfully!
          </ModalHeader>
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

  const ReqFieldErrModal = () => {
    return (
      <>
        <Modal
          isOpen={isReqFieldModal}
          onClose={() => setIsReqFieldModal(false)}
        >
          <ModalHeader>Required fields are not filled!</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsReqFieldModal(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const AssetSelectedModal = () => {
    return (
      <>
        <Modal isOpen={isAssetModal} onClose={() => setIsAssetModal(false)}>
          <ModalHeader>Asset is not selected!</ModalHeader>
          <ModalBody>Please select asset before registering call.</ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsAssetModal(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const AssetExistsModal = () => {
    return (
      <>
        <Modal
          isOpen={IsassetexistModal}
          onClose={() => setIsassetexistModal(false)}
        >
          <ModalHeader>Call already raised for asset!</ModalHeader>
          <ModalBody>
            Call No {assetexistmessage} already raised for asset.
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsassetexistModal(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  //  -------------------INFORMATION MODAL --------------------
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
  const addForm = () => {
    return (
      <div className="px-4 py-3 mt-4 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <div className="flex flex-row w-full text-xl align-middle">
            <span className=" text-black dark:text-gray-50 font-semibold">
              CALL NUMBER:
            </span>
            <span className="dark:text-purple-400 text-purple-700 font-bold">
              {values.callNo}
            </span>

            {/* <HelperText valid={false}>{err.callNo}</HelperText> */}
          </div>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex space-x-1">
          {/* <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Date*</span>
              <Input
                className="mt-1"
                type="date"
                value={values.date}
                onChange={handleChange("date")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Time*</span>
              <Input
                className="mt-1"
                type="time"
                value={values.time}
                onChange={handleChange("time")}
              />
            </Label>
          </div> */}
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span className="font-semibold">Contact Person*</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.contactPerson}
                onChange={handleChange("contactPerson")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span className="font-semibold">Phone Number*</span>
              <Input
                className="mt-1"
                type="text"
                value={values.phone}
                onChange={handleChange("phone")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.username}</HelperText> */}
          </div>
        </div>
        {/* ----------------------Row 2 ----------------------------- */}
        <div className="flex-row flex space-x-1 ">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span className="font-semibold"> Problem Description*</span>
              <Input
                className="mt-1"
                type="text"
                value={values.problem}
                onChange={handleChange("problem")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.username}</HelperText> */}
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////// */}
        {/* <Label className="font-bold mt-2 mb-1">
        
        </Label> */}

        {/* ///////////////////////////////////////////////////////// */}

        <>
          {/* <Button
              onClick={() => setIsModalOpen(true)}
              aria-label="Notifications"
              aria-haspopup="true"
              className="mt-4 mr-2"
            >
              {customer.customerName === "" ? (
                <>Select Associations</>
              ) : (
                <>Customer: {customer.customerName}</>
              )}
            </Button> */}
        </>
      </div>
    );
  };

  return (
    <>
      {/* <PageTitle>Add Customer</PageTitle> */}
      {addForm()}
      {Asset()}

      {/* {productPicker()} */}
      {ReviewSubmit()}
      {ReqFieldErrModal()}
      {AssetSelectedModal()}
      {AssetExistsModal()}
      {InformationModal()}
    </>
  );
}

export default RaiseCall;
