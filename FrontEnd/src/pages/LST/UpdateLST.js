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
  Select,
} from "@windmill/react-ui";

import { API } from "../../backendapi";
import CustomerSelection from "../../components/Modal/AssetFilters/CustomerSelection";
import { BottomBarContext } from "../../context/BottomBarContext";
import { Link, useParams } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import EmpProfile from "../../helpers/auth/EmpProfile";
// import PrintLST from "./PrintLST";

function UpdateLST() {
  const { id } = useParams();
  // table variable styles
  const [activerowid, setActiveRowId] = useState(0);

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [data, setData] = useState([]);
  // dropdown and modals

  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

  const [activeRowID, setActiveRowID] = useState(-1);

  //modal
  const [messageModal, setMessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // pagination change control

  // on page change, load new sliced data
  // here you would make another server request for new data

  // -------------------------------
  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    setTopHeading("Edit LST");
    return () => {
      setTopHeading("");
    };
  }, []);

  const handleDataChange = (name) => (e) => {
    setData({ ...data, [name]: e.target.value });
  };
  // -----------------------------------------------------

  useEffect(() => {
    // console.log("Location",loc);
    // Using an IIFE
    (async function thegetter() {
      console.log("getter called");
      let payload = { id: id };

      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/lst/${Emp.getId()}/getById`,
          method: "POST",
          data: payload,
        });

        response.data.date = moment(response.data.date).format("YYYY-MM-DD");

        console.log(response.data);
        // setTotalResults(response.data.total);
        // const { total, data } = response.data;
        // console.log(data + "Now");

        setData(response.data);
      } catch (error) {
        throw error;
      }
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, []);

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
    let update = {};
    if (lstItem.to == "Vendor") {
      newhistory.note = `Item received from ${lstItem.vendorName} back to ${lstItem.from}`;
      update = {
        id: invItem._id,
        update: {
          location: lstItem.from,
          sno: invItem.sno,
          condition: invItem.condition,
          $push: { history: newhistory },
        },
      };
    } else {
      update = {
        id: invItem._id,
        update: {
          location: lstItem.to,
          status: invItem.condition,
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

  const updateCMRRInventory = async (i, j) => {
    let items = data;
    let lstItem = data[i];
    let CMRRItem = lstItem.CMRRItems[j];
    console.log(lstItem, CMRRItem);

    items[i].CMRRItems[j].location = lstItem.to;
    setData(items);

    // setIsReviewModalOpen(true);
    console.log("Done", items);

    let flag = false;
    items[i].CMRRItems.map((item) => {
      if (item.location == "In Transit") flag = true;
    });
    const updatelst = {
      id: lstItem._id,
      update: {
        CMRRItems: items[i].CMRRItems,
      },
    };
    if (flag == false) {
      updatelst.update.status = "Received";
    }

    try {
      await axios({
        url: `${API}/lst/${Emp.getId()}/update`,
        method: "POST",
        data: updatelst,
      });
      if (flag == true) {
        setModalMessage(`${CMRRItem.name} Recieved`);
        setMessageModal(true);
        // return;
      } else {
        setModalMessage(
          `${CMRRItem.name} Recieved.\n All Items Received from LST`
        );
        setMessageModal(true);
      }

      console.log("Done");
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const InvTable = (num, to) => {
    let items = data[num].invItems;
    let LSTtype = data[num].LSTtype;
    let CMRRItems = data[num].CMRRItems;
    console.log("TO", items.to);
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
                {LSTtype == "Normal" || LSTtype == "Customer" ? (
                  <>
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
                          // console.log(user.product.keyboard[0].keyboardname);
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
                          {data[num].to == "Vendor" &&
                          user.location == "In Transit" ? (
                            <span className="text-sm">
                              <input
                                value={user.sno}
                                onChange={(e) => {
                                  let tempdata = data;
                                  let temp = data[num].invItems;
                                  temp = temp.filter((x) => {
                                    if (x._id != user._id) return x;
                                    else {
                                      console.log(
                                        "here",
                                        e.target.value,
                                        x.name
                                      );
                                      x.sno = e.target.value;
                                      return x;
                                    }
                                  });
                                  // tempnum.invItems=temp;
                                  tempdata[num].invItems = temp;
                                  console.log(tempdata);
                                  // tempdata[num].from="TETS"
                                  setData([...tempdata]);
                                }}
                                placeholder="Cse Id."
                                class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-1 pr-1 py-1 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                              />
                            </span>
                          ) : (
                            user.sno
                          )}
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{user.location}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{user.invnumber}</span>
                        </TableCell>
                        <TableCell>
                          {data[num].to == "Vendor" &&
                          user.location == "In Transit" ? (
                            <Select
                              value={user.condition}
                              className="mt-1"
                              onChange={(e) => {
                                let tempdata = data;
                                let temp = data[num].invItems;
                                temp = temp.filter((x) => {
                                  if (x._id != user._id) return x;
                                  else {
                                    console.log("here", e.target.value, x.name);
                                    x.condition = e.target.value;
                                    return x;
                                  }
                                });
                                // tempnum.invItems=temp;
                                tempdata[num].invItems = temp;
                                console.log(tempdata);
                                // tempdata[num].from="TETS"
                                setData([...tempdata]);
                              }}
                            >
                              <option value="Good"> Good</option>
                              <option value="Defective">Defective</option>
                              <option value="DOA">DOA</option>z
                              <option value="Damaged">Damaged</option>
                            </Select>
                          ) : (
                            <Badge
                              type={
                                user.condition == "Good" ? "primary" : "danger"
                              }
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
                  </>
                ) : (
                  <>
                    {data[num].CMRRItems.map((user, i) => (
                      <TableRow
                        // className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                        //   activerowid == user._id
                        //     ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                        //     : "white"
                        // } `}
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
                              <p className="font-semibold">{user.type}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{user.name}</span>
                        </TableCell>

                        <TableCell>{user.sno}</TableCell>
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
                        <TableCell>
                          <Button
                            layout="outline"
                            className="dark:border-green-700 border-green-400"
                            onClick={() => {
                              if (user.location == "In Transit")
                                updateCMRRInventory(num, i);
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
        {/* ------------------------------------------Details----------------------------------------------------------------------------  */}
        <div className="flex flex-row dark:text-white  ">
          <div className="mr-1 flex flex-row dark:text-white  ">
            <div className="mx-1 my-1  "> Type</div>
            {/* -----------------------------------------CMRR ----------------------- */}
            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={data.LSTtype}
                onChange={(e) => {
                  // handleDataChange("LSTtype")
                }}
              >
                {/* <option value="">All</option> */}
                <option value="Normal">Normal</option>
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
          </div>

          <div className="mr-1 flex flex-row dark:text-white  ">
            <div className="mx-1 my-1  ">From</div>
            {/* -----------------------------------------Location ----------------------- */}
            <div class="relative mx-1 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={data.from}
                onChange={
                  // setLocation(e.target.value);
                  handleDataChange("from")
                }
              >
                <option value="">Location</option>
                {/* <option value="">All</option> */}
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
          </div>

          <div className="flex flex-row dark:text-white  ">
            <div className="mx-1 my-1 ">To</div>
            {/* -----------------------------------------Location ----------------------- */}
            <div class="relative mx-1 ">
              {data.LSTtype == "Normal" || data.LSTtype == "Customer" ? (
                <>
                  <select
                    class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                    value={data.to}
                    onChange={
                      handleDataChange("to")
                      // setToLocation(e.target.value);
                      // setselectedVendor(defVendor);
                      // if (e.target.value == "Vendor") {
                      //   setIsVendor(true);
                      // } else setIsVendor(false);
                    }
                  >
                    <option value="">Location</option>
                    {/* <option value="">All</option> */}
                    <option value="Trivandrum">Trivandrum</option>
                    <option value="Kottayam">Kottayam</option>
                    <option value="Kozhikode">Kozhikode</option>
                    {data.LSTtype == "Normal" ? (
                      <>
                        <option value="Vendor">Vendor</option>
                      </>
                    ) : null}
                  </select>
                </>
              ) : (
                <>
                  <select
                    class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                    value={data.toLocation}
                    onChange={
                      handleDataChange("to")
                      // setToLocation(e.target.value);
                      // setselectedVendor(defVendor);
                      // if (e.target.value == "Vendor") {
                      //   setIsVendor(true);
                      // } else setIsVendor(false);
                    }
                  >
                    <option value="" disabled selected>
                      Location
                    </option>
                    {/* <option value="">All</option> */}
                    <option value="Trivandrum">Trivandrum</option>
                    <option value="Kottayam">Kottayam</option>
                    <option value="Kozhikode">Kozhikode</option>
                  </select>
                </>
              )}

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
            <div className=" my-2 ">Date</div>
            <div class="relative mx-1 ">
              <input
                type="date"
                value={data.date}
                onChange={
                  handleDataChange("date")
                  // setDate(e.target.value);
                }
                placeholder="LST No."
                class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className=" flex flex-row dark:text-white  ">
            <div className=" mx-1 my-1 ">LST No.</div>
            <div class="relative  ">
              <input
                value={data.LSTNo}
                disabled
                // onChange={(e) => setLSTNo(e.target.value)}
                // placeholder="LST No."
                class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-1 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          {/* //submitCustomer */}

          {/* <div className="flex flex-row dark:text-white mx-5 ">
            <Button onClick={updateInventory}>Submit</Button>
          </div> */}
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        {/* <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr className="flex flex-row justify-between">
                <TableCell>LST.No</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>No.</TableCell>
               
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
                    <TableCell>
                      <span className="text-sm">{user.from}</span>
                    </TableCell>

                    <TableCell>
                      <span className="text-sm">
                        {user.to == "Vendor" ? user.vendorName : user.to}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {" "}
                        {moment(user.date).format("DD/MM/YYYY")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {user.LSTtype == "Normal" || user.LSTtype == "Customer"
                          ? user.invItems.length
                          : user.CMRRItems.length}
                      </span>
                    </TableCell>
                
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

                  {activeRowID == i ? InvTable(i, user.to) : null}
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
        </TableContainer> */}

        {/* ----------------------------------------------Table----------------------------------------------------- */}
      </div>

      {messageModalComponent()}
      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default UpdateLST;
