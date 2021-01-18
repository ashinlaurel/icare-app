import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";

import Emp from "../../helpers/auth/EmpProfile";
import { EditIcon, TrashIcon, Remove } from "../../icons";
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

function LST() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } = useContext(
    BottomBarContext
  );
  // table variable styles
  const [activerowid, setActiveRowId] = useState(-1);

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [SelectedItems, setSelectedItems] = useState([]);
  // dropdown and modals
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);

  // filterhooks
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [LSTNo, setLSTNo] = useState("");
  const [date, setDate] = useState(new Date());
  const [condition, setCondition] = useState("");

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

  // Getting data states

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

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
    setTopHeading("LST");
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
    if (SelectedItems.length == 0) {
      setModalMessage("No items selected");
      setMessageModal(true);
      return;
    }
    let invIds = [];
    SelectedItems.map(async (item) => {
      invIds.push(item._id);
      const data = {
        id: item._id,
        update: {
          location: "In Transit",
          caseId: item.caseId,
        },
      };
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

    let lst = {
      from: location,
      to: toLocation,
      LSTNo: LSTNo,
      date: date,
      invItems: invIds,
      status: "In Transit",
    };
    console.log("LST", lst);

    try {
      await axios({
        url: `${API}/lst/${Emp.getId()}/create`,
        method: "POST",
        data: lst,
      });
      // setIsReviewModalOpen(true);
      console.log("Done");
      setModalMessage("LST Submitted");
      setMessageModal(true);
      setSelectedItems([]);
      thegetter();
    } catch (error) {
      console.log(error);
      throw error;
    }
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
                <TableCell>Type</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Serial Number</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Inv Number</TableCell>
                <TableCell>Condition</TableCell>
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
                          else return { ...x, caseId: e.target.value };
                        });
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

  return (
    <>
      <div className="mb-64 mt-4">
        <div className="flex flex-row dark:text-white  ">
          <div className="mr-2 flex flex-row dark:text-white  ">
            <div className="mx-1 my-1  ">From</div>
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
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={toLocation}
                onChange={(e) => {
                  setToLocation(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Location
                </option>
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

          {/* -----------------------------------------Location ----------------------- */}
          <div className=" flex flex-row dark:text-white  ">
            <div className=" mx-3 my-1 ">LST No.</div>
            <div class="relative mx-1 ">
              <input
                value={LSTNo}
                onChange={(e) => setLSTNo(e.target.value)}
                placeholder="LST No."
                class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-1 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-row dark:text-white  ">
            <div className=" my-2 ">Date</div>
            <div class="relative mx-1 ">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="LST No."
                class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          {/* //submitCustomer */}

          <div className="flex flex-row dark:text-white mx-5 ">
            <Button onClick={updateInventory}>Submit</Button>
          </div>
        </div>
        {SelectedInv()}
        <div className="my-5">
          <Button
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
      </div>

      {messageModalComponent()}
      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default LST;
