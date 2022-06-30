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

function MultiAssetUpdate() {
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
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);

  // filterhooks
  const [Business, setBusiness] = useState("");
  const [product, setProduct] = useState("");
  const [unit, setUnit] = useState({ _id: "", unitName: "" });
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });

  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  // asset history
  const [assethistory, setAssetHistory] = useState([]);
  const [assethistoryModalOpen, setAssetHistoryModalOpen] = useState(false);

  // Getting data states

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  //download
  const [isDwnldModalOpen, setIsDwnldModalOpen] = useState(false);

  //selected array
  const [selectedassets, setSelectedAssets] = useState([]);
  const [selectedids, setSelectedIds] = useState([]);

  // edit type enable
  const [contractenable, setContractEnable] = useState(false);
  const [billingenable, setBillingEnable] = useState(false);

  // final dates
  const [ContractFrom, setContractFrom] = useState("");
  const [ContractTo, setContractTo] = useState("");
  const [BillingFrom, setBillingFrom] = useState("");
  const [BillingTo, setBillingTo] = useState("");

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
    setTopHeading("Multi Asset Update");
    return () => {
      setTopHeading("");
    };
  }, []);
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
          url: `${API}/asset/${Emp.getId()}/getall`,
          method: "POST",
          data: payload,
        });
        console.log(response.data.out);
        await setTotalResults(response.data.total);

        console.log("response total", response.data.total);

        // const { total, data } = response.data;
        // console.log(data + "Now");

        setData(response.data.out);
        // if (searchquery != "") {
        //   setPage(1);
        // }
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
    } else if (!billingenable && !contractenable) {
      await setIsDwnldModalOpen(false);
      alert("No Update Type Enabled");
      return;
    }

    let payload = {
      selectedids: selectedids,
      billingenable: billingenable,
      contractenable: contractenable,
      ContractFrom: ContractFrom,
      ContractTo: ContractTo,
      BillingFrom: BillingFrom,
      BillingTo: BillingTo,
    };
    // console.log("payload", payload);

    try {
      let response = await axios({
        url: `${API}/asset/${Emp.getId()}/multiAssetUpdate`,
        method: "POST",
        data: payload,
      });

      setSelectedAssets([]);
      setSelectedIds([]);
      setSuccessModal(true);
      setContractEnable(false);
      setBillingEnable(false);
      setContractFrom("");
      setContractTo("");
      setBillingFrom("");
      setBillingTo("");
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
      <CustomerSelection
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
      />
      {UpdateModal()}
      {SucessModal()}

      <div className="mb-64 mt-4">
        <div className="flex flex-row mb-2">
          <div className="w-3/4 text-lg font-semibold dark:text-white">
            Type Of Update
          </div>
          <div className="w-1/4 flex justify-end ">
            <Button
              onClick={() => {
                // handleUpdate();
                setIsDwnldModalOpen(true);
              }}
            >
              Update All
            </Button>
          </div>
        </div>

        <hr className="my-2"></hr>

        <div className="flex flex-row">
          <div className="w-full my-3 ">
            <span className=" text-sm font-semibold dark:text-white">
              Enable Contract:{" "}
            </span>
            <Input
              className="mx-2 w-5 h-5"
              type="checkbox"
              checked={contractenable}
              onChange={() => {
                setContractEnable(!contractenable);
              }}
            />
            <hr className="mt-2"></hr>
          </div>
          <div className="w-full my-3 ml-8">
            <span className=" text-sm font-semibold dark:text-white">
              Enable Billing:{" "}
            </span>
            <Input
              className="mx-2 w-5 h-5"
              type="checkbox"
              checked={billingenable}
              onChange={() => {
                setBillingEnable(!billingenable);
              }}
            />
            <hr className="mt-2"></hr>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  items-center justify-start lg:space-x-8">
          <Label className="w-full ">
            <span>Contract From</span>
            <Input
              className="mt-1"
              type="date"
              disabled={!contractenable}
              value={ContractFrom}
              onChange={(e) => {
                setContractFrom(e.target.value);
              }}
            />
          </Label>

          <Label className="w-full">
            <span>Contract To</span>
            <Input
              disabled={!contractenable}
              className="mt-1"
              type="date"
              value={ContractTo}
              onChange={(e) => {
                setContractTo(e.target.value);
              }}
            />
          </Label>
          <Label className="w-full my-3">
            <span>Billing From</span>
            <Input
              className="mt-1"
              type="date"
              disabled={!billingenable}
              value={BillingFrom}
              onChange={(e) => {
                setBillingFrom(e.target.value);
              }}
            />
          </Label>
          <Label className="w-full my-3">
            <span>Billing To</span>
            <Input
              type="date"
              className="mt-1"
              name="brand"
              disabled={!billingenable}
              value={BillingTo}
              onChange={(e) => {
                setBillingTo(e.target.value);
              }}
            />
          </Label>
        </div>
        {/* -------selected assets table----------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Customer</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Business</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Product Serial</TableCell>
                <TableCell>Contract From</TableCell>
                <TableCell>Contract To</TableCell>
                <TableCell>Purchase Number</TableCell>
                <TableCell>Purchase Date</TableCell>
                <TableCell>Remove</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {selectedassets.map((user, i) => (
                <TableRow
                  className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                    activerowid == user._id
                      ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                      : "white"
                  } `}
                  key={i}
                  onClick={() => {
                    // setBBarOpen(1);
                    setActiveRowId(user._id);
                    // console.log("the id is " + user._id);
                    setSelectedProd(user);
                    setAssetDetails(user);
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
                        <p className="font-semibold">{user.customerName}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {user.accountName}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.unitName}</span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      type={user.business == "AMC" ? "primary" : "success"}
                    >
                      {user.business}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.producttype}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.product.serialno}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {moment(user.contractfrom).format("DD/MM/YYYY")}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {moment(user.contractto).format("DD/MM/YYYY")}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.ponumber}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {moment(user.podate).format("DD/MM/YYYY")}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <Button
                        onClick={async () => {
                          let tempassets = [...selectedassets];
                          let tempids = [...selectedids];
                          await tempassets.splice(i, 1);
                          await tempids.splice(i, 1);
                          await setSelectedAssets(tempassets);
                          await setSelectedIds(tempids);
                        }}
                        layout="link"
                        size="icon"
                        aria-label="Edit"
                      >
                        <CloseIcon className="w-6 h-6" aria-hidden="true" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={selectedassets.length}
              resultsPerPage={10}
              label="Table navigation"
              onChange={onPageChange}
            />
          </TableFooter>
        </TableContainer>

        <div className=" text-lg font-semibold mt-4 ">Asset Picker</div>
        <hr className="my-2"></hr>
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
                <option value="DEAD">DEAD</option>
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
                    setProduct("Ncompute");
                  }}
                >
                  <span>Ncompute</span>
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
                    setSearchType("prodserial");
                    setSearchLabel("Product Serial");
                    setDisabler(false);
                  }}
                >
                  <span>Product Serial</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpenTwo(false);
                    setSearchType("keyboardsno");
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
                  // setPage(1);
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
        </div>

        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Customer</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Business</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Product Serial</TableCell>
                <TableCell>Contract From</TableCell>
                <TableCell>Contract To</TableCell>
                <TableCell>Purchase Number</TableCell>
                <TableCell>Purchase Date</TableCell>
                <TableCell>Add</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data
                .filter((user) => {
                  for (let i = 0; i < selectedids.length; i++) {
                    if (user._id == selectedids[i]) return 0;
                  }
                  return 1;
                })
                .map((user, i) => (
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                      activerowid == user._id
                        ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                        : "white"
                    } `}
                    key={i}
                    onClick={() => {
                      //   setBBarOpen(1);
                      setActiveRowId(user._id);
                      // console.log("the id is " + user._id);
                      setSelectedProd(user);
                      setAssetDetails(user);
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
                          <p className="font-semibold">{user.customerName}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {user.accountName}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.unitName}</span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        type={user.business == "AMC" ? "primary" : "success"}
                      >
                        {user.business}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.producttype}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.product.serialno}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {moment(user.contractfrom).format("DD/MM/YYYY")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {moment(user.contractto).format("DD/MM/YYYY")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.ponumber}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {moment(user.podate).format("DD/MM/YYYY")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-4">
                        <Button
                          onClick={async () => {
                            let tempassets = [...selectedassets];
                            let tempids = [...selectedids];
                            await tempassets.unshift(user);
                            await tempids.unshift(user._id);
                            await setSelectedAssets(tempassets);
                            await setSelectedIds(tempids);
                          }}
                          layout="link"
                          size="icon"
                          aria-label="Edit"
                        >
                          <TickIcon className="w-6 h-6" aria-hidden="true" />
                        </Button>
                      </div>
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

export default MultiAssetUpdate;
