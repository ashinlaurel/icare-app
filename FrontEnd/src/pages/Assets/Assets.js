import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";
import { EditIcon, MenuIcon, TrashIcon } from "../../icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "@windmill/react-ui";
import React, { useContext, useEffect, useMemo, useState } from "react";

import { API } from "../../backendapi";
import { BottomBarContext } from "../../context/BottomBarContext";
import CustomerSelection from "../../components/Modal/AssetFilters/CustomerSelection";
import Emp from "../../helpers/auth/EmpProfile";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import axios from "axios";
import { capitalize } from "../../helpers/toolfuctions/toolfunctions";
import moment from "moment";
import { saveAs } from "file-saver";

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
                      <TableCell className=" max-w-sm overflow-auto">
                        <span className="w-full overflow-auto">
                          {entry.actionTaken}
                        </span>
                      </TableCell>
                      {/* <TableCell>
                        <span className="text-sm">{entry.actionTaken}</span>
                      </TableCell> */}
                      <TableCell></TableCell>
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
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async (downloadFunction) => {
      setIsDownloading(true);
      await downloadFunction();
      setIsDownloading(false);
    };

    return (
      <>
        <Modal
          isOpen={isDwnldModalOpen}
          onClose={() => setIsDwnldModalOpen(false)}
          className=" dark:bg-gray-800 p-5 mx-10 bg-gray-50 text-gray-900 dark:text-white text-center rounded-lg "
        >
          <ModalHeader className="">
            <div className="text-lg">Select Type Of Export</div>
          </ModalHeader>
          <ModalBody>
            <div className="flex flex-row items-center justify-between space-x-4">
              <Button
                layout="outline"
                onClick={() => handleDownload(downloadAssets)}
              >
                Full Database
              </Button>
              <Button
                layout="outline"
                onClick={() => handleDownload(downloadContractDetails)}
              >
                Contract Details
              </Button>
              <Button
                layout="outline"
                onClick={() => handleDownload(downloadMIFDetails)}
              >
                Brief MIF
              </Button>
            </div>
            {isDownloading && <div className="mt-8">Downloading, please wait...</div>}
          </ModalBody>
        </Modal>
      </>
    );
  };


  const downloadAssets = async () => {
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
      // console.log(response.data.out);
      array = response.data.out;
      // return response.data;
    } catch (error) {
      throw error;
    }
    //counting how many headings are required in
    let maxcpucount = 0;
    let maxramcount = 0;
    let maxhddcount = 0;
    let maxsmpscount = 0;
    let maxfancount = 0;
    let maxmotherboardcount = 0;
    let maxopticaldrivecount = 0;
    let maxkeybdcount = 0;
    let maxmousecount = 0;
    let maxmonitorcount = 0;
    let maxgcardcount = 0;
    let maxenetcount = 0;
    let maxserialcardcount = 0;
    let maxparalellcardcount = 0;
    let maxhbacardcount = 0;
    let maxraidcount = 0;
    let maxtapecount = 0;
    let maxotherscount = 0;

    array.map((temp, i) => {
      if (temp.product?.cpu) {
        maxcpucount = Math.max(maxcpucount, temp.product.cpu.length);
      }
      if (temp.product?.ram) {
        maxramcount = Math.max(maxramcount, temp.product.ram.length);
      }
      if (temp.product?.hdd) {
        maxhddcount = Math.max(maxhddcount, temp.product.hdd.length);
      }
      if (temp.product?.smps) {
        maxsmpscount = Math.max(maxsmpscount, temp.product.smps.length);
      }
      if (temp.product?.fan) {
        maxfancount = Math.max(maxfancount, temp.product.fan.length);
      }
      if (temp.product?.motherboard) {
        maxmotherboardcount = Math.max(
          maxmotherboardcount,
          temp.product.motherboard.length
        );
      }
      if (temp.product?.opticaldrive) {
        maxopticaldrivecount = Math.max(
          maxopticaldrivecount,
          temp.product.opticaldrive.length
        );
      }
      if (temp.product?.keyboard) {
        maxkeybdcount = Math.max(maxkeybdcount, temp.product.keyboard.length);
      }
      if (temp.product?.mouse) {
        maxmousecount = Math.max(maxmousecount, temp.product.mouse.length);
      }
      if (temp.product?.monitor) {
        maxmonitorcount = Math.max(
          maxmonitorcount,
          temp.product.monitor.length
        );
      }
      if (temp.product?.gcard) {
        maxgcardcount = Math.max(maxgcardcount, temp.product.gcard.length);
      }
      if (temp.product?.enetcard) {
        maxenetcount = Math.max(maxenetcount, temp.product.enetcard.length);
      }
      if (temp.product?.serialcard) {
        maxserialcardcount = Math.max(
          maxserialcardcount,
          temp.product.serialcard.length
        );
      }
      if (temp.product?.parallelcard) {
        maxparalellcardcount = Math.max(
          maxparalellcardcount,
          temp.product.parallelcard.length
        );
      }
      if (temp.product?.hbacard) {
        maxhbacardcount = Math.max(
          maxhbacardcount,
          temp.product.hbacard.length
        );
      }
      if (temp.product?.raidcontroller) {
        maxraidcount = Math.max(
          maxraidcount,
          temp.product.raidcontroller.length
        );
      }
      if (temp.product?.tapecontroller) {
        maxtapecount = Math.max(
          maxtapecount,
          temp.product.tapecontroller.length
        );
      }
      if (temp.product?.others) {
        maxotherscount = Math.max(maxotherscount, temp.product.others.length);
      }
    });

    // console.log("maxcpucount=", maxcpucount);

    let csv = `ProductType,Customer,Account,Unit,Business,PoNumber,PoDate,ContactFrom,ContractTo,BillingFrom,BillingTo,Brand,Model,SerialNumber,OperatingSystem,`;
    //cpu headings
    for (let ttt = 1; ttt <= maxcpucount; ttt++) {
      csv += `CPU ${ttt},CPU ${ttt} SNo,`;
    }
    //ram headings
    for (let ttt = 1; ttt <= maxramcount; ttt++) {
      csv += `RAM ${ttt},RAM ${ttt} SNo,`;
    }
    // hdd headings
    for (let ttt = 1; ttt <= maxhddcount; ttt++) {
      csv += `HDD ${ttt},HDD ${ttt} SNo,`;
    }
    // smps headings
    for (let ttt = 1; ttt <= maxsmpscount; ttt++) {
      csv += `SMPS ${ttt},SMPS ${ttt} SNo,`;
    }
    // fan headings
    for (let ttt = 1; ttt <= maxfancount; ttt++) {
      csv += `Fan ${ttt},Fan ${ttt} SNo,`;
    }
    // motherboard headings
    for (let ttt = 1; ttt <= maxmotherboardcount; ttt++) {
      csv += `Motherboard ${ttt},Motherboard ${ttt} SNo,`;
    }
    // optical headings
    for (let ttt = 1; ttt <= maxopticaldrivecount; ttt++) {
      csv += `Optical Drive ${ttt},Optical Drive ${ttt} SNo,`;
    }
    // keyboard headings
    for (let ttt = 1; ttt <= maxkeybdcount; ttt++) {
      csv += `Keyboard ${ttt},Keyboard ${ttt} SNo,`;
    }
    // mouse headings
    for (let ttt = 1; ttt <= maxmousecount; ttt++) {
      csv += `Mouse ${ttt},Mouse ${ttt} SNo,`;
    }
    // monitor headings
    for (let ttt = 1; ttt <= maxmonitorcount; ttt++) {
      csv += `Monitor ${ttt},Monitor ${ttt} SNo,`;
    }
    // gcard headings
    for (let ttt = 1; ttt <= maxgcardcount; ttt++) {
      csv += `Graphics Card ${ttt},Graphics Card ${ttt} SNo,`;
    }
    // enet headings
    for (let ttt = 1; ttt <= maxenetcount; ttt++) {
      csv += `Enet Card ${ttt},Enet Card ${ttt} SNo,`;
    }
    // serial headings
    for (let ttt = 1; ttt <= maxserialcardcount; ttt++) {
      csv += `Serial Card ${ttt},Serial Card ${ttt} SNo,`;
    }
    // paralell headings
    for (let ttt = 1; ttt <= maxparalellcardcount; ttt++) {
      csv += `Parallel Card ${ttt},Parallel Card ${ttt} SNo,`;
    }
    // hba headings
    for (let ttt = 1; ttt <= maxhbacardcount; ttt++) {
      csv += `HBA Card ${ttt},HBA Card ${ttt} SNo,`;
    }
    // raid headings
    for (let ttt = 1; ttt <= maxraidcount; ttt++) {
      csv += `Raid Controller ${ttt},Raid Controller ${ttt} SNo,`;
    }
    // tape headings
    for (let ttt = 1; ttt <= maxtapecount; ttt++) {
      csv += `Tape Controller ${ttt},Tape Controller ${ttt} SNo,`;
    }
    // others headings
    for (let ttt = 1; ttt <= maxotherscount; ttt++) {
      csv += `Others ${ttt},Others ${ttt} SNo,`;
    }

    csv += `\n`;
    array.map((i, count) => {
      csv =
        csv +
        `"${i.producttype}","${i.customerName}","${i.accountName}","${
          i.unitName
        }","${i.business}","${i.ponumber}","${moment(i.podate).format(
          "DD/MM/YYYY"
        )}","${moment(i.contractfrom).format("DD/MM/YYYY")}","${moment(
          i.contractto
        ).format("DD/MM/YYYY")}","${moment(i.billingfrom).format(
          "DD/MM/YYYY"
        )}","${moment(i.billingto).format("DD/MM/YYYY")}","${
          i.product?.brand
        }","${i.product?.model}","${i.product?.serialno}","${i.product?.os}",`;
      //cpu insert
      for (let temp = 0; temp < maxcpucount; temp++) {
        if (i.product?.cpu[temp]) {
          csv += `"${i.product.cpu[temp].cpuname}","${i.product.cpu[temp].cpusno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //ram insert
      for (let temp = 0; temp < maxramcount; temp++) {
        if (i.product?.ram[temp]) {
          csv += `"${i.product.ram[temp].ramname}","${i.product.ram[temp].ramsno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //hdd insert
      for (let temp = 0; temp < maxhddcount; temp++) {
        if (i.product?.hdd[temp]) {
          csv += `"${i.product.hdd[temp].hddname}","${i.product.hdd[temp].hddsno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //smps insert
      for (let temp = 0; temp < maxsmpscount; temp++) {
        if (i.product?.smps[temp]) {
          csv += `"${i.product.smps[temp].smpsname}","${i.product.smps[temp].smpssno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //fan insert
      for (let temp = 0; temp < maxfancount; temp++) {
        if (i.product?.fan[temp]) {
          csv += `"${i.product.fan[temp].fanname}","${i.product.fan[temp].fansno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //motherboard insert
      for (let temp = 0; temp < maxmotherboardcount; temp++) {
        if (i.product?.motherboard[temp]) {
          csv += `"${i.product.motherboard[temp].motherboardname}","${i.product.motherboard[temp].motherboardsno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //optical insert
      for (let temp = 0; temp < maxopticaldrivecount; temp++) {
        if (i.product?.opticaldrive[temp]) {
          csv += `"${i.product.opticaldrive[temp].opticaldrivename}","${i.product.opticaldrive[temp].opticaldrivesno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //keyboard insert
      for (let temp = 0; temp < maxkeybdcount; temp++) {
        if (i.product?.keyboard[temp]) {
          csv += `"${i.product.keyboard[temp].keyboardname}","${i.product.keyboard[temp].keyboardsno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //mouse insert
      for (let temp = 0; temp < maxmousecount; temp++) {
        if (i.product?.mouse[temp]) {
          csv += `"${i.product.mouse[temp].mousename}","${i.product.mouse[temp].mousesno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //monitor insert
      for (let temp = 0; temp < maxmonitorcount; temp++) {
        if (i.product?.monitor[temp]) {
          csv += `"${i.product.monitor[temp].monitorname}","${i.product.monitor[temp].monitorsno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //gcard insert
      for (let temp = 0; temp < maxgcardcount; temp++) {
        if (i.product?.gcard[temp]) {
          csv += `"${i.product.gcard[temp].gcardname}","${i.product.gcard[temp].gcardsno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //enet insert
      for (let temp = 0; temp < maxenetcount; temp++) {
        if (i.product?.enetcard[temp]) {
          csv += `"${i.product.enetcard[temp].enetcardname}","${i.product.enetcard[temp].enetcardsno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //serial insert
      for (let temp = 0; temp < maxserialcardcount; temp++) {
        if (i.product?.serialcard[temp]) {
          csv += `"${i.product.serialcard[temp].serialcardname}","${i.product.serialcard[temp].serialcardsno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //parallel insert
      for (let temp = 0; temp < maxparalellcardcount; temp++) {
        if (i.product?.parallelcard[temp]) {
          let tstring = JSON.parse(
            JSON.stringify(i.product.parallelcard[temp])
          );
          if (
            tstring.parallelcardname !== undefined &&
            tstring.parallelcard != ""
          ) {
            csv += `"${i.product.parallelcard[temp].parallelcardname}","${i.product.parallelcard[temp].parallelcardsno}",`;
          } else {
            csv += `"","",`;
          }
        }
      }

      //hba insert
      for (let temp = 0; temp < maxhbacardcount; temp++) {
        if (i.product?.hbacard[temp]) {
          csv += `"${i.product.hbacard[temp].hbacardname}","${i.product.hbacard[temp].hbacardsno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //raid controller insert
      for (let temp = 0; temp < maxraidcount; temp++) {
        if (i.product?.raidcontroller[temp]) {
          csv += `"${i.product.raidcontroller[temp].raidcontrollername}","${i.product.raidcontroller[temp].raidcontrollersno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //tape controller insert
      for (let temp = 0; temp < maxtapecount; temp++) {
        if (i.product?.tapecontroller[temp]) {
          csv += `"${i.product.tapecontroller[temp].tapecontrollername}","${i.product.tapecontroller[temp].tapecontrollersno}",`;
        } else {
          csv += `"","",`;
        }
      }

      //others controller insert
      for (let temp = 0; temp < maxotherscount; temp++) {
        if (i.product?.others[temp]) {
          csv += `"${i.product.others[temp].othersname}","${i.product.others[temp].otherssno}",`;
        } else {
          csv += `"","",`;
        }
      }

      csv += `\n`;
    });
    // console.log(csv); //product.
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(csvData, "Assets.csv");
  };

  const downloadContractDetails = async () => {
    let csv = `SLNo,Customer,Account,Unit,Business,PoNumber,PoDate,ContactFrom,ContractTo,BillingFrom,BillingTo,Rate,Gst,Amount,ExpiryMonth,Product,SerialNo,\n`;

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
      // console.log(response.data.out);
      array = response.data.out;
      // return response.data;
    } catch (error) {
      throw error;
    }

    // let csv = `SLNo,Customer,Account,Unit,Business,PoNumber,PoDate,ContactFrom,ContractTo,BillingFrom,BillingTo,Rate,Gst,Amount,Expiry Month,Product,SerialNo,\n`;
    array.map((i, count) => {
      csv =
        csv +
        `"${count + 1}","${i.customerName}","${i.accountName}","${
          i.unitName
        }","${i.business}","${i.ponumber}","${moment(i.podate).format(
          "DD/MM/YYYY"
        )}","${moment(i.contractfrom).format("DD/MM/YYYY")}","${moment(
          i.contractto
        ).format("DD/MM/YYYY")}","${moment(i.billingfrom).format(
          "DD/MM/YYYY"
        )}","${moment(i.billingto).format("DD/MM/YYYY")}","${i.amcrate}","${
          i.gstamount
        }","${i.netamount}","${moment(i.contractto).format("MMMM")}","${
          i.producttype
        }","${i.product?.serialno}",\n`;
    });
    console.log(csv); //product.
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(csvData, "Assets.csv");
  };
  const downloadMIFDetails = async () => {
    let csv = `SLNo,Customer,Account,Unit,PoNumber,PoDate,ContactFrom,ContractTo,BillingFrom,BillingTo,Rate,Gst,Amount,ExpiryMonth,Product,SerialNo,Keyboard,KbdSerialNo,Mouse,MouseSerialNo,Monitor,MonitorSerialNo,\n`;

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
      csv =
        csv +
        `"${count + 1}","${i.customerName}","${i.accountName}","${
          i.unitName
        }","${i.ponumber}","${moment(i.podate).format("DD/MM/YYYY")}","${moment(
          i.contractfrom
        ).format("DD/MM/YYYY")}","${moment(i.contractto).format(
          "DD/MM/YYYY"
        )}","${moment(i.billingfrom).format("DD/MM/YYYY")}","${moment(
          i.billingto
        ).format("DD/MM/YYYY")}","${i.amcrate}","${i.gstamount}","${
          i.netamount
        }","${moment(i.contractto).format("MMMM")}","${i.producttype}","${
          i.product?.serialno
        }","${
          i.product?.keyboard.length != 0
            ? i.product?.keyboard[0].keyboardname
            : ""
        }","${
          i.product?.keyboard.length != 0
            ? i.product?.keyboard[0].keyboardsno
            : ""
        }","${
          i.product?.mouse.length != 0 ? i.product?.mouse[0].mousename : ""
        }","${
          i.product?.mouse.length != 0 ? i.product?.mouse[0].mousesno : ""
        }","${
          i.product?.monitor.length != 0 ? i.product?.monitor[0].monitorname : ""
        }","${
          i.product?.monitor.length != 0 ? i.product?.monitor[0].monitorsno : ""
        }",\n`;
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
            {/*------------ new product dropdown----------- */}
            <div class="relative mx-5 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={product}
                onChange={(e) => {
                  setProduct(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Pick Product
                </option>
                <option value="">All</option>
                <option value="Console">Console</option>
                <option value="DMP">DMP</option>
                <option value="Inkjet">Inkjet</option>
                <option value="KVM">KVM</option>
                <option value="Laptop">Laptop</option>
                <option value="Laser">Laser</option>
                <option value="LMP">LMP</option>
                <option value="Module">Module</option>
                <option value="Router">Router</option>
                <option value="Scanner">Scanner</option>
                <option value="Server">Server</option>
                <option value="Desktop">Desktop</option>
                <option value="Storage">Storage</option>
                <option value="Switch">Switch</option>
                <option value="UPS">UPS</option>
                <option value="Ncompute">Ncompute</option>
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

            {/* -------------------------------Search Type--------------------------------------- */}
            <div className="relative ">
              <button
                onClick={() => {
                  setIsOpenTwo(true);
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
              <Dropdown
                isOpen={isOpenTwo}
                onClose={() => setIsOpenTwo(!isOpenTwo)}
              >
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
                Export Data
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
                    user.business == "NOS"
                      ? "bg-red-200 dark:bg-red-900 bg-transparent border-white"
                      : ""
                  } ${
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
