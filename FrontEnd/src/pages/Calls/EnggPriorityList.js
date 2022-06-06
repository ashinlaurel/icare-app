import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";

import Emp from "../../helpers/auth/EmpProfile";

// import {
//   ChatIcon,
//   CartIcon,x
//   MoneyIcon,
//   PeopleIcon,
//   ButtonsIcon,
//   HeartIcon,
//   EditIcon,
//   TrashIcon,
// } from "../../icons";
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
  Input,
  HelperText,
  Label,
  Avatar,
  Badge,
  Pagination,
  Dropdown,
  DropdownItem,
} from "@windmill/react-ui";

import AssetFloat from "../../components/FloatDetails/AssetFloat";
import { API } from "../../backendapi";
import UnitListModal from "../../components/Modal/UnitListModal";
import CustomerSelection from "../../components/Modal/AssetFilters/CustomerSelection";
import EngineerListModal from "../../components/Modal/EngineerListModal";
import { BottomBarContext } from "../../context/BottomBarContext";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import { isAutheticated } from "../../helpers/auth";
import SelectEmployeeModal from "../../components/Modal/SelectEmployeeModal";
import SelectEmployeeModalForCalls from "../../components/Modal/SelectEmployeeModalForCalls";
import {
  capitalize,
  getCallStatusAsString,
} from "../../helpers/toolfuctions/toolfunctions";
import { saveAs } from "file-saver";

