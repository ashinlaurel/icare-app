import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";

import Emp from "../../helpers/auth/EmpProfile";
import { EditIcon, TrashIcon } from "../../icons";
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
    // Using an IIFE
    (async function thegetter() {
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
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, location, condition, type, refresh]);

  console.log(selectedprod);

  return (
    <>
     

      <div className="mb-64 mt-4">
      <div className="flex flex-row dark:text-white  ">
        <div className="mx-10 my-1 text-2xl ">From</div>
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
                <option value="Kottayum">Kottayum</option>
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
        <div className="mx-10 my-1 text-2xl " >To</div>
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
                <option value="">All</option>
                <option value="Trivandrum">Trivandrum</option>
                <option value="Kottayum">Kottayum</option>
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
            {/* <div class="relative mx-1 ">
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
                <option value="Kottayum">Kottayum</option>
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
            </div> */}
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
      
        <div className="flex flex-row dark:text-white text-2xl  ">
       
       {data[activerowid]?(<>
           <div className="mx-10 my-2">Send  {data[activerowid].name} from {location} To {toLocation}</div>
       </>):null}
       
       </div>
      </div>

      

      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default LST;
