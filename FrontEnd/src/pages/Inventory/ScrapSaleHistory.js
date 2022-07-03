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

  // filterhooks
  const [type, setType] = useState("");
  const [stocktype, setStocktype] = useState("");
  const [location, setLocation] = useState("");
  const [ToLocation, setToLocation] = useState("");
  const [condition, setCondition] = useState("");

  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

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
  }, [page, searchquery, refresh]);

  console.log(selectedprod);

  // PDF Download Functions

  const createAndDownloadPdf = async (id) => {
    let payload = {
      id: id,
    };
    let response = await axios({
      url: `${API}/lst/${Emp.getId()}/downloadpdf`,
      method: "POST",
      data: payload,
      responseType: "blob",
    });

    const pdfBlob = new Blob([response.data], { type: "application/pdf" });

    saveAs(pdfBlob, "LST.pdf");
  };

  const InvTable = (items) => {
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
                {items.map((user, i) => (
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

  return (
    <>
      <div className="mb-64 mt-4">
        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 ">
            {/* -----------------Search Bar------------------------------------ */}
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