function EnggPriorityList() {
  // Bottom bar stuff
  // const [bbaropen, setBBarOpen] = useContext(BottomBarContext);
  // const [assetdetails, setAssetDetails] = useContext(BottomBarContext);
  const [addEnggModalOpen, setaddEnggModalOpen] = useState(false);

  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } =
    useContext(BottomBarContext);
  // table variable styles
  const [activerowid, setActiveRowId] = useState(0);

  const { topheading, setTopHeading } = useContext(TopBarContext);
  //download
  const [isDwnldModalOpen, setIsDwnldModalOpen] = useState(false);

  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // dropdown and modals
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);

  /////// engineer
  const [engineer, setEngineer] = useState(null);
  const [isEnggModalOpen, setIsEnggModalOpen] = useState(false);
  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  // Dates of call
  const [assignedDate, setAssignedDate] = useState("");
  const [assignedETA, setAssignedETA] = useState("");
  // pagination setup
  const resultsPerPage = 100;
  const [totalResults, setTotalResults] = useState(20);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    (async () => {
      if (engineer) {
        let payload = {
          pages: {
            page: 1,
            limit: 100000,
          },
          filters: {
            callStatus: "",
            searchquery: "",
            fromDate: "",
            toDate: "",
            employeeId: engineer._id,
            // servicelocation:"Trivandrum"
          },
        };
        console.log("HERE", payload);
        try {
          let response = await axios({
            url: `${API}/call/${Emp.getId()}/getall`,
            method: "POST",
            data: payload,
          });
          console.log(response.data.out);
          setTotalResults(response.data.total);
          setData(response.data.out);
          // const { total, data } = response.data;
          // console.log(data + "Now");

          setData(response.data.out);
        } catch (error) {
          throw error;
        }
        // console.log(engineer)
      }
    })();
  }, [engineer]);

  const DwnldModal = () => {
    return (
      <>
        <Modal
          isOpen={isDwnldModalOpen}
          onClose={() => setIsDwnldModalOpen(false)}
          className=" sdark:bg-gray-800 p-5 my-6 mx-10 px-5  bg-gray-50 text-gray-900 dark:text-white text-center  rounded-lg "
        >
          <ModalHeader className="flex flex-row justify-between text-xl mx-10 px-10">
            <div className="text-lg">Download Call Data?</div>
          </ModalHeader>
          <ModalBody>
            <Button
              layout="outline"
              onClick={() => {
                downloadAssets();
              }}
            >
              Download Current Engineer
            </Button>
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
        </Modal>
      </>
    );
  };

  const downloadAssets = async () => {
    let csv = `CallNo,Date,Time,Unit,Phone,Product,SerialNumber,Problem,CallStatus,AssignedTo,AssignedDate,ETA,Priority\n`;

    data.map((call, i) => {
      csv =
        csv +
        `"${call.callNo}","${moment(call.date).format("DD-MM-YYYY")}","${moment(
          `${"2018-04-02"}T${call.time}`
        ).format("h:mm a")}","${call.unitName}","${call.phone}","${
          call.assetId.producttype
        }","${call.assetId.product.serialno}","${
          call.problem
        }","${getCallStatusAsString(call.callStatus)}","${
          call.employeeName ? call.employeeName : "Not Assigned"
        }","${moment(call.assignedDate).format("DD-MM-YYYY")}","${
          call.assignedETA
        }","${i + 1}",\n`;
    });
    // console.log(csv); //product.
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(csvData, "CallsExport.csv");
  };

  // download funciton to get all engineers' calls
  const downloadAllCalls = async () => {
    let temp = [];

    let payload = {
      search: "",
      limit: 1000000,
    };
    // here we are just getting all the employees not their calls
    try {
      let users = await axios({
        url: `${API}/admin/${Emp.getId()}/getAllEmpCalls`,
        method: "POST",
        data: payload,
      });
      console.log(users.data);

      users.data.map((user) => {
        temp.push(user);
      });
      // console.log(temp);
      // setValues(temp);
    } catch (error) {
      throw error;
    }
    // console.log(temp);

    // getting data of each employee

    let finaldata = [];
    for (let i = 0; i < temp.length; i++) {
      let payloadtwo = {
        pages: {
          page: 1,
          limit: 100000,
        },
        filters: {
          callStatus: "",
          searchquery: "",
          fromDate: "",
          toDate: "",
          employeeId: temp[i]._id,
          // servicelocation:"Trivandrum"
        },
      };
      try {
        let response = await axios({
          url: `${API}/call/${Emp.getId()}/getall`,
          method: "POST",
          data: payloadtwo,
        });
        console.log(response.data.out);
        finaldata.push(response.data.out);
      } catch (error) {
        throw error;
      }
    }

    // console.log(finaldata);
    let csv = `CallNo,Date,Time,Unit,Phone,Product,SerialNumber,Problem,CallStatus,AssignedTo,AssignedDate,ETA,Priority,\n`;

    for (let j = 0; j < finaldata.length; j++) {
      if (finaldata[j][0]) {
        csv = csv + `${capitalize(finaldata[j][0].employeeName)},\n`;
      }

      finaldata[j].map((call, i) => {
        csv =
          csv +
          `"${call.callNo}","${moment(call.date).format(
            "DD-MM-YYYY"
          )}","${moment(`${"2018-04-02"}T${call.time}`).format("h:mm a")}","${
            call.unitName
          }","${call.phone}","${call.assetId.producttype}","${
            call.assetId.product.serialno
          }","${call.problem}","${getCallStatusAsString(call.callStatus)}","${
            call.employeeName ? call.employeeName : "Not Assigned"
          }","${moment(call.assignedDate).format("DD-MM-YYYY")}","${
            call.assignedETA
          }","${i + 1}",\n`;
      });
    }
    // console.log(csv); //product.
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(csvData, "CallsExport.csv");
  };

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
    setTopHeading("Engineer Call Priority");
    return () => {
      setTopHeading("");
    };
  }, []);

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
      <SelectEmployeeModalForCalls
        isModalOpen={isEnggModalOpen}
        setIsModalOpen={setIsEnggModalOpen}
        setEmployee={setEngineer}
      />
      {DwnldModal()}
      <SelectEmployeeModalForCalls />
      {/* ---------------------Customer Selection Modal----------------------------------------- */}

      {/* {floatbox ? <AssetFloat /> : null} */}
      <div className="mb-64 mt-4">
        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="flex flex-row items-center justify-start space-x-2">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <Button layout="outline" onClick={() => setIsEnggModalOpen(true)}>
            Select Engineer
          </Button>
          <div className="mx-4">
            <Button
              className="px-12 py-2"
              layout="outline"
              onClick={() => {
                setIsDwnldModalOpen(true);
              }}
            >
              Export
            </Button>
          </div>
          <div className="mx-4">
            <Button
              className="px-12 py-2"
              layout="outline"
              onClick={() => {
                // setIsDwnldModalOpen(true);
                downloadAllCalls();
              }}
            >
              Export All
            </Button>
          </div>
          {/* <Button onClick={() => submitCustomer(true)}>Submit</Button> */}
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <TableCell>Call No</TableCell>
              <TableCell>Date</TableCell>

              <TableCell>Unit Name</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Problem</TableCell>

              <TableCell>Call Status</TableCell>
              <TableCell className="text-xs">Assig. Date</TableCell>
              {/* <TableCell>Assigned ETA</TableCell> */}
              <TableCell>Priority</TableCell>
              {/* <TableCell>Edit </TableCell> */}
            </TableHeader>
            <TableBody>
              {engineer &&
                data.map((item, i) => (
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                      activerowid == item._id
                        ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                        : "white"
                    } `}
                    key={i}
                    onClick={() => {
                      // setActiveRowId(callId._id);
                      // setBBarOpen(1);
                      // // console.log("the id is " + call._id);
                      // setSelectedProd(callId);
                      // if (callId.assetId) setAssetDetails(callId.assetId);
                      // else setAssetDetails({});
                      // console.log(callId.assetId);
                      // console.log(call.product.keyboard[0].keyboardname);
                    }}
                  >
                    <TableCell className="w-8">
                      <div className="flex items-center text-sm ">
                        <div>
                          <p className="font-semibold">{item.callNo}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm">
                          {moment(item.date).format("DD/MM/YYYY")}
                        </span>
                        <span className="text-sm">
                          {moment(`${"2018-04-02"}T${item.time}`).format(
                            "h:mm a"
                          )}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm">{item.unitName}</span>
                        <span className="text-sm">Ph: {item.phone}</span>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm">
                          {item.assetId.producttype}
                        </span>
                        <span className="text-xs ">
                          SL:{item.assetId.product.serialno}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className="flex flex-row ">
                      <div className="flex items-center justify-center ">
                        <div className="flex flex-col items-start overflow-auto text-sm w-40 ">
                          <span className=" ">{item.problem}</span>
                          {item.employeeId ? (
                            <span>Engineer: {item.employeeName}</span>
                          ) : (
                            <span>Engineer Not Assigned</span>
                          )}
                        </div>
                      </div>
                      {/* <span>Engineer: {call.engineer}</span> */}
                    </TableCell>

                    <TableCell className="text-xs  ">
                      <div className=" w-32 overflow-auto ">
                        {item.callStatus == 0 ? (
                          <span className=" ">Pending For Allocation</span>
                        ) : null}
                        {item.callStatus == 1 ? (
                          <span className="">Pending for Percall Approval</span>
                        ) : null}
                        {item.callStatus == 2 ? (
                          <span className="">Pending for Response</span>
                        ) : null}
                        {item.callStatus == 3 ? (
                          <span className="">Pending for OEM Response</span>
                        ) : null}
                        {item.callStatus == 4 ? (
                          <span className="">Pending for 2nd Response</span>
                        ) : null}
                        {item.callStatus == 5 ? (
                          <span className="">Pending for Customer</span>
                        ) : null}
                        {item.callStatus == 6 ? (
                          <span className="">Under Observation</span>
                        ) : null}
                        {item.callStatus == 7 ? (
                          <span className="">Pending for Others</span>
                        ) : null}
                        {item.callStatus == 8 ? (
                          <span className="">Pending for Spare</span>
                        ) : null}
                        {item.callStatus == 9 ? (
                          <span className="">Spare in Transit</span>
                        ) : null}
                        {item.callStatus == 10 ? (
                          <span className="">Cancelled Calls</span>
                        ) : null}
                        {item.callStatus == 11 ? (
                          <span className="">Closed Calls</span>
                        ) : null}
                        {item.callStatus == 12 ? (
                          <span className="">Spare Taken CMRR</span>
                        ) : null}
                        {item.callStatus == 13 ? (
                          <span className=" ">
                            Pending For Spare Collection
                          </span>
                        ) : null}
                        {item.callStatus == 14 ? (
                          <span className="">Standby Given</span>
                        ) : null}
                        {item.callStatus == 15 ? (
                          <Badge>Pending For Verification</Badge>
                        ) : null}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm">
                          {moment(item.assignedDate).format("DD-MM-YYYY")}
                        </span>
                        <span className="text-xs">
                          {" "}
                          Time: {item.assignedETA}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{i + 1}</TableCell>
                    {/* <TableCell>
                    
                      
                        <div className="px-2 py-2 dark:border-purple-400 border-purple-600 dark:bg-gray-700 bg-purple-100 inline-block rounded-full dark:text-purple-400 text-purple-700">
                          
                          <Button
                            layout="link"
                            size="icon"
                            aria-label="Edit"
                            onClick={() => {
                              setIsEnggModalOpen(true);
                              setAssignedETA(item.assignedETA);
                              setAssignedDate(item.assignedDate);
                            }}
                            className="rounded-full mx-2 "
                          >
                            <EditIcon className="w-5 h-5" aria-hidden="true" />
                          </Button>
                        </div>
                      
                  </TableCell> */}
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

export default EnggPriorityList;
