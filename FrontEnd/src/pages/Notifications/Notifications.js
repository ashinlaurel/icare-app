import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";
// import { Page, Text, View, Document, StyleSheet,PDFDownloadLink } from '@react-pdf/renderer';
// import ReactPDF from '@react-pdf/renderer';
// import { PDFViewer } from '@react-pdf/renderer';

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
  Select
} from "@windmill/react-ui";

import { API } from "../../backendapi";
import CustomerSelection from "../../components/Modal/AssetFilters/CustomerSelection";
import { BottomBarContext } from "../../context/BottomBarContext";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import EmpProfile from "../../helpers/auth/EmpProfile";
// import PrintLST from "./PrintLST";

function Notifications() {
  // table variable styles
  const [activerowid, setActiveRowId] = useState(0);

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // dropdown and modals

  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);

  // filterhooks
  const [status, setstatus] = useState("");
  const [location, setLocation] = useState("");
  const [ToLocation, setToLocation] = useState("");
  const [condition, setCondition] = useState("");

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

  //modal
  const [messageModal, setMessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data

  // -------------------------------
  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    setTopHeading("Notifications");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  useEffect(() => {
    let loc = EmpProfile.getLocation();
    // console.log("Location",loc);
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
          status: "In Transit",
          // searchtype: searchtype,
          searchquery: searchquery,
        },
      };
      if (loc != "All") payload.filters.to = loc;
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
  }, [page, location, ToLocation, condition, status, refresh]);

  console.log(selectedprod);

  const updateInventory = async (i, j) => {
    let items = data;
    let lstItem = data[i];
    let invItem = lstItem.invItems[j];
    console.log(lstItem, invItem);

    let todaydate = moment().format();

    // ----history ---
    let newhistory = {
      histtype: "lst",
      date: todaydate,
      location: lstItem.to,
      callId: "Nil",
      assetId: "Nil",
      status: invItem.condition,
      note: `Item received at ${lstItem.to}`,
    };
    let update={};
    if(lstItem.to=="Vendor"){
      newhistory.note=`Item received from ${lstItem.vendorName} back to ${lstItem.from}`
      update = {
        id: invItem._id,
        update: {
          location: lstItem.from,
          sno:invItem.sno,
          condition:invItem.condition,
          $push: { history: newhistory },
        },
      }; 
    }else{
     update = {
      id: invItem._id,
      update: {
        location: lstItem.to,
        $push: { history: newhistory },
      },
    };
    }
    console.log("PAYLOAD", update);
    try {
      await axios({
        url: `${API}/inventory/${Emp.getId()}/invupdate`,
        method: "POST",
        data: update,
      });
      items[i].invItems[j].location = lstItem.to;
      setData(items);
      setActiveRowID(-1);
      setActiveRowID(i);
      // setIsReviewModalOpen(true);
      console.log("Done");
    } catch (error) {
      console.log(error);
      throw error;
    }
    let flag = false;
    items[i].invItems.map((item) => {
      if (item.location == "In Transit") flag = true;
    });

    if (flag == true) {
      setModalMessage(`${invItem.name} Recieved`);
      setMessageModal(true);
      return;
    }
    const updatelst = {
      id: lstItem._id,
      update: {
        status: "Received",
      },
    };
    try {
      await axios({
        url: `${API}/lst/${Emp.getId()}/update`,
        method: "POST",
        data: updatelst,
      });
      // items[i].invItems[j].location=lstItem.to;
      // setData(items);
      // setActiveRowID(-1);
      // setActiveRowID(i);
      // setIsReviewModalOpen(true);
      setModalMessage(
        `${invItem.name} Recieved.\n All Items Received from LST`
      );
      setMessageModal(true);
      console.log("Done");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const InvTable = ( num,to) => {
    let items=data[num].invItems;
    console.log("TO",items.to)
    return (
      <div className=" bg-gray-200 dark:bg-gray-700 p-3">
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
                  <TableCell>Inv Number</TableCell>
                  <TableCell>Condition</TableCell>
                  <TableCell>Receive</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data[num].invItems.map((user, i) => (
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
                      // console.log(user.product.keyboard[0].kbdname);
                    }}
                  >
                    <TableCell className="w-8">
                      <div className="flex items-center text-sm ">
                        <div>
                          <p className="font-semibold">{user.type}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.name}</span>
                    </TableCell>

                    <TableCell>
                    {data[num].to=="Vendor"&& user.location=="In Transit"?(
                      <span className="text-sm">
                      
                        <input
                      value={user.sno}
                      onChange={(e) => {
                        let tempdata=data
                        let temp= data[num].invItems
                        temp = temp.filter((x) => {
                          if (x._id != user._id) return x;
                          else {
                            console.log("here", e.target.value,x.name);
                            x.sno = e.target.value;
                            return x;
                          }
                        });
                        // tempnum.invItems=temp;
                        tempdata[num].invItems=temp
                        console.log(tempdata);
                        // tempdata[num].from="TETS"
                        setData([...tempdata]);
                      }}
                      
                      placeholder="Cse Id."
                      class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-1 pr-1 py-1 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                    />
                   
                      
                      </span>
                      ):user.sno}
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.location}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.invnumber}</span>
                    </TableCell>
                    <TableCell>
                    {data[num].to=="Vendor"&& user.location=="In Transit"?(
                      <Select
                      value={user.condition}
                      className="mt-1"
                      onChange={(e) => {
                        let tempdata=data
                        let temp= data[num].invItems
                        temp = temp.filter((x) => {
                          if (x._id != user._id) return x;
                          else {
                            console.log("here", e.target.value,x.name);
                            x.condition = e.target.value;
                            return x;
                          }
                        });
                        // tempnum.invItems=temp;
                        tempdata[num].invItems=temp
                        console.log(tempdata);
                        // tempdata[num].from="TETS"
                        setData([...tempdata]);
                      }}
                    >
                      <option value="Good" > Good</option>
                      <option value="Defective">Defective</option>
                      <option value="DOA">DOA</option>z
                      <option value="Damaged">Damaged</option>
                    </Select>

                    ):(
                      <Badge
                        type={user.condition == "Good" ? "primary" : "danger"}
                      >
                        {user.condition}
                      </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        layout="outline"
                        className="dark:border-green-700 border-green-400"
                        onClick={() => {
                          if (user.location == "In Transit")
                            updateInventory(num, i);
                          else {
                            setModalMessage("Already Received");
                            setMessageModal(true);
                          }
                        }}
                      >
                        {user.location == "In Transit" ? (
                          <>Receive</>
                        ) : (
                          <>Received</>
                        )}
                      </Button>
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

  return (
    <>
      <div className="mb-64 mt-4">
        <div className=" font-bold text-xl mt-10 dark:text-white">
          LSTs In Transit
        </div>

        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-2 ">
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
            {EmpProfile.getLocation == "All" ? (
              <>
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
              </>
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
                <TableCell>LST.No</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>No.</TableCell>
                {/* <TableCell>Status</TableCell> */}
                <TableCell> Report</TableCell>
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
                      // console.log(user.product.keyboard[0].kbdname);
                    }}
                  >
                    <TableCell className="w-8">
                      <div className="flex items-center text-sm ">
                        <div>
                          <p className="font-semibold">{user.LSTNo}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.from}</span>
                    </TableCell>

                    <TableCell>
                      <span className="text-sm">{user.to=="Vendor"?user.vendorName:user.to}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {" "}
                        {moment(user.date).format("DD/MM/YYYY")}
                      </span>
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
                        layout="outline"
                        aria-label="DropDown"
                        onClick={() => {
                          console.log("dwlod");
                        }}
                        className="rounded-lg m-1"
                      >
                        Download
                      </Button>
                    </TableCell>
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

                  {activeRowID == i ? InvTable( i,user.to) : null}
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

      {messageModalComponent()}
      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default Notifications;
