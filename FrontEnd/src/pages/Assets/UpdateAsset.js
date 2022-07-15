import React, { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import moment from "moment";
import { API } from "../../backendapi";

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

import { Add, Remove, HeartIcon } from "../../icons";
import UnitListModal from "../../components/Modal/UnitListModal";
import CreateAssetFloat from "../../components/FloatDetails/CreateAssetFloat";

// Migration
import { handleMigration } from "../../migration/migration";
import { Link, useParams } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";

function UpdateAsset() {
  const { topheading, setTopHeading } = useContext(TopBarContext);
  // floatbox
  const [floatbox, setFloatBox] = useState(false);
  const { id } = useParams();
  // console.log(id);
  //modal
  const [submitModal, setSubmitModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  //customer
  const [unit, setUnit] = useState({ _id: "", unitName: "" });
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });
  const [originalproduct, setOriginalProduct] = useState("Nil");
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
  const [kbd, setkbd] = useState([{ keyboardname: "", keyboardsno: "" }]);
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
  const [servicelocation, setServiceLocation] = useState("");

  //////////////-------------------------------------------->Product name not in asset
  const [product, setProduct] = useState("Server");

  //MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setTopHeading("Update Asset");
    return () => {
      setTopHeading("");
    };
  }, []);

  const getAsset = async () => {
    try {
      let res = await axios.post(`${API}/asset/${Emp.getId()}/getbyid`, {
        id: id,
      });
      console.log("asset", res.data);
      let asset = res.data;
      setServiceLocation(asset.servicelocation);
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
      setGST(asset.gstperc);
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
      sethdd(asset.product.hdd);
      setsmps(asset.product.smps);
      setfan(asset.product.fan);
      setmotherboard(asset.product.motherboard);
      setopticaldrive(asset.product.opticaldrive);
      setkbd(asset.product.keyboard);
      setmouse(asset.product.mouse);
      setmonitor(asset.product.monitor);
      setgcard(asset.product.gcard);
      setenetcard(asset.product.enetcard);
      setserialcard(asset.product.serialcard);
      setparallelcard(asset.product.parallelcard);
      sethbacard(asset.product.hbacard);
      setraidcontroller(asset.product.raidcontroller);
      settapecontroller(asset.product.tapecontroller);
      setothers(asset.product.others);

      if (asset.originalproduct) {
        setOriginalProduct(asset.originalproduct);
      }

      // if (asset.product.hdd.length == 0) sethdd([{ hddname: "", hddsno: "" }]);
      // else sethdd(asset.product.hdd);
      // if (asset.product.smps.length == 0)
      //   setsmps([{ smpsname: "", smpssno: "" }]);
      // else setsmps(asset.product.smps);
      // if (asset.product.fan.length == 0) setfan([{ fanname: "", fansno: "" }]);
      // else setfan(asset.product.fan);
      // if (asset.product.motherboard.length == 0)
      //   setmotherboard([{ motherboardname: "", motherboardsno: "" }]);
      // else setmotherboard(asset.product.motherboard);
      // if (asset.product.opticaldrive.length == 0)
      //   setopticaldrive([{ opticaldrivename: "", opticaldrivesno: "" }]);
      // else setopticaldrive(asset.product.opticaldrive);
      // if (asset.product.keyboard.length == 0)
      //   setkbd([{ keyboardname: "", keyboardsno: "" }]);
      // else setkbd(asset.product.keyboard);
      // if (asset.product.mouse.length == 0)
      //   setmouse([{ mousename: "", mousesno: "" }]);
      // else setmouse(asset.product.mouse);
      // if (asset.product.monitor.length == 0)
      //   setmonitor([{ monitorname: "", monitorsno: "" }]);
      // else setmonitor(asset.product.monitor);
      // if (asset.product.gcard.length == 0)
      //   setgcard([{ gcardname: "", gcardsno: "" }]);
      // else setgcard(asset.product.gcard);
      // if (asset.product.enetcard.length == 0)
      //   setenetcard([{ netcardname: "", enetcardsno: "" }]);
      // else setenetcard(asset.product.enetcard);
      // if (asset.product.serialcard.length == 0)
      //   setserialcard([{ serialcardname: "", serialcardsno: "" }]);
      // else setserialcard(asset.product.serialcard);

      // if (asset.product.parallelcard.length == 0)
      //   setparallelcard([{ parallelcardname: "", parallelcardsno: "" }]);
      // else setparallelcard(asset.product.parallelcard);
      // if (asset.product.hbacard.length == 0)
      //   sethbacard([{ hbacardname: "", hbacardsno: "" }]);
      // else sethbacard(asset.product.hbacard);
      // if (asset.product.raidcontroller.length == 0)
      //   setraidcontroller([{ raidcontrollername: "", raidcontrollersno: "" }]);
      // else setraidcontroller(asset.product.raidcontroller);
      // if (asset.product.tapecontroller.length == 0)
      //   settapecontroller([{ tapecontrollername: "", tapecontrollersno: "" }]);
      // else settapecontroller(asset.product.tapecontroller);
      // if (asset.product.others.length == 0)
      //   setothers([{ othersname: "", otherssno: "" }]);
      // else setothers(asset.product.others);
      // //asset
    } catch (err) {
      console.log("assetFind Error", err);
    }
  };

  useEffect(() => {
    getAsset();
  }, []);

  //useeffect to check if the customer change is viable
  useMemo(async () => {
    if (refresh) {
      //making sure all three are selected
      if (customer._id == "" || account._id == "" || unit._id == "") {
        alert("Please select customer, account and unit");
        getAsset();
        setRefresh(false);
        return;
      }
      //making sure no activecall i s attached to this

      let payload = {
        assetId: id,
      };
      try {
        let response = await axios({
          url: `${API}/call/${Emp.getId()}/checkassethascall`,
          method: "POST",
          data: payload,
        });

        // console.log(response.data);
        const calls = response.data.call;
        console.log(calls);

        if (calls.length == 0) {
          console.log("empty");
        } else {
          let callstring = "";
          calls.map((call) => {
            callstring += call.callNo + ",";
          });
          callstring = callstring.slice(0, -1);
          alert(
            "You can't change the customer as this asset is already in the following active calls " +
              callstring
          );
          getAsset();
          setRefresh(false);
        }
        // setCustomers(response.data);
      } catch (error) {
        throw error;
      }
      // getAsset();
    }
  }, [refresh]);

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

  //functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      customerName: customer.customerName,
      accountName: account.accountName,
      unitName: unit.unitName,
      customerId: customer._id,
      accountId: account._id,
      unitId: unit._id,
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
      servicelocation: servicelocation,
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
    console.log(payload, newproduct);

    const data = { id: id, newasset: payload, newproduct: newproduct };
    // console.log(API);
    try {
      let update = await axios({
        url: `${API}/asset/${Emp.getId()}/update`,
        method: "POST",
        data: data,
      });
      setSubmitModal(true);
      console.log("Done");
    } catch (error) {
      throw error;
    }
  };

  // useEffect(() => {
  //   handleMigration();
  // }, []);

  //ASSET----------------------------------------------------
  const assetPicker = () => {
    return (
      <div className="px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        {/* {floatbox ? (
          <UpdateAssetFloat Business={Business} POnumber={POnumber} />
        ) : null} */}

        <Label className="font-bold">
          <span>Asset Information</span>
        </Label>
        <hr className="mb-5 mt-2" />

        <div className="flex flex-row mb-2 ">
          <div className="flex flex-row space-x-4 w-3/4">
            <SectionTitle className="w-3/4">
              Customer: {customer.customerName}
            </SectionTitle>
            <SectionTitle>Account: {account.accountName} </SectionTitle>
            <SectionTitle>Unit: {unit.unitName}</SectionTitle>
          </div>

          <div className="w-1/2 flex items-start space-x-1 justify-end">
            {originalproduct != "Nil" ? (
              <Link to={`/app/unit/update/vieworiginal/${id}`}>
                <Button layout="outline" className="">
                  View Original Asset
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            <Button
              layout="outline"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Change Customer
            </Button>
          </div>
        </div>

        <hr className="mb-5 mt-2" />

        {/* <Label className="font-bold">
          <span>Customer: {customer.customerName}</span>
        </Label> */}
        {/* ----------------------------Row - 1 --------------------------------------------------------------------- */}
        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
          <div className="w-full ">
            {/* <Label className="my-3">
              <span>Business</span>
              <Input
                className="mt-1"
                name="brand"
                value={Business}
                onChange={(e) => {
                  setBusiness(e.target.value);
                }}
              />
            </Label> */}
            <Label className="my-3">
              <span>Business Type</span>
              <Select
                onChange={(e) => {
                  setBusiness(e.target.value);
                }}
                className="mt-1"
                value={Business}
              >
                <option value="" selected disabled>
                  Select Business Type
                </option>
                <option value="AMC">AMC</option>
                <option value="Warranty">Warranty</option>
              </Select>
            </Label>
          </div>
          <div className="w-full  ">
            <Label className="my-3">
              <span>Purchase Order Number</span>
              <Input
                className="mt-1"
                name="brand"
                value={POnumber}
                onChange={(e) => {
                  setPOnumber(e.target.value);
                }}
              />
            </Label>
          </div>
          <div className="w-full ">
            <Label className="my-3">
              <span>Service Location*</span>
              <Select
                value={servicelocation}
                onChange={(e) => {
                  setServiceLocation(e.target.value);
                }}
                className="mt-1"
              >
                <option value="" selected disabled>
                  Select Service Location
                </option>
                <option value="Trivandrum">Trivandrum</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Kozhikode">Kozhikode</option>
              </Select>
            </Label>
          </div>
        </div>
        {/* ----------------------------Row - 2 --------------------------------------------------------------------- */}

        <div className="flex flex-col lg:flex-row  items-center justify-start lg:space-x-8">
          <Label className="w-full my-3">
            <span>Purchase Order Date</span>
            <Input
              className="mt-1"
              type="date"
              name="brand"
              value={POdate}
              onChange={(e) => {
                setPOdate(e.target.value);
              }}
            />
          </Label>
          <Label className="w-full my-3">
            <span>Contract From</span>
            <Input
              className="mt-1"
              type="date"
              name="brand"
              value={ContractFrom}
              onChange={(e) => {
                setContractFrom(e.target.value);
              }}
            />
          </Label>

          <Label className="w-full my-3">
            <span>Contract To</span>
            <Input
              className="mt-1"
              name="brand"
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
              name="brand"
              type="date"
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
              value={BillingTo}
              onChange={(e) => {
                setBillingTo(e.target.value);
              }}
            />
          </Label>
        </div>
        {/* ----------------------------Row - 3 --------------------------------------------------------------------- */}
        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
          <div className="w-full">
            <Label className="my-3">
              <span>AMC Rate</span>
              <Input
                className="mt-1"
                name="brand"
                value={AMCRate}
                onChange={(e) => {
                  setAMCRate(e.target.value);
                }}
              />
            </Label>
          </div>
          <div className="w-full">
            <Label className="my-3">
              <span>GST</span>
              <Input
                className="mt-1"
                name="brand"
                value={GST}
                onChange={(e) => {
                  setGST(e.target.value);
                }}
              />
            </Label>
          </div>
        </div>
        {/* ----------------------------Row - 4 --------------------------------------------------------------------- */}
        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
          <div className="w-full">
            <Label className="my-3 font-bold">
              <span>GST AMOUNT: </span>

              <span> Rs {(AMCRate * (GST / 100)).toFixed(2)}</span>
            </Label>
          </div>
          <div className="w-full font-bold">
            <Label className="my-3">
              <span>Net Amount: </span>
              <span>
                Rs{" "}
                {(parseInt(AMCRate) + parseInt(AMCRate) * (GST / 100)).toFixed(
                  2
                )}
              </span>
            </Label>
          </div>
        </div>
        {/* <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
          <div className="w-full">
            <Label className="my-3">
              <span>GST AMOUNT</span>
              <Input
                className="mt-1"
                name="brand"
                value={GSTAMOUNT}
                onChange={(e) => {
                  setGSTAMOUNT(e.target.value);
                }}
              />
            </Label>
          </div>
          <div className="w-full">
            <Label className="my-3">
              <span>Net Amount</span>
              <Input
                className="mt-1"
                name="brand"
                value={NetAmount}
                onChange={(e) => {
                  setNetAmount(e.target.value);
                }}
              />
            </Label>
          </div>
        </div> */}
      </div>
    );
  };

  //PRODUCT

  const productPicker = () => {
    return (
      <>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <form onSubmit={handleSubmit}>
            <Label className="font-bold">
              <span>Essential Details</span>
            </Label>
            <hr className="mb-5 mt-2" />
            <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
              <Label className="my-3 w-full">
                <span>Brand</span>
                <Input
                  className="mt-1"
                  placeholder="Brand"
                  name="brand"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
              </Label>
              <Label className="my-3 w-full">
                <span>Model</span>
                <Input
                  className="mt-1"
                  placeholder="Model"
                  name="model"
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                  }}
                />
              </Label>
              <Label className="my-3 w-full">
                <span>Serial Number</span>
                <Input
                  className="mt-1"
                  placeholder="Serial Number"
                  name="serialno"
                  value={serialno}
                  onChange={(e) => {
                    setSerialNo(e.target.value);
                  }}
                />
              </Label>
            </div>
            {/* ---------------------------OS--------------------------------- */}
            {product == "Laptop" ||
            product == "Server" ||
            product == "Desktop" ? (
              <>
                <Label className="font-bold">
                  <span>Operating System</span>
                </Label>
                <hr className="mb-5 mt-2" />
                <Label className="my-3">
                  <span>OS</span>
                  <Input
                    className="mt-1"
                    placeholder="OS"
                    name="os"
                    value={os}
                    onChange={(e) => {
                      setOs(e.target.value);
                    }}
                  />
                </Label>
              </>
            ) : null}

            {/* //////////// ARRAY /////////////// */}
            {/* -------------------CPU and RAM-------------------------- */}
            <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
              {/* ----------------CPU------------------------------- */}
              <div className="w-full">
                {product == "Laptop" ||
                product == "Server" ||
                product == "Desktop" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>CPU</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newcpu = [...cpu];
                            let add = { cpuname: "", cpusno: "" };
                            newcpu.push(add);
                            setCpu(newcpu);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newcpu = [...cpu];
                            if (newcpu[1]) {
                              newcpu.pop();
                              setCpu(newcpu);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {cpu.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="w-full my-3">
                              <span>CPU {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`CPU ${i + 1}`}
                                name="cpuname"
                                value={item.cpuname}
                                onChange={(e) => {
                                  let newlist = [...cpu];
                                  newlist[i].cpuname = e.target.value;
                                  setCpu(newlist);
                                }}
                              />
                            </Label>
                            <Label className="w-full my-3">
                              <span>CPU {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`CPU ${i + 1}'s Serial Number `}
                                name="cpusno"
                                value={item.cpusno}
                                onChange={(e) => {
                                  let newlist = [...cpu];
                                  newlist[i].cpusno = e.target.value;
                                  setCpu(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------CPU------------------------------- */}

              {/* ----------------RAM------------------------------- */}
              <div className="w-full">
                {product == "Laptop" ||
                product == "Server" ||
                product == "Desktop" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>RAM</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newram = [...ram];
                            let add = { ramname: "", ramsno: "" };
                            newram.push(add);
                            setram(newram);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newram = [...ram];
                            if (newram[1]) {
                              newram.pop();
                              setram(newram);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {ram.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>RAM {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`RAM ${i + 1}`}
                                name="ramname"
                                value={item.ramname}
                                onChange={(e) => {
                                  let newlist = [...ram];
                                  newlist[i].ramname = e.target.value;
                                  setram(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>RAM {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`RAM ${i + 1}'s Serial Number `}
                                name="cpusno"
                                value={item.ramsno}
                                onChange={(e) => {
                                  let newlist = [...ram];
                                  newlist[i].ramsno = e.target.value;
                                  setram(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------RAM------------------------------- */}
            </div>

            {/* -----------------------fan and motherboard------------------------------ */}
            <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
              {/* ----------------fan------------------------------- */}
              <div className="w-full">
                {product == "Laptop" ||
                product == "Server" ||
                product == "Desktop" ||
                product == "Storage" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>FAN</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newfan = [...fan];
                            let add = { fanname: "", fansno: "" };
                            newfan.push(add);
                            setfan(newfan);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newfan = [...fan];
                            if (newfan[1]) {
                              newfan.pop();
                              setfan(newfan);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {fan.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>FAN {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`FAN ${i + 1}`}
                                name="fanname"
                                value={item.fanname}
                                onChange={(e) => {
                                  let newlist = [...fan];
                                  newlist[i].fanname = e.target.value;
                                  setfan(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>FAN {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`FAN ${i + 1}'s Serial Number `}
                                name="fansno"
                                value={item.fansno}
                                onChange={(e) => {
                                  let newlist = [...fan];
                                  newlist[i].fansno = e.target.value;
                                  setfan(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------fan------------------------------- */}

              {/* ----------------motherboard------------------------------- */}
              <div className="w-full">
                {product == "Laptop" ||
                product == "Server" ||
                product == "Desktop" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>Motherboard</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newmotherboard = [...motherboard];
                            let add = {
                              motherboardname: "",
                              motherboardsno: "",
                            };
                            newmotherboard.push(add);
                            setmotherboard(newmotherboard);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newmotherboard = [...motherboard];
                            if (newmotherboard[1]) {
                              newmotherboard.pop();
                              setmotherboard(newmotherboard);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {motherboard.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>Motherboard {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`Motherboard ${i + 1}`}
                                name="motherboardname"
                                value={item.motherboardname}
                                onChange={(e) => {
                                  let newlist = [...motherboard];
                                  newlist[i].motherboardname = e.target.value;
                                  setmotherboard(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>Motherboard {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`Motherboard ${
                                  i + 1
                                }'s Serial Number `}
                                name="motherboardsno"
                                value={item.motherboardsno}
                                onChange={(e) => {
                                  let newlist = [...motherboard];
                                  newlist[i].motherboardsno = e.target.value;
                                  setmotherboard(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------motherboard------------------------------- */}
            </div>

            {/* ------------------------HDD And SMPS */}
            <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
              {/* ----------------hdd------------------------------- */}
              <div className="w-full">
                {product == "Laptop" ||
                product == "Server" ||
                product == "Desktop" ||
                product == "Storage" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>HDD</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newhdd = [...hdd];
                            let add = { hddname: "", hddsno: "" };
                            newhdd.push(add);
                            sethdd(newhdd);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newhdd = [...hdd];
                            if (newhdd[1]) {
                              newhdd.pop();
                              sethdd(newhdd);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {hdd.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>HDD {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`HDD ${i + 1}`}
                                name="hddname"
                                value={item.hddname}
                                onChange={(e) => {
                                  let newlist = [...hdd];
                                  newlist[i].hddname = e.target.value;
                                  sethdd(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>HDD {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`HDD ${i + 1}'s Serial Number `}
                                name="hddsno"
                                value={item.hddsno}
                                onChange={(e) => {
                                  let newlist = [...hdd];
                                  newlist[i].hddsno = e.target.value;
                                  sethdd(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------hdd------------------------------- */}

              {/* ----------------smps------------------------------- */}
              <div className="w-full">
                {product == "Laptop" ||
                product == "Server" ||
                product == "Desktop" ||
                product == "Storage" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>SMPS</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newsmps = [...smps];
                            let add = { smpsname: "", smpssno: "" };
                            newsmps.push(add);
                            setsmps(newsmps);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newsmps = [...smps];
                            if (newsmps[1]) {
                              newsmps.pop();
                              setsmps(newsmps);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {smps.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>SMPS {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`SMPS ${i + 1}`}
                                name="smpsname"
                                value={item.smpsname}
                                onChange={(e) => {
                                  let newlist = [...smps];
                                  newlist[i].smpsname = e.target.value;
                                  setsmps(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>SMPS {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`SMPS ${i + 1}'s Serial Number `}
                                name="smpssno"
                                value={item.smpssno}
                                onChange={(e) => {
                                  let newlist = [...smps];
                                  newlist[i].smpssno = e.target.value;
                                  setsmps(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------smps------------------------------- */}
            </div>

            {/* -----------------------Keyboard And Mouse ------------------------------- */}
            <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
              {/* ----------------kbd------------------------------- */}
              <div className="w-full">
                {product == "Laptop" ||
                product == "Server" ||
                product == "Desktop" ||
                product == "Ncompute" ||
                product == "Router" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>Keyboard</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newkbd = [...kbd];
                            let add = { keyboardname: "", keyboardsno: "" };
                            newkbd.push(add);
                            setkbd(newkbd);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newkbd = [...kbd];
                            if (newkbd[1]) {
                              newkbd.pop();
                              setkbd(newkbd);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {kbd.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>Keyboard {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`Keyboard ${i + 1}`}
                                name="keyboardname"
                                value={item.keyboardname}
                                onChange={(e) => {
                                  let newlist = [...kbd];
                                  newlist[i].keyboardname = e.target.value;
                                  setkbd(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>Keyboard {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`Keyboard ${
                                  i + 1
                                }'s Serial Number `}
                                name="keyboardsno"
                                value={item.keyboardsno}
                                onChange={(e) => {
                                  let newlist = [...kbd];
                                  newlist[i].keyboardsno = e.target.value;
                                  setkbd(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------kbd------------------------------- */}

              {/* ----------------mouse------------------------------- */}
              <div className="w-full">
                {product == "Laptop" ||
                product == "Server" ||
                product == "Desktop" ||
                product == "Ncompute" ||
                product == "Router" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>Mouse</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newmouse = [...mouse];
                            let add = { mousename: "", mousesno: "" };
                            newmouse.push(add);
                            setmouse(newmouse);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newmouse = [...mouse];
                            if (newmouse[1]) {
                              newmouse.pop();
                              setmouse(newmouse);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {mouse.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>Mouse {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`Mouse ${i + 1}`}
                                name="mousename"
                                value={item.mousename}
                                onChange={(e) => {
                                  let newlist = [...mouse];
                                  newlist[i].mousename = e.target.value;
                                  setmouse(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>Mouse {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`Mouse ${i + 1}'s Serial Number `}
                                name="mousesno"
                                value={item.mousesno}
                                onChange={(e) => {
                                  let newlist = [...mouse];
                                  newlist[i].mousesno = e.target.value;
                                  setmouse(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------mouse------------------------------- */}
            </div>

            {/* ---------------------------Monitor and GCard ------------------------*/}
            <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
              {/* ----------------monitor------------------------------- */}
              <div className="w-full">
                {product == "Laptop" ||
                product == "Server" ||
                product == "Desktop" ||
                product == "Ncompute" ||
                product == "Router" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>Monitor</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newmonitor = [...monitor];
                            let add = { monitorname: "", monitorsno: "" };
                            newmonitor.push(add);
                            setmonitor(newmonitor);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newmonitor = [...monitor];
                            if (newmonitor[1]) {
                              newmonitor.pop();
                              setmonitor(newmonitor);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {monitor.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>Monitor {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`Monitor ${i + 1}`}
                                name="monitorname"
                                value={item.monitorname}
                                onChange={(e) => {
                                  let newlist = [...monitor];
                                  newlist[i].monitorname = e.target.value;
                                  setmonitor(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>Monitor {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`Monitor ${
                                  i + 1
                                }'s Serial Number `}
                                name="monitorsno"
                                value={item.monitorsno}
                                onChange={(e) => {
                                  let newlist = [...monitor];
                                  newlist[i].monitorsno = e.target.value;
                                  setmonitor(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------monitor------------------------------- */}

              {/* ----------------gcard------------------------------- */}
              <div className="w-full">
                {product == "Laptop" ||
                product == "Server" ||
                product == "Desktop" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>Graphics Card</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newgcard = [...gcard];
                            let add = { gcardname: "", gcardsno: "" };
                            newgcard.push(add);
                            setgcard(newgcard);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newgcard = [...gcard];
                            if (newgcard[1]) {
                              newgcard.pop();
                              setgcard(newgcard);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {gcard.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>Graphics Card {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`Graphics Card ${i + 1}`}
                                name="gcardname"
                                value={item.gcardname}
                                onChange={(e) => {
                                  let newlist = [...gcard];
                                  newlist[i].gcardname = e.target.value;
                                  setgcard(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>Graphics Card {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`Graphics Card ${
                                  i + 1
                                }'s Serial Number `}
                                name="gcardsno"
                                value={item.gcardsno}
                                onChange={(e) => {
                                  let newlist = [...gcard];
                                  newlist[i].gcardsno = e.target.value;
                                  setgcard(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------gcard------------------------------- */}
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
              {/* ----------------enetcard------------------------------- */}
              <div className="w-full">
                {product == "Laptop" ||
                product == "Server" ||
                product == "Desktop" ||
                product == "Server" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>E Net Card</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newenetcard = [...enetcard];
                            let add = { enetcardname: "", enetcardsno: "" };
                            newenetcard.push(add);
                            setenetcard(newenetcard);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newenetcard = [...enetcard];
                            if (newenetcard[1]) {
                              newenetcard.pop();
                              setenetcard(newenetcard);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {enetcard.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>E Net Card {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`E Net Card ${i + 1}`}
                                name="enetcardname"
                                value={item.enetcardname}
                                onChange={(e) => {
                                  let newlist = [...enetcard];
                                  newlist[i].enetcardname = e.target.value;
                                  setenetcard(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>E Net Card {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`E Net Card ${
                                  i + 1
                                }'s Serial Number `}
                                name="enetcardsno"
                                value={item.enetcardsno}
                                onChange={(e) => {
                                  let newlist = [...enetcard];
                                  newlist[i].enetcardsno = e.target.value;
                                  setenetcard(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------enetcard------------------------------- */}

              {/* ----------------serialcard------------------------------- */}
              <div className="w-full">
                {product == "Server" || product == "Desktop" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>Serial Card</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newserialcard = [...serialcard];
                            let add = { serialcardname: "", serialcardsno: "" };
                            newserialcard.push(add);
                            setserialcard(newserialcard);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newserialcard = [...serialcard];
                            if (newserialcard[1]) {
                              newserialcard.pop();
                              setserialcard(newserialcard);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {serialcard.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>Serial Card {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`Serial Card ${i + 1}`}
                                name="serialcardname"
                                value={item.serialcardname}
                                onChange={(e) => {
                                  let newlist = [...serialcard];
                                  newlist[i].serialcardname = e.target.value;
                                  setserialcard(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>Serial Card {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`Serial Card ${
                                  i + 1
                                }'s Serial Number `}
                                name="serialcardsno"
                                value={item.serialcardsno}
                                onChange={(e) => {
                                  let newlist = [...serialcard];
                                  newlist[i].serialcardsno = e.target.value;
                                  setserialcard(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------serialcard------------------------------- */}
            </div>

            {/* --------------------Parallel And HBD Card ----------------------------------------- */}
            <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
              {/* ----------------parallelcard------------------------------- */}
              <div className="w-full">
                {product == "Server" || product == "Desktop" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>Parallel Card</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newparallelcard = [...parallelcard];
                            let add = {
                              parallelcardname: "",
                              parallelcardsno: "",
                            };
                            newparallelcard.push(add);
                            setparallelcard(newparallelcard);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newparallelcard = [...parallelcard];
                            if (newparallelcard[1]) {
                              newparallelcard.pop();
                              setparallelcard(newparallelcard);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {parallelcard.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>Parallel Card {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`Parallel Card ${i + 1}`}
                                name="parallelcardname"
                                value={item.parallelcardname}
                                onChange={(e) => {
                                  let newlist = [...parallelcard];
                                  newlist[i].parallelcardname = e.target.value;
                                  setparallelcard(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>Parallel Card {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`Parallel Card ${
                                  i + 1
                                }'s Serial Number `}
                                name="parallelcardsno"
                                value={item.parallelcardsno}
                                onChange={(e) => {
                                  let newlist = [...parallelcard];
                                  newlist[i].parallelcardsno = e.target.value;
                                  setparallelcard(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------parallelcard------------------------------- */}

              {/* ----------------hbacard------------------------------- */}
              <div className="w-full">
                {product == "Server" || product == "Storage" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>HBA Card</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newhbacard = [...hbacard];
                            let add = { hbacardname: "", hbacardsno: "" };
                            newhbacard.push(add);
                            sethbacard(newhbacard);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newhbacard = [...hbacard];
                            if (newhbacard[1]) {
                              newhbacard.pop();
                              sethbacard(newhbacard);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {hbacard.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>HBA Card {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`HBA Card ${i + 1}`}
                                name="hbacardname"
                                value={item.hbacardname}
                                onChange={(e) => {
                                  let newlist = [...hbacard];
                                  newlist[i].hbacardname = e.target.value;
                                  sethbacard(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>HBA Card {i + 1}: Serial Number</span>
                              <Input
                                className="mt-1"
                                placeholder={`HBA Card ${
                                  i + 1
                                }'s Serial Number `}
                                name="hbacardsno"
                                value={item.hbacardsno}
                                onChange={(e) => {
                                  let newlist = [...hbacard];
                                  newlist[i].hbacardsno = e.target.value;
                                  sethbacard(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------hbacard------------------------------- */}
            </div>
            {/* --------------------Raid And Tape Controller------------------------------ */}

            <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
              {/* ----------------raidcontroller------------------------------- */}
              <div className="w-full">
                {product == "Server" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>Raid Controller</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newraidcontroller = [...raidcontroller];
                            let add = {
                              raidcontrollername: "",
                              raidcontrollersno: "",
                            };
                            newraidcontroller.push(add);
                            setraidcontroller(newraidcontroller);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newraidcontroller = [...raidcontroller];
                            if (newraidcontroller[1]) {
                              newraidcontroller.pop();
                              setraidcontroller(newraidcontroller);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {raidcontroller.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>Raid Controller {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`Raid Controller ${i + 1}`}
                                name="raidcontrollername"
                                value={item.raidcontrollername}
                                onChange={(e) => {
                                  let newlist = [...raidcontroller];
                                  newlist[i].raidcontrollername =
                                    e.target.value;
                                  setraidcontroller(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>
                                Raid Controller {i + 1}: Serial Number
                              </span>
                              <Input
                                className="mt-1"
                                placeholder={`Raid Controller ${
                                  i + 1
                                }'s Serial Number `}
                                name="raidcontrollersno"
                                value={item.raidcontrollersno}
                                onChange={(e) => {
                                  let newlist = [...raidcontroller];
                                  newlist[i].raidcontrollersno = e.target.value;
                                  setraidcontroller(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------raidcontroller------------------------------- */}

              {/* ----------------tapecontroller------------------------------- */}
              <div className="w-full">
                {product == "Server" ? (
                  <>
                    <div className="flex flex-row items-center">
                      <Label className="font-bold">
                        <span>Tape Controller</span>
                      </Label>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newtapecontroller = [...tapecontroller];
                            let add = {
                              tapecontrollername: "",
                              tapecontrollersno: "",
                            };
                            newtapecontroller.push(add);
                            settapecontroller(newtapecontroller);
                          }}
                          icon={Add}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                      <div className="ml-3">
                        <Button
                          onClick={() => {
                            let newtapecontroller = [...tapecontroller];
                            if (newtapecontroller[1]) {
                              newtapecontroller.pop();
                              settapecontroller(newtapecontroller);
                            }
                          }}
                          icon={Remove}
                          layout="link"
                          aria-label="Like"
                        />
                      </div>
                    </div>
                    <hr className="mb-5 mt-2" />
                    {tapecontroller.map((item, i) => {
                      return (
                        <div key={i}>
                          <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                            <Label className="my-3 w-full">
                              <span>Tape Controller {i + 1}</span>
                              <Input
                                className="mt-1"
                                placeholder={`Tape Controller ${i + 1}`}
                                name="tapecontrollername"
                                value={item.tapecontrollername}
                                onChange={(e) => {
                                  let newlist = [...tapecontroller];
                                  newlist[i].tapecontrollername =
                                    e.target.value;
                                  settapecontroller(newlist);
                                }}
                              />
                            </Label>
                            <Label className="my-3 w-full">
                              <span>
                                Tape Controller {i + 1}: Serial Number
                              </span>
                              <Input
                                className="mt-1"
                                placeholder={`Tape Controller ${
                                  i + 1
                                }'s Serial Number `}
                                name="tapecontrollersno"
                                value={item.tapecontrollersno}
                                onChange={(e) => {
                                  let newlist = [...tapecontroller];
                                  newlist[i].tapecontrollersno = e.target.value;
                                  settapecontroller(newlist);
                                }}
                              />
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </div>
              {/* ----------------tapecontroller------------------------------- */}
            </div>

            {/* ----------------opticaldrive------------------------------- */}
            {product == "Laptop" ||
            product == "Server" ||
            product == "Desktop" ? (
              <>
                <div className="flex flex-row items-center">
                  <Label className="font-bold">
                    <span>Optical Drive</span>
                  </Label>
                  <div className="ml-3 ">
                    <Button
                      onClick={() => {
                        let newopticaldrive = [...opticaldrive];
                        let add = { opticaldrivename: "", opticaldrivesno: "" };
                        newopticaldrive.push(add);
                        setopticaldrive(newopticaldrive);
                      }}
                      icon={Add}
                      layout="link"
                      aria-label="Like"
                    />
                  </div>
                  <div className="ml-3">
                    <Button
                      onClick={() => {
                        let newopticaldrive = [...opticaldrive];
                        if (newopticaldrive[1]) {
                          newopticaldrive.pop();
                          setopticaldrive(newopticaldrive);
                        }
                      }}
                      icon={Remove}
                      layout="link"
                      aria-label="Like"
                    />
                  </div>
                </div>
                <hr className="mb-5 mt-2" />
                {opticaldrive.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <Label className="my-3 w-full">
                          <span>Optical Drive {i + 1}</span>
                          <Input
                            className="mt-1"
                            placeholder={`Opticaldrive ${i + 1}`}
                            name="opticaldrivename"
                            value={item.opticaldrivename}
                            onChange={(e) => {
                              let newlist = [...opticaldrive];
                              newlist[i].opticaldrivename = e.target.value;
                              setopticaldrive(newlist);
                            }}
                          />
                        </Label>
                        <Label className="my-3 w-full">
                          <span>Opticaldrive {i + 1}: Serial Number</span>
                          <Input
                            className="mt-1"
                            placeholder={`Optical Drive ${
                              i + 1
                            }'s Serial Number `}
                            name="opticaldrivesno"
                            value={item.opticaldrivesno}
                            onChange={(e) => {
                              let newlist = [...opticaldrive];
                              newlist[i].opticaldrivesno = e.target.value;
                              setopticaldrive(newlist);
                            }}
                          />
                        </Label>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}
            {/* ----------------opticaldrive------------------------------- */}

            {/* ----------------others------------------------------- */}
            <div className="flex flex-row items-center">
              <Label className="font-bold">
                <span>Others</span>
              </Label>
              <div className="ml-3">
                <Button
                  onClick={() => {
                    let newothers = [...others];
                    let add = { othersname: "", otherssno: "" };
                    newothers.push(add);
                    setothers(newothers);
                  }}
                  icon={Add}
                  layout="link"
                  aria-label="Like"
                />
              </div>
              <div className="ml-3">
                <Button
                  onClick={() => {
                    let newothers = [...others];
                    if (newothers[1]) {
                      newothers.pop();
                      setothers(newothers);
                    }
                  }}
                  icon={Remove}
                  layout="link"
                  aria-label="Like"
                />
              </div>
            </div>
            <hr className="mb-5 mt-2" />
            {others.map((item, i) => {
              return (
                <div key={i}>
                  <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                    <Label className="my-3 w-full">
                      <span>Others {i + 1}</span>
                      <Input
                        className="mt-1"
                        placeholder={`Others ${i + 1}`}
                        name="othersname"
                        value={item.othersname}
                        onChange={(e) => {
                          let newlist = [...others];
                          newlist[i].othersname = e.target.value;
                          setothers(newlist);
                        }}
                      />
                    </Label>
                    <Label className="my-3 w-full">
                      <span>Others {i + 1}: Serial Number</span>
                      <Input
                        className="mt-1"
                        placeholder={`Others ${i + 1}'s Serial Number `}
                        name="otherssno"
                        value={item.otherssno}
                        onChange={(e) => {
                          let newlist = [...others];
                          newlist[i].otherssno = e.target.value;
                          setothers(newlist);
                        }}
                      />
                    </Label>
                  </div>
                </div>
              );
            })}

            {/* ----------------others------------------------------- */}

            <div className="flex items-center justify-center my-10">
              <Button type="submit">Submit</Button>
            </div>

            {/* <Label className="mt-4">
              <span>Disabled</span>
              <Input disabled className="mt-1" placeholder="Jane Doe" />
            </Label> */}
          </form>
        </div>
      </>
    );
  };

  //DROPDOWN------------------------------------------------------------------------------------

  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  const test = () => {
    console.log(test);
  };

  return (
    <>
      <UnitListModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setUnit={setUnit}
        unit={unit}
        customer={customer}
        setCustomer={setCustomer}
        account={account}
        setAccount={setAccount}
        setRefresh={setRefresh}
      />
      {/* Heading of page with float button */}

      {assetPicker()}
      {/* <SectionTitle>Pick Product</SectionTitle> */}
      {/* {dropdown()} */}
      {product != "null" ? (
        <>
          <SectionTitle>{product} </SectionTitle>
          {productPicker()}
        </>
      ) : null}
      {/* {productPicker()} */}
      {/* /////---------------------------- FOOTER */}
      {/* <div class=" w-7/12 bottom-0  border-t border-grey p-4 fixed pin-b bg-gray-700 text-xs text-white">
        Asset Summary Asset Information:
        <br />
        Business: {Business} POnumber: {POnumber} ContractFrom: {ContractFrom}
        ContractTo: {ContractTo} BillingFrom: {BillingFrom} BillingTo:{" "}
        {BillingTo} AMCRate:
        {AMCRate} GST:{GST} GSTAMOUNT:{GSTAMOUNT} NetAmount:{NetAmount}
        <br />
        Product: {product}
        <br />
        Brind: {brand} model: {model} serialno: {serialno} os: {os}
        <br />
        {cpu.map((p, i) => {
          return (
            <>
              CPU:{p.cpuname}, {p.cpusno}
            </>
          );
        })}
      </div> */}
      {UpdatedModal()}
    </>
  );
}

export default UpdateAsset;
