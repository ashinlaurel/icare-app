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
import { BottomBarContext } from "../../context/BottomBarContext";
import CustomerSelection from "../../components/Modal/AssetFilters/CustomerSelection";
import { Link } from "react-router-dom";
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
/////////////----------------->>>>>> bug <<<<<------------customerList refresh-------------------------

function RegisterCall() {
  let history = useHistory();

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isReqFieldModal, setIsReqFieldModal] = useState(false);
  const [isAssetModal, setIsAssetModal] = useState(false);
  const { setTopHeading } = useContext(TopBarContext);

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

  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } = useContext(
    BottomBarContext
  );
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
      note: "Call has been registered",
      actionTaken: "Nil",
    },
  ]);

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

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
    setTopHeading("Assets Management");
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
          business: Business,
          producttype: product,
          customer: customer,
          account: account,
          unitId: unit._id,
          customerId: customer._id,
          accountId: account._id,
          searchtype: searchtype,
          searchquery: searchquery,
        },
      };
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/asset/${Emp.getId()}/getall`,
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

  // console.log("SELECTED PROD",selectedprod,"NOOOO");

  const Asset = () => {
    return (
      <>
        {/* ---------------------Customer Selection Modal----------------------------------------- */}
        <CustomerSelection
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
        />
        {/* ---------------------Customer Selection Modal----------------------------------------- */}

        {/* {floatbox ? <AssetFloat /> : null} */}
        <div className="mb-64 mt-1">
          <div className="dark:text-white flex items-center font-bold my-2 text-xl">
            Pick Asset
          </div>
          {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
          <div className="">
            {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
            <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-6 ">
              <div class="relative  ">
                <button
                  class=" shadow-md appearance-none h-full rounded border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                  onClick={() => {
                    setIsModalOpen(!isModalOpen);
                  }}
                  // value={sortBy}
                  // onChange={onSortToggle}
                >
                  Pick Customer
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
              </div>

              <div class="relative mx-5 ">
                <select
                  class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                  value={Business}
                  onChange={(e) => {
                    setBusiness(e.target.value);
                  }}
                >
                  <option value="" disabled selected>
                    Business Type
                  </option>
                  <option value="">All</option>
                  <option value="AMC">AMC</option>
                  <option value="WTY">Warranty</option>
                  <option value="NOS">NOS</option>
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
                  {searchtype ? searchlabel : "Pick Search Type"}
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
                      setSearchType("kbdsno");
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
                    placeholder="Search"
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
                  <TableCell>Business</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Product Serial</TableCell>
                  <TableCell>Contract From</TableCell>
                  <TableCell>Contract To</TableCell>
                  <TableCell>Purchase Number</TableCell>
                  <TableCell>Purchase Date</TableCell>
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
                      setSelectedProd(user);
                      setAssetDetails(user);
                      setBBarOpen(1);
                      // console.log(user.product.keyboard[0].kbdname);
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
                    <TableCell>
                      <Badge
                        type={user.business == "AMC" ? "primary" : "success"}
                      >
                        {user.business}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.producttype}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.product.serialno}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {moment(user.contractfrom).format("DD/MM/YYYY")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {moment(user.contractto).format("DD/MM/YYYY")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.ponumber}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {moment(user.podate).format("DD/MM/YYYY")}
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
    date: "",
    contactPerson: "",
    phone: "",
    callStatus: "Pending for allocation",
    problem: "",
  };
  const [values, setValues] = useState(valobj);
  const [err, setErr] = useState({});

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
        url: `${API}/call/${Emp.getId()}/callsbydate`,
        method: "POST",
        data: payload,
      });
    } catch (error) {
      throw error;
    }

    let year = moment(date).format("YY");
    let month = moment(date).format("MM");
    let day = moment(date).format("DD");
    let callnumber = thecallcount.data;
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

  const submitCall = async () => {
    if (
      (values.callNo === "") |
      // (values.contactPerson === "") |
      // (values.phone === "") |
      (values.problem === "")
    ) {
      setIsReqFieldModal(true);
      return;
    }
    if (JSON.stringify(selectedprod) == JSON.stringify({})) {
      setIsAssetModal(true);
      return;
    }
    // e.preventDefault();
    const newcall = {
      callNo: values.callNo,
      date: values.date,
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
      // employeeId:""
    };
    console.log("CALL->", newcall);
    try {
      await axios({
        url: `${API}/call/${Emp.getId()}/create`,
        method: "POST",
        data: newcall,
      });
      setIsReviewModalOpen(true);
      setValues(valobj);
      console.log("Done");
    } catch (error) {
      console.log(error);
    }
  };

  const ReviewSubmit = () => {
    return (
      <>
        <Modal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        >
          <ModalHeader>Created Successfully!</ModalHeader>
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

  const addForm = () => {
    return (
      <div className="px-4 py-3 mt-4 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Call Information</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex space-x-3">
          <>
            <div className="flex flex-col w-full">
              <Label className="w-full">
                <span>Call Number*</span>
                <Input
                  disabled
                  className="mt-1"
                  type="text"
                  value={values.callNo}
                  onChange={handleChange("callNo")}
                />
              </Label>
              {/* <HelperText valid={false}>{err.callNo}</HelperText> */}
            </div>
          </>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Date*</span>
              <Input
                className="mt-1"
                type="date"
                value={values.date}
                onChange={handleChange("date")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.username}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Contact Person*</span>
              <Input
                className="mt-1"
                type="email"
                placeholder=""
                value={values.contactPerson}
                onChange={handleChange("contactPerson")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Phone Number*</span>
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
        <div className="flex-row flex space-x-3 ">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Problem Description*</span>
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
    </>
  );
}

export default RegisterCall;
