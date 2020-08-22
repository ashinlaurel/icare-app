import AssetData from "./assetdata.json";
import axios from "axios";
import { API } from "../backendapi";

export const handleMigration = async () => {
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
          { cpuname: doc.cpu2, cpusno: doc.cpu2sno },
          { cpuname: doc.cpu3, cpusno: doc.cpu3sno },
        ],
        // ram: ram,
        // hdd: hdd,
        // smps: smps,
        // fan: fan,
        // motherboard: motherboard,
        // opticaldrive: opticaldrive,
        // keyboard: kbd,
        // mouse: mouse,
        // monitor: monitor,
        // gcard: gcard,
        // enetcard: enetcard,
        // serialcard: serialcard,
        // parallelcard: parallelcard,
        // hbacard: hbacard,
        // raidcontroller: raidcontroller,
        // tapecontroller: tapecontroller,
        // others: others,
      },
    };
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
  });
  //   console.log("Hello");
  //   console.log();

  //   };
  console.log("Hello");
};
