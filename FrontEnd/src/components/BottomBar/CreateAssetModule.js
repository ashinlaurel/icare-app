import React from "react";
import SectionTitle from "../../components/Typography/SectionTitle";
import moment from "moment";
import { Input, Label } from "@windmill/react-ui";
const CreateAssetModule = ({ asset }) => {
  console.log(asset);
  const {
    brand,
    model,
    serialno,
    os,
    cpu,
    ram,
    hdd,
    smps,
    fan,
    motherboard,
    opticaldrive,
    kbd,
    mouse,
    monitor,
    gcard,
    enetcard,
    serialcard,
    parallelcard,
    hbacard,
    raidcontroller,
    tapecontroller,
    others,
    Business,
    POnumber,
    POdate,
    ContractFrom,
    ContractTo,
    BillingFrom,
    BillingTo,
    AMCRate,
    GST,
    GSTAMOUNT,
    NetAmount,
    unit,
    customer,
    account,
    product,
  } = asset;
  return (
    <div className=" ">
      {/* <div className="flex-col flex items-start justify-center mx-5 my-5  ">
        <div>brand: {asset.brand}</div>
        <div>Purchase Number: {asset.ponumber}</div>
        <div>
          {" "}
          Contract From: {moment(asset.contractfrom).format("DD-MM-YYYY")}
        </div>
        <div>Contract To: {moment(asset.contractto).format("DD-MM-YYYY")}</div>{" "}
      </div> */}
      <SectionTitle>
        Customer: {customer.customerName},{account.accountName},{unit.unitName}{" "}
      </SectionTitle>
      <SectionTitle>AssetInfo</SectionTitle>
      <div className="flex flex-row flex-wrap items-center justify-start lg:space-x-8  ">
        <div className="flex-col">
          <div className="mx-5 my-1 px-1 py-1 ">Business Type: {Business} </div>
          <div className="mx-5 my-1 px-1 py-1 ">POnumber:{POnumber}</div>
          <div className="mx-5 my-1 px-1 py-1 ">POdate:{POdate}</div>
        </div>
        <div className="flex-col">
          <div className="mx-5 my-1 px-1 py-1 ">
            {" "}
            ContractFrom:{ContractFrom}
          </div>
          <div className="mx-5 my-1 px-1 py-1 "> ContractTo:{ContractFrom}</div>
        </div>

        <div className="flex-col">
          <div className="mx-5 my-1 px-1 py-1 "> BillingFrom:{BillingFrom}</div>
          <div className="mx-5 my-1 px-1 py-1 "> BillingTo:{BillingTo}</div>
        </div>

        <div className="flex-col">
          <div className="mx-1 my-1 px-1 py-1 "> GST:{GST}</div>
          <div className="mx-1 my-1 px-1 py-1 "> GSTAMOUNT:{GSTAMOUNT}</div>
        </div>

        <div className="flex-col">
          <div className="mx-1 my-1 px-1 py-1 "> AMCRate:{AMCRate}</div>
          <div className="mx-1 my-1 px-1 py-1 "> NetAmount:{NetAmount}</div>
        </div>
        <br />
      </div>
      <SectionTitle>Product Description</SectionTitle>
      <div className="flex flex-row flex-wrap items-center justify-start lg:space-x-8  w-full">
        {/* /////////////////////////////// . PRODUCT INFO  ///////////////////////////////////////////// */}
        <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
          <Label className="my-3 w-full">
            <span>Brand :{brand}</span>
          </Label>
          <Label className="my-3 w-full">
            <span>Model:{model}</span>
          </Label>
          <Label className="my-3 w-full">
            <span>Serial Number: {serialno}</span>
          </Label>

          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ? (
            <>
              <Label className="">
                <span>Operating System :{os}</span>
              </Label>
            </>
          ) : null}
        </div>
        <br />
      </div>
      {/* <div className="flex flex-row flex-wrap items-center justify-start lg:space-x-8  "> */}
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
              </div>
              <hr className="mb-2 mt-1" />
              {cpu.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="mb-2 my-1">
                        <span>
                          CPU {i + 1}: {item.cpuname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          CPU {i + 1}: S.No :{item.cpusno}
                        </span>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>

        {/* ----------------CPU------------------------------- */}
        {/* ----------------ram------------------------------- */}
        <div className="w-full">
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ? (
            <>
              <div className="flex flex-row items-center">
                <Label className="font-bold">
                  <span>ram</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {ram.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          ram {i + 1}: {item.ramname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          ram {i + 1}: S.No :{item.ramsno}
                        </span>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
        {/* </div> */}
        {/* ----------------ram------------------------------- */}
        {/* </div> */}

        {/* <div className="flex flex-col lg:flex-row items-start lg:space-x-3"> */}
        {/* ----------------fan------------------------------- */}
        <div className="w-full">
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ||
          product == "Storage" ? (
            <>
              <div className="flex flex-row items-center w-full">
                <Label className="font-bold">
                  <span>fan</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {fan.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          fan {i + 1}: {item.fanname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          fan {i + 1}: S.No :{item.fansno}
                        </span>
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
                  <span>motherboard</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {motherboard.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          motherboard {i + 1}: {item.motherboardname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          motherboard {i + 1}: S.No :{item.motherboardsno}
                        </span>
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
                  <span>hdd</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {hdd.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          hdd {i + 1}: {item.hddname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          hdd {i + 1}: S.No :{item.hddsno}
                        </span>
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
                  <span>smps</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {smps.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          smps {i + 1}: {item.smpsname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          smps {i + 1}: S.No :{item.smpssno}
                        </span>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
        {/* </div> */}

        {/* ----------------smps------------------------------- */}

        {/* <div className="flex flex-col lg:flex-row items-start lg:space-x-3"> */}
        {/* ----------------kbd------------------------------- */}
        <div className="w-full">
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ||
          product == "Router" ? (
            <>
              <div className="flex flex-row items-center">
                <Label className="font-bold">
                  <span>kbd</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {kbd.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          kbd {i + 1}: {item.kbdname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          kbd {i + 1}: S.No :{item.kbdsno}
                        </span>
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
          product == "Storage" ? (
            <>
              <div className="flex flex-row items-center">
                <Label className="font-bold">
                  <span>mouse</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {mouse.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          mouse {i + 1}: {item.mousename}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          mouse {i + 1}: S.No :{item.mousesno}
                        </span>
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

      <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
        {/* ----------------monitor------------------------------- */}
        <div className="w-full">
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ||
          product == "Router" ? (
            <>
              <div className="flex flex-row items-center">
                <Label className="font-bold">
                  <span>monitor</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {monitor.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          monitor {i + 1}: {item.monitorname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          monitor {i + 1}: S.No :{item.monitorsno}
                        </span>
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
                  <span>gcard</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {gcard.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          gcard {i + 1}: {item.gcardname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          gcard {i + 1}: S.No :{item.gcardsno}
                        </span>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>

        {/* ----------------gcard------------------------------- */}
        {/* </div> */}

        {/* <div className="flex flex-col lg:flex-row items-start lg:space-x-3"> */}
        {/* ----------------enetcard------------------------------- */}
        <div className="w-full">
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ? (
            <>
              <div className="flex flex-row items-center">
                <Label className="font-bold">
                  <span>enetcard</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {enetcard.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          enetcard {i + 1}: {item.enetcardname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          enetcard {i + 1}: S.No :{item.enetcardsno}
                        </span>
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
                  <span>serialcard</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {serialcard.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          serialcard {i + 1}: {item.serialcardname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          serialcard {i + 1}: S.No :{item.serialcardsno}
                        </span>
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

      <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
        {/* ----------------parallelcard------------------------------- */}
        <div className="w-full">
          {product == "Server" || product == "Desktop" ? (
            <>
              <div className="flex flex-row items-center">
                <Label className="font-bold">
                  <span>parallelcard</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {parallelcard.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          parallelcard {i + 1}: {item.parallelcardname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          parallelcard {i + 1}: S.No :{item.parallelcardsno}
                        </span>
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
                  <span>hbacard</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {hbacard.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          hbacard {i + 1}: {item.hbacardname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          hbacard {i + 1}: S.No :{item.hbacardsno}
                        </span>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>

        {/* ----------------hbacard------------------------------- */}

        {/* ----------------raidcontroller------------------------------- */}
        <div className="w-full">
          {product == "Server" ? (
            <>
              <div className="flex flex-row items-center">
                <Label className="font-bold">
                  <span>raidcontroller</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {raidcontroller.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          raidcontroller {i + 1}: {item.raidcontrollername}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          raidcontroller {i + 1}: S.No :{item.raidcontrollersno}
                        </span>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>

        {/* ----------------raidcontroller------------------------------- */}
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
        {/* ----------------tapecontroller------------------------------- */}
        <div className="w-full">
          {product == "Server" ? (
            <>
              <div className="flex flex-row items-center">
                <Label className="font-bold">
                  <span>tapecontroller</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {tapecontroller.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          tapecontroller {i + 1}: {item.tapecontrollername}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          tapecontroller {i + 1}: S.No :{item.tapecontrollersno}
                        </span>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>

        {/* ----------------tapecontroller------------------------------- */}

        {/* ----------------opticaldrive------------------------------- */}
        <div className="w-full">
          {product == "Server" ||
          product == "Desktop" ||
          product == "Laptop" ? (
            <>
              <div className="flex flex-row items-center">
                <Label className="font-bold">
                  <span>opticaldrive</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {opticaldrive.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          opticaldrive {i + 1}: {item.opticaldrivename}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          opticaldrive {i + 1}: S.No :{item.opticaldrivesno}
                        </span>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>

        {/* ----------------opticaldrive------------------------------- */}

        {/* ----------------others------------------------------- */}
        <div className="w-full">
          {true ? (
            <>
              <div className="flex flex-row items-center">
                <Label className="font-bold">
                  <span>others</span>
                </Label>
              </div>
              <hr className="mb-2 mt-1" />
              {others.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-1">
                        <span>
                          others {i + 1}: {item.othersname}
                        </span>
                      </Label>
                      <Label className="w-full my-1">
                        <span>
                          others {i + 1}: S.No :{item.otherssno}
                        </span>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>

        {/* ----------------others------------------------------- */}
      </div>
      {/* //////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
};

export default CreateAssetModule;
