import AssetData from "./assetdata.json";
import axios from "axios";
import { API } from "../backendapi";

export const handleMigration = async () => {
  console.log("migrating!!!!!!!!!!");
  AssetData.Asset.map(async (doc) => {
    // console.log(doc);

    let payload = {
      asset: {
        business: doc.business,
        ponumber: doc.ponumber,
        // podate: POdate,
        // contractfrom: ContractFrom,
        // contractto: ContractTo,
        // billingfrom: BillingFrom,
        // billingto: BillingTo,
        // amcrate: AMCRate,
        // gstperc: GST,
        // gstamount: GSTAMOUNT,
        // netamount: NetAmount,
      },
      product: {
        brand: doc.brand,
        model: doc.model,
        serialno: doc.serialnumber,
        os: doc.os,
        cpu: [
          { cpuname: doc.cpu1, cpusno: doc.cpu1sno },
          { cpuname: doc.cpu2, cpusno: doc.cpu2sno },
          { cpuname: doc.cpu3, cpusno: doc.cpu3sno },
          { cpuname: doc.cpu4, cpusno: doc.cpu4sno },
        ],
        // ram: ram,
        ram: [
          { ramname: doc.ram1, ramsno: doc.ram1sno },
          { ramname: doc.ram2, ramsno: doc.ram2sno },
          { ramname: doc.ram3, ramsno: doc.ram3sno },
          { ramname: doc.ram4, ramsno: doc.ram4sno },
        ],
        // hdd: hdd,
        hdd: [
          { hddname: doc.hdd1, hddsno: doc.hdd1sno },
          { hddname: doc.hdd2, hddsno: doc.hdd2sno },
          { hddname: doc.hdd3, hddsno: doc.hdd3sno },
          { hddname: doc.hdd4, hddsno: doc.hdd4sno },
        ],
        // smps: smps,
        smps: [
          { smpsname: doc.smps1, smpssno: doc.smps1sno },
          { smpsname: doc.smps2, smpssno: doc.smps2sno },
          { smpsname: doc.smps3, smpssno: doc.smps3sno },
          { smpsname: doc.smps4, smpssno: doc.smps4sno },
        ],
        // fan: fan,
        fan: [
          { fanname: doc.fan1, fansno: doc.fan1sno },
          { fanname: doc.fan2, fansno: doc.fan2sno },
          { fanname: doc.fan3, fansno: doc.fan3sno },
          { fanname: doc.fan4, fansno: doc.fan4sno },
        ],
        // motherboard: motherboard,
        motherboard: [
          {
            motherboardname: doc.motherboard1,
            motherboardsno: doc.motherboard1sno,
          },
          {
            motherboardname: doc.motherboard2,
            motherboardsno: doc.motherboard2sno,
          },
          {
            motherboardname: doc.motherboard3,
            motherboardsno: doc.motherboard3sno,
          },
          {
            motherboardname: doc.motherboard4,
            motherboardsno: doc.motherboard4sno,
          },
        ],
        // opticaldrive: opticaldrive,
        opticaldrive: [
          {
            opticaldrivename: doc.opticaldrive1,
            opticaldrivesno: doc.opticaldrive1sno,
          },
          {
            opticaldrivename: doc.opticaldrive2,
            opticaldrivesno: doc.opticaldrive2sno,
          },
          {
            opticaldrivename: doc.opticaldrive3,
            opticaldrivesno: doc.opticaldrive3sno,
          },
          {
            opticaldrivename: doc.opticaldrive4,
            opticaldrivesno: doc.opticaldrive4sno,
          },
        ],
        // keyboard: kbd,
        keyboard: [
          { kbdname: doc.kbd1, kbdsno: doc.kbd1sno },
          { kbdname: doc.kbd2, kbdsno: doc.kbd2sno },
          { kbdname: doc.kbd3, kbdsno: doc.kbd3sno },
          { kbdname: doc.kbd4, kbdsno: doc.kbd4sno },
        ],
        // mouse: mouse,
        mouse: [
          { mousename: doc.mouse1, mousesno: doc.mouse1sno },
          { mousename: doc.mouse2, mousesno: doc.mouse2sno },
          { mousename: doc.mouse3, mousesno: doc.mouse3sno },
          { mousename: doc.mouse4, mousesno: doc.mouse4sno },
        ],
        // monitor: monitor,
        monitor: [
          { monitorname: doc.monitor1, monitorsno: doc.monitor1sno },
          { monitorname: doc.monitor2, monitorsno: doc.monitor2sno },
          { monitorname: doc.monitor3, monitorsno: doc.monitor3sno },
          { monitorname: doc.monitor4, monitorsno: doc.monitor4sno },
        ],
        // gcard: gcard,
        gcard: [
          { gcardname: doc.gcard1, gcardsno: doc.gcard1sno },
          { gcardname: doc.gcard2, gcardsno: doc.gcard2sno },
          { gcardname: doc.gcard3, gcardsno: doc.gcard3sno },
          { gcardname: doc.gcard4, gcardsno: doc.gcard4sno },
        ],
        // enetcard: enetcard,
        enetard: [
          { enetardname: doc.enetard1, enetardsno: doc.enetard1sno },
          { enetardname: doc.enetard2, enetardsno: doc.enetard2sno },
          { enetardname: doc.enetard3, enetardsno: doc.enetard3sno },
          { enetardname: doc.enetard4, enetardsno: doc.enetard4sno },
        ],
        // serialcard: serialcard,
        serialcard: [
          {
            serialcardname: doc.serialcard1,
            serialcardsno: doc.serialcard1sno,
          },
          {
            serialcardname: doc.serialcard2,
            serialcardsno: doc.serialcard2sno,
          },
          {
            serialcardname: doc.serialcard3,
            serialcardsno: doc.serialcard3sno,
          },
          {
            serialcardname: doc.serialcard4,
            serialcardsno: doc.serialcard4sno,
          },
        ],
        // parallelcard: parallelcard,
        parallelcard: [
          {
            parallelcardname: doc.parallelcard1,
            parallelcardsno: doc.parallelcard1sno,
          },
          {
            parallelcardname: doc.parallelcard2,
            parallelcardsno: doc.parallelcard2sno,
          },
          {
            parallelcardname: doc.parallelcard3,
            parallelcardsno: doc.parallelcard3sno,
          },
          {
            parallelcardname: doc.parallelcard4,
            parallelcardsno: doc.parallelcard4sno,
          },
        ],
        // hbacard: hbacard,
        hbacard: [
          { hbacardname: doc.hbacard1, hbacardsno: doc.hbacard1sno },
          { hbacardname: doc.hbacard2, hbacardsno: doc.hbacard2sno },
          { hbacardname: doc.hbacard3, hbacardsno: doc.hbacard3sno },
          { hbacardname: doc.hbacard4, hbacardsno: doc.hbacard4sno },
        ],
        // raidcontroller: raidcontroller,
        raidcontroller: [
          {
            raidcontrollername: doc.raidcontroller1,
            raidcontrollersno: doc.raidcontroller1sno,
          },
          {
            raidcontrollername: doc.raidcontroller2,
            raidcontrollersno: doc.raidcontroller2sno,
          },
          {
            raidcontrollername: doc.raidcontroller3,
            raidcontrollersno: doc.raidcontroller3sno,
          },
          {
            raidcontrollername: doc.raidcontroller4,
            raidcontrollersno: doc.raidcontroller4sno,
          },
        ],
        // tapecontroller: tapecontroller,
        tapecontroller: [
          {
            tapecontrollername: doc.tapecontroller1,
            tapecontrollersno: doc.tapecontroller1sno,
          },
          {
            tapecontrollername: doc.tapecontroller2,
            tapecontrollersno: doc.tapecontroller2sno,
          },
          {
            tapecontrollername: doc.tapecontroller3,
            tapecontrollersno: doc.tapecontroller3sno,
          },
          {
            tapecontrollername: doc.tapecontroller4,
            tapecontrollersno: doc.tapecontroller4sno,
          },
        ],
        // others: others,
        others: [
          { othersname: doc.others1, otherssno: doc.others1sno },
          { othersname: doc.others2, otherssno: doc.others2sno },
          { othersname: doc.others3, otherssno: doc.others3sno },
          { othersname: doc.others4, otherssno: doc.others4sno },
        ],
      },
    };
    // console.log(API);
    try {
      // await axios({
      //   url: `${API}/asset/create`,
      //   method: "POST",
      //   data: payload,
      // });
      console.log("Done");
    } catch (error) {
      throw error;
    }
  });
  //   console.log("Hello");
  //   console.log();

  //   };
  console.log("Hello");
};
