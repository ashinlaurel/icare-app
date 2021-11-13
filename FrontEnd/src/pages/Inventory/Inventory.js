import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";

import Emp from "../../helpers/auth/EmpProfile";
import { EditIcon, TrashIcon } from "../../icons";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";
import { CSVLink, CSVDownload } from "react-csv";
import { saveAs } from "file-saver";

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
} from "@windmill/react-ui";

import { API } from "../../backendapi";
import CustomerSelection from "../../components/Modal/AssetFilters/CustomerSelection";
import { BottomBarContext } from "../../context/BottomBarContext";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";
import EmpProfile from "../../helpers/auth/EmpProfile";

function Inventory() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [viewId, setViewId] = useState(0);
  const [isDwnldModalOpen, setIsDwnldModalOpen] = useState(false);

  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } =
    useContext(BottomBarContext);
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
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [stockType, setStockType] = useState("");

  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  // Getting data states

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  const downloadInv = async () => {
    let csv =
      "Name,Type,S.No,Condition,Location,Invnumber,Invdate,Invtype,Purchtype,Purchlocation,Vendor,GST.No,PAN.No,Aadhar.No,Tax-Category,Tax-percentage,Rate,IGST,CGST,SGST,Net-Tax,Amount,TCS,Invenotry-Amount,Warranty,Expiry-Date,Brand,Model,Sys-Type,Stocktype,Case-ID \n";

    let array;
    let payload = {
      pages: {
        page: page,
        limit: 10000000,
      },
      // filters: {
      //   type: "",
      //   location: "",
      //   condition: "",
      //   searchtype: "",
      //   searchquery: "",
      // },
      filters: {
        type: type.toLocaleLowerCase(),
        location: location,
        condition: condition,
        searchtype: searchtype,
        searchquery: searchquery,
      },
    };
    try {
      let response = await axios({
        url: `${API}/inventory/${Emp.getId()}/getall`,
        method: "POST",
        data: payload,
      });
      console.log(response.data.out);
      array = response.data.out;
      // return response.data;
    } catch (error) {
      throw error;
    }
    array.map((i) => {
      csv =
        csv +
        `${i.name},${capitalize(i.type)},${i.sno},${i.condition},${
          i.location
        },${i.invnumber},${i.invdate},${i.invtype},${i.purchtype},${
          i.purchlocation
        },${i.vendor},${i.gstno},${i.panno},${i.aadharno},${i.taxcategory},${
          i.taxperc
        },${i.rate},${i.igst},${i.cgst},${i.sgst},${i.nettax},${i.amount},${
          i.tcs
        },${i.invamount},${i.wty},${i.expirydate},${i.brand},${i.model},${
          i.systype
        },${i.stocktype},${i.caseId}\n`;
    });
    // console.log(csv);
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(csvData, "Inventory.csv");
  };

  const DeleteModal = () => {
    return (
      <>
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        >
          <ModalHeader>Are you sure you want to delete!</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                try {
                  let response = await axios({
                    url: `${API}/inventory/${Emp.getId()}/delete`,
                    method: "POST",
                    data: { id: deleteId },
                  });
                  console.log(response.data);
                  let temp = data.filter((x) => x._id != deleteId);
                  setData(temp);
                  setIsDeleteModalOpen(false);

                  // setData(response.data);
                } catch (error) {
                  throw error;
                }
              }}
            >
              Confirm Delete
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const ViewModal = () => {
    if (data[viewId]) {
      let item = data[viewId];
      return (
        <>
          <Modal
            isOpen={isViewModalOpen}
            onClose={() => setIsViewModalOpen(false)}
            className="w-7/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll"
          >
            <ModalHeader className="flex flex-row justify-between text-xl">
              <div>{item.name}</div>
              <div>
                Condition: <Badge>{item.condition}</Badge>{" "}
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="font-semibold text-xl my-2">
                Product Description
              </div>

              <div className=" py-3 px-10 flex flex-col lg:flex-row items-center dark:bg-gray-700 justify-between bg-gray-100 rounded-lg ">
                <div className="my-3  flex-col flex">
                  <div className="font-semibold"> Serial No: {item.sno}</div>
                  <div>Invnetory No: {item.invnumber}</div>
                  <div>Location: {item.location}</div>
                  <div>GST No: {item.gstno}</div>
                  <div>Expiry Date: {item.expirydate}</div>
                </div>
                <div className="my-3 font- flex-col flex">
                  <span className="font-semibold">Type: {item.type}</span>
                  <div>
                    inventory Date: {moment(item.invdate).format("DD/MM/YY")}
                  </div>
                  <div>Purchase Location: {item.purchlocation}</div>
                  <div>PAN No: {item.panno}</div>
                  <div>Warranty: {item.wty}</div>
                </div>
                <div className="my-3  flex-col flex">
                  <div className="font-semibold">Vendor: {item.vendor}</div>
                  <div>Inventory Type: {item.invtype}</div>
                  <div>Purchase type: {item.purchtype}</div>
                  <div>Aadhar No: {item.aadharno}</div>
                </div>
              </div>

              <div className="font-semibold text-xl my-2">Product Rates</div>

              <div className="flex flex-col lg:flex-row items-center dark:bg-gray-700 justify-between bg-gray-100 rounded-lg p-5 ">
                <div className="my-3  flex-col flex">
                  <span className="font-semibold">Amount:{item.amount}</span>
                  <div className="font-semibold">Net tax: {item.nettax}</div>
                  <div>IGST: {item.igst}</div>
                  <div>TCS: {item.tcs}</div>
                </div>
                <div className="my-3 font- flex-col flex">
                  <div className="font-semibold">Rate: {item.rate}</div>
                  <span>Tax Category:{item.taxcategory}</span>
                  <div>CGST : {item.cgst}</div>
                </div>
                <div className="my-3  flex-col flex">
                  <div className="font-semibold">
                    Invoice Amount:{item.invamount}
                  </div>
                  <div>Tax percentage: {item.taxperc}</div>
                  <div>SGST: {item.sgst}</div>
                </div>
              </div>

              {/* <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 rounded-lg p-3 ">
              <div className="my-3  flex-col flex">
                
                
                <span>Type:{item.type}</span>
                <span>vendor:{item.vendor}</span>
                <span>location:{item.location}</span>
                <span>Invnetory No:{item.invnumber}</span>
                <span>taxcategory:{item.taxcategory}</span>
                <span>amount:{item.amount}</span>
                

              </div>
              <div className="my-3 font-semibold flex-col flex">
                
                <div>inventory Date: {moment(item.invdate).format("DD/MM/YY")}</div>
                <div>gstno: {item.gstno}</div>
                <div>taxperc: {item.taxperc}</div>
                <div>tcs: {item.tcs}</div>
                <div>expirydate: {item.expirydate}</div>
                <div>Warranty: {item.wty}</div>
              </div>
                <div className="my-3 font-semibold flex-col flex">
                  <div> Serial No: {item.sno}</div>
                  <div>Inventory Type: {item.invtype}</div>
                  <div>Inventory Type: {item.invtype}</div>
                  <div>panno: {item.panno}</div>
                  <div>nettax: {item.nettax}</div>
                  <div>igst: {item.igst}</div>
                  
                </div>
                <div className="my-3 font-semibold flex-col flex">
                  <div> Condition: {item.condition}</div>
                  <div>Purchase type: {item.purchtype}</div>
                  <div>aadharno: {item.aadharno}</div>
                  <div>rate: {item.rate}</div>
                  <div>cgst: {item.cgst}</div>
                  <div>sgst: {item.sgst}</div>
                  
                </div>
           </div> */}

              <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* <div className="font-semibold">Invoice Amount:{item.invamount}</div> */}
              </div>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </Modal>
        </>
      );
    }
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
            className="w-7/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-scroll"
          >
            <ModalHeader className="flex flex-row justify-between text-xl">
              <div>{item.name}</div>
              <div>
                Condition: <Badge>{item.condition}</Badge>{" "}
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="font-semibold text-xl my-2">
                Inventory History
              </div>
              {/* ------------------------- Table ------------------------------ */}
              <TableContainer className="mt-4">
                <Table>
                  <TableHeader>
                    <tr>
                      <TableCell>Date</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Call ID</TableCell>
                      <TableCell>Asset ID</TableCell>
                      <TableCell>Location</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Notes</TableCell>
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
                            {capitalize(entry.histtype)}
                          </span>
                        </TableCell>

                        <TableCell>
                          <span className="text-sm">{entry.callId}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{entry.assetId}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{entry.location}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{entry.status}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{entry.note}</span>
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

  const DwnldModal = () => {
    return (
      <>
        <Modal
          isOpen={isDwnldModalOpen}
          onClose={() => setIsDwnldModalOpen(false)}
          className=" dark:bg-gray-800 p-5 my-6 mx-10 px-5  bg-gray-50 text-gray-900 dark:text-white text-center  rounded-lg "
        >
          <ModalHeader className="flex flex-row justify-between text-xl mx-10 px-10">
            <div className="text-lg">Download Inventory Data?</div>
          </ModalHeader>
          <ModalBody>
            <Button layout="outline" onClick={downloadInv}>
              Download
            </Button>
          </ModalBody>
          <ModalFooter></ModalFooter>
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
    setTopHeading("Inventory");
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
          type: type.toLocaleLowerCase(),
          location: location,
          condition: condition,
          searchtype: searchtype,
          searchquery: searchquery,
          stocktype: stockType,
        },
      };
      // console.log(`${API}/asset/${Emp.getId()}/getall`);
      if (EmpProfile.getRole() > 12 && EmpProfile.getLocation() != "All")
        payload.filters.location = EmpProfile.getLocation();
      try {
        let response = await axios({
          url: `${API}/inventory/${Emp.getId()}/getall`,
          method: "POST",
          data: payload,
        });
        console.log(response.data.out);
        setTotalResults(response.data.total);
        // const { total, data } = response.data;
        console.log(location, "LOCATIO!!!");

        setData(response.data.out);
      } catch (error) {
        throw error;
      }
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, location, condition, type, refresh, stockType,searchquery]);

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

  return (
    <>
      {DeleteModal()}
      {ViewModal()}
      {DwnldModal()}
      {HistoryModal()}

      <div className="mb-64 mt-4">
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
                <option value="Mouse">Mouse</option>
                <option value="Keyboard">Keyboard</option>
                <option value="Monitor">Monitor</option>
                <option value="Cpu">Cpu</option>
                <option value="Ram">Ram</option>
                <option value="Fan">Fan</option>
                <option value="Motherboard">Motherboard</option>
                <option value="SMPS">SMPS</option>
                <option value="HDD">HDD</option>
                <option value="SMPS">SMPS</option>
                <option value="GCard">Gcard</option>
                <option value="EnetCard">Enet Card</option>
                <option value="SerialCard">Serial Card</option>
                <option value="ParalellCard">Paralell Card</option>
                <option value="OpticalDrive">Optical Drive</option>
                <option value="Others">Others</option>
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
            {EmpProfile.getRole() < 13 ? (
              <div class="relative mx-1 ">
                <select
                  class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                >
                  {/* <option value="" disabled selected>
                  Location
                </option> */}
                  <option value="" selected>
                    All
                  </option>
                  <option value="Trivandrum">Trivandrum</option>
                  <option value="Kottayam">Kottayam</option>
                  <option value="Kozhikode">Kozhikode</option>
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
            ) : null}
            {/* ---------------------------Condition Drop Down-------------------------------------- */}
            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={condition}
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Condition
                </option>
                <option value="">All</option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
                <option value="Used">Used</option>
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

            {/* ---------------------------Stock Type Drop Down-------------------------------------- */}
            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={stockType}
                onChange={(e) => {
                  setStockType(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Stock Type
                </option>
                <option value="">All</option>
                <option value="Purchased">Purchased</option>
                <option value="Serviced">Serviced</option>
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

            <div class="block relative xl:ml-64">
              <Button
                layout="outline"
                onClick={() => {
                  setIsDwnldModalOpen(true);
                }}
              >
                Download Database
              </Button>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Location</TableCell>
                <TableCell>Stock Type</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>S.No</TableCell>
                <TableCell>Vendor</TableCell>
                <TableCell>Inv No.</TableCell>
                <TableCell>Inv Date</TableCell>
                <TableCell>Wty Expiry</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>View/History</TableCell>
                {EmpProfile.getRole() == 0 ? (
                  <TableCell>Edit/Delete</TableCell>
                ) : null}
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
                    <span className="text-sm">{user.location}</span>
                  </TableCell>

                  <TableCell>
                    <span className="text-sm">{user.stocktype}</span>
                  </TableCell>
                  <TableCell className="w-8">
                    <div>
                      <p className="font-semibold">{capitalize(user.type)}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {user.systype == "item" ? (
                      <span className="text-sm">{user.name}</span>
                    ) : (
                      <span className="text-sm">{user.brand + user.model}</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.sno}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.vendor}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.invnumber}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {moment(user.invdate).format("DD/MM/YY")}
                    </span>
                  </TableCell>
                  <TableCell>
                    {/* <span className="text-sm">{moment(user.expirydate).format("DD/MM/YY")}</span> */}
                    <span className="text-sm">{user.expirydate}</span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      type={user.condition == "Good" ? "primary" : "danger"}
                    >
                      {user.condition}
                    </Badge>
                  </TableCell>

                  {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                  {/* <TableCell className="w-8">
                    <div className="flex items-center text-sm ">
                      <div>
                        <p className="font-semibold">{capitalize(user.type)}</p>
                       
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {user.systype == "item" ? (
                      <span className="text-sm">{user.name}</span>
                    ) : (
                      <span className="text-sm">{user.brand + user.model}</span>
                    )}
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
                  </TableCell> */}

                  <TableCell>
                    <div className="flex justify-start items-center space-x-2">
                      <Button
                        onClick={() => {
                          setViewId(i);
                          setIsViewModalOpen(true);
                        }}
                        layout="outline"
                      >
                        View
                      </Button>
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
                  </TableCell>
                  {EmpProfile.getRole() == 0 ? (
                    <TableCell>
                      <div className="flex items-center space-x-4">
                        <Button layout="link" size="icon" aria-label="Edit">
                          <Link
                            key={user._id}
                            to={`/app/inventory/update/${user._id}`}
                          >
                            <EditIcon className="w-5 h-5" aria-hidden="true" />
                          </Link>{" "}
                        </Button>

                        <Button
                          layout="link"
                          size="icon"
                          aria-label="Delete"
                          onClick={async () => {
                            console.log("delete Asset");
                            setIsDeleteModalOpen(true);
                            setDeleteId(user._id);
                          }}
                        >
                          <TrashIcon className="w-5 h-5" aria-hidden="true" />
                        </Button>
                      </div>
                    </TableCell>
                  ) : null}
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

export default Inventory;
