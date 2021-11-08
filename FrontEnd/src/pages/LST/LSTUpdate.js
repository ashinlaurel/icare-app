import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";

import Emp from "../../helpers/auth/EmpProfile";
import { EditIcon, TrashIcon, Remove } from "../../icons";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";
import UnitListModal from "../../components/Modal/UnitListModal";
import SectionTitle from "../../components/Typography/SectionTitle";

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
  HelperText,
  Label,
  Select,
  Card,
  CardBody,
} from "@windmill/react-ui";

import { API } from "../../backendapi";
import CustomerSelection from "../../components/Modal/AssetFilters/CustomerSelection";
import { BottomBarContext } from "../../context/BottomBarContext";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";
import { CloseIcon } from "../../icons";
import { useParams, useHistory } from "react-router-dom";

function LST() {
  let { id } = useParams();
  const history = useHistory();
  // console.log(id);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } =
    useContext(BottomBarContext);
  const [vendorsearch, setVendorsearch] = useState("");
  // table variable styles
  const [activerowid, setActiveRowId] = useState(-1);

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [SelectedItems, setSelectedItems] = useState([]);
  const [initialSelectedItems, setinitialSelectedItems] = useState([]);
  // dropdown [] modals
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);

  // filterhooks
  const [LSTtype, setLSTtype] = useState("Normal");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [LSTNo, setLSTNo] = useState("");
  // const [customer, setCustomer] = useState("");
  const [date, setDate] = useState(moment().format());
  const [condition, setCondition] = useState("Available");

  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  //show table
  const [showInvTable, setShowInvTable] = useState(false);

  //modal
  const [messageModal, setMessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  //vendors
  const [isVendorModalopen, setIsVendorModalopen] = useState(false);
  const [vendors, setVendors] = useState([]);
  const defVendor = {
    _id: "",
    name: "",
    aadharNo: "",
    PANNo: "",
    GSTNo: "",
  };
  const [selectedVendor, setselectedVendor] = useState(defVendor);

  const [isVendor, setIsVendor] = useState(false);

  //customer
  const [unit, setUnit] = useState({ _id: "", unitName: "" });
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [unitName, setUnitName] = useState("");
  const [accountName, setAccountName] = useState("");

  //GET LST DEETS
  const getLST = async () => {
    try {
      let res = await axios.post(`${API}/lst/${Emp.getId()}/getbyid`, {
        id: id,
      });
      console.log("lst", res.data);
      setLSTtype(res.data.LSTtype);
      setLocation(res.data.from);
      setToLocation(res.data.to);
      setLSTNo(res.data.LSTNo);
      setDate(res.data.date);
      setSelectedItems(res.data.invItems);
      setinitialSelectedItems(res.data.invItems);
      setCMRRValues(res.data.CMRRItems);
      setCustomerName(res.data.customerName);
      setAccountName(res.data.accountName);
      setUnitName(res.data.unitName);

      //asset
    } catch (err) {
      console.log("assetFind Error", err);
    }
  };

  useEffect(() => {
    getLST();
  }, []);

  ////////

  // CMRR

  const CMRRinvdetails = {
    type: "",
    name: "",
    sno: "",
    condition: "Good",
    invnumber: "",
    location: "In Transit",
    //-------
    caseId: "imprest",
    systype: "item",
  };
  const [CMRRvalues, setCMRRValues] = useState([CMRRinvdetails]);

  async function getVendorList() {
    let payload = {
      filters: {
        searchquery: vendorsearch,
      },
    };
    try {
      let response = await axios({
        url: `${API}/vendor/${Emp.getId()}/getAll`,
        method: "POST",
        data: payload,
      });
      console.log(response.data.out);
      setVendors(response.data.out);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getVendorList();
  }, [vendorsearch]);

  // Getting data states

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // LST NUM
  const LSTNumberSetter = async (date, from) => {
    console.log(date, from);
    if (from == "" || date == "") return;
    let payload = {
      from: from,
      date: date,
    };
    let thecallcount = 0;
    try {
      thecallcount = await axios({
        url: `${API}/lst/${Emp.getId()}/lstbydate`,
        method: "POST",
        data: payload,
      });
    } catch (error) {
      throw error;
    }

    let locstr;
    from == "Trivandrum"
      ? (locstr = "TVM")
      : from == "Kottayam"
      ? (locstr = "KTM")
      : (locstr = "CLT");

    let year = moment(date).format("YY");
    let month = moment(date).format("MM");
    let day = moment(date).format("DD");
    let callnumber = thecallcount.data + 1;
    if (callnumber < 10) {
      callnumber = "00" + callnumber;
    } else if (callnumber < 100) {
      callnumber = "0" + callnumber;
    }
    console.log(thecallcount.data);

    let thestring = "ICS" + locstr + year + callnumber;
    setLSTNo(thestring);
    // setValues({ ...values, callNo: thestring, date: date });
    // // ------history management
    // let temp = callhistory;
    // temp[0].date = date;
    // setCallHistory(temp);

    // console.log(thestring);
  };

  // on page change, load new sliced data
  // here you would make another server request for new data

  // -------Enabling Bottom Bar----
  //   useEffect(() => {
  //     setBBarOpen(1);
  //     return () => {
  //       setBBarOpen(0);
  //       setAssetDetails({});
  //     };
  //   }, []);
  // -------------------------------
  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    setTopHeading("Edit LST");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  useEffect(() => {
    // setDate(moment(new Date()).format("DD/MM/YYYY"));
    // Using an IIFE
    thegetter();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, location, condition, type, refresh]);

  async function thegetter() {
    console.log("getter called");
    let payload = {
      pages: {
        page: page,
        limit: resultsPerPage,
      },
      filters: {
        type: type,
        location: location,
        condition: condition,
        searchtype: searchtype,
        searchquery: searchquery,
      },
    };
    // console.log(`${API}/asset/${Emp.getId()}/getall`);

    try {
      let response = await axios({
        url: `${API}/inventory/${Emp.getId()}/getall`,
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
  }

  console.log(selectedprod);

  const updateInventory = async () => {
    if (LSTNo == "") {
      setModalMessage("LST Number necessary");
      setMessageModal(true);
      return;
    }
    if (date == "") {
      setModalMessage("Date Necessary");
      setMessageModal(true);
      return;
    }
    // if (location == toLocation) {
    //   setModalMessage("From and to Location is same!");
    //   setMessageModal(true);
    //   return;
    // }
    if (location == "") {
      setModalMessage("From location not selected");
      setMessageModal(true);
      return;
    }
    if (toLocation == "") {
      setModalMessage("To location not selected");
      setMessageModal(true);
      return;
    }
    if (LSTtype == "CMRR") {
      console.log(CMRRvalues);
      MakeCMRR();
      return;
    }
    if (SelectedItems.length == 0) {
      setModalMessage("No items selected");
      setMessageModal(true);
      return;
    }
    // if (LSTtype == "Customer") {
    //   if (customer._id == "") {
    //     setModalMessage("Customer Not Selcted");
    //     setMessageModal(true);
    //     return;
    //   }
    //   if (account._id == "") {
    //     setModalMessage("Account Not Selcted");
    //     setMessageModal(true);
    //     return;
    //   }
    //   if (unit._id == "") {
    //     setModalMessage("Unit Not Selcted");
    //     setMessageModal(true);
    //     return;
    //   }
    // }

    let invIds = [];
    SelectedItems.map(async (item) => {
      invIds.push(item._id);
    });

    let lst = {
      invItems: invIds,
    };

    console.log("LST", lst);

    try {
      await axios({
        url: `${API}/lst/${Emp.getId()}/update`,
        method: "POST",
        data: { id: id, update: lst },
      });
      // setIsReviewModalOpen(true);
      //////////////////// UPDATE INVENTORY
      let olditems = initialSelectedItems;
      let newitems = SelectedItems;
      // filter out items in newitems not in old items
      let toremove = olditems.filter((item) => {
        return !newitems.some((newitem) => newitem._id == item._id);
      });
      let toadd = newitems.filter((item) => {
        return !olditems.some((olditem) => olditem._id == item._id);
      });
      console.log("toremove", toremove);
      console.log("toadd", toadd);

      toadd.map(async (item) => {
        // invIds.push(item._id);
        // ----history ---
        let newhistory = {
          histtype: "lst",
          date: date,
          location: "In Transit",
          callId: "Nil",
          assetId: "Nil",
          status: item.condition,
          note: `Item sent from ${location} to ${toLocation} (LST Edited on ${moment(
            new Date()
          ).format("DD/MM/YY")})`,
        };
        const data = {
          id: item._id,
          update: {
            location: "In transit",
            caseId: item.caseId,
            $push: { history: newhistory },
            LSTtype: LSTtype,
            // LSTCustomer: "",
          },
        };
        // if (LSTtype == "Customer") data.update.LSTCustomer = customer;
        console.log("PAYLOAD", data);
        try {
          await axios({
            url: `${API}/inventory/${Emp.getId()}/invupdate`,
            method: "POST",
            data: data,
          });
          // setIsReviewModalOpen(true);
          console.log("Done");
        } catch (error) {
          console.log(error);
          throw error;
        }
      });
      toremove.map(async (item) => {
        // invIds.push(item._id);
        // ----history ---
        let newhistory = {
          histtype: "lst",
          date: date,
          location: location,
          callId: "Nil",
          assetId: "Nil",
          status: item.condition,
          note: `Item Removed from LST (${LSTNo}) (LST Edited on ${moment(
            new Date()
          ).format("DD/MM/YY")})`,
        };
        const data = {
          id: item._id,
          update: {
            location: location,
            caseId: "Nil",
            $push: { history: newhistory },
            LSTtype: LSTtype,
            LSTCustomer: "",
          },
        };
        // if (LSTtype == "Customer") data.update.LSTCustomer = customer;
        console.log("PAYLOAD", data);
        try {
          await axios({
            url: `${API}/inventory/${Emp.getId()}/invupdate`,
            method: "POST",
            data: data,
          });
          // setIsReviewModalOpen(true);
          console.log("Done");
          // history.push("/lst");
        } catch (error) {
          console.log(error);
          throw error;
        }
      });

      console.log("Done");
      setModalMessage("LST Saved!");
      setTimeout(() => history.push("/app/lst/history"), 2000);
      // setLocation("")
      setToLocation("");
      setDate("");
      setselectedVendor(defVendor);
      LSTNumberSetter(date, location);
      // setData([]);
      setMessageModal(true);
      setSelectedItems([]);
      thegetter();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const MakeCMRR = async () => {
    let lst = {
      from: location,
      to: toLocation,
      LSTNo: LSTNo,
      date: date,
      invItems: [],
      status: "In Transit",
      LSTtype: LSTtype,
      CMRRItems: CMRRvalues,
    };

    console.log("LST", lst);
    try {
      await axios({
        url: `${API}/lst/${Emp.getId()}/update`,
        method: "POST",
        data: { id: id, update: lst },
      });
      // setIsReviewModalOpen(true);
      console.log("Done");
      setModalMessage("LST Submitted");
      // setLocation("")
      setToLocation("");
      setDate("");
      setselectedVendor(defVendor);
      // setData([]);
      setCMRRValues([CMRRinvdetails]);
      setMessageModal(true);
      setSelectedItems([]);
      thegetter();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const VendorModal = () => {
    return (
      <>
        <Modal
          isOpen={isVendorModalopen}
          onClose={() => setIsVendorModalopen(false)}
        >
          <ModalHeader>
            <tr>
              <TableCell>Pick Vendor</TableCell>
              {/* <TableCell>Unit</TableCell> */}
              {/* <TableCell>Status</TableCell>
              <TableCell>Date</TableCell> */}
            </tr>
            <tr>
              <TableCell>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    className="block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Search Customers"
                    onChange={(e) => {
                      setVendorsearch(e.target.value);
                    }}
                  />
                </form>
              </TableCell>
            </tr>
          </ModalHeader>
          <ModalBody className="overflow-y-scroll h-64">
            <TableContainer>
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Customer</TableCell>
                    {/* <TableCell>Unit</TableCell> */}
                    {/* <TableCell>Status</TableCell>
              <TableCell>Date</TableCell> */}
                  </tr>
                </TableHeader>
                <TableBody>
                  {vendors.map((user, i) => (
                    <TableRow
                      key={i}
                      className="hover:bg-purple-900 "
                      onClick={() => {
                        console.log(user);
                        setselectedVendor(user);
                        setIsVendorModalopen(false);
                      }}
                    >
                      <TableCell>
                        <div>
                          <div>
                            <p className="font-semibold">{user.name}</p>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsVendorModalopen(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const invTable = () => {
    return (
      <div className="dark:bg-gray-700 bg-gray-100 px-2 py-2 rounded-lg">
        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 ">
            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Item Type
                </option>
                <option value="">All</option>
                <option value="mouse">Mouse</option>
                <option value="keyboard">Keyboard</option>
                <option value="monitor">Monitor</option>
                <option value="cpu">Cpu</option>
                <option value="ram">Ram</option>
                <option value="fan">Fan</option>
                <option value="motherboard">Motherboard</option>
                <option value="smps">SMPS</option>
                <option value="hdd">HDD</option>
                {/* <option value="SMPS">SMPS</option> */}
                <option value="gcard">Gcard</option>
                <option value="enetcard">Enet Card</option>
                <option value="serialcard">Serial Card</option>
                <option value="paralellcard">Paralell Card</option>
                <option value="opticaldrive">Optical Drive</option>
                <option value="others">Others</option>
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

            {/* ---------------------------Condition Drop Down-------------------------------------- */}
            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={condition}
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
              >
                <option value="" disabled>
                  Condition
                </option>
                <option value="">All</option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
                <option value="Used">Used</option>
                <option value="Available" selected>
                  Available
                </option>
                <option value="Defective">Defective</option>
                <option value="Damaged">Damaged</option>
                <option value="DOA">DOA</option>
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
                  placeholder="Search"
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
                <TableCell>Category</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Serial Number</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Stock Type</TableCell>
                <TableCell>Wty.</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Add</TableCell>
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
                    setActiveRowId(i);
                    // console.log("the id is " + user._id);
                    // setSelectedProd(user);
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
                        <p className="font-semibold">{capitalize(user.type)}</p>
                        {/* <p className="text-xs text-gray-600 dark:text-gray-400">
                          {user.accountName}
                        </p> */}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.name}</span>
                  </TableCell>

                  <TableCell>
                    <span className="text-sm">{user.sno}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.location}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.stocktype}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.expirydate}</span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      type={user.condition == "Good" ? "primary" : "danger"}
                    >
                      {user.condition}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      layout="outline"
                      className="dark:border-green-700 border-green-400"
                      onClick={() => {
                        let added = false;
                        let initList = data;
                        initList = initList.filter((i) => i._id != user._id);
                        console.log(initList);
                        setData(initList);
                        SelectedItems.map((i) => {
                          if (i._id == user._id) {
                            console.log(i._id, user._id);
                            setModalMessage("Product already Added!");
                            setMessageModal(true);
                            added = true;
                          }
                        });
                        if (added) return;
                        user.caseId = "imprest";
                        let temp = [...SelectedItems, user];
                        setSelectedItems(temp);
                        // setShowInvTable(false);
                        // setModalMessage("Product  Added!");
                        // setMessageModal(true);
                      }}
                    >
                      Add
                    </Button>
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
    );
  };

  const SelectedInv = () => {
    return (
      <>
        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <div class="mb-1 mt-5 dark:text-white font-semibold ">
            {selectedVendor.name !== "" ? (
              <> Vendor:{selectedVendor.name}</>
            ) : null}
          </div>
          <div class="mb-1 mt-5 dark:text-white font-semibold ">
            Selected Items
          </div>
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Type</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Serial Number</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Inv Number</TableCell>
                <TableCell>Condition</TableCell>
                <TableCell>Case Id</TableCell>
                <TableCell>Remove</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {SelectedItems.map((user, i) => (
                <TableRow
                  className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                    activerowid == user._id
                      ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                      : "white"
                  } `}
                  key={i}
                  onClick={() => {
                    setActiveRowId(i);
                    // console.log("the id is " + user._id);
                    // setSelectedProd(user);
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
                        <p className="font-semibold">{user.type}</p>
                        {/* <p className="text-xs text-gray-600 dark:text-gray-400">
                          {user.accountName}
                        </p> */}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.name}</span>
                  </TableCell>

                  <TableCell>
                    <span className="text-sm">{user.sno}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.location}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.invnumber}</span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      type={user.condition == "Good" ? "primary" : "danger"}
                    >
                      {user.condition}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <input
                      value={user.caseId}
                      onChange={(e) => {
                        let temp = SelectedItems;
                        // newuser["caseId"]=e.target.value
                        temp = temp.filter((x) => {
                          if (x._id != user._id) return x;
                          else {
                            console.log("here", e.target.value);
                            let t = x;
                            t.caseId = e.target.value;
                            return t;
                          }
                        });
                        console.log(temp);
                        setSelectedItems(temp);
                      }}
                      defaultValue="Imprest"
                      placeholder="Cse Id."
                      class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-1 pr-1 py-1 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                    />
                  </TableCell>

                  <TableCell>
                    <div
                      className=" py-1"
                      onClick={() => {
                        let invList = [...data, user];
                        setData(invList);
                        let temp = SelectedItems;
                        temp = temp.filter((i) => i._id != user._id);

                        setSelectedItems(temp);
                      }}
                    >
                      <TrashIcon
                        className="w-5 h-5 cursor-pointer m-2 text-2xl"
                        fill="maroon"
                        aria-hidden="true"
                      />
                    </div>
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

        {/* ----------------------------------------------Table----------------------------------------------------- */}
      </>
    );
  };

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

  const CMRRMenu = (num) => {
    let itemtype = "item";
    return (
      <div className="px-4 py-3 my-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold flex-row flex justify-between">
          <span>Item Number : {num + 1}</span>{" "}
          <div
            layout="outline"
            onClick={() => {
              let newitem = [...CMRRvalues];
              newitem = newitem.filter((item, i) => {
                if (i != num) return item;
              });
              setCMRRValues(newitem);
            }}
            className="border-gray-100 rounded-full cursor pointer"
          >
            <CloseIcon
              fill="lightgray"
              className="w-5 h-5 cursor-pointer "
              aria-hidden="true"
            />
          </div>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Select Type*</span>
              <Select
                className="mt-1"
                value={CMRRvalues[num].systype}
                onChange={(e) => {
                  let newlist = [...CMRRvalues];
                  newlist[num].systype = e.target.value;
                  setCMRRValues(newlist);
                }}
              >
                <option selected value="item">
                  Item
                </option>
                <option value="full system">Full System</option>
              </Select>
            </Label>
          </div>

          {CMRRvalues[num].systype == "item" ? (
            <div className="flex flex-col w-full">
              <Label className="w-full">
                <span>Select Category*</span>
                <Select
                  className="mt-1"
                  value={CMRRvalues[num].type}
                  onChange={(e) => {
                    let newlist = [...CMRRvalues];
                    // console.log(e.target.value)
                    newlist[num].type = e.target.value;
                    // newlist[num].type = newlist[num].type.toLowerCase();
                    // console.log(newlist)

                    setCMRRValues(newlist);
                  }}
                >
                  <option value="" selected disabled>
                    Select Type
                  </option>

                  <option value="mouse">Mouse</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="monitor">Monitor</option>
                  <option value="cpu">Cpu</option>
                  <option value="ram">Ram</option>
                  <option value="fan">Fan</option>
                  <option value="motherboard">Motherboard</option>
                  <option value="smps">SMPS</option>
                  <option value="hdd">HDD</option>
                  <option value="gcard">Gcard</option>
                  <option value="enetcard">Enet Card</option>
                  <option value="serialcard">Serial Card</option>
                  <option value="paralellcard">Paralell Card</option>
                  <option value="opticaldrive">Optical Drive</option>
                  <option value="others">Others</option>
                </Select>
              </Label>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <Label className="w-full">
                <span>Select Category*</span>
                <Select
                  className="mt-1"
                  value={CMRRvalues[num].type}
                  onChange={(e) => {
                    let newlist = [...CMRRvalues];
                    // console.log(e.target.value)
                    newlist[num].type = e.target.value;
                    // newlist[num].type = newlist[num].type.toLowerCase();
                    // console.log(newlist)

                    setCMRRValues(newlist);
                  }}
                >
                  <option value="" selected disabled>
                    Select Type
                  </option>

                  <option value="console">Console</option>
                  <option value="DMP">DMP</option>
                  <option value="inkjet">Inkjet</option>
                  <option value="KVM">KVM</option>
                  <option value="laptop">Laptop</option>
                  <option value="laser">Laser</option>
                  <option value="LMP">LMP</option>
                  <option value="module">Module</option>
                  <option value="router">Router</option>
                  <option value="scanner">Scanner</option>
                  <option value="server">Server</option>
                  <option value="desktop">Desktop</option>
                  <option value="storage">Storage</option>
                  <option value="switch">Switch</option>
                  <option value="UPS">UPS</option>
                  <option value="others">Others</option>
                </Select>
              </Label>
            </div>
          )}

          <>
            <div className="flex flex-col w-full">
              <Label className="w-full">
                <span>Product Name*</span>
                <Input
                  className="mt-1"
                  type="text"
                  value={CMRRvalues[num].name}
                  onChange={(e) => {
                    let newlist = [...CMRRvalues];
                    newlist[num].name = e.target.value;
                    setCMRRValues(newlist);
                  }}
                />
              </Label>
            </div>
          </>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Serial Number*</span>
              <Input
                className="mt-1"
                type="text"
                value={CMRRvalues[num].sno}
                onChange={(e) => {
                  let newlist = [...CMRRvalues];
                  newlist[num].sno = e.target.value;
                  setCMRRValues(newlist);
                }}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Select Condition*</span>
              <Select
                className="mt-1"
                onChange={(e) => {
                  let newlist = [...CMRRvalues];
                  newlist[num].condition = e.target.value;
                  setCMRRValues(newlist);
                }}
              >
                <option value="Good" selected>
                  Good
                </option>
                <option value="Defective">Defective</option>
                <option value="DOA">DOA</option>
                <option value="Damaged">Damaged</option>
              </Select>
            </Label>
          </div>
        </div>

        {/* -------------Row 2 --------- */}
        <div className="flex-row flex space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Warranty*</span>
              <Select
                className="mt-1"
                value={CMRRvalues[num].wty}
                onChange={(e) => {
                  let newlist = [...CMRRvalues];
                  newlist[num].wty = e.target.value;
                  setCMRRValues(newlist);
                }}
              >
                <option value="" selected disabled>
                  Select Category
                </option>
                <option value="0D">0 days</option>
                <option value="3M">3 Months</option>
                <option value="6M">6 Months</option>
                <option value="1Y">1 Year</option>
                <option value="2Y">2 Years</option>
                <option value="3Y">3 Years</option>
                <option value="4Y">4 Years</option>
                <option value="5Y">5 Years</option>
                <option value="20Y">20 Years</option>
              </Select>
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Case ID*</span>
              <Input
                className="mt-1"
                type="text"
                value={CMRRvalues[num].caseId}
                onChange={(e) => {
                  let newlist = [...CMRRvalues];
                  newlist[num].caseId = e.target.value;
                  setCMRRValues(newlist);
                }}
              />
            </Label>
          </div>
        </div>
      </div>
    );
  };

  const CMRRBottomCard = () => {
    return (
      <Card className="mb-4 shadow-md ">
        <CardBody>
          <div className="flex flex-row flex-wrap justify-start">
            <Button
              onClick={() => {
                let newitem = [...CMRRvalues];
                let add = CMRRinvdetails;
                newitem.push(add);
                setCMRRValues(newitem);
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className=" mx-2 "
            >
              Add Item
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <>
      <div className=" mt-4">
        <div className="flex flex-row dark:text-white  ">
          <div className="mr-1 flex flex-row dark:text-white  ">
            <div className="mx-1 my-1  "> Type:</div>
            {/* -----------------------------------------CMRR ----------------------- */}
            <p className=" text-purple-300 font-semibold    my-auto">
              {LSTtype}
            </p>
          </div>

          <div className="mr-1 flex flex-row dark:text-white  ">
            <div className="mx-1 my-auto   ">From:</div>

            {/* -----------------------------------------Location ----------------------- */}
            <div class="relative mx-1 my-auto ">
              {" "}
              <p className=" text-purple-300 font-semibold    my-auto">
                {location}
              </p>
            </div>
          </div>

          <div className="flex flex-row dark:text-white  ">
            <div className="mx-1 my-auto ">To:</div>
            {/* -----------------------------------------Location ----------------------- */}
            <div class="relative mx-1 my-auto ">
              {" "}
              <p className=" text-purple-300 font-semibold    my-auto">
                {toLocation}
              </p>
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
          {/* {isVendor ? (
            <div className="mx-1">
              <Button
                layout="outline"
                className="w-full"
                onClick={() => setIsVendorModalopen(true)}
              >
                Select Vendor
              </Button>
            </div>
          ) : null} */}

          {/* -----------------------------------------Location ----------------------- */}

          <div className="flex flex-row dark:text-white  ">
            <div className=" my-auto ">Date: </div>
            <div class="relative mx-1  my-auto ">
              {/* <input
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  LSTNumberSetter(e.target.value, location);
                }}
                placeholder="LST No."
                class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              /> */}
              <p className=" text-purple-300 font-semibold my-auto ">
                {moment(date).format("DD/MM/YY")}
              </p>
            </div>
          </div>
          <div className=" flex flex-row dark:text-white   ">
            <div className=" mx-1  my-auto ">LST No.</div>
            <p className=" text-purple-300 font-semibold   my-auto">{LSTNo}</p>
          </div>
          {/* //submitCustomer */}

          <div className="flex flex-row dark:text-white ml-auto  ">
            <Button onClick={updateInventory} className="px-10">
              Save
            </Button>
          </div>
        </div>
        {LSTtype == "Customer" ? (
          <div className="flex flex-row dark:text-white  ">
            <div className=" flex flex-row dark:text-white mt-2 ">
              Customer:{" "}
              <span className="text-purple-300 font-semibold">
                {" "}
                {customerName}
              </span>
              , Account:{" "}
              <span className="text-purple-300 font-semibold">
                {accountName}
              </span>
              , Unit:{" "}
              <span className="text-purple-300 font-semibold">{unitName}</span>
            </div>
          </div>
        ) : null}

        {LSTtype == "Normal" || LSTtype == "Customer" ? (
          <>
            {SelectedInv()}
            <div className="my-5">
              <Button
                layout="outline"
                onClick={() => {
                  if (location == "" || toLocation == "") {
                    setModalMessage("Select From and To Locations");
                    setMessageModal(true);
                    return;
                  }
                  setShowInvTable(true);
                }}
              >
                Add Product from Inventory
              </Button>
            </div>
            {showInvTable ? invTable() : null}
          </>
        ) : null}
      </div>

      {messageModalComponent()}
      {VendorModal()}
      {LSTtype == "CMRR" ? (
        <>
          {CMRRvalues.map((item, i) => {
            return CMRRMenu(i);
          })}
          {CMRRBottomCard()}
        </>
      ) : null}

      <UnitListModal
        isModalOpen={isCustomerModalOpen}
        setIsModalOpen={setIsCustomerModalOpen}
        setUnit={setUnit}
        unit={unit}
        customer={customer}
        setCustomer={setCustomer}
        account={account}
        setAccount={setAccount}
      />

      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default LST;
