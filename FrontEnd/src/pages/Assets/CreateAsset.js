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
} from "@windmill/react-ui";

import { MailIcon, Add, Remove } from "../../icons";
import Axios from "axios";
import { data } from "autoprefixer";

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

  //functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
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
      kbd: kbd,
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
    // console.log(API);
    try {
      await axios({
        url: `${API}/product/server/create`,
        method: "POST",
        data: payload,
      });
      console.log("Done");
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <PageTitle>Create Asset</PageTitle>
      <SectionTitle>Server</SectionTitle>

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

          {/* ////////////PRODUCUTS/////////////// */}

          {/* ----------------CPU------------------------------- */}
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
          {/* ----------------CPU------------------------------- */}

          {/* ----------------RAM------------------------------- */}
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
                    placeholder={`CPU ${i + 1}`}
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
                    placeholder={`CPU ${i + 1}'s Serial Number `}
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
          {/* ----------------RAM------------------------------- */}

          {/* ----------------hdd------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>hdd</span>
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
                  <span>hdd {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`hdd ${i + 1}`}
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
                  <span>hdd {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`hdd ${i + 1}'s Serial Number `}
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
          {/* ----------------hdd------------------------------- */}

          {/* ----------------smps------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>smps</span>
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
                  <span>smps {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`smps ${i + 1}`}
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
                  <span>smps {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`smps ${i + 1}'s Serial Number `}
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
          {/* ----------------smps------------------------------- */}

          {/* ----------------fan------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>fan</span>
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
                  <span>fan {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`fan ${i + 1}`}
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
                  <span>fan {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`fan ${i + 1}'s Serial Number `}
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
          {/* ----------------fan------------------------------- */}

          {/* ----------------motherboard------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>motherboard</span>
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
                  <span>motherboard {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`motherboard ${i + 1}`}
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
                  <span>motherboard {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`motherboard ${i + 1}'s Serial Number `}
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
          {/* ----------------motherboard------------------------------- */}

          {/* ----------------opticaldrive------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>opticaldrive</span>
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
                  <span>opticaldrive {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`opticaldrive ${i + 1}`}
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
                  <span>opticaldrive {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`opticaldrive ${i + 1}'s Serial Number `}
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
          {/* ----------------opticaldrive------------------------------- */}

          {/* ----------------kbd------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>kbd</span>
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
                  <span>kbd {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`kbd ${i + 1}`}
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
                  <span>kbd {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`kbd ${i + 1}'s Serial Number `}
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
          {/* ----------------kbd------------------------------- */}

          {/* ----------------mouse------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>mouse</span>
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
                  <span>mouse {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`mouse ${i + 1}`}
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
                  <span>mouse {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`mouse ${i + 1}'s Serial Number `}
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
          {/* ----------------mouse------------------------------- */}

          {/* ----------------monitor------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>monitor</span>
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
                  <span>monitor {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`monitor ${i + 1}`}
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
                  <span>monitor {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`monitor ${i + 1}'s Serial Number `}
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
          {/* ----------------monitor------------------------------- */}

          {/* ----------------gcard------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>gcard</span>
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
                  <span>gcard {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`gcard ${i + 1}`}
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
                  <span>gcard {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`gcard ${i + 1}'s Serial Number `}
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
          {/* ----------------gcard------------------------------- */}

          {/* ----------------enetcard------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>enetcard</span>
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
                  <span>enetcard {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`enetcard ${i + 1}`}
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
                  <span>enetcard {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`enetcard ${i + 1}'s Serial Number `}
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
          {/* ----------------enetcard------------------------------- */}

          {/* ----------------serialcard------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>serialcard</span>
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
                  <span>serialcard {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`serialcard ${i + 1}`}
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
                  <span>serialcard {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`serialcard ${i + 1}'s Serial Number `}
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
          {/* ----------------serialcard------------------------------- */}

          {/* ----------------parallelcard------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>parallelcard</span>
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
                  <span>parallelcard {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`parallelcard ${i + 1}`}
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
                  <span>parallelcard {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`parallelcard ${i + 1}'s Serial Number `}
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
          {/* ----------------parallelcard------------------------------- */}

          {/* ----------------hbacard------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>hbacard</span>
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
                  <span>hbacard {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`hbacard ${i + 1}`}
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
                  <span>hbacard {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`hbacard ${i + 1}'s Serial Number `}
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
          {/* ----------------hbacard------------------------------- */}

          {/* ----------------raidcontroller------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>raidcontroller</span>
            </Label>
            <div className="ml-3">
              <Button
                onClick={() => {
                  let newraidcontroller = [...raidcontroller];
                  let add = { raidcontrollername: "", raidcontrollersno: "" };
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
                  <span>raidcontroller {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`raidcontroller ${i + 1}`}
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
                  <span>raidcontroller {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`raidcontroller ${i + 1}'s Serial Number `}
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
          {/* ----------------raidcontroller------------------------------- */}

          {/* ----------------tapecontroller------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>tapecontroller</span>
            </Label>
            <div className="ml-3">
              <Button
                onClick={() => {
                  let newtapecontroller = [...tapecontroller];
                  let add = { tapecontrollername: "", tapecontrollersno: "" };
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
                  <span>tapecontroller {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`tapecontroller ${i + 1}`}
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
                  <span>tapecontroller {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`tapecontroller ${i + 1}'s Serial Number `}
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
          {/* ----------------tapecontroller------------------------------- */}

          {/* ----------------others------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>others</span>
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
                  <span>others {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`others ${i + 1}`}
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
                  <span>others {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`others ${i + 1}'s Serial Number `}
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
}

export default CreateAsset;
