import AssetData from "./assetdata.json";
import NewAssetData from "./newassetdata.json";

import axios from "axios";
import { API } from "../backendapi";

export const handleMigration = async () => {
  console.log("migrating!!!!!!!!!!");
  // AssetData.Asset.map(async (doc) => {
  NewAssetData.map(
    async (doc, i) => {
      // console.log(doc);

      let payload = {
        asset: {
          business: doc.business,
          ponumber: doc.ponumber,
          podate: doc.podate,
          contractfrom: new Date(doc.contractfrom),
          contractto: new Date(doc.contractto),
          billingfrom: new Date(doc.billingfrom),
          billingto: new Date(doc.billingto),
          amcrate: parseInt(doc.amcrate),
          gstperc: parseInt(doc.gstperc),
          gstamount: parseInt(doc.gstamount),
          netamount: parseInt(doc.netamount),
          customerName: doc.customerName,
          accountName: doc.accountName,
          unitName: doc.unitName,
          producttype: doc.producttype,
          servicelocation: doc.servicelocation,
        },
        product: {
          brand: doc.brand,
          model: doc.model,
          serialno: doc.serialno,
          os: doc.os,
          cpu: [
            // { cpuname: doc.cpu1, cpusno: doc.cpu1sno },
            // { cpuname: doc.cpu2, cpusno: doc.cpu2sno },
            // { cpuname: doc.cpu3, cpusno: doc.cpu3sno },
            // { cpuname: doc.cpu4, cpusno: doc.cpu4sno },
          ],
          // ram: ram,
          ram: [
            // { ramname: doc.ram1, ramsno: doc.ram1sno },
            // { ramname: doc.ram2, ramsno: doc.ram2sno },
            // { ramname: doc.ram3, ramsno: doc.ram3sno },
            // { ramname: doc.ram4, ramsno: doc.ram4sno },
          ],
          // hdd: hdd,
          hdd: [
            // { hddname: doc.hdd1, hddsno: doc.hdd1sno },
            // { hddname: doc.hdd2, hddsno: doc.hdd2sno },
            // { hddname: doc.hdd3, hddsno: doc.hdd3sno },
            // { hddname: doc.hdd4, hddsno: doc.hdd4sno },
          ],
          // smps: smps,
          smps: [
            // { smpsname: doc.smps1, smpssno: doc.smps1sno },
            // { smpsname: doc.smps2, smpssno: doc.smps2sno },
            // { smpsname: doc.smps3, smpssno: doc.smps3sno },
            // { smpsname: doc.smps4, smpssno: doc.smps4sno },
          ],
          // fan: fan,
          fan: [
            // { fanname: doc.fan1, fansno: doc.fan1sno },
            // { fanname: doc.fan2, fansno: doc.fan2sno },
            // { fanname: doc.fan3, fansno: doc.fan3sno },
            // { fanname: doc.fan4, fansno: doc.fan4sno },
          ],
          // motherboard: motherboard,
          motherboard: [
            {
              motherboardname: doc.motherboard1,
              motherboardsno: doc.motherboard1sno,
            },
          ],
          // opticaldrive: opticaldrive,
          opticaldrive: [
            {
              opticaldrivename: doc.opticaldrive1,
              opticaldrivesno: doc.opticaldrive1sno,
            },
          ],
          // keyboard: kbd,
          keyboard: [{ keyboardname: doc.kbd1, keyboardsno: doc.kbd1sno }],
          // mouse: mouse,
          mouse: [{ mousename: doc.mouse1, mousesno: doc.mouse1sno }],
          // monitor: monitor,
          monitor: [{ monitorname: doc.monitor1, monitorsno: doc.monitor1sno }],
          // gcard: gcard,
          gcard: [{ gcardname: doc.gcard1, gcardsno: doc.gcard1sno }],
          // enetcard: enetcard,
          enetcard: [
            { enetcardname: doc.enetcard1, enetcardsno: doc.enetcard1sno },
          ],
          // serialcard: serialcard,
          serialcard: [
            {
              serialcardname: doc.serialcard1,
              serialcardsno: doc.serialcard1sno,
            },
          ],
          // parallelcard: parallelcard,
          parallelcard: [
            {
              parallelcardname: doc.parallelcard1,
              parallelcardsno: doc.parallelcard1sno,
            },
          ],
          // hbacard: hbacard,
          hbacard: [{ hbacardname: doc.hbacard1, hbacardsno: doc.hbacard1sno }],
          // raidcontroller: raidcontroller,
          raidcontroller: [
            {
              raidcontrollername: doc.raidcontroller1,
              raidcontrollersno: doc.raidcontroller1sno,
            },
          ],
          // tapecontroller: tapecontroller,
          tapecontroller: [
            {
              tapecontrollername: doc.tapecontroller1,
              tapecontrollersno: doc.tapecontroller1sno,
            },
          ],
          // others: others,
          others: [
            {
              othersname: doc.others1,
              otherssno: doc.others1sno,
            },
          ],
        },
      };
      // ----  multiitem addition into respective arrays
      // ---cpu insertions------
      if (doc.cpu1sno != "") {
        let temp = { cpuname: doc.cpu1, cpusno: doc.cpu1sno };
        payload.product.cpu.push(temp);
      }
      if (doc.cpu2sno != "") {
        let temp = { cpuname: doc.cpu2, cpusno: doc.cpu2sno };
        payload.product.cpu.push(temp);
      }
      if (doc.cpu3sno != "") {
        let temp = { cpuname: doc.cpu3, cpusno: doc.cpu3sno };
        payload.product.cpu.push(temp);
      }
      if (doc.cpu4sno != "") {
        let temp = { cpuname: doc.cpu4, cpusno: doc.cpu4sno };
        payload.product.cpu.push(temp);
      }

      // ---ram insertions------

      if (doc.ram1sno != "") {
        let temp = { ramname: doc.ram1, ramsno: doc.ram1sno };
        payload.product.ram.push(temp);
      }
      if (doc.ram2sno != "") {
        let temp = { ramname: doc.ram2, ramsno: doc.ram2sno };
        payload.product.ram.push(temp);
      }
      if (doc.ram3sno != "") {
        let temp = { ramname: doc.ram3, ramsno: doc.ram3sno };
        payload.product.ram.push(temp);
      }
      if (doc.ram4sno != "") {
        let temp = { ramname: doc.ram4, ramsno: doc.ram4sno };
        payload.product.ram.push(temp);
      }

      //  HDD INSERTIONS
      if (doc.hdd1sno != "") {
        let temp = { hddname: doc.hdd1, hddsno: doc.hdd1sno };
        payload.product.hdd.push(temp);
      }
      if (doc.hdd2sno != "") {
        let temp = { hddname: doc.hdd2, hddsno: doc.hdd2sno };
        payload.product.hdd.push(temp);
      }
      if (doc.hdd3sno != "") {
        let temp = { hddname: doc.hdd3, hddsno: doc.hdd3sno };
        payload.product.hdd.push(temp);
      }
      if (doc.hdd4sno != "") {
        let temp = { hddname: doc.hdd4, hddsno: doc.hdd4sno };
        payload.product.hdd.push(temp);
      }
      // SMPS INSERTIONS

      if (doc.smps1sno != "") {
        let temp = { smpsname: doc.smps1, smpssno: doc.smps1sno };
        payload.product.smps.push(temp);
      }
      if (doc.smps2sno != "") {
        let temp = { smpsname: doc.smps2, smpssno: doc.smps2sno };
        payload.product.smps.push(temp);
      }
      if (doc.smps3sno != "") {
        let temp = { smpsname: doc.smps3, smpssno: doc.smps3sno };
        payload.product.smps.push(temp);
      }
      if (doc.smps4sno != "") {
        let temp = { smpsname: doc.smps4, smpssno: doc.smps4sno };
        payload.product.smps.push(temp);
      }

      // FANNAME

      if (doc.fan1sno != "") {
        let temp = { fanname: doc.fan1, fansno: doc.fan1sno };
        payload.product.fan.push(temp);
      }
      if (doc.fan2sno != "") {
        let temp = { fanname: doc.fan2, fansno: doc.fan2sno };
        payload.product.fan.push(temp);
      }
      if (doc.fan3sno != "") {
        let temp = { fanname: doc.fan3, fansno: doc.fan3sno };
        payload.product.fan.push(temp);
      }
      if (doc.fan4sno != "") {
        let temp = { fanname: doc.fan4, fansno: doc.fan4sno };
        payload.product.fan.push(temp);
      }

      // -----------------------

      try {
        let customerid = await axios({
          url: `${API}/customer/getCustomerByName`,
          method: "POST",
          data: { name: doc.customerName },
        });
        // console.log(customerid.data);
        payload.asset.customerId = customerid.data;
        // AccountId Get
        let accountid = await axios({
          url: `${API}/customer/getCustomerByName`,
          method: "POST",
          data: { name: doc.accountName },
        });
        // console.log(customerid.data);
        payload.asset.accountId = accountid.data;
        // Units Get
        let unitid = await axios({
          url: `${API}/unit/getUnitByName`,
          method: "POST",
          data: { name: doc.unitName },
        });
        // console.log(customerid.data);
        payload.asset.unitId = unitid.data;

        let finish = await axios({
          url: `${API}/asset/create`,
          method: "POST",
          data: payload,
        });

        console.log(payload);
      } catch (error) {
        console.log(
          "Error -> ",
          error,
          "At->",
          payload.asset.brand,
          payload.asset.model,
          payload.asset.serialno,
          "At index=",
          i
        );
        // throw error;
        // process.exit(1)
      }
    }
    // throw error;
  );
  //   console.log("Hello");
  //   console.log();

  //   };
  // console.log("Hello");
};
