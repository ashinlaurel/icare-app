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
import EmpProfile from "../../helpers/auth/EmpProfile";

function ViewEngineerCalls() {
  // Bottom bar stuff
  // const [bbaropen, setBBarOpen] = useContext(BottomBarContext);
  // const [assetdetails, setAssetDetails] = useContext(BottomBarContext);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } = useContext(
    BottomBarContext
  );
  // table variable styles
  const [activerowid, setActiveRowId] = useState(0);

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // dropdown and modals
  const [refresh, setRefresh] = useState(true);

  // filterhooks
  const [Business, setBusiness] = useState("");
  const [product, setProduct] = useState("");

  /////// engineer
  const [engineer, setEngineer] = useState({ _id: "", enggName: "" });
  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

  // search

  // Getting data states

  // pagination setup

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }



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
    setTopHeading("My Calls");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  useEffect(() => {
    // Using an IIFE
    (async function thegetter() {
      try {
        let response = await axios({
          url: `${API}/admin/${Emp.getId()}/getCallsByEmpId`,
          method: "POST",
          data: {id:EmpProfile.getId()},
        });
        console.log(response.data[0].assignedCalls);
        // setTotalResults(response);
        // const { total, data } = response.data;
        // console.log(data + "Now");

        setData(response.data[0].assignedCalls);
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
      <ReviewSubmit />

      {/* ---------------------Customer Selection Modal----------------------------------------- */}

      {/* {floatbox ? <AssetFloat /> : null} */}
      <div className="mb-64 mt-4">
       
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
              <TableCell>Priority</TableCell>
                <TableCell>Call No</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Unit Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Update</TableCell>
                {/* <TableCell>Assigned Employee</TableCell>
                <TableCell>Update</TableCell> */}
              </tr>
            </TableHeader>
            <TableBody>
              {data.map(({_id,callId,priority}, i) => (
                <TableRow
                  className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                    activerowid == callId._id
                      ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                      : "white"
                  } `}
                  key={i}
                  onClick={() => {
                    // setActiveRowId(call._id);
                    // setBBarOpen(1);
                    // // console.log("the id is " + call._id);
                    // setSelectedProd(call);
                    // console.log("SELECTD", call);
                    // setAssetDetails(call.assetId);
                    // // console.log(call.product.keyboard[0].kbdname);
                  }}
                >

                    <TableCell className="w-8">
                    <div className="flex items-center text-sm ">
                      <div>
                        <p className="font-semibold">{priority}</p>
                      </div>
                    </div>
                  </TableCell>

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
                  <div className="flex justify-start items-center space-x-2">
                      <Link
                        key={callId._id}
                        to={`/app/call/updatecall/${callId._id}/${callId.assetId}`}
                      >
                        <Button
                          layout="outline"
                          onClick={() => {}}
                          className=" "
                        >
                          Update
                        </Button>
                      </Link>
                      {/* <Button
                        onClick={() => {
                          setViewId(i);
                          setHistoryModalOpen(true);
                        }}
                        layout="outline"
                      >
                        History
                      </Button> */}
                    </div>
                  </TableCell>
                  {/* <TableCell>
                    {call.employeeId ? (
                      <>
                        {call.employeeName}
                    
                      </>
                    ) : (
                      <>
                      
                        Not Assigned
                 
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    <Link
                      key={call._id}
                      // to={`/app/call/updatecall/${call._id}/${call.assetId._id}`}
                    >
                      <Button layout="outline" onClick={() => {}} className=" ">
                        Update
                      </Button>
                    </Link>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            
          </TableFooter>
        </TableContainer>

        {/* ----------------------------------------------Table----------------------------------------------------- */}
      </div>

      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default ViewEngineerCalls;
