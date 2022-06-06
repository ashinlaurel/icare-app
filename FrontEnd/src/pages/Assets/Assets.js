import React, { useState, useEffect, useContext, useMemo } from "react";
import moment from "moment";
import axios from "axios";
import { saveAs } from "file-saver";

import Emp from "../../helpers/auth/EmpProfile";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";

import PageTitle from "../../components/Typography/PageTitle";
import { MenuIcon, EditIcon, TrashIcon } from "../../icons";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";
import RoundIcon from "../../components/RoundIcon";
import response from "../../utils/demo/tableData";
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

function Assets() {
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

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }
  const AssetHistoryModal = () => {
    return (
      <>
        <Modal
          isOpen={assethistoryModalOpen}
          onClose={() => setAssetHistoryModalOpen(false)}
          className="w-9/12 dark:bg-gray-800 p-10 my-6  bg-gray-50 text-gray-900 dark:text-white  rounded-lg overflow-y-auto"
        >
          <ModalHeader className="flex flex-row justify-between text-xl">
            {/* <div>{item.name}</div> */}
            {/* <div>
                Asset Serial: <Badge>{}</Badge>{" "}
              </div> */}
          </ModalHeader>
          <ModalBody>
            <div className="font-semibold text-xl my-2">Asset History</div>
            {/* ------------------------- Table ------------------------------ */}
            <TableContainer className="mt-4">
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Date</TableCell>
                    <TableCell>Engineer</TableCell>
                    <TableCell>Attended Date</TableCell>
                    <TableCell>Start Of Service</TableCell>
                    <TableCell>End Of Service</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Notes</TableCell>
                    <TableCell>Action Taken</TableCell>
                    <TableCell>Images</TableCell>
                  </tr>
                </TableHeader>
                <TableBody>
                  {assethistory.map((entry, i) => (
                    <TableRow
                      className={`hover:shadow-lg dark:hover:bg-gray-600 
                       `}
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
                            <p className="font-semibold">
                              {moment(entry.date).format("DD-MM-YYYY")}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">
                          {capitalize(entry.engineer)}
                        </span>
                      </TableCell>

                      <TableCell>
                        <span className="text-sm">{entry.callAttendDate}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{entry.startOfService}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{entry.endOfService}</span>
                      </TableCell>
                      <TableCell>
                        <span>
                          {entry.callStatus == 0 ? (
                            <Badge>Pending For Allocation</Badge>
                          ) : null}
                          {entry.callStatus == 1 ? (
                            <Badge>Pending for Percall Approval</Badge>
                          ) : null}
                          {entry.callStatus == 2 ? (
                            <Badge>Pending for Response</Badge>
                          ) : null}
                          {entry.callStatus == 3 ? (
                            <Badge>Pending for OEM Response</Badge>
                          ) : null}
                          {entry.callStatus == 4 ? (
                            <Badge>Pending for 2nd Response</Badge>
                          ) : null}
                          {entry.callStatus == 5 ? (
                            <Badge>Pending for Customer</Badge>
                          ) : null}
                          {entry.callStatus == 6 ? (
                            <Badge>Under Observation</Badge>
                          ) : null}
                          {entry.callStatus == 7 ? (
                            <Badge>Pending for Others</Badge>
                          ) : null}
                          {entry.callStatus == 8 ? (
                            <Badge>Pending for Spare</Badge>
                          ) : null}
                          {entry.callStatus == 9 ? (
                            <Badge>Spare in Transit</Badge>
                          ) : null}
                          {entry.callStatus == 10 ? (
                            <Badge>Cancelled Calls</Badge>
                          ) : null}
                          {entry.callStatus == 11 ? (
                            <Badge>Closed Calls</Badge>
                          ) : null}
                          {entry.callStatus == 12 ? (
                            <Badge>Spare Taken CMRR</Badge>
                          ) : null}
                          {entry.callStatus == 13 ? (
                            <Badge>Pending For Spare Collection</Badge>
                          ) : null}
                          {entry.callStatus == 14 ? (
                            <Badge>Standby Given</Badge>
                          ) : null}
                          {entry.callStatus == 15 ? (
                            <Badge>Pending For Verification</Badge>
                          ) : null}
                        </span>
                      </TableCell>
                      <TableCell className="flex flex-row max-w-sm">
                        <span className="w-full overflow-auto">
                          {entry.note}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">{entry.actionTaken}</span>
                      </TableCell>
                      <TableCell>
                        {/* <Button
                            layout="outline"
                            onClick={() => {
                              if (entry.newUrl)
                                setGoodSpareHistoryImg(entry.newUrl);
                              if (entry.existUrl)
                                setDefectiveHistoryImg(entry.existUrl);
                              if (entry.ccfrImgUrl)
                                setCcfrHistoryImg(entry.ccfrImgUrl);
                              setIsHistoryImgViewModal(true);
                            }}
                          >
                            Show
                          </Button> */}
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
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </>
    );
  };

  const DeleteModal = () => {
    return (
      <>
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        >
          <ModalHeader>Are you sure you want to delete!</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                try {
                  let response = await axios({
                    url: `${API}/asset/${Emp.getId()}/delete`,
                    method: "POST",
                    data: { id: deleteId },
                  });
                  console.log(response.data);
                  let temp = data.filter((x) => x._id != deleteId);
                  setData(temp);
                  setIsDeleteModalOpen(false);

                  // setData(response.data);
                } catch (error) {
                  throw error;
                }
              }}
            >
              Confirm Delete
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const DwnldModal = () => {
    return (
      <>
        <Modal
          isOpen={isDwnldModalOpen}
          onClose={() => setIsDwnldModalOpen(false)}
          className=" dark:bg-gray-800 p-5 my-6 mx-10 px-5  bg-gray-50 text-gray-900 dark:text-white text-center  rounded-lg "
        >
          <ModalHeader className="flex flex-row justify-between text-xl mx-10 px-10">
            <div className="text-lg">Download Asset Data?</div>
          </ModalHeader>
          <ModalBody>
            <Button
              layout="outline"
              onClick={() => {
                downloadAssets();
              }}
            >
              Download
            </Button>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </>
    );
  };

  const downloadAssets = async () => {
    let csv = `ProductType,Customer,Account,Unit,Business,Brand,Model,SerialNumber,OperatingSystem,CPU,Ram,HDD,SMPS,Fan,MotherBoard,OpticalDrive,Keyboard,Mouse,Monitor,GraphicsCard,EnetCard,SerialCard,ParallelCard,HBACard,RaidController,TapeController,Others,\n`;

    let array;
    let payload = {
      pages: {
        page: page,
        limit: 10000000,
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
    try {
      let response = await axios({
        url: `${API}/asset/${Emp.getId()}/getall`,
        method: "POST",
        data: payload,
      });
      console.log(response.data.out);
      array = response.data.out;
      // return response.data;
    } catch (error) {
      throw error;
    }
    array.map((i, count) => {
      let cpu = `"`;
      console.log(count);
      i.product.cpu.map((j) => {
        cpu = cpu + `${j.cpuname}: ${j.cpusno} `;
      });
      cpu = cpu + `."`;
      let ram = `"`;
      i.product.ram.map((j) => {
        ram = ram + `${j.ramname}: ${j.ramsno} `;
      });
      ram = ram + `."`;
      let hdd = `"`;
      i.product.hdd.map((j) => {
        hdd = hdd + `${j.hddname}: ${j.hddsno} `;
      });
      hdd = hdd.replace(/"/g, '""');
      hdd = hdd + `."`;
      // hdd = hdd.replace(/\"|\n|\t|\r|\v/g, "");

      let smps = `"`;
      i.product.smps.map((j) => {
        smps = smps + `${j.smpsname}: ${j.smpssno} `;
      });
      smps = smps + `."`;
      let fan = `"`;
      i.product.fan.map((j) => {
        fan = fan + `${j.fanname}: ${j.fansno} `;
      });
      fan = fan + `."`;
      let motherboard = `"`;
      i.product.motherboard.map((j) => {
        motherboard =
          motherboard + `${j.motherboardname}: ${j.motherboardsno} `;
      });
      motherboard = motherboard + `."`;
      let opticaldrive = `"`;
      i.product.opticaldrive.map((j) => {
        opticaldrive =
          opticaldrive + `${j.opticaldrivename}: ${j.opticaldrivesno} `;
      });
      opticaldrive = opticaldrive + `."`;
      let keyboard = `"`;
      i.product.keyboard.map((j) => {
        keyboard = keyboard + `${j.keyboardname}: ${j.keyboardsno} `;
      });
      keyboard = keyboard + `."`;
      let mouse = `"`;
      i.product.mouse.map((j) => {
        mouse = mouse + `${j.mousename}: ${j.mousesno} `;
      });
      mouse = mouse + `."`;
      let monitor = `"`;
      i.product.monitor.map((j) => {
        monitor = monitor + `${j.monitorname}: ${j.monitorsno} `;
      });
      monitor = monitor.replace(/"/g, '""');
      monitor = monitor + `."`;

      let gcard = `"`;
      i.product.gcard.map((j) => {
        gcard = gcard + `${j.gcardname}: ${j.gcardsno} `;
      });
      gcard = gcard + `."`;
      let enetcard = `"`;
      i.product.enetcard.map((j) => {
        enetcard = enetcard + `${j.enetcardname}: ${j.enetcardsno} `;
      });
      enetcard = enetcard + `."`;
      let serialcard = `"`;
      i.product.serialcard.map((j) => {
        serialcard = serialcard + `${j.serialcardname}: ${j.serialcardsno} `;
      });
      serialcard = serialcard + `."`;
      let parallelcard = `"`;
      i.product.parallelcard.map((j) => {
        parallelcard =
          parallelcard + `${j.parallelcardname}: ${j.parallelcardsno} `;
      });
      parallelcard = parallelcard + `."`;
      parallelcard = parallelcard.replace(/undefined/g, "");
      let hbacard = `"`;
      i.product.hbacard.map((j) => {
        hbacard = hbacard + `${j.hbacardname}: ${j.hbacardsno} `;
      });
      hbacard = hbacard + `."`;
      let raidcontroller = `"`;
      i.product.raidcontroller.map((j) => {
        raidcontroller =
          raidcontroller + `${j.raidcontrollername}: ${j.raidcontrollersno} `;
      });
      raidcontroller = raidcontroller + `."`;
      let tapecontroller = `"`;
      i.product.tapecontroller.map((j) => {
        tapecontroller =
          tapecontroller + `${j.tapecontrollername}: ${j.tapecontrollersno} `;
      });
      tapecontroller = tapecontroller + `."`;
      let others = `"`;
      i.product.others.map((j) => {
        others = others + `${j.othersname}: ${j.otherssno} `;
      });
      others = others + `."`;
      csv =
        csv +
        `"${i.producttype}","${i.customerName}","${i.accountName}","${i.unitName}","${i.business}","${i.product.brand}","${i.product.model}","${i.product.serialno}","${i.product.os}",${cpu},${ram},${hdd},${smps},${fan},${motherboard},${opticaldrive},${keyboard},${mouse},${monitor},${gcard},${enetcard},${serialcard},${parallelcard},${hbacard},${raidcontroller},${tapecontroller},${others},\n`;
    });
    console.log(csv); //product.
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(csvData, "Assets.csv");
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
    setTopHeading("Assets Management");
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

  console.log(selectedprod);

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
      {AssetHistoryModal()}
      {DeleteModal()}
      {DwnldModal()}
      {/* ---------------------Customer Selection Modal----------------------------------------- */}

      {/* {floatbox ? <AssetFloat /> : null} */}
      <div className="mb-64 mt-4">
        {/* <div className="flex items-center">
          <PageTitle>Assets Management</PageTitle>
          <div>
            <Button
              className="mx-3"
              onClick={() => {
                setFloatBox(!floatbox);
              }}
              icon={HeartIcon}
              layout="link"
              aria-label="Like"
            />
          </div>
        </div> */}
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

            <div class="block relative xl:ml-64">
              <Button
                layout="outline"
                onClick={() => {
                  setIsDwnldModalOpen(true);
                }}
              >
                Download Database
              </Button>
            </div>
          </div>
          {/* ----------------------------------------Row 2 -------------------------------------------------------------------- */}
          {/* <div className="my-4 flex ">
            <div class="relative ">
              <select
                class=" shadow-md appearance-none h-full rounded border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                // value={sortBy}
                // onChange={onSortToggle}
              >
                <option value="TIME_ASC">Time(Latest)</option>
                <option value="TIME_DESC">Time(Oldest)</option>
                <option value="NAME_ASC">Name(A-Z)</option>
                <option value="NAME_DESC">Name(Z-A)</option>
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
          </div> */}
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
                <TableCell>Edit/Delete</TableCell>
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
                    setBBarOpen(1);
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
                      <Button layout="link" size="icon" aria-label="Edit">
                        <Link
                          key={user._id}
                          to={`/app/unit/update/${user._id}`}
                        >
                          <EditIcon className="w-5 h-5" aria-hidden="true" />
                        </Link>{" "}
                      </Button>

                      {Emp.getRole() == 14 ? null : (
                        <Button
                          layout="link"
                          size="icon"
                          aria-label="Delete"
                          onClick={async () => {
                            console.log("delete Asset");
                            setIsDeleteModalOpen(true);
                            setDeleteId(user._id);
                          }}
                        >
                          <TrashIcon className="w-5 h-5" aria-hidden="true" />
                        </Button>
                      )}
                      <Button
                        onClick={() => {
                          console.log("hellloo", data[i].product.history);
                          setAssetHistory(data[i].product.history);
                          setAssetHistoryModalOpen(true);
                        }}
                        layout="link"
                        size="icon"
                        aria-label="Edit"
                      >
                        <MenuIcon className="w-5 h-5" aria-hidden="true" />
                      </Button>
                      {/* <div>
            <Button className="mx-3 mt02">
              {" "}
              <Link
                key={selectedprod._id}
                to={`/app/unit/update/${selectedprod._id}`}
              >
                Edit
              </Link>{" "}
            </Button>
            <Button
              className="mx-3 mt02"
              onClick={async () => {
                console.log("delete Asset");
                try {
                  let response = await axios({
                    url: `${API}/asset/${Emp.getId()}/delete`,
                    method: "POST",
                    data: { id: selectedprod._id },
                  });
                  console.log(response.data);
                  // let temp = data.filter((x) => x._id != selectedprod._id);
                  // setData(temp);

                  // setData(response.data);
                } catch (error) {
                  throw error;
                }
              }}
            >
              Delete
            </Button>
          </div> */}
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

export default Assets;
