import React from "react";
import moment from "moment";
import SectionTitle from "../Typography/SectionTitle";
const AssetModule = ({ selectedprod }) => {
  console.log(selectedprod);
  const {
    business,
    ponumber,
    podate,
    contractfrom,
    contractto,
    billingfrom,
    billingto,
    amcrate,
    // GST,
    gstamount,
    netamount,
    unit,
    customerName,
    accountName,
    unitName,
    producttype,
  } = selectedprod;
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
    keyboard,
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
  } = selectedprod.product;
  let product = producttype;
  // let monitor = [];
  // let hbacard = [];
  // let raidcontroller = [];
  // let tapecontroller = [];
  console.log(selectedprod.product);
  return (
    <div className="  ">
      <div className=" ">
        <div className="flex justify-between flex-row w-5/12 font-bold text-lg mb-2">
          <div>Customer: {customerName} </div>
          <div>Account: {accountName}</div>
          <div>
            {" "}
            Unit:
            {unitName}
          </div>
        </div>

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
        {/* <div className="flex flex-row flex-wrap items-center justify-start lg:space-x-8  "> */}
        {/* -------------------CPU and RAM-------------------------- */}
        <div className="flex flex-col lg:flex-row items-start lg:space-x-3 ">
          {/* ----------------CPU------------------------------- */}
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ? (
            <div className="w-full  my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center ">
                  <div className="font-semibold">
                    <span>CPU</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {cpu.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            CPU {i + 1}: {item.cpuname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.cpusno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}
          {/* ----------------CPU------------------------------- */}
          {/* ----------------ram------------------------------- */}
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center mx-2">
                  <div className="font-semibold">
                    <span>RAM</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {ram.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            RAM {i + 1}: {item.ramname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.ramsno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}
          {/* </div> */}
          {/* ----------------ram------------------------------- */}
          {/* </div> */}
          {/* <div className="flex flex-col lg:flex-row items-start lg:space-x-3"> */}
          {/* ----------------fan------------------------------- */}
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ||
          product == "Storage" ? (
            <div className="w-full  my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-col lg:flex-row items-start lg:space-x-3 mx-2">
                  <div className="font-semibold">
                    <span>Fan</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {fan.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            fan {i + 1}: {item.fanname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.fansno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}
          {/* ----------------fan------------------------------- */}
          {/* ----------------motherboard------------------------------- */}

          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center ">
                  <div className="font-semibold">
                    <span>Mother Board</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {motherboard.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8 mx-2">
                        <div className="w-full my-1">
                          <span>
                            motherboard {i + 1}: {item.motherboardname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.motherboardsno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}
          {/* ----------------motherboard------------------------------- */}
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
          {/* ----------------hdd------------------------------- */}
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ||
          product == "Storage" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>HDD</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {hdd.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            hdd {i + 1}: {item.hddname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No:{item.hddsno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------hdd------------------------------- */}

          {/* ----------------smps------------------------------- */}
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ||
          product == "Storage" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>SMPS</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {smps.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            smps {i + 1}: {item.smpsname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.smpssno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}
          {/* </div> */}

          {/* ----------------smps------------------------------- */}

          {/* <div className="flex flex-col lg:flex-row items-start lg:space-x-3"> */}
          {/* ----------------kbd------------------------------- */}
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ||
          product == "Router" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>Keyboard</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {keyboard.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            kbd {i + 1}: {item.kbdname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.kbdsno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------kbd------------------------------- */}

          {/* ----------------mouse------------------------------- */}
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ||
          product == "Storage" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>Mouse</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {mouse.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            mouse {i + 1}: {item.mousename}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.mousesno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------mouse------------------------------- */}
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
          {/* ----------------monitor------------------------------- */}
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ||
          product == "Router" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>Monitor</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {monitor.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            monitor {i + 1}: {item.monitorname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.monitorsno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------monitor------------------------------- */}

          {/* ----------------gcard------------------------------- */}
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>Graphics card</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {gcard.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            gcard {i + 1}: {item.gcardname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.gcardsno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------gcard------------------------------- */}
          {/* </div> */}

          {/* <div className="flex flex-col lg:flex-row items-start lg:space-x-3"> */}
          {/* ----------------enetcard------------------------------- */}
          {product == "Laptop" ||
          product == "Server" ||
          product == "Desktop" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>ENET card</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {enetcard.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            enetcard {i + 1}: {item.enetcardname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.enetcardsno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------enetcard------------------------------- */}

          {/* ----------------serialcard------------------------------- */}
          {product == "Server" || product == "Desktop" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>Serial card</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {serialcard.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            Serialcard {i + 1}: {item.serialcardname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.serialcardsno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------serialcard------------------------------- */}
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
          {/* ----------------parallelcard------------------------------- */}
          {product == "Server" || product == "Desktop" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>Parallel card</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {parallelcard.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            parallelcard {i + 1}: {item.parallelcardname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.parallelcardsno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------parallelcard------------------------------- */}

          {/* ----------------hbacard------------------------------- */}
          {product == "Server" || product == "Storage" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>HBA card</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {hbacard.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            hbacard {i + 1}: {item.hbacardname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.hbacardsno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------hbacard------------------------------- */}

          {/* ----------------raidcontroller------------------------------- */}
          {product == "Server" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>Raid Controller</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {raidcontroller.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            raidcontroller {i + 1}: {item.raidcontrollername}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.raidcontrollersno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------raidcontroller------------------------------- */}
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:space-x-3">
          {/* ----------------tapecontroller------------------------------- */}
          {product == "Server" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>Tape controller</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {tapecontroller.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            tapecontroller {i + 1}: {item.tapecontrollername}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.tapecontrollersno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------tapecontroller------------------------------- */}

          {/* ----------------opticaldrive------------------------------- */}
          {product == "Server" ||
          product == "Desktop" ||
          product == "Laptop" ? (
            <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>opticaldrive</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {opticaldrive.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            opticaldrive {i + 1}: {item.opticaldrivename}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.opticaldrivesno}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          ) : null}

          {/* ----------------opticaldrive------------------------------- */}

          {/* ----------------others------------------------------- */}
          <div className="w-full my-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
            {true ? (
              <>
                <div className="flex flex-row items-center">
                  <div className="font-semibold">
                    <span>others</span>
                  </div>
                </div>
                <hr className="mb-2 mt-1" />
                {others.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                        <div className="w-full my-1">
                          <span>
                            others {i + 1}: {item.othersname}
                          </span>
                        </div>
                        <div className="w-full my-1">
                          <span>S.No :{item.otherssno}</span>
                        </div>
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
        <SectionTitle>AssetInfo</SectionTitle>

        <div className="flex flex-row flex-wrap items-center justify-start lg:space-x-8  bg-gray-100 dark:bg-gray-700 p-2 rounded-md ">
          <div className="flex-col ">
            <div className="mx-5 my-1 px-1 py-1 ">
              Business Type: {business}{" "}
            </div>
            <div className="mx-5 my-1 px-1 py-1 text-gray-100 dark:text-gray-900">
              .
            </div>
          </div>
          <div className="flex-col">
            <div className="mx-5 my-1 px-1 py-1 ">
              Purchase Number:{ponumber}
            </div>
            <div className="mx-5 my-1 px-1 py-1 ">
              Purchase Date:{moment(podate).format("DD-MM-YYYY")}
            </div>
          </div>
          <div className="flex-col">
            <div className="mx-5 my-1 px-1 py-1 ">
              {" "}
              ContractFrom:{moment(contractfrom).format("DD-MM-YYYY")}
            </div>
            <div className="mx-5 my-1 px-1 py-1 ">
              {" "}
              ContractTo:{moment(contractto).format("DD-MM-YYYY")}
            </div>
          </div>

          <div className="flex-col">
            <div className="mx-5 my-1 px-1 py-1 ">
              {" "}
              BillingFrom:{moment(billingfrom).format("DD-MM-YYYY")}
            </div>
            <div className="mx-5 my-1 px-1 py-1 ">
              {" "}
              BillingTo:{moment(billingto).format("DD-MM-YYYY")}
            </div>
          </div>

          <div className="flex-col">
            <div className="mx-1 my-1 px-1 py-1 "> GST: GST HERE</div>
            <div className="mx-1 my-1 px-1 py-1 "> GSTAMOUNT:{gstamount}</div>
          </div>

          <div className="flex-col">
            <div className="mx-1 my-1 px-1 py-1 "> AMCRate:{amcrate}</div>
            <div className="mx-1 my-1 px-1 py-1 "> NetAmount:{netamount}</div>
          </div>
          <br />
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
};

export default AssetModule;
