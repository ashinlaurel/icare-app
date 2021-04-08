import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { API } from "../../backendapi";
import moment from "moment";
import { Card, CardBody } from "@windmill/react-ui";

import Emp from "../../helpers/auth/EmpProfile";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import {
  Input,
  HelperText,
  Label,
  Button,
  Badge,
  Select,
} from "@windmill/react-ui";

import { signup, signin, authenticate } from "../../helpers/auth";
import CustomerCreateModal from "../../components/Modal/CustomerCreateModal";
import EmpProfile from "../../helpers/auth/EmpProfile";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";
import { resetIdCounter } from "react-tabs";
import { TopBarContext } from "../../context/TopBarContext";
import { unitCreate } from "../../helpers/unitHelper";
import AddUnitModal from "../../components/Modal/AddUnitModal";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
/////////////----------------->>>>>> bug <<<<<------------customerList refresh--------------------------

function UpdateInventory() {
  const { id } = useParams();
  let movehistory = useHistory();

  const { setTopHeading } = useContext(TopBarContext);
  const [flow, setFlow] = useState("basic");
  const [calculate, setCalculate] = useState(false);
  const [datecalculate, setDateCalculate] = useState(false);
  const [calnum, setCalnum] = useState(-1);

  const thebval = {
    purchtype: "",
    vendor: "",
    invnumber: "",
    invdate: "",
    location: "",
    invtype: "",
    gstno: "",
    panno: "",
    aadharno: "",
    purchlocation: "Local",
    totalInvoice: "0",
  };
  const [basevalues, setBaseValues] = useState(thebval);

  const invdetails = {
    type: "",
    name: "",
    // assetsIdHistory: "",
    // assetId: "",
    sno: "",
    condition: "Good",
    taxcategory: "",
    taxperc: "",
    rate: "",
    igst: "0",
    cgst: "0",
    sgst: "0",
    nettax: "0",
    amount: "0",
    tcs: "0",
    invamount: "0",
    wty: "",
    expirydate: "",
    //-------------------------
    purchtype: "",
    vendor: "",
    invnumber: "",
    invdate: "",
    location: "",
    invtype: "",
    gstno: "",
    panno: "",
    aadharno: "",
    purchlocation: "",

    brand: "",
    model: "",
    systype: "",
    stocktype: "",

    //-------
    caseId: "",
  };
  const [values, setValues] = useState([invdetails]);

  const [err, setErr] = useState({
    type: "",
    name: "",
    sno: "",
    condition: "",
    location: "",
    invnumber: "",
  });

  useEffect(() => {
    thegetter();
  }, []);

  const thegetter = async () => {
    let data = { id: id };
    // console.log(API);
    try {
      let res = await Axios({
        url: `${API}/inventory/${Emp.getId()}/getById`,
        method: "POST",
        data: data,
      });

      setValues([res.data]);
      setBaseValues(res.data);
      setBaseValues({
        purchtype: res.data.purchtype,
        vendor: res.data.vendor,
        invnumber: res.data.invnumber,
        invdate: res.data.invdate,
        location: res.data.location,
        invtype: res.data.invtype,
        gstno: res.data.gstno,
        panno: res.data.panno,
        aadharno: res.data.aadharno,
        purchlocation: res.data.purchlocation,
        totalInvoice: res.data.totalInvoice,
      });

      console.log("Done", res.data);
    } catch (error) {
      throw error;
    }
  };

  const submitItems = async () => {
    if (values.name === "" || values.sno === "" || values.invnumber === "") {
      //   setIsReqFieldModal(true);
      console.log("missing inputs");
      return;
    }
    let ids = [];
    console.log("Submission Start");
    const newitems = [...values];
    newitems.map((item) => {
      item.purchtype = basevalues.purchtype;
      item.vendor = basevalues.vendor;
      item.invnumber = basevalues.invnumber;
      item.invdate = basevalues.invdate;
      item.location = basevalues.location;
      item.invtype = basevalues.invtype;
      item.gstno = basevalues.gstno;
      item.panno = basevalues.panno;
      item.aadharno = basevalues.aadharno;
      item.purchlocation = basevalues.purchtype;
    });
    let payload = {
      id: id,
      update: newitems[0],
    };
    console.log(newitems);
    await Axios({
      url: `${API}/inventory/${Emp.getId()}/invupdate`,
      method: "POST",
      data: payload,
    })
      .then((data) => {
        console.log("Updated", data);
        movehistory.push("/app/inventory");
      })
      .catch((err) => {
        console.log("err", err);
        setErr({ ...err });
      });
  };

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Update Inventory");
    return () => {
      setTopHeading("");
    };
  }, []);
  // ------------------- Calculations----------------------------------
  useEffect(() => {
    // console.log("hello");
    // console.log(calnum);
    let newlist = [...values];

    if (basevalues.purchlocation == "Local" && calnum != -1) {
      newlist[calnum].sgst =
        parseInt(newlist[calnum].rate) *
        (parseInt(newlist[calnum].taxperc) / 200);
      newlist[calnum].cgst =
        parseInt(newlist[calnum].rate) *
        (parseInt(newlist[calnum].taxperc) / 200);
      newlist[calnum].nettax =
        parseInt(newlist[calnum].sgst) + parseInt(newlist[calnum].cgst);
      newlist[calnum].amount =
        parseFloat(newlist[calnum].rate) + parseFloat(newlist[calnum].nettax);

      // setValues(newlist);
    } else if (calnum != -1) {
      newlist[calnum].igst =
        parseInt(newlist[calnum].rate) *
        (parseInt(newlist[calnum].taxperc) / 100);
      newlist[calnum].nettax = newlist[calnum].igst;

      newlist[calnum].sgst = 0;
      newlist[calnum].cgst = 0;
      newlist[calnum].amount =
        parseFloat(newlist[calnum].rate) + parseFloat(newlist[calnum].nettax);

      // setValues(newlist);
    }

    if (calnum != -1) {
      newlist[calnum].tcs = parseFloat(newlist[calnum].amount) * 0.001;
      newlist[calnum].invamount =
        parseFloat(newlist[calnum].amount) + parseFloat(newlist[calnum].tcs);
      newlist[calnum].expirydate = moment().format("DD-MM-YYYY");
      console.log(basevalues.totalInvoice, newlist[calnum].invamount);
      console.log(
        parseFloat(basevalues.totalInvoice) +
          parseFloat(newlist[calnum].invamount)
      );

      let newbaseval = basevalues;
      newbaseval.totalInvoice = parseFloat(
        parseFloat(basevalues.totalInvoice) +
          parseFloat(newlist[calnum].invamount)
      );
      setBaseValues(newbaseval);
    }

    setValues(newlist);

    return () => {
      console.log("Calculations done!");
    };
  }, [calculate]);

  //   const handleChange = (name) => (e) => {
  //     setValues({ ...values, [name]: e.target.value });
  //   };

  // ---------Date Calculations ------------

  useEffect(() => {
    // console.log("hello");
    // console.log(calnum);
    let newlist = [...values];

    if (calnum != -1) {
      switch (newlist[calnum].wty) {
        case "0D":
          newlist[calnum].expirydate = moment(basevalues.invdate).format(
            "DD-MM-YYYY"
          );
          break;
        case "3M":
          newlist[calnum].expirydate = moment()
            .add(3, "M")
            .format("DD-MM-YYYY");

          break;
        case "6M":
          newlist[calnum].expirydate = moment()
            .add(6, "M")
            .format("DD-MM-YYYY");

          break;
        case "1Y":
          newlist[calnum].expirydate = moment()
            .add(1, "Y")
            .format("DD-MM-YYYY");

          break;
        case "2Y":
          newlist[calnum].expirydate = moment()
            .add(2, "Y")
            .format("DD-MM-YYYY");

          break;
        case "3Y":
          newlist[calnum].expirydate = moment()
            .add(3, "Y")
            .format("DD-MM-YYYY");

          break;
        case "4Y":
          newlist[calnum].expirydate = moment()
            .add(4, "Y")
            .format("DD-MM-YYYY");

          break;
        case "5Y":
          newlist[calnum].expirydate = moment()
            .add(5, "Y")
            .format("DD-MM-YYYY");

          break;

        default:
          break;
      }
    }

    setValues(newlist);

    return () => {
      console.log("Calculations done!");
    };
  }, [datecalculate]);

  const handleBaseChange = (name) => (e) => {
    setBaseValues({ ...basevalues, [name]: e.target.value });
  };

  //   const ReviewSubmit = () => {
  //     return (
  //       <>
  //         <Modal
  //           isOpen={isReviewModalOpen}
  //           onClose={() => setIsReviewModalOpen(false)}
  //         >
  //           <ModalHeader>Information updated Successfully!</ModalHeader>
  //           <ModalBody></ModalBody>
  //           <ModalFooter>
  //             <Button
  //               className="w-full sm:w-auto"
  //               // onClick={() => setIsReviewModalOpen(false)}
  //               onClick={() => setIsReviewModalOpen(false)}
  //             >
  //               Okay!
  //             </Button>
  //           </ModalFooter>
  //         </Modal>
  //       </>
  //     );
  //   };

  //   const ReqFieldErrModal = () => {
  //     return (
  //       <>
  //         <Modal
  //           isOpen={isReqFieldModal}
  //           onClose={() => setIsReqFieldModal(false)}
  //         >
  //           <ModalHeader>Required fields are not filled!</ModalHeader>
  //           <ModalBody></ModalBody>
  //           <ModalFooter>
  //             <Button
  //               className="w-full sm:w-auto"
  //               onClick={() => setIsReqFieldModal(false)}
  //             >
  //               Okay!
  //             </Button>
  //           </ModalFooter>
  //         </Modal>
  //       </>
  //     );
  //   };

  //   Basic Form

  const BasicForm = () => {
    return (
      <div className="px-4 py-3 mt-4 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>
            Purchase Information Total Invoice Amount{basevalues.totalInvoice}
          </span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* -----Row 1 --------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Purchase Type*</span>
              <Input
                className="mt-1"
                type="text"
                value={basevalues.purchtype}
                onChange={handleBaseChange("purchtype")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Vendor Name*</span>
              <Input
                className="mt-1"
                type="text"
                value={basevalues.vendor}
                onChange={handleBaseChange("vendor")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Invoice Number*</span>
              <Input
                className="mt-1"
                type="text"
                value={basevalues.invnumber}
                onChange={handleBaseChange("invnumber")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Invoice Date*</span>
              <Input
                className="mt-1"
                type="date"
                value={basevalues.invdate}
                onChange={handleBaseChange("invdate")}
              />
            </Label>
          </div>
        </div>
        {/* ------------------------Row 2-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Location*</span>
              <Select
                className="mt-1"
                onChange={(e) => {
                  setBaseValues({ ...basevalues, location: e.target.value });
                }}
              >
                <option value="Trivandrum">Trivandrum</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Kozhikode">Kozhikode</option>
                <option value="In Transit">In Transit</option>
              </Select>
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Invoice Type*</span>
              <Input
                className="mt-1"
                type="text"
                value={basevalues.invtype}
                onChange={handleBaseChange("invtype")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>GST Number*</span>
              <Input
                className="mt-1"
                type="text"
                value={basevalues.gstno}
                onChange={handleBaseChange("gstno")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Pan No*</span>
              <Input
                className="mt-1"
                type="text"
                value={basevalues.panno}
                onChange={handleBaseChange("panno")}
              />
            </Label>
          </div>
        </div>

        {/* -------------------------ROw 3-------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Aadhar No*</span>
              <Input
                className="mt-1"
                type="text"
                value={basevalues.aadharno}
                onChange={handleBaseChange("aadharno")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Purchase Location*</span>
              <Select
                className="mt-1"
                onChange={(e) => {
                  setBaseValues({
                    ...basevalues,
                    purchlocation: e.target.value,
                  });

                  let newlist = [...values];
                  newlist.map((item, i) => {
                    item.taxcategory = "";
                    item.taxperc = "";
                  });
                  setValues([invdetails]);
                }}
              >
                <option value="Local">Local</option>
                <option value="IGST">IGST</option>
              </Select>
            </Label>
          </div>
        </div>
      </div>
    );
  };

  const ItemForm = (num) => {
    return (
      <div className="px-4 py-3 my-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold flex-row flex justify-between">
          <span>Item Number : {num + 1}</span>{" "}
          <span className="ml-10">
            {" "}
            Net Tax:{values[num].nettax} ,Invoice Amount:{" "}
            {values[num].invamount}{" "}
          </span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Select Type*</span>
              <Select
                value={values[num].systype}
                className="mt-1"
                onChange={(e) => {
                  let newlist = [...values];
                  newlist[num].systype = e.target.value;
                  setValues(newlist);
                }}
              >
                <option value="" selected disabled>
                  Select Type
                </option>
                <option value="item">Item</option>
                <option value="full system">Full System</option>
              </Select>
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Select Category*</span>
              <Select
                value={values[num].type}
                className="mt-1"
                onChange={(e) => {
                  let newlist = [...values];
                  newlist[num].type = e.target.value;
                  newlist[num].type = newlist[num].type.toLowerCase();

                  setValues(newlist);
                }}
              >
                <option value="" selected disabled>
                  Select Type
                </option>
                {values[num].systype == "item" ? (
                  <>
                    <option value="Mouse">Mouse</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Cpu">Cpu</option>
                    <option value="Ram">Ram</option>
                    <option value="Fan">Fan</option>
                    <option value="Motherboard">Motherboard</option>
                    <option value="SMPS">SMPS</option>
                    <option value="HDD">HDD</option>
                    <option value="GCard">Gcard</option>
                    <option value="EnetCard">Enet Card</option>
                    <option value="SerialCard">Serial Card</option>
                    <option value="ParalellCard">Paralell Card</option>
                    <option value="OpticalDrive">Optical Drive</option>
                    <option value="Others">Others</option>
                  </>
                ) : (
                  <>
                    <option value="console">Console</option>
                    <option value="DMP">DMP</option>
                    <option value="inkjet">Inkjet</option>
                    <option value="KVM">KVM</option>
                    <option value="laptop">Laptop</option>
                    <option value="laser">Laser</option>
                    <option value="LMP">LMP</option>
                    <option value="module">Module</option>
                    <option value="router">Router</option>
                    <option value="scanner">Scanner</option>
                    <option value="server">Server</option>
                    <option value="desktop">Desktop</option>
                    <option value="storage">Storage</option>
                    <option value="switch">Switch</option>
                    <option value="UPS">UPS</option>
                    <option value="others">Others</option>
                  </>
                )}
              </Select>
            </Label>
          </div>

          {values[num].systype == "item" ? (
            <>
              <div className="flex flex-col w-full">
                <Label className="w-full">
                  <span>Product Name*</span>
                  <Input
                    className="mt-1"
                    type="text"
                    value={values[num].name}
                    onChange={(e) => {
                      let newlist = [...values];
                      newlist[num].name = e.target.value;
                      setValues(newlist);
                    }}
                  />
                </Label>
                <HelperText valid={false}>{err.name}</HelperText>
              </div>
            </>
          ) : (
            <>
              <>
                <div className="flex flex-col w-full">
                  <Label className="w-full">
                    <span>Brand*</span>
                    <Input
                      className="mt-1"
                      type="text"
                      value={values.brand}
                      onChange={(e) => {
                        let newlist = [...values];
                        newlist[num].brand = e.target.value;
                        setValues(newlist);
                      }}
                    />
                  </Label>
                  <HelperText valid={false}>{err.brand}</HelperText>
                </div>
              </>

              <>
                <div className="flex flex-col w-full">
                  <Label className="w-full">
                    <span>Model*</span>
                    <Input
                      className="mt-1"
                      type="text"
                      value={values.model}
                      onChange={(e) => {
                        let newlist = [...values];
                        newlist[num].model = e.target.value;
                        setValues(newlist);
                      }}
                    />
                  </Label>
                  <HelperText valid={false}>{err.name}</HelperText>
                </div>
              </>
            </>
          )}

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Serial Number*</span>
              <Input
                className="mt-1"
                type="text"
                value={values[num].sno}
                onChange={(e) => {
                  let newlist = [...values];
                  newlist[num].sno = e.target.value;
                  setValues(newlist);
                }}
              />
            </Label>
            <HelperText valid={false}>{err.sno}</HelperText>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Select Condition*</span>
              <Select
                value={values[num].condition}
                className="mt-1"
                onChange={(e) => {
                  let newlist = [...values];
                  newlist[num].condition = e.target.value;
                  setValues(newlist);
                }}
              >
                <option value="Good" selected>
                  Good
                </option>
                <option value="Bad">Bad</option>
                <option value="Used">Used</option>
              </Select>
            </Label>
          </div>
        </div>

        {/* -------------Row 2 --------- */}
        <div className="flex-row flex space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Stock Type*</span>
              <Select
                className="mt-1"
                value={values[num].stocktype}
                onChange={(e) => {
                  let newlist = [...values];
                  newlist[num].stocktype = e.target.value;
                  setValues(newlist);
                }}
              >
                <option value="" selected disabled>
                  Select Stock Type
                </option>
                <option value="Purchased">Purchased</option>
                <option value="Serviced">Serviced</option>
              </Select>
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Warranty*</span>
              <Select
                className="mt-1"
                value={values[num].wty}
                onChange={(e) => {
                  let newlist = [...values];
                  newlist[num].wty = e.target.value;
                  setValues(newlist);
                  setCalnum(num);
                  setDateCalculate(!datecalculate);
                }}
              >
                <option value="" selected disabled>
                  Select Category
                </option>
                <option value="0D">0 days</option>
                <option value="3M">3 Months</option>
                <option value="6M">6 Months</option>
                <option value="1Y">1 Year</option>
                <option value="2Y">2 Year</option>
                <option value="3Y">3 Year</option>
                <option value="4Y">4 Year</option>
                <option value="5Y">5 Year</option>
              </Select>
            </Label>
          </div>

          <>
            <div className="flex flex-col w-full">
              <Label className="w-full">
                <span>Expiry Date</span>
                <Input
                  className="mt-1"
                  type="text"
                  value={values[num].expirydate}
                  readOnly={true}
                />
              </Label>
              <HelperText valid={false}>{err.name}</HelperText>
            </div>
          </>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Tax Category*</span>
              <Select
                className="mt-1"
                value={values[num].taxcategory}
                onChange={(e) => {
                  let newlist = [...values];
                  let thestring = e.target.value;
                  let theperc = thestring.slice(-3, -1);
                  newlist[num].taxcategory = e.target.value;
                  newlist[num].taxperc = theperc;
                  setValues(newlist);
                  // calculate trigger
                  setCalnum(num);
                  setCalculate(!calculate);
                }}
              >
                {basevalues.purchlocation == "Local" ? (
                  <>
                    <option value="" selected disabled>
                      Select Tax Category
                    </option>
                    <option value="GST 18%">GST 18%</option>
                    <option value="GST 28%">GST 28%</option>
                  </>
                ) : (
                  <>
                    <option value="" selected disabled>
                      Select Tax Category
                    </option>
                    <option value="IGST 18%">IGST 18%</option>
                    <option value="IGST 28%">IGST 28%</option>
                  </>
                )}
              </Select>
            </Label>
          </div>
          {/* <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Tax Percentage*</span>
              <Input
                className="mt-1"
                type="text"
                readOnly="true"
                value={values[num].taxperc}
              />
            </Label>
            <HelperText valid={false}>{err.invnumber}</HelperText>
          </div> */}
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Rate*</span>
              <Input
                className="mt-1"
                type="text"
                value={values[num].rate}
                onChange={(e) => {
                  let newlist = [...values];
                  newlist[num].rate = e.target.value;
                  setValues(newlist);
                  setCalnum(num);
                  setCalculate(!calculate);
                }}
              />
            </Label>
          </div>
        </div>
        {/* --------Row 4 ------------- */}
        {/* <div className="flex-row flex space-x-3 my-2">
          {basevalues.purchlocation == "Local" ? (
            <>
              {" "}
              <div className="flex flex-col w-full">
                <Label className="w-full">
                  <span>CGST*</span>
                  <Input
                    className="mt-1"
                    type="text"
                    readOnly="true"
                    value={values[num].cgst}
                  />
                </Label>
              </div>
              <div className="flex flex-col w-full">
                <Label className="w-full">
                  <span>SGST*</span>
                  <Input
                    className="mt-1"
                    type="text"
                    readOnly="true"
                    value={values[num].sgst}
                  />
                </Label>
              </div>
              <div className="flex flex-col w-full">
                <Label className="w-full">
                  <span>Net Tax*</span>
                  <Input
                    className="mt-1"
                    type="text"
                    readOnly="true"
                    value={values[num].nettax}
                  />
                </Label>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="flex flex-col w-full">
                <Label className="w-full">
                  <span>IGST</span>
                  <Input
                    className="mt-1"
                    type="text"
                    readOnly="true"
                    value={values[num].igst}
                  />
                </Label>
              </div>
              <div className="flex flex-col w-full">
                <Label className="w-full">
                  <span>Net Tax*</span>
                  <Input
                    className="mt-1"
                    type="text"
                    readOnly="true"
                    value={values[num].nettax}
                  />
                </Label>
              </div>
            </>
          )}
        </div> */}
        {/* ----row 4------ */}
        {/* <div className="flex-row flex space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Amount</span>
              <Input
                className="mt-1"
                type="text"
                value={values[num].amount}
                onChange={(e) => {
                  let newlist = [...values];
                  newlist[num].amount = e.target.value;
                  setValues(newlist);
                }}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>TCS</span>
              <Input
                className="mt-1"
                type="text"
                value={values[num].tcs}
                onChange={(e) => {
                  let newlist = [...values];
                  newlist[num].amount = e.target.value;
                  setValues(newlist);
                }}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Invoice Amount</span>
              <Input
                className="mt-1"
                type="text"
                value={values[num].invamount}
                onChange={(e) => {
                  let newlist = [...values];
                  newlist[num].invamount = e.target.value;
                  setValues(newlist);
                }}
              />
            </Label>
          </div>
        </div> */}

        {/* <Label className="font-bold mt-5 mb-2">
    <span>Additional Information</span>
  </Label> */}
        {/* <hr /> */}
      </div>
    );
  };

  const BottomCard = () => {
    return (
      <Card className="mb-4 shadow-md ">
        <CardBody>
          <div className="flex flex-row flex-wrap">
            <Button
              onClick={submitItems}
              aria-label="Notifications"
              aria-haspopup="true"
              // layout="outline"
              className=" mx-2 "
            >
              Submit
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <>
      {BasicForm()}
      {values.map((item, i) => {
        return ItemForm(i);
      })}
      {BottomCard()}
    </>
  );
}

export default UpdateInventory;
