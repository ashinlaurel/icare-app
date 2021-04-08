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
import EmpProfile from "../../helpers/auth/EmpProfile";

// import PrintLST from "./PrintLST";

function LSTHistory() {
  // table variable styles
  const [activerowid, setActiveRowId] = useState(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [deleteNum, setDeleteNum] = useState(-1);

  const [isDownloadModalOpen, setisDownloadModalOpen] = useState(false)
  const [downloadLST, setDownloadLST] = useState({});
  const [downloadNum, setDownloadNum] = useState(0);

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([{CMRRItems:[]}]);
  // dropdown and modals

  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);

  // filterhooks
  const [status, setstatus] = useState("");
  const [location, setLocation] = useState("");
  const [ToLocation, setToLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [LSTtype, setLSTtype] = useState("Normal");

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
    setTopHeading("LST History");
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
          // type: type,
          from: location,
          to: ToLocation,
          status: status,
          LSTtype:LSTtype,
          // searchtype: searchtype,
          searchquery: searchquery,
        },
      };
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/lst/${Emp.getId()}/getall`,
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
  }, [page, location, ToLocation, condition, status, refresh,LSTtype]);

  console.log(selectedprod);
  // DElete Modal

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
                let invs = data[deleteNum].invItems;
                console.log(invs);
                invs.map(async (item) => {
                  const payload = {
                    id: item._id,
                    update: {
                      location: data[deleteNum].from,
                    },
                  };
                  console.log("PAYLOAD", payload);
                  try {
                    await axios({
                      url: `${API}/inventory/${Emp.getId()}/invupdate`,
                      method: "POST",
                      data: payload,
                    });
                    // setIsReviewModalOpen(true);
                    console.log("Done");
                  } catch (error) {
                    console.log(error);
                    throw error;
                  }
                });
                try {
                  let response = await axios({
                    url: `${API}/lst/${Emp.getId()}/delete`,
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

  const DownloadModal = () => {
    console.log(downloadLST);
    return (
      <>
        <Modal
          isOpen={isDownloadModalOpen}
          onClose={() => setisDownloadModalOpen(false)}
        >
          <ModalHeader>Download LST</ModalHeader>
          <ModalBody>


        {data[downloadNum]?(<>
       <div className="flex flex-row">
        <div className=" my-2 ml-5 mr-2 w-full">Docket Type:</div>
                <input
                  value={data[downloadNum].DocketType}
                  onChange={(e) =>{
                    let temp = [...data];
                    temp[downloadNum].DocketType=e.target.value
                    // console.log( temp[downloadNum].DocketType)
                    setData(temp);
                  } }
                  
                  class="w-full mr-5 shadow-md z-20 appearance-none rounded border border-gray-400 border-b block py-1  bg-white text-sm  text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
            </div>

            <div className="flex flex-row my-2">
        <div className="my-2 ml-5 mr-2 w-full">Courier Number:</div>
                <input
                  value={data[downloadNum].CourierNumber}
                  onChange={(e) =>{
                    let temp = [...data];
                    temp[downloadNum].CourierNumber=e.target.value
                    // console.log( temp[downloadNum].CourierNumber)
                    setData(temp);
                  } }
                  
                  class="w-full mr-5  shadow-md z-20 appearance-none rounded border border-gray-400 border-b block py-1  bg-white text-sm  text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
            </div>
            </>):null}




          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                          createAndDownloadPdf(data[downloadNum]._id, data[downloadNum].LSTNo,data[downloadNum].CourierNumber,data[downloadNum].DocketType);
                        }}
            >
              Download
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  // PDF Download Functions

  const createAndDownloadPdf = async (id, LSTno,CourierNumber,DocketType) => {
    let payload = {
      id: id,
      update: {
        CourierNumber,
        DocketType
      }
    };
    let response = await axios({
      url: `${API}/lst/${Emp.getId()}/downloadpdf`,
      method: "POST",
      data: payload,
      responseType: "blob",
    });

    const pdfBlob = new Blob([response.data], { type: "application/pdf" });
    setisDownloadModalOpen(false);
    saveAs(pdfBlob, `LST_${LSTno}.pdf`);
  };

  const InvTable = (items,Customer, LSTtype, CMRRItems) => {
    return (
      <div className=" bg-gray-200 dark:bg-gray-700 p-3">
     {(LSTtype == "Customer") ?(<div>Customer:{Customer}</div>):null}
        <div className="mb- mt-4">
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
                </tr>
              </TableHeader>
              <TableBody>
                {(LSTtype == "Normal"||LSTtype == "Customer") ? (
                  <>
                    {items.map((user, i) => (
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
                            type={
                              user.condition == "Good" ? "primary" : "danger"
                            }
                          >
                            {user.condition}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ) : (
                  <>
                    {CMRRItems.map((user, i) => (
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
                            type={
                              user.condition == "Good" ? "primary" : "danger"
                            }
                          >
                            {user.condition}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
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
      {DeleteModal()}{DownloadModal()}
      <div className="mb-64 mt-4">
        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 ">
            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={status}
                onChange={(e) => {
                  setstatus(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Status
                </option>
                <option value="">All</option>
                <option value="In Transit">In Transit</option>
                <option value="Received">Received</option>
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
                value={LSTtype}
                onChange={(e) => {
                  setLSTtype(e.target.value);
                }}
              >
                
                <option value="" selected>LST type</option>
                <option value="Normal" >Normal</option>
                <option value="CMRR">CMRR</option>
                <option value="Customer">Customer</option>
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
                  From Location
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
            {/* -----------------------------------------Location ----------------------- */}
            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={ToLocation}
                onChange={(e) => {
                  setToLocation(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  To Location
                </option>
                <option value="">All</option>
                <option value="Trivandrum">Trivandrum</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Kozhikode">Kozhikode</option>
                <option value="Vendor">Vendor</option>
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
            {/* ---------------------------Condition Drop Down-------------------------------------- */}
            {/* <div class="relative mx-1 ">
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
            </div> */}

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
                  placeholder="Search LST Number"
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
              <tr className="flex flex-row justify-between">
                <TableCell>No</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>
                  <span className="ml-10">Date</span>{" "}
                </TableCell>
                <TableCell>
                  <span className="ml-2 mr-2">Num</span>{" "}
                </TableCell>
                {/* <TableCell>Status</TableCell> */}

                <TableCell> Report</TableCell>
                {EmpProfile.getRole()==0?
                <TableCell> Delete</TableCell>
                :null}
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
                <div className="flex flex-col justify-around">
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ${
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
                        <div>
                          <p className="font-semibold">{user.LSTNo}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="">
                      <span className=" ">{user.from}</span>
                    </TableCell>

                    <TableCell className="  ">
                      <span className="  ">
                        {user.vendorId ? user.vendorName : user.to}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {" "}
                        {moment(user.date).format("DD/MM/YYYY")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{(user.LSTtype == "Normal"||user.LSTtype == "Customer")?user.invItems.length:user.CMRRItems.length}</span>
                    </TableCell>
                    {/* <TableCell>
                      <span className="text-sm">{user.docketNo}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.courierName}</span>
                    </TableCell> */}
                    {/* <TableCell>
                    <Badge>
                      condition
                    </Badge>
                  </TableCell> */}
                    <TableCell className="text-center ">
                      <Button
                        layout="outline"
                        aria-label="DropDown"
                        onClick={() => {
                          console.log("dwlod");
                          // createAndDownloadPdf(user._id, user.LSTNo);
                          setDownloadLST(user);
                          setisDownloadModalOpen(true);
                          setDownloadNum(i);
                        }}
                        className="rounded-lg m-1"
                      >
                        Download
                      </Button>
                    </TableCell>
                    {EmpProfile.getRole()==0?
                    <TableCell className="text-center ">
                      <Button
                        layout="link"
                        size="icon"
                        aria-label="Delete"
                        onClick={async () => {
                          console.log("delete LST");
                          setIsDeleteModalOpen(true);
                          setDeleteId(user._id);
                          setDeleteNum(i);
                        }}
                      >
                        <TrashIcon className="w-5 h-5" aria-hidden="true" />
                      </Button>
                    </TableCell> :null}

                    <TableCell className="text-center ">
                      <Button
                        // layout="link"
                        size="icon"
                        aria-label="DropDown"
                        onClick={() => {
                          console.log(activerowid);
                          // if(activerowid==i){

                          // setActiveRowID(-1);
                          // }
                          // else
                          setActiveRowID(i);
                        }}
                        className="rounded-lg m-1"
                      >
                        <DropdownIcon className="w-5 h-5" aria-hidden="true" />
                      </Button>
                    </TableCell>
                  </TableRow>

                  {activeRowID == i
                    ? InvTable(
                        user.invItems,
                       user.customerName,
                        user.LSTtype,
                        user.CMRRItems
                      )
                    : null}
                </div>
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

export default LSTHistory;
