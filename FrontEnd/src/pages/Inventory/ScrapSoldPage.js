import React, { useState, useEffect, useContext, useMemo } from "react";
import moment from "moment";
import axios from "axios";
import { saveAs } from "file-saver";

import Emp from "../../helpers/auth/EmpProfile";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";

import {
  MenuIcon,
  EditIcon,
  TrashIcon,
  TickIcon,
  CloseIcon,
} from "../../icons";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Select,
} from "@windmill/react-ui";

import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Button,
  TableFooter,
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
import { BottomBarContext } from "../../context/BottomBarContext";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";

function ScrapSoldPage() {
  // Bottom bar stuff
  // const [bbaropen, setBBarOpen] = useContext(BottomBarContext);
  // const [assetdetails, setAssetDetails] = useContext(BottomBarContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } =
    useContext(BottomBarContext);
  // table variable styles
  const [activerowid, setActiveRowId] = useState(0);

  const { topheading, setTopHeading } = useContext(TopBarContext);

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // dropdown and modals

  const [successModal, setSuccessModal] = useState(false);
  const [refresh, setRefresh] = useState(true);

  // filterhooks
  const [Business, setBusiness] = useState("");
  const [product, setProduct] = useState("");
  const [unit, setUnit] = useState({ _id: "", unitName: "" });
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });

  // search

  const [searchquery, setSearchQuery] = useState("");

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  //download
  const [isDwnldModalOpen, setIsDwnldModalOpen] = useState(false);

  //selected array

  const [selectedids, setSelectedIds] = useState([]);

  // final dates
  const [invoiceNum, setInvoiceNum] = useState("");
  const [saledate, setSaledate] = useState("");
  const [grossvalue, setGrossvalue] = useState("");
  const [gstperc, setGstperc] = useState("");
  const [netvalue, setNetvalue] = useState("");

  const [invsearch, setInvSearch] = useState("");
  const [addedinv, setAddedInv] = useState([]);

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
    setTopHeading("Sell Scrap");
    return () => {
      setTopHeading("");
    };
  }, []);

  useEffect(() => {
    let temp = (parseFloat(gstperc) * 0.01 + 1) * parseFloat(grossvalue);
    setNetvalue(temp.toFixed(2));
    return () => {};
  }, [gstperc, grossvalue]);
  // -----------------------------------------------------

  useMemo(() => {
    // Using an IIFE
    (async function thegetter() {
      console.log("getter called");
      let payload = {
        pages: {
          page: page,
          limit: resultsPerPage,
        },
        filters: {
          type: "",
          location: "",
          condition: "Scrap",
          searchtype: "",
          searchquery: searchquery,
          //   stocktype: stockType,
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
        // console.log(location, "LOCATION!!!");

        setData(response.data.out);
      } catch (error) {
        throw error;
      }

      console.log("totalResults", totalResults);
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, Business, product, refresh]);

  const handleUpdate = async () => {
    console.log(selectedids);
    if (selectedids.length == 0) {
      alert("No inventory selected");
      return;
    }

    let payload = {
      selectedids: selectedids,
      invoiceNum: invoiceNum,
      scrapsaledate: saledate,
      grossvalue: grossvalue,
      gstperc: gstperc,
      netvalue: netvalue,
    };
    // console.log("payload", payload);

    try {
      let response = await axios({
        url: `${API}/inventory/${Emp.getId()}/invscrapsale`,
        method: "POST",
        data: payload,
      });

      //   setSelectedAssets([]);
      setSelectedIds([]);
      setSuccessModal(true);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateModal = () => {
    return (
      <>
        <Modal
          isOpen={isDwnldModalOpen}
          onClose={() => setIsDwnldModalOpen(false)}
          className=" dark:bg-gray-800 p-5  mx-10  bg-gray-50 text-gray-900 dark:text-white text-center  rounded-lg "
        >
          <ModalHeader className=" w-87">
            <div className="text-lg">
              Are you sure you want to update all the selected inventory ?
            </div>
          </ModalHeader>
          <ModalBody>
            <div className=" space-x-1">
              <Button
                layout="outline"
                onClick={() => {
                  setIsDwnldModalOpen(false);
                  handleUpdate();
                }}
              >
                Yes
              </Button>
              <Button
                layout="outline"
                onClick={() => {
                  setIsDwnldModalOpen(false);
                  //   handleUpdate();
                }}
              >
                No
              </Button>
            </div>
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
        </Modal>
      </>
    );
  };

  const SucessModal = () => {
    return (
      <>
        <Modal isOpen={successModal} onClose={() => setSuccessModal(true)}>
          <ModalHeader>"Inventory Updated Successfully"</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setSuccessModal(false)}
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
      {/* ---------------------Modals----------------------------------------- */}
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
      {UpdateModal()}
      {SucessModal()}

      <div className="mb-64 mt-4">
        <div className="flex flex-row mb-2">
          <div className="w-3/4 text-lg font-semibold dark:text-white">
            Scrap Sale Information
          </div>
          <div className="w-1/4 flex justify-end ">
            <Button
              onClick={() => {
                // handleUpdate();
                setIsDwnldModalOpen(true);
              }}
            >
              Sell Scrap
            </Button>
          </div>
        </div>

        <hr className="my-2"></hr>

        <div className="flex flex-col lg:flex-row  items-center justify-start lg:space-x-8">
          <Label className="w-full ">
            <span>Invoice Number</span>
            <Input
              className="mt-1"
              type="text"
              value={invoiceNum}
              onChange={(e) => {
                setInvoiceNum(e.target.value);
              }}
            />
          </Label>

          <Label className="w-full">
            <span>Date</span>
            <Input
              className="mt-1"
              type="date"
              value={saledate}
              onChange={(e) => {
                setSaledate(e.target.value);
              }}
            />
          </Label>
          <Label className="w-full my-3">
            <span>Gross Value</span>
            <Input
              className="mt-1"
              type="text"
              value={grossvalue}
              onChange={(e) => {
                setGrossvalue(e.target.value);
              }}
            />
          </Label>
          <Label className="w-full my-3">
            <span>GST %</span>
            <Input
              type="text"
              className="mt-1"
              name="brand"
              value={gstperc}
              onChange={(e) => {
                setGstperc(e.target.value);
              }}
            />
          </Label>
        </div>
        <div className="flex flex-col lg:flex-row  items-center justify-start lg:space-x-8">
          <Label className="w-full ">
            <span>Net Value</span>
            <Input
              className="mt-1"
              type="text"
              readOnly={true}
              value={netvalue}
            />
          </Label>
        </div>
        {/* -------selected inventory table----------- */}

        <TableContainer className="mt-4">
          <div className="dark:text-gray-200 text-black text-sm flex space-x-2 items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start  w-full my-2 font-bold">
            Selected Items
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Sl No</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Serial Number</TableCell>
                <TableCell>Condition</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {addedinv.map((item, i) => (
                <TableRow
                  key={i}
                  className={`hover:shadow-lg hover:bg-blue-200 dark:hover:bg-gray-600`}
                >
                  <TableCell>
                    <span className="text-sm">{i + 1}</span>
                  </TableCell>

                  <TableCell className="">
                    <div>
                      <p className="font-semibold">{capitalize(item.type)}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{item.name}</span>
                  </TableCell>

                  <TableCell>
                    <span className="text-sm">{item.sno}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{item.condition}</span>
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

        <div className=" text-lg font-semibold mt-4 ">Inventory Picker</div>

        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <div className=" w-full mt-2 rounded-lg bg-gray-200 dark:bg-gray-700 p-3 overflow-y-auto">
          <form
            // onSubmit={handlevendorSubmit}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Enter Serial Number "
              value={invsearch}
              onChange={(e) => {
                setInvSearch(e.target.value);
              }}
            />
          </form>

          <div className=" mt-4">
            {/* ----------------------------------------------Table----------------------------------------------------- */}
            <TableContainer className="mt-4">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Type</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Serial Number</TableCell>
                    <TableCell>Select</TableCell>
                  </tr>
                </TableHeader>
                <TableBody className="">
                  {data.map((user, i) => (
                    <TableRow
                      className={`hover:shadow-lg dark:hover:bg-gray-600  `}
                      key={i}
                      onClick={() => {
                        // setActiveRowID(user._id);
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
                            <p className="font-semibold">
                              {capitalize(user.type)}
                            </p>
                            {/* <p className="text-xs text-gray-600 dark:text-gray-400">
                            {user.accountName}
                          </p> */}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="">
                        {/* later add celltextoverflow class */}
                        <div className="w-40 overflow-auto text-sm">
                          {user.name}
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="w-64 overflow-auto text-sm">
                          {user.sno}
                        </div>
                      </TableCell>
                      <TableCell>
                        {user.sno != "" ? (
                          <Button
                            layout="outline"
                            className="dark:border-green-700 border-green-400"
                            onClick={() => {
                              setAddedInv([...addedinv, user]);
                              setSelectedIds([...selectedids, user._id]);
                            }}
                          >
                            Select
                          </Button>
                        ) : null}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* ----------------------------------------------Table----------------------------------------------------- */}
          </div>
        </div>

        {/* ----------------------------------------------Table----------------------------------------------------- */}
      </div>

      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default ScrapSoldPage;
