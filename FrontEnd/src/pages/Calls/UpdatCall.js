import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { API } from "../../backendapi";
import AsyncSelect from "react-select/async";

import Emp from "../../helpers/auth/EmpProfile";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import {
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

function UpdateCall() {
  
  // floatbox
  
  const params  = useParams();
  const id=params.assetid;
  const callid=params.callid;
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
  const [inventory  , setInventory]  = useState([]);

  //MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <ModalHeader>Asset Updated Successfully!</ModalHeader>
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

  const handleInventory =async ()=>{
    let payload={inventory,assetId:id,product:product}
    console.log(payload)
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
  }

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
    if(payload.podate=="Invalid date")payload.podate="";
    if(payload.contractfrom=="Invalid date")payload.contractfrom="";
    if(payload.contractto=="Invalid date")payload.contractto="";
    if(payload.billingfrom=="Invalid date")payload.billingfrom="";
    if(payload.billingto=="Invalid date")payload.billingto="";
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
         <div className="dark:text-gray-200 text-black flex flex-row  items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start lg:space-x-8  w-full ">
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
              <span className="font-semibold w-1/5">Account :</span> {account.accountName}
            </div>
            <div>
              <span className="font-semibold w-1/5">Unit : </span> {unit.unitName}
            </div>
            <div>
              <span className="font-semibold w-1/5">Business : </span> {Business}
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
                <span className="font-semibold w-1/5 ml-2">Monitor Serial :</span>{" "}
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
                <span className="font-semibold w-1/5 ml-2">SMPS1 Serial : </span>{" "}
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

  return (
    <>
      {AssetBar()}

      <div className=" ">
      <div className="text-xl dark:text-white">Call</div>
          <div className="dark:text-gray-200 text-black flex flex-row flex-wrap items-center bg-gray-100 dark:bg-gray-800 p-2 rounded-md justify-start lg:space-x-8  w-full ">
            {/* /////////////////////////////// . PRODUCT INFO  ///////////////////////////////////////////// */}
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
            <br />
          </div>
          
        </div>
      
      
      
      {UpdatedModal()}
    </>
  );
}

export default UpdateCall;
