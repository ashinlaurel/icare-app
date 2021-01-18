import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { API } from "../../backendapi";
import AsyncSelect from "react-select/async";

import Emp from "../../helpers/auth/EmpProfile";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Input,
  HelperText,
  Label,
  Select,
  Textarea,
  Button,
  Dropdown,
  DropdownItem,
  Badge,
} from "@windmill/react-ui";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";

import { useParams } from "react-router-dom";
import { DropdownIcon } from "../../icons";
import { useMemo } from "react";

function UpdateCall() {
  // floatbox

  const params = useParams();
  const id = params.assetid;
  const callid = params.callid;
  // console.log(id);
  //modal
  const [submitModal, setSubmitModal] = useState(false);

  //customer
  const [unit, setUnit] = useState({ _id: "", unitName: "" });
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });

  //prodcut
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [serialno, setSerialNo] = useState("");
  const [os, setOs] = useState("");
  const [cpu, setCpu] = useState([{ cpuname: "", cpusno: "" }]);
  const [ram, setram] = useState([{ ramname: "", ramsno: "" }]);
  const [hdd, sethdd] = useState([{ hddname: "", hddsno: "" }]);
  const [smps, setsmps] = useState([{ smpsname: "", smpssno: "" }]);
  const [fan, setfan] = useState([{ fanname: "", fansno: "" }]);
  const [motherboard, setmotherboard] = useState([
    { motherboardname: "", motherboardsno: "" },
  ]);
  const [opticaldrive, setopticaldrive] = useState([
    { opticaldrivename: "", opticaldrivesno: "" },
  ]);
  const [kbd, setkbd] = useState([{ kbdname: "", kbdsno: "" }]);
  const [mouse, setmouse] = useState([{ mousename: "", mousesno: "" }]);
  const [monitor, setmonitor] = useState([{ monitorname: "", monitorsno: "" }]);
  const [gcard, setgcard] = useState([{ gcardname: "", gcardsno: "" }]);
  const [enetcard, setenetcard] = useState([
    { enetcardname: "", enetcardsno: "" },
  ]);
  const [serialcard, setserialcard] = useState([
    { serialcardname: "", serialcardsno: "" },
  ]);
  const [parallelcard, setparallelcard] = useState([
    { parallelcardname: "", parallelcardsno: "" },
  ]);
  const [hbacard, sethbacard] = useState([{ hbacardname: "", hbacardsno: "" }]);
  const [raidcontroller, setraidcontroller] = useState([
    { raidcontrollername: "", raidcontrollersno: "" },
  ]);
  const [tapecontroller, settapecontroller] = useState([
    { tapecontrollername: "", tapecontrollersno: "" },
  ]);
  const [others, setothers] = useState([{ othersname: "", otherssno: "" }]);
  //asset

  const [Business, setBusiness] = useState("");
  const [POnumber, setPOnumber] = useState("");
  const [POdate, setPOdate] = useState("");
  const [ContractFrom, setContractFrom] = useState("");
  const [ContractTo, setContractTo] = useState("");
  const [BillingFrom, setBillingFrom] = useState("");
  const [BillingTo, setBillingTo] = useState("");
  const [AMCRate, setAMCRate] = useState("");
  const [GST, setGST] = useState("");
  const [GSTAMOUNT, setGSTAMOUNT] = useState("");
  const [NetAmount, setNetAmount] = useState("");

  //////////////-------------------------------------------->Product name not in asset
  const [product, setProduct] = useState("Server");

  ////////////---------------- INVENTORY state
  const [inventory, setInventory] = useState([]);

  //MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  // table variable styles

  const [activeRowID, setActiveRowID] = useState(-1);
  const [secondactiveRowID, setSecondactiveRowID] = useState(-1);

  // ---------------New States------------
  const [itemtype, setItemtype] = useState(""); //Full system vs item
  const [selectedItem, setSelectedItem] = useState(""); //the selected item category
  const [data, setData] = useState([]); //for first table expansion
  const [inventdata, setInventData] = useState([]); //for second table expansion
  const [existswap, setExistswap] = useState([
    {
      name: "Not Selected",
      sno: "Not Selected",
    },
  ]);
  const [inventswap, setInventswap] = useState([
    {
      name: "Not Selected",
      sno: "Not Selected",
    },
  ]);

  // filterhooks
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [LSTNo, setLSTNo] = useState("");
  const [date, setDate] = useState(new Date());
  const [condition, setCondition] = useState("");
  const [page, setPage] = useState(1);

  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");

  // use effect to add fields to the item coming from asset
  useEffect(() => {
    let temp = data;
    let thetype = selectedItem.toLowerCase();
    temp.map((item, i) => {
      item.name = item[`${thetype}name`];
      item.sno = item[`${thetype}sno`];
      item.type = thetype;
      item.condition = "Bad";
    });
    console.log(temp);
    setData(temp);
    return () => {
      "Data Updation Done";
    };
  }, [data]);

  // -----use effect to pull new inventory list according to filters
  useEffect(() => {
    thegetter();
  }, [selectedItem]);

  async function thegetter() {
    console.log("getter called");
    console.log(selectedItem);
    let payload = {
      pages: {
        page: page,
        limit: 1000000,
      },
      filters: {
        type: selectedItem.toLowerCase(),
        location: location,
        condition: "Good",
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
      // setTotalResults(response.data.total);
      // const { total, data } = response.data;
      // console.log(data + "Now");

      setInventData(response.data.out);
    } catch (error) {
      throw error;
    }
  }

  // -----getting inventory items

  const getAsset = async () => {
    try {
      let res = await axios.post(`${API}/asset/${Emp.getId()}/getbyid`, {
        id: id,
      });
      console.log("asset", res.data);
      let asset = res.data;
      setProduct(asset.producttype);
      setUnit({ _id: id, unitName: asset.unitName });
      setCustomer({ _id: asset.customerId, customerName: asset.customerName });
      setAccount({ _id: asset.accountId, accountName: asset.accountName });
      ////------------------------>>>>>>>>
      // setProduct("Server");
      ////////---------ASSET INFO
      setBusiness(asset.business);
      setPOnumber(asset.ponumber);
      setAMCRate(asset.amcrate);
      // Dates --------------------------
      setPOdate(moment(asset.podate).format("YYYY-MM-DD"));
      setContractFrom(moment(asset.contractfrom).format("YYYY-MM-DD"));
      setContractTo(moment(asset.contractto).format("YYYY-MM-DD"));
      setBillingFrom(moment(asset.billingfrom).format("YYYY-MM-DD"));
      setBillingTo(moment(asset.billingto).format("YYYY-MM-DD"));
      ////////////------------>>>>>>>> misiing field GST(asset.gs)
      setGSTAMOUNT(asset.gstamount);
      setNetAmount(asset.netamount);
      // setProduct(asset);
      //////////////////////////////

      setBrand(asset.product.brand);
      setModel(asset.product.model);
      setSerialNo(asset.product.serialno);
      setOs(asset.product.os);
      setCpu(asset.product.cpu);
      setram(asset.product.ram);
      if (asset.product.hdd.length == 0) sethdd([{ hddname: "", hddsno: "" }]);
      else sethdd(asset.product.hdd);
      if (asset.product.smps.length == 0)
        setsmps([{ smpsname: "", smpssno: "" }]);
      else setsmps(asset.product.smps);
      if (asset.product.fan.length == 0) setfan([{ fanname: "", fansno: "" }]);
      else setfan(asset.product.fan);
      if (asset.product.motherboard.length == 0)
        setmotherboard([{ motherboardname: "", motherboardsno: "" }]);
      else setmotherboard(asset.product.motherboard);
      if (asset.product.opticaldrive.length == 0)
        setopticaldrive([{ opticaldrivename: "", opticaldrivesno: "" }]);
      else setopticaldrive(asset.product.opticaldrive);
      if (asset.product.keyboard.length == 0)
        setkbd([{ kbdname: "", kbdsno: "" }]);
      else setkbd(asset.product.keyboard);
      if (asset.product.mouse.length == 0)
        setmouse([{ mousename: "", mousesno: "" }]);
      else setmouse(asset.product.mouse);
      if (asset.product.monitor.length == 0)
        setmonitor([{ monitorname: "", monitorsno: "" }]);
      else setmonitor(asset.product.monitor);
      if (asset.product.gcard.length == 0)
        setgcard([{ gcardname: "", gcardsno: "" }]);
      else setgcard(asset.product.gcard);
      if (asset.product.enetcard.length == 0)
        setenetcard([{ netcardname: "", enetcardsno: "" }]);
      else setenetcard(asset.product.enetcard);
      if (asset.product.serialcard.length == 0)
        setserialcard([{ serialcardname: "", serialcardsno: "" }]);
      else setserialcard(asset.product.serialcard);

      if (asset.product.parallelcard.length == 0)
        setparallelcard([{ parallelcardname: "", parallelcardsno: "" }]);
      else setparallelcard(asset.product.parallelcard);

      if (asset.product.hbacard.length == 0)
        sethbacard([{ hbacardname: "", hbacardsno: "" }]);
      else sethbacard(asset.product.hbacard);

      if (asset.product.raidcontroller.length == 0)
        setraidcontroller([{ raidcontrollername: "", raidcontrollersno: "" }]);
      else setraidcontroller(asset.product.raidcontroller);

      if (asset.product.tapecontroller.length == 0)
        settapecontroller([{ tapecontrollername: "", tapecontrollersno: "" }]);
      else settapecontroller(asset.product.tapecontroller);

      if (asset.product.others.length == 0)
        setothers([{ othersname: "", otherssno: "" }]);
      else setothers(asset.product.others);
    } catch (err) {
      console.log("assetFind Error", err);
    }
  };

  ////// CALL

  const [call, setCall] = useState({});

  const getCall = async () => {
    try {
      let res = await axios.post(`${API}/call/${Emp.getId()}/getbyid`, {
        id: callid,
      });
      console.log("call", res.data);
      setCall(res.data);
    } catch (err) {
      console.log("call Find Error", err);
    }
  };

  useEffect(() => {
    getAsset();
    getCall();
  }, []);

  const UpdatedModal = () => {
    return (
      <>
        <Modal isOpen={submitModal} onClose={() => setSubmitModal(false)}>
          <ModalHeader>Swap Successfull</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setSubmitModal(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const handleInventory = async () => {
    let payload = { inventory, assetId: id, product: product };
    console.log(payload);
    try {
      let update = await axios({
        url: `${API}/inventory/${Emp.getId()}/assetupdate`,
        method: "POST",
        data: payload,
      });
      // setSubmitModal(true);
      console.log("Done");
    } catch (error) {
      throw error;
    }
  };

  //functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inventory);

    let payload = {
      business: Business,
      producttype: product,
      ponumber: POnumber,
      podate: POdate,
      contractfrom: ContractFrom,
      contractto: ContractTo,
      billingfrom: BillingFrom,
      billingto: BillingTo,
      amcrate: AMCRate,
      gstperc: GST,
      gstamount: GSTAMOUNT,
      netamount: NetAmount,
      ///------------------ cust info
      // unitId: unit._id,
      // unitName: unit.unitName,
      // accountId: account._id,
      // accountName: account.accountName,
      // customerId: customer._id,
      // customerName: customer.customerName,
    };
    if (payload.podate == "Invalid date") payload.podate = "";
    if (payload.contractfrom == "Invalid date") payload.contractfrom = "";
    if (payload.contractto == "Invalid date") payload.contractto = "";
    if (payload.billingfrom == "Invalid date") payload.billingfrom = "";
    if (payload.billingto == "Invalid date") payload.billingto = "";
    let newproduct = {
      brand: brand,
      model: model,
      serialno: serialno,
      os: os,
      cpu: cpu,
      ram: ram,
      hdd: hdd,
      smps: smps,
      fan: fan,
      motherboard: motherboard,
      opticaldrive: opticaldrive,
      keyboard: kbd,
      mouse: mouse,
      monitor: monitor,
      gcard: gcard,
      enetcard: enetcard,
      serialcard: serialcard,
      parallelcard: parallelcard,
      hbacard: hbacard,
      raidcontroller: raidcontroller,
      tapecontroller: tapecontroller,
      others: others,
    };
    console.log(payload);

    const data = { id: id, newasset: payload, newproduct: newproduct };
    // console.log(API);
    try {
      let update = await axios({
        url: `${API}/asset/${Emp.getId()}/update`,
        method: "POST",
        data: data,
      });
      handleInventory();
      setSubmitModal(true);
      console.log("Done");
    } catch (error) {
      throw error;
    }
  };

  const handleSwap = async () => {
    let payload = {
      existswap: existswap[0],
      newswap: inventswap[0],
      call: call,
      type: selectedItem.toLowerCase(),
    };

    try {
      let update = await axios({
        url: `${API}/call/${Emp.getId()}/swapitems`,
        method: "POST",
        data: payload,
      });

      console.log("Done");
      setInventswap([
        {
          name: "Not Selected",
          sno: "Not Selected",
        },
      ]);
      setExistswap([
        {
          name: "Not Selected",
          sno: "Not Selected",
        },
      ]);
      getAsset();
      setSubmitModal(true);
    } catch (error) {
      throw error;
    }
  };

  //DROPDOWN------------------------------------------------------------------------------------

  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  const AssetBar = () => {
    return (
      <div className="dark:text-white my-4 ">
        {/* Row 1  */}
        <div className="text-xl font-semibold">Asset Information</div>
        {/* Call Details */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8 w-8/12">
          <div className="my-3 font-semibold">
            <span>Call Number :{call.callNo}</span>
          </div>
          <div className="my-3 font-semibold">
            <span>Contact Person:{call.contactPerson}</span>
          </div>
          <div className="my-3 font-semibold">
            <span>Date: {call.date}</span>
          </div>
        </div>
        <div className="dark:text-gray-200 text-black flex flex-row  items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start lg:space-x-8  w-full ">
          {/* Row - 1 */}
          <div className="flex flex-col  text-sm my-1 w-full ">
            <div>
              <span className="font-semibold w-1/5">Product Type :</span>{" "}
              {product}
            </div>
            <div>
              <span className="font-semibold w-1/5">Customer : </span>{" "}
              {customer.customerName}
            </div>
            <div>
              <span className="font-semibold w-1/5">Account :</span>{" "}
              {account.accountName}
            </div>
            <div>
              <span className="font-semibold w-1/5">Unit : </span>{" "}
              {unit.unitName}
            </div>
            <div>
              <span className="font-semibold w-1/5">Business : </span>{" "}
              {Business}
            </div>
          </div>

          {/*  Row 2 */}
          <div className="flex flex-col  text-sm my-1 w-full ">
            {kbd[0] ? (
              <div>
                <span className="font-semibold w-1/5">KBD Model :</span>{" "}
                {kbd[0].kbdname}
              </div>
            ) : null}

            {kbd[0] ? (
              <div>
                <span className="font-semibold w-1/5">KBD Serial: </span>{" "}
                {kbd[0] ? kbd[0].kbdsno : ""}
              </div>
            ) : null}
            {mouse[0] ? (
              <div>
                <span className="font-semibold w-1/5">Mouse Model :</span>{" "}
                {mouse[0] ? mouse[0].mousename : ""}
              </div>
            ) : null}
            {mouse[0] ? (
              <div>
                <span className="font-semibold w-1/5">Mouse Serial : </span>{" "}
                {mouse[0] ? mouse[0].mousesno : ""}
              </div>
            ) : null}
            {monitor[0] ? (
              <div>
                <span className="font-semibold w-1/5">Monitor : </span>{" "}
                {monitor[0] ? monitor[0].monitorname : ""}
              </div>
            ) : null}
          </div>
          {/*  Row 3 */}
          <div className=" flex flex-col  text-sm my-1 w-full">
            {monitor[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">
                  Monitor Serial :
                </span>{" "}
                {monitor[0] ? monitor[0].monitorsno : ""}
              </div>
            ) : null}

            {smps[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">SMPS1 Model :</span>{" "}
                {smps[0] ? smps[0].smpsname : ""}
              </div>
            ) : null}
            {smps[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">
                  SMPS1 Serial :{" "}
                </span>{" "}
                {smps[0] ? smps[0].smpssno : ""}
              </div>
            ) : null}
            {motherboard[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">Motherboard: </span>{" "}
                {motherboard[0] ? motherboard[0].motherboardname : ""}
              </div>
            ) : null}

            {motherboard[0] ? (
              <div>
                <span className="font-semibold w-1/5 ml-2">MBD Serial : </span>
                {motherboard[0] ? motherboard[0].motherboardsno : ""}
              </div>
            ) : null}
          </div>
          {/* Row 4 */}
          <div className="flex flex-col  text-sm my-1 w-full ">
            {hdd[0] ? (
              <div>
                <span className="font-semibold w-1/5">HDD1 Model:</span>{" "}
                {hdd[0] ? hdd[0].hddname : ""}
              </div>
            ) : null}
            {hdd[0] ? (
              <div>
                <span className="font-semibold w-1/5">HDD1 Serial :</span>{" "}
                {hdd[0] ? hdd[0].hddsno : ""}
              </div>
            ) : null}

            {hdd[1] ? (
              <div>
                <span className="font-semibold w-1/5">HDD2 Model : </span>{" "}
                {hdd[1] ? hdd[1].hddname : ""}
              </div>
            ) : null}

            {hdd[1] ? (
              <div>
                <span className="font-semibold w-1/5">HDD2 Serial: </span>{" "}
                {hdd[1] ? hdd[1].hddsno : ""}
              </div>
            ) : null}
            {
              ram[
                0 ? (
                  <div>
                    <span className="font-semibold w-1/5">RAM1 Model : </span>{" "}
                    {ram[0] ? ram[0].ramname : ""}
                  </div>
                ) : null
              ]
            }
          </div>
          {/* -----------Row 5---------- */}
          <div className="flex flex-col  text-sm my-1 w-full ">
            {ram[0] ? (
              <div>
                <span className="font-semibold w-1/5">RAM1 Serial:</span>{" "}
                {ram[0] ? ram[0].ramsno : ""}
              </div>
            ) : null}

            {ram[1] ? (
              <div>
                <span className="font-semibold w-1/5">RAM2 Model:</span>{" "}
                {ram[1] ? ram[1].ramname : ""}
              </div>
            ) : null}

            {ram[1] ? (
              <div>
                <span className="font-semibold w-1/5">RAM2 Serial : </span>{" "}
                {ram[1] ? ram[1].ramsno : ""}
              </div>
            ) : null}
            {opticaldrive[0] ? (
              <div>
                <span className="font-semibold w-1/5">Optical Model: </span>{" "}
                {opticaldrive[0] ? opticaldrive[0].opticaldrivename : ""}
              </div>
            ) : null}

            {opticaldrive[0] ? (
              <div>
                <span className="font-semibold w-1/5">Optical Serial : </span>{" "}
                {opticaldrive[0] ? opticaldrive[0].opticaldrivesno : ""}
              </div>
            ) : null}
          </div>
        </div>

        {/* <hr className="my-4" /> */}
        <div className=" text-sm">
          <div className="dark:text-gray-200 text-black flex flex-row flex-wrap items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start lg:space-x-8  w-full ">
            {/* /////////////////////////////// . PRODUCT INFO  ///////////////////////////////////////////// */}
            <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8 w-8/12">
              <div className="my-3 font-semibold">
                <span>Brand :{brand}</span>
              </div>
              <div className="my-3 font-semibold">
                <span>Model:{model}</span>
              </div>
              <div className="my-3 font-semibold">
                <span>Serial Number: {serialno}</span>
              </div>

              {product == "Laptop" ||
              product == "Server" ||
              product == "Desktop" ? (
                <>
                  <div className="font-semibold">
                    <span>Operating System :{os}</span>
                  </div>
                </>
              ) : null}
            </div>
            <br />
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////////////////////// */}
      </div>
    );
  };

  const InvTable = (items, activeRowID, setActiveRowID, setExistswap) => {
    return (
      <div className=" bg-gray-200 dark:bg-gray-700 p-3">
        <div className="mb- mt-4">
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
              <TableBody>
                {items.map((user, i) => (
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                      activeRowID == user._id
                        ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                        : "white"
                    } `}
                    key={i}
                    onClick={() => {
                      // setActiveRowID(user._id);
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
                      <Button
                        layout="outline"
                        className="dark:border-green-700 border-green-400"
                        onClick={() => {
                          setExistswap([user]);
                          setActiveRowID(-1);
                        }}
                      >
                        Select
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* ----------------------------------------------Table----------------------------------------------------- */}
        </div>

        {/* ------------------------------------Bottom Bar---------------------------------- */}
      </div>
    );
  };

  const AssetItemPick = () => {
    return (
      <div>
        <div className="text-xl dark:text-white">Swap Items</div>

        {/* -----Type Selection---- */}
        <div className="">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-6 ">
            <div class="relative  ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={itemtype}
                onChange={(e) => {
                  setItemtype(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select Inventory Category
                </option>

                <option value="Full" disabled>
                  Full System
                </option>
                <option value="Item">Item</option>
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
                {selectedItem ? selectedItem : "Pick Item"}
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
                {itemtype == "Full" ? (
                  <>
                    {" "}
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Console");
                      }}
                    >
                      <span>Console</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("DMP");
                      }}
                    >
                      <span>DMP</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Inkjet");
                      }}
                    >
                      <span>Inkjet</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("KVM");
                      }}
                    >
                      <span>KVM</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Laptop");
                      }}
                    >
                      <span>Laptop</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Laser");
                      }}
                    >
                      <span>Laser</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("LMP");
                      }}
                    >
                      <span>LMP</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Module");
                      }}
                    >
                      <span>Module</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Router");
                      }}
                    >
                      <span>Router</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Scanner");
                      }}
                    >
                      <span>Scanner</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Server");
                      }}
                    >
                      <span>Server</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Desktop");
                      }}
                    >
                      <span>Desktop</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Storage");
                      }}
                    >
                      <span>Storage</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Switch");
                      }}
                    >
                      <span>Switch</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("UPS");
                      }}
                    >
                      <span>UPS</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setSelectedItem("Others");
                      }}
                    >
                      <span>Others</span>
                    </DropdownItem>
                  </>
                ) : (
                  <>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("Mouse");
                        // thegetter();
                        setData(mouse);
                      }}
                    >
                      <span>Mouse</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("Kbd");
                        setData(kbd);
                      }}
                    >
                      <span>Keyboard</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("Monitor");
                        setData(monitor);
                      }}
                    >
                      <span>Monitor</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("Cpu");
                        setData(cpu);
                      }}
                    >
                      <span>Cpu</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("Ram");
                        setData(ram);
                      }}
                    >
                      <span>Ram</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("Fan");
                        setData(fan);
                      }}
                    >
                      <span>Fan</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("Motherboard");
                        setData(motherboard);
                      }}
                    >
                      <span>Motherboard</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("SMPS");
                        setData(smps);
                      }}
                    >
                      <span>SMPS</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("HDD");
                        setData(hdd);
                      }}
                    >
                      <span>HDD</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("Gcard");
                        setData(gcard);
                      }}
                    >
                      <span>Gcard</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("EnetCard");
                        setData(enetcard);
                      }}
                    >
                      <span>Enet Card</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("SerialCard");
                        setData(serialcard);
                      }}
                    >
                      <span>Serial Card</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("ParalellCard");
                        setData(parallelcard);
                      }}
                    >
                      <span>Paralell Card</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("OpticalDrive");
                        setData(opticaldrive);
                      }}
                    >
                      <span>Optical Drive</span>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setIsOpen(false);
                        setActiveRowID(-1);
                        setSelectedItem("Others");
                        setData(others);
                      }}
                    >
                      <span>Others</span>
                    </DropdownItem>
                  </>
                )}
              </Dropdown>
            </div>
            <Button
              layout="outline"
              className="dark:border-green-700 border-green-400"
              onClick={() => {
                console.log("Swap");
                handleSwap();
              }}
            >
              Swap
            </Button>
          </div>
        </div>

        {/* -------Existing Item Table ----------*/}

        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr className="flex flex-row justify-between">
                <TableCell>Type</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Serial Number</TableCell>

                <TableCell>
                  <span
                    className="cursor-pointer"
                    // onClick={() => setActiveRowID(-1)}
                  >
                    Items
                  </span>
                </TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {existswap.map((user, i) => (
                <div className="flex flex-col justify-around">
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ${
                      activeRowID == user._id
                        ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                        : "white"
                    } `}
                    key={i}
                    onClick={() => {
                      // setActiveRowID(i);
                    }}
                  >
                    <TableCell className="w-8">
                      <div className="flex items-center text-sm ">
                        <div>
                          <p className="font-semibold">{selectedItem}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.name}</span>
                    </TableCell>

                    <TableCell>
                      <span className="text-sm">{user.sno}</span>
                    </TableCell>

                    <TableCell className="text-center ">
                      <Button
                        // layout="link"
                        size="icon"
                        aria-label="DropDown"
                        onClick={() => {
                          console.log(activeRowID);
                          if (activeRowID != -1) {
                            setActiveRowID(-1);
                          } else {
                            setActiveRowID(i);
                          }
                          // setActiveRowID(-1);
                        }}
                        className="rounded-lg m-1"
                      >
                        <DropdownIcon className="w-5 h-5" aria-hidden="true" />
                      </Button>
                    </TableCell>
                  </TableRow>

                  {activeRowID == i
                    ? InvTable(data, activeRowID, setActiveRowID, setExistswap)
                    : null}
                </div>
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

        {/*----------- Inventory Selection Table ----------- */}
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr className="flex flex-row justify-between">
                <TableCell>Type</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Serial Number</TableCell>

                <TableCell>
                  <span
                    className="cursor-pointer"
                    // onClick={() => setActiveRowID(-1)}
                  >
                    Items
                  </span>
                </TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {inventswap.map((user, i) => (
                <div className="flex flex-col justify-around">
                  <TableRow
                    className={`hover:shadow-lg dark:hover:bg-gray-600 flex flex-row justify-between  ${
                      secondactiveRowID == user._id
                        ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                        : "white"
                    } `}
                    key={i}
                    onClick={() => {
                      // setActiveRowID(i);
                    }}
                  >
                    <TableCell className="w-8">
                      <div className="flex items-center text-sm ">
                        <div>
                          <p className="font-semibold">{selectedItem}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{user.name}</span>
                    </TableCell>

                    <TableCell>
                      <span className="text-sm">{user.sno}</span>
                    </TableCell>

                    <TableCell className="text-center ">
                      <Button
                        // layout="link"
                        size="icon"
                        aria-label="DropDown"
                        onClick={() => {
                          if (secondactiveRowID != -1) {
                            setSecondactiveRowID(-1);
                          } else {
                            setSecondactiveRowID(i);
                          }
                          // setActiveRowID(-1);
                        }}
                        className="rounded-lg m-1"
                      >
                        <DropdownIcon className="w-5 h-5" aria-hidden="true" />
                      </Button>
                    </TableCell>
                  </TableRow>

                  {secondactiveRowID == i
                    ? InvTable(
                        inventdata,
                        secondactiveRowID,
                        setSecondactiveRowID,
                        setInventswap
                      )
                    : null}
                </div>
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
      </div>
    );
  };

  return (
    <>
      {AssetBar()}
      {/* <div className=" ">
        <div className="text-xl dark:text-white">Call</div>
        <div className="dark:text-gray-200 text-black flex flex-row flex-wrap items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start lg:space-x-8  w-full ">
          {/* /////////////////////////////// . PRODUCT INFO  ///////////////////////////////////////////// */}
      {/* <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8 w-8/12">
            <div className="my-3 font-semibold">
              <span>Call Number :{call.callNo}</span>
            </div>
            <div className="my-3 font-semibold">
              <span>Contact Person:{call.contactPerson}</span>
            </div>
            <div className="my-3 font-semibold">
              <span>Date: {call.date}</span>
            </div>
          </div> */}
      {/* <br /> */}
      {/* </div> */}
      {/* </div> */}
      {AssetItemPick()}
      {UpdatedModal()}
    </>
  );
}

export default UpdateCall;
