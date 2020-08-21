import React, { useState } from "react";
import axios from "axios";
import { API } from "../../backendapi";

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

import { MailIcon, Add, Remove } from "../../icons";
import Axios from "axios";
import { data } from "autoprefixer";
import CustomerListModal from "../../components/Modal/CustomerListModal";

function CreateAsset() {
  // Form states
  //   const theform = {
  //     brand: "",
  //     model: "",
  //     serialno: "",
  //     os: "",
  //     cpu: [
  //       { cpuname: "Intel", cpusno: "321AS26235" },
  //       { cpuname: "", cpusno: "" },
  //     ],
  //   };
  //customer
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
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

  //MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  //functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      asset: {
        business: Business,
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
      },
      product: {
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
      },
    };
    console.log(payload);
    // console.log(API);
    try {
      await axios({
        url: `${API}/asset/create`,
        method: "POST",
        data: payload,
      });
      console.log("Done");
    } catch (error) {
      throw error;
    }
  };

  //ASSET
  const assetPicker = () => {
    return (
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Asset Information</span>
        </Label>
        <hr className="mb-5 mt-2" />
        <Button
          onClick={() => setIsModalOpen(true)}
          aria-label="Notifications"
          aria-haspopup="true"
        >
          {customer.customerName === "" ? (
            <>Pick Customer</>
          ) : (
            <>Customer: {customer.customerName}</>
          )}
        </Button>
        {/* <Label className="font-bold">
          <span>Customer: {customer.customerName}</span>
        </Label> */}
        <Label className="my-3">
          <span>Business</span>
          <Input
            className="mt-1"
            name="brand"
            value={Business}
            onChange={(e) => {
              setBusiness(e.target.value);
            }}
          />
        </Label>

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
        <Label className="my-3">
          <span>Purchase Order Date</span>
          <Input
            className="mt-1"
            name="brand"
            value={POdate}
            onChange={(e) => {
              setPOdate(e.target.value);
            }}
          />
        </Label>
        <Label className="my-3">
          <span>Contract From</span>
          <Input
            className="mt-1"
            name="brand"
            value={ContractFrom}
            onChange={(e) => {
              setContractFrom(e.target.value);
            }}
          />
        </Label>
        <Label className="my-3">
          <span>Contract To</span>
          <Input
            className="mt-1"
            name="brand"
            value={ContractTo}
            onChange={(e) => {
              setContractTo(e.target.value);
            }}
          />
        </Label>
        <Label className="my-3">
          <span>Billing From</span>
          <Input
            className="mt-1"
            name="brand"
            value={BillingFrom}
            onChange={(e) => {
              setBillingFrom(e.target.value);
            }}
          />
        </Label>
        <Label className="my-3">
          <span>Billing To</span>
          <Input
            className="mt-1"
            name="brand"
            value={BillingTo}
            onChange={(e) => {
              setBillingTo(e.target.value);
            }}
          />
        </Label>
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
        <Label className="my-3">
          <span>Select Product</span>
          <Select className="mt-1">
            <option>Console</option>
            <option>DMP</option>
            <option>Inkjet</option>
            <option>Server</option>
          </Select>
        </Label>
      </div>
    );
  };

  //PRODUCT

  const productPicker = () => {
    return (
      <>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <form onSubmit={handleSubmit}>
            <Label className="font-bold">
              <span>Essential Details</span>
            </Label>
            <hr className="mb-5 mt-2" />
            <Label className="my-3">
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
            <Label className="my-3">
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
            <Label className="my-3">
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

            {/* ----------------CPU------------------------------- */}
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
                      <Label className="my-3">
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
                      <Label className="my-3">
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------CPU------------------------------- */}

            {/* ----------------RAM------------------------------- */}
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
                      <Label className="my-3">
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
                      <Label className="my-3">
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------RAM------------------------------- */}

            {/* ----------------hdd------------------------------- */}
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
                      <Label className="my-3">
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
                      <Label className="my-3">
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------hdd------------------------------- */}

            {/* ----------------smps------------------------------- */}
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
                      <Label className="my-3">
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
                      <Label className="my-3">
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------smps------------------------------- */}

            {/* ----------------fan------------------------------- */}
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
                      <Label className="my-3">
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
                      <Label className="my-3">
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------fan------------------------------- */}

            {/* ----------------motherboard------------------------------- */}
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
                        let add = { motherboardname: "", motherboardsno: "" };
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
                      <Label className="my-3">
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
                      <Label className="my-3">
                        <span>Motherboard {i + 1}: Serial Number</span>
                        <Input
                          className="mt-1"
                          placeholder={`Motherboard ${i + 1}'s Serial Number `}
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------motherboard------------------------------- */}

            {/* ----------------opticaldrive------------------------------- */}
            {product == "Laptop" ||
            product == "Server" ||
            product == "Desktop" ? (
              <>
                <div className="flex flex-row items-center">
                  <Label className="font-bold">
                    <span>Opticaldrive</span>
                  </Label>
                  <div className="ml-3">
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
                      <Label className="my-3">
                        <span>Opticaldrive {i + 1}</span>
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
                      <Label className="my-3">
                        <span>Opticaldrive {i + 1}: Serial Number</span>
                        <Input
                          className="mt-1"
                          placeholder={`Opticaldrive ${i + 1}'s Serial Number `}
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------opticaldrive------------------------------- */}

            {/* ----------------kbd------------------------------- */}
            {product == "Laptop" ||
            product == "Server" ||
            product == "Desktop" ||
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
                        let add = { kbdname: "", kbdsno: "" };
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
                      <Label className="my-3">
                        <span>Keyboard {i + 1}</span>
                        <Input
                          className="mt-1"
                          placeholder={`Keyboard ${i + 1}`}
                          name="kbdname"
                          value={item.kbdname}
                          onChange={(e) => {
                            let newlist = [...kbd];
                            newlist[i].kbdname = e.target.value;
                            setkbd(newlist);
                          }}
                        />
                      </Label>
                      <Label className="my-3">
                        <span>Keyboard {i + 1}: Serial Number</span>
                        <Input
                          className="mt-1"
                          placeholder={`Keyboard ${i + 1}'s Serial Number `}
                          name="kbdsno"
                          value={item.kbdsno}
                          onChange={(e) => {
                            let newlist = [...kbd];
                            newlist[i].kbdsno = e.target.value;
                            setkbd(newlist);
                          }}
                        />
                      </Label>
                    </div>
                  );
                })}
              </>
            ) : null}
            {/* ----------------kbd------------------------------- */}

            {/* ----------------mouse------------------------------- */}
            {product == "Laptop" ||
            product == "Server" ||
            product == "Desktop" ||
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
                      <Label className="my-3">
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
                      <Label className="my-3">
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------mouse------------------------------- */}

            {/* ----------------monitor------------------------------- */}
            {product == "Laptop" ||
            product == "Server" ||
            product == "Desktop" ||
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
                      <Label className="my-3">
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
                      <Label className="my-3">
                        <span>Monitor {i + 1}: Serial Number</span>
                        <Input
                          className="mt-1"
                          placeholder={`Monitor ${i + 1}'s Serial Number `}
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------monitor------------------------------- */}

            {/* ----------------gcard------------------------------- */}
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
                      <Label className="my-3">
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
                      <Label className="my-3">
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------gcard------------------------------- */}

            {/* ----------------enetcard------------------------------- */}
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
                      <Label className="my-3">
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
                      <Label className="my-3">
                        <span>E Net Card {i + 1}: Serial Number</span>
                        <Input
                          className="mt-1"
                          placeholder={`E Net Card ${i + 1}'s Serial Number `}
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------enetcard------------------------------- */}

            {/* ----------------serialcard------------------------------- */}
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
                      <Label className="my-3">
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
                      <Label className="my-3">
                        <span>Serial Card {i + 1}: Serial Number</span>
                        <Input
                          className="mt-1"
                          placeholder={`Serial Card ${i + 1}'s Serial Number `}
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------serialcard------------------------------- */}

            {/* ----------------parallelcard------------------------------- */}
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
                        let add = { parallelcardname: "", parallelcardsno: "" };
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
                      <Label className="my-3">
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
                      <Label className="my-3">
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------parallelcard------------------------------- */}

            {/* ----------------hbacard------------------------------- */}
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
                      <Label className="my-3">
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
                      <Label className="my-3">
                        <span>HBA Card {i + 1}: Serial Number</span>
                        <Input
                          className="mt-1"
                          placeholder={`HBA Card ${i + 1}'s Serial Number `}
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------hbacard------------------------------- */}

            {/* ----------------raidcontroller------------------------------- */}
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
                      <Label className="my-3">
                        <span>Raid Controller {i + 1}</span>
                        <Input
                          className="mt-1"
                          placeholder={`Raid Controller ${i + 1}`}
                          name="raidcontrollername"
                          value={item.raidcontrollername}
                          onChange={(e) => {
                            let newlist = [...raidcontroller];
                            newlist[i].raidcontrollername = e.target.value;
                            setraidcontroller(newlist);
                          }}
                        />
                      </Label>
                      <Label className="my-3">
                        <span>Raid Controller {i + 1}: Serial Number</span>
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------raidcontroller------------------------------- */}

            {/* ----------------tapecontroller------------------------------- */}
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
                      <Label className="my-3">
                        <span>Tape Controller {i + 1}</span>
                        <Input
                          className="mt-1"
                          placeholder={`Tape Controller ${i + 1}`}
                          name="tapecontrollername"
                          value={item.tapecontrollername}
                          onChange={(e) => {
                            let newlist = [...tapecontroller];
                            newlist[i].tapecontrollername = e.target.value;
                            settapecontroller(newlist);
                          }}
                        />
                      </Label>
                      <Label className="my-3">
                        <span>Tape Controller {i + 1}: Serial Number</span>
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
                  );
                })}
              </>
            ) : null}
            {/* ----------------tapecontroller------------------------------- */}

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
                  <Label className="my-3">
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
                  <Label className="my-3">
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

  //DROPDOWN

  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  const [product, setProduct] = useState("null");

  const dropdown = () => {
    return (
      <div className="relative mb-5">
        <Button
          onClick={toggleDropdown}
          aria-label="Notifications"
          aria-haspopup="true"
        >
          Pick Products
        </Button>
        <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
              setProduct("Sanner");
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
    );
  };

  const test = () => {
    console.log(test);
  };

  return (
    <>
      <CustomerListModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setCustomer={setCustomer}
      />
      <PageTitle>Create Asset</PageTitle>
      {assetPicker()}
      <SectionTitle>Pick Product</SectionTitle>
      {dropdown()}
      {product != "null" ? (
        <>
          <SectionTitle>{product} </SectionTitle>
          {productPicker()}
        </>
      ) : null}
      {/* {productPicker()} */}
    </>
  );
}

export default CreateAsset;
