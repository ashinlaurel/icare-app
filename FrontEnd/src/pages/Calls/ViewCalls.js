import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";

import Emp from "../../helpers/auth/EmpProfile";
import PageTitle from "../../components/Typography/PageTitle";
import {
  ChatIcon,
  CartIcon,
  MoneyIcon,
  PeopleIcon,
  ButtonsIcon,
  HeartIcon,
  EditIcon,
  TrashIcon,
  TickIcon,
} from "../../icons";
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
  Label,
  Select,
  Pagination,
  Dropdown,
  DropdownItem,
} from "@windmill/react-ui";

import { API } from "../../backendapi";
// import EngineerListModal from "../../components/Modal/EngineerListModal";
import { BottomBarContext } from "../../context/BottomBarContext";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import { isAutheticated } from "../../helpers/auth";

function ViewCalls() {
  // Bottom bar stuff
  // const [bbaropen, setBBarOpen] = useContext(BottomBarContext);
  // const [assetdetails, setAssetDetails] = useContext(BottomBarContext);
  const [isSetStatusModal, setisSetStatusModal] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } = useContext(
    BottomBarContext
  );
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
  const [Business, setBusiness] = useState("");
  const [product, setProduct] = useState("");
  const [unit, setUnit] = useState({ _id: "", unitName: "" });
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });

  /////// engineer
  const [engineer, setEngineer] = useState({ _id: "", enggName: "" });
  const [isEnggModalOpen, setIsEnggModalOpen] = useState(false);
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

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  const SetStatusModal = () => {
    return (
      <>
        <Modal
          isOpen={isSetStatusModal}
          onClose={() => setisSetStatusModal(false)}
        >
          <ModalHeader>Set Call Status</ModalHeader>
          <ModalBody>
            <div className="flex-col flex">
              <div className="font-xl dark:text-white">Current Status:</div>
              <Button className="font-xl">Set Status</Button>
              <Button className="font-xl my-2 mx-10 inline">
                Pending for Allocation
              </Button>
              <Button className="font-xl my-2 mx-10 inline">
                Pending for Allocation
              </Button>
              <Button className="font-xl my-2 mx-10 inline">
                Pending for Allocation
              </Button>
              <Button className="font-xl my-2 mx-10 inline">
                Pending for Allocation
              </Button>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                console.log("SELECTED", selectedprod);
                let payload = {
                  id: selectedprod._id,
                  update: {
                    employeeId: engineer._id,
                    employeeName: engineer.enggName,
                    callStatus: 1,
                  },
                };
                try {
                  let response = await axios({
                    url: `${API}/call/${Emp.getId()}/ViewCallsg`,
                    method: "POST",
                    data: payload,
                  });
                  let temp = data;
                  console.log(temp);
                  temp = temp.filter((c) => {
                    if (c._id === selectedprod._id) {
                      c.callStatus = 1;
                      c.employeeName = engineer.enggName;
                      c.employeeId = engineer._id;
                      return c;
                    }
                    setData(temp);
                  });
                  // console.log(response.data);
                  setisSetStatusModal(false);
                } catch (error) {
                  throw error;
                }
              }}
            >
              Confirm Assignment
            </Button>
          </ModalFooter>
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
    setTopHeading("View Calls");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  useEffect(() => {
    // Using an IIFE
    (async function thegetter() {
      // console.log("getter called");
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
          url: `${API}/call/${Emp.getId()}/getall`,
          method: "POST",
          data: payload,
        });
        // console.log(response.data.out);
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

  // console.log(selectedprod);

  const ReviewSubmit = () => {
    return (
      <>
        <Modal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        >
          <ModalHeader>Updated Successfully!</ModalHeader>
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

  return (
    <>
      {/* ---------------------Customer Selection Modal----------------------------------------- */}
      {/* <CustomerSelection
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
      /> */}
      <SetStatusModal />
      <ReviewSubmit />

      {/* ---------------------Customer Selection Modal----------------------------------------- */}

      {/* {floatbox ? <AssetFloat /> : null} */}
      <div className="mb-64 mt-4">
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
              <Dropdown isOpen={isOpenTwo} onClose={() => setIsOpenTwo(false)}>
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
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Call No</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Unit Name</TableCell>
                <TableCell>Phone</TableCell>
                {/* <TableCell>Call Status</TableCell> */}
                <TableCell>Assigned Employee</TableCell>
                <TableCell>Update</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map((call, i) => (
                <TableRow
                  className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                    activerowid == call._id
                      ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                      : "white"
                  } `}
                  key={i}
                  onClick={() => {
                    setActiveRowId(call._id);
                    setBBarOpen(1);
                    // console.log("the id is " + call._id);
                    setSelectedProd(call);
                    console.log("SELECTD", call);
                    setAssetDetails(call.assetId);
                    // console.log(call.product.keyboard[0].kbdname);
                  }}
                >
                  <TableCell className="w-8">
                    <div className="flex items-center text-sm ">
                      <div>
                        <p className="font-semibold">{call.callNo}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {moment(call.date).format("DD/MM/YYYY")}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{call.unitName}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{call.phone}</span>
                  </TableCell>
                  {/* <TableCell> */}
                  {/* <div className="flex ">
                      {/* <Label className="w-full"> */}
                  {/* <Select
                        className="inline"
                        onChange={(e) => {
                          // setAccType(parseInt(e.target.value));
                          let temp = data;
                          console.log(temp);
                          temp = temp.filter((c) => {
                            if (c._id === call._id) {
                              c.callStatus = e.target.value;
                              return c;
                            } else return c;
                          });
                          setData(temp);
                        }}
                        value={call.callStatus}
                      >
                        <option value="0">Not Allocated</option>
                        <option value="1">Pending for Percall Approval</option>
                        <option value="2"> Pending for Response</option>
                        <option value="3"> Pending for OEM Response</option>
                        <option value="4"> Pending for 2nd Response</option>
                        <option value="5"> Pending for Customer</option>
                        <option value="6"> Under Observation</option>
                        <option value="7"> Pending for Others</option>
                        <option value="8"> Pending for Spare</option>
                        <option value="9"> Spare in Transit</option>
                        <option value="10"> Cancelled Calls</option>
                        <option value="11"> Closed Calls</option>
                      </Select> */}
                  {/* </Label> */}
                  {/* <div
                        className="p-1 m-2 dark:hover:bg-green-700 hover:bg-green-200 rounded-full text-green-400"
                        onClick={async () => {
                          let payload = {
                            id: call._id,
                            update: {
                              callStatus: call.callStatus,
                            },
                          };
                          try {
                            let response = await axios({
                              url: `${API}/call/${Emp.getId()}/assignEngg`,
                              method: "POST",
                              data: payload,
                            });
                            console.log("updated");
                            setIsReviewModalOpen(true);
                          } catch (error) {
                            throw error;
                          }
                        }}
                      >
                        <TickIcon
                          className="w-5 h-5 fill-current"
                          aria-hidden="true"
                        />
                      </div> */}
                  {/* </div> */}
                  {/* </TableCell> */}
                  <TableCell>
                    {call.employeeId ? (
                      <>
                        {call.employeeName}
                        {/* <Button layout="link" size="icon" aria-label="Edit" onClick={()=>setIsEnggModalOpen(true)} className="rounded-full mx-2 ">
                       
                          <EditIcon className="w-5 h-5" aria-hidden="true" />
                        
                      </Button> */}
                      </>
                    ) : (
                      <>
                        {/* <Button onClick={()=>setIsEnggModalOpen(true)}> */}
                        Not Assigned
                        {/* </Button> */}
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    <Link
                      key={call._id}
                      to={`/app/call/updatecall/${call._id}/${call.assetId._id}`}
                    >
                      <Button layout="outline" onClick={() => {}} className=" ">
                        Update
                      </Button>
                    </Link>
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

export default ViewCalls;
