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

function AssignCallPriority() {
  // Bottom bar stuff
  // const [bbaropen, setBBarOpen] = useContext(BottomBarContext);
  // const [assetdetails, setAssetDetails] = useContext(BottomBarContext);
  const [addEnggModalOpen, setaddEnggModalOpen] = useState(false);

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

  /////// engineer
  const [engineer, setEngineer] = useState({
    _id: "",
    enggName: "",
    assignedCalls: [],
  });
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
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    setData(engineer.assignedCalls);
  }, [engineer]);

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
    setTopHeading("Assign Call Priority");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  const submitCustomer = async () => {
    console.log("DATA", data);
    // e.preventDefault();
    const newuser = {
      assignedCalls: [...data],
    };
    console.log(newuser);

    const payload = {
      id: engineer._id,
      update: newuser,
    };
    try {
      await axios({
        url: `${API}/admin/${Emp.getId()}/update`,
        method: "POST",
        data: payload,
      });
      // setIsReviewModalOpen(true);
      console.log("Done");
    } catch (error) {
      throw error;
    }
  };

  // console.log(selectedprod);

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
      <SelectEmployeeModalForCalls />
      {/* ---------------------Customer Selection Modal----------------------------------------- */}

      {/* {floatbox ? <AssetFloat /> : null} */}
      <div className="mb-64 mt-4">
        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <Button layout="outline" onClick={() => setIsEnggModalOpen(true)}>
            Select Engineer
          </Button>
          <Button onClick={() => submitCustomer(true)}>Submit</Button>
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
                <TableCell>Call Status</TableCell>
                <TableCell>Priority</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map(({ _id, callId, priority }, i) => (
                <TableRow
                  className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                    activerowid == callId._id
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
                        <p className="font-semibold">{callId.callNo}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {moment(callId.date).format("DD/MM/YYYY")}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{callId.unitName}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{callId.phone}</span>
                  </TableCell>
                  <TableCell>
                    {callId.callStatus == 0 ? (
                      <span className="text-sm">Not Allocated</span>
                    ) : null}
                    {callId.callStatus == 1 ? (
                      <span className="text-sm">
                        Pending for Percall Approval
                      </span>
                    ) : null}
                    {callId.callStatus == 2 ? (
                      <span className="text-sm">Pending for Response</span>
                    ) : null}
                    {callId.callStatus == 3 ? (
                      <span className="text-sm">Pending for OEM Response</span>
                    ) : null}
                    {callId.callStatus == 4 ? (
                      <span className="text-sm">Pending for 2nd Response</span>
                    ) : null}
                    {callId.callStatus == 5 ? (
                      <span className="text-sm">Pending for Customer</span>
                    ) : null}
                    {callId.callStatus == 6 ? (
                      <span className="text-sm">Under Observation</span>
                    ) : null}
                    {callId.callStatus == 7 ? (
                      <span className="text-sm">Pending for Others</span>
                    ) : null}
                    {callId.callStatus == 8 ? (
                      <span className="text-sm">Pending for Spare</span>
                    ) : null}
                    {callId.callStatus == 9 ? (
                      <span className="text-sm">Spare in Transit</span>
                    ) : null}
                    {callId.callStatus == 10 ? (
                      <span className="text-sm">Cancelled Calls</span>
                    ) : null}
                    {callId.callStatus == 11 ? (
                      <span className="text-sm">Closed Calls</span>
                    ) : null}
                  </TableCell>
                  <TableCell>
                    <input
                      value={priority}
                      onChange={(e) => {
                        let temp = data;
                        // newuser["caseId"]=e.target.value
                        temp = temp.filter((x) => {
                          if (x._id != _id) return x;
                          else {
                            console.log("here", e.target.value);
                            let t = x;
                            t.priority = e.target.value;
                            return t;
                          }
                        });
                        console.log(temp);
                        setData(temp);
                      }}
                    />
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

export default AssignCallPriority;
