import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";
import { saveAs } from "file-saver";

import Emp from "../../helpers/auth/EmpProfile";
import { EditIcon, TrashIcon, DropdownIcon } from "../../icons";
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
} from "@windmill/react-ui";

import { API } from "../../backendapi";
import CustomerSelection from "../../components/Modal/AssetFilters/CustomerSelection";
import { BottomBarContext } from "../../context/BottomBarContext";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";
// import PrintLST from "./PrintLST";

function PurchaseHistory() {
  // table variable styles

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // dropdown and modals

  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);

  // filterhooks
  const [type, setType] = useState("");
  const [stocktype, setStocktype] = useState("");
  const [location, setLocation] = useState("");
  const [ToLocation, setToLocation] = useState("");
  const [condition, setCondition] = useState("");

  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});
  const [currItem, setcurrItem] = useState([]);

  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");
  const [vendorsearchquery, setVendorSearchQuery] = useState("");

  // Getting data states

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  const [activeRowID, setActiveRowID] = useState(-1);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data

  // -------------------------------
  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    setTopHeading("Purchase History");
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
          systype: type,
          location: location,
          ////////////////
          searchquery: searchquery,
          vendorsearchquery: vendorsearchquery,
          stocktype: stocktype,
        },
      };
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/inventory/${Emp.getId()}/getallhistory`,
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
  }, [page, location, ToLocation, condition, type, refresh, stocktype]);

  console.log(selectedprod);

  const downloadInv = async () => {
    let csv =
      "Sl No,Stock Location,Stock Type,Sys-Type,Category,Description,Serial Number,Warranty,WTY Expiry Date,Status,Purc.Type,Purc Location,Inv.Type,Vendor,Inv No,Inv Date,Rate,Tax Category,GST,Amount,TCS,Net Amount\n";

    let array;
    let payload = {
      pages: {
        page: 1,
        limit: 10000000000,
      },
      filters: {
        systype: type,
        location: location,
        searchquery: searchquery,
        vendorsearchquery: vendorsearchquery,
        stocktype: stocktype,
      },
    };
    try {
      let response = await axios({
        url: `${API}/inventory/${Emp.getId()}/getallhistory`,
        method: "POST",
        data: payload,
      });
      console.log(response.data.out);
      array = response.data.out;
      // return response.data;
    } catch (error) {
      throw error;
    }
    array.map((invoice, tcount) => {
      csv =
        csv +
        `Invoice No: ${invoice.invnumber},Date: ${moment(
          invoice.invdate
        ).format("DD-MM-YYYY")},Inv Location: ${
          invoice.location
        },Purchase Type: ${invoice.purchlocation},Inv Type: ${
          invoice.invtype
        }\n`;

      // "Sl No,Stock Location,Stock Type,Sys-Type,Category,Description,Serial Number,Warranty,WTY Expiry Date,Status,
      // Purc.Type,Purc Location,Inv.Type,Vendor,Inv No,Inv Date,Rate,Tax Category,Net Tax,Amount,TCS,Net Amount\n";

      invoice.invItems.map((i, tt) => {
        csv =
          csv +
          `"${tt + 1}","${i.location}","${capitalize(
            i.stocktype
          )}","${capitalize(i.systype)}","${capitalize(i.type)}","${i.name}","${
            i.sno
          }","${i.wty}","${i.expirydate}","${i.condition}","${i.purchtype}","${
            i.purchlocation
          }","${i.invtype}","${i.vendor}","${invoice.invnumber}","${moment(
            invoice.invdate
          ).format("DD-MM-YYYY")}","${i.rate}","${i.taxcategory}","${Number(
            i.nettax
          ).toFixed(2)}","${i.amount}","${Number(i.tcs).toFixed(2)}","${Number(
            i.invamount
          ).toFixed(2)}",\n`;
      });
    });
    // console.log(csv);
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(csvData, "Inventory.csv");
  };

  const InvTable = () => {
    return (
      <div className=" bg-gray-200 dark:bg-gray-700 p-3 ">
        <div className="mb- mt-4">
          {/* ----------------------------------------------Table----------------------------------------------------- */}
          <TableContainer className="mt-4">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>Category</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Serial Number</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Invoice Number</TableCell>
                  <TableCell>Inv Date</TableCell>
                  <TableCell>Wty Expiry</TableCell>
                  <TableCell>Status</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {currItem.map((user, i) => (
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                      activeRowID == user._id
                        ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                        : "white"
                    } `}
                    key={i}
                    onClick={() => {
                      setActiveRowID(user._id);
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
                            {capitalize(user.type)}
                          </p>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* ----------------------------------------------Table----------------------------------------------------- */}
        </div>

        {/* ------------------------------------Bottom Bar---------------------------------- */}
      </div>
    );
  };

  const InventoryViewModal = () => {
    return (
      <>
        <Modal
          isOpen={historyModalOpen}
          onClose={() => setHistoryModalOpen(false)}
          className="w-9/12 h-h-159 overflow-y-auto dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg "
        >
          <ModalHeader className="flex flex-row justify-between text-xl">
            {/* <div>{item.name}</div> */}
            <div>Inventory Purchased</div>
          </ModalHeader>
          <ModalBody>
            {/* <div className="font-semibold text-xl my-2">Call History</div> */}
            {/* ------------------------- Table ------------------------------ */}
            {InvTable()}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </>
    );
  };

  return (
    <>
      {InventoryViewModal()}
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
                  Type
                </option>
                <option value="">All</option>
                <option value="item">Item</option>
                <option value="full system">Full System</option>
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
            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Location
                </option>
                <option value="">All</option>
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
                  placeholder="Search Invoice Number"
                  class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </form>
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
                  value={vendorsearchquery}
                  onChange={(e) => setVendorSearchQuery(e.target.value)}
                  placeholder="Search Vendor"
                  class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </form>
            </div>

            <div className="flex justify-end items-end ">
              <Button
                onClick={() => {
                  downloadInv();
                  // console.log("export");
                }}
                layout="outline"
              >
                Export
              </Button>
            </div>
            {/* <div className="flex justify-end items-end ">
              <Button
                onClick={async () => {
                  // console.log("export");
                  let payload = {};
                  try {
                    let response = await axios({
                      url: `${API}/inventory/${Emp.getId()}/fixpurch`,
                      method: "POST",
                      data: payload,
                    });
                    console.log(response.data.out);

                    // return response.data;
                  } catch (error) {
                    throw error;
                  }
                }}
                layout="outline"
              >
                Fix Inventory
              </Button>
            </div> */}
          </div>
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}

        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell> Type</TableCell>
                <TableCell>Vendor</TableCell>
                <TableCell>Inventory No.</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>No.Items</TableCell>
                <TableCell>
                  <span
                    className="cursor-pointer"
                    onClick={() => setActiveRowID(-1)}
                  >
                    Items
                  </span>
                </TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map((user, i) => (
                <TableRow
                  className={`hover:shadow-lg dark:hover:bg-gray-600   ${
                    activeRowID == user._id
                      ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                      : "white"
                  } `}
                  key={i}
                  onClick={() => {
                    // setActiveRowID(i);
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
                          {" "}
                          <p className="font-semibold">{user.purchtype}</p>
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.vendor}</span>
                  </TableCell>

                  <TableCell>
                    <span className="text-sm">{user.invnumber}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {" "}
                      {moment(user.invdate).format("DD/MM/YYYY")}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.location}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.invItems.length}</span>
                  </TableCell>
                  {/* <TableCell>
                    <Badge>
                      condition
                    </Badge>
                  </TableCell> */}

                  <TableCell className="text-center ">
                    <Button
                      onClick={
                        () => {
                          console.log(activeRowID);
                          if (activeRowID == i) {
                            setActiveRowID(-1);
                          } else setActiveRowID(i);
                          setcurrItem(user.invItems);
                          setHistoryModalOpen(true);
                        }

                        // console.log(ac)
                        // {activeRowID == i ? InvTable(user.invItems) : null}
                      }
                      className="rounded-lg m-1"
                    >
                      View
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

      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default PurchaseHistory;
