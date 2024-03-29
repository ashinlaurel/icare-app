import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";
import { saveAs } from "file-saver";

import Emp from "../../helpers/auth/EmpProfile";
import { EditIcon, TrashIcon, DropdownIcon } from "../../icons";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
} from "@windmill/react-ui";

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

function ScrapSaleHistory() {
  // table variable styles

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // dropdown and modals

  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);

  //
  const [historyModalOpen, setHistoryModalOpen] = useState(false);

  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});
  const [currInv, setCurrInv] = useState([]);

  // filters
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [searchquery, setSearchQuery] = useState("");

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
    setTopHeading("Scrap Sale History");
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
          searchquery: searchquery,
          fromDate: fromDate,
          toDate: toDate,
        },
      };
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/inventory/${Emp.getId()}/getscraphistory`,
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
  }, [page, searchquery, fromDate, toDate, refresh]);

  console.log(selectedprod);

  // PDF Download Functions

  const downloadInv = async () => {
    let csv =
      "Invoice,Name,Type,S.No,Condition,Location,Invnumber,Invdate,Invtype,Purchtype,Purchlocation,Vendor,GST.No,PAN.No,Aadhar.No,Tax-Category,Tax-percentage,Rate,IGST,CGST,SGST,Net-Tax,Amount,TCS,Invenotry-Amount,Warranty,Expiry-Date,Brand,Model,Sys-Type,Stocktype,Case-ID \n";

    let array;
    let payload = {
      pages: {
        page: page,
        limit: 10000000,
      },

      filters: {
        searchquery: searchquery,
        fromDate: fromDate,
        toDate: toDate,
      },
    };
    try {
      let response = await axios({
        url: `${API}/inventory/${Emp.getId()}/getscraphistory`,
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
        `Invoice No:${invoice.invnumber},Date: ${moment(
          invoice.scrapsaledate
        ).format("DD-MM-YYYY")},Gross Value: ${
          invoice.grossvalue
        },Gst Percentage: ${invoice.gstperc},Net Value: ${invoice.netvalue}\n`;
      invoice.invItems.map((i, tt) => {
        csv =
          csv +
          `${tt + 1},${i.name},${capitalize(i.type)},${i.sno},${i.condition},${
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
    });
    // console.log(csv);
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(csvData, "Inventory.csv");
  };

  const InvTable = () => {
    return (
      <div className=" bg-gray-200 dark:bg-gray-700 p-3 overflow-auto ">
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
                {currInv.map((user, i) => (
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
                        {/* <Avatar
                        className="hidden ml-2 mr-3 md:block"
                        src="https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg"
                        alt="User image"
                      /> */}
                        <div>
                          <p className="font-semibold">
                            {capitalize(user.type)}
                          </p>
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
            <div>Inventory Sold</div>
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
          <div class="mb-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-4">
            {/* -----------------Search Bar------------------------------------ */}
            <Label>
              <span>Search </span>
              <div class="block relative ">
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
            </Label>

            <Label className="flex flex-col">
              <span>From Date</span>
              <input
                className="shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 p-2 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500 "
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </Label>
            <Label className="flex flex-col">
              <span>To Date</span>
              <input
                className="shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 p-2  leading-tight focus:outline-none   focus:bg-white focus:border-gray-500 "
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </Label>
            <div className="flex justify-end items-end mt-5">
              <Button
                onClick={() => {
                  downloadInv();
                }}
                layout="outline"
              >
                Export
              </Button>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell> Date</TableCell>
                <TableCell> Invoice No.</TableCell>
                <TableCell>Gross Value</TableCell>
                <TableCell>Gst Percentage</TableCell>
                <TableCell>Net Value</TableCell>
                <TableCell>Inventory No.</TableCell>
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
                          {moment(user.scrapsaledate).format("DD/MM/YYYY")}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.invnumber}</span>
                  </TableCell>

                  <TableCell>
                    <span className="text-sm">{user.grossvalue}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.gstperc}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.netvalue}</span>
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
                          setCurrInv(user.invItems);
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

export default ScrapSaleHistory;
