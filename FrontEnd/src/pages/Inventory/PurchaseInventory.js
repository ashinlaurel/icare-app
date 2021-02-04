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
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Pagination,
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
import { CloseIcon } from "../../icons";

/////////////----------------->>>>>> bug <<<<<------------customerList refresh--------------------------

function PurchaseInventory() {
  const { setTopHeading } = useContext(TopBarContext);
  const [flow, setFlow] = useState("basic");
  const [calculate, setCalculate] = useState(false);
  const [datecalculate, setDateCalculate] = useState(false);
  const [calnum, setCalnum] = useState(-1);
  const [isVendorModalopen, setIsVendorModalopen] = useState(false);
  const [vendors, setVendors] = useState([]);
  const [ismessageModal, setIsmessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [selectedVendor, setselectedVendor] = useState({
    _id: "",
    name: "",
    aadharNo: "",
    PANNo: "",
    GSTNo: "",
  });

  const thebval = {
    purchtype: "",
    vendor: "",
    invnumber: "",
    invdate: "",
    location: "Trivandrum",
    invtype: "",
    gstno: "",
    panno: "",
    aadharno: "",
    purchlocation: "Local",
    totalInvoice: "0",
    vendorId: "",
  };
  const [basevalues, setBaseValues] = useState(thebval);

  const [history, setHistory] = useState([
    {
      histtype: "purchase",
      date: moment().format(),
      location: basevalues.location,
      callId: "Nil",
      assetId: "Nil",
      status: "Good",
      note: "Inventory Purchased",
    },
  ]);

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
    vendorId: "",
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
    caseId: "imprest",
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

  const submitItems = async () => {
    let flag = false;
    if(selectedVendor._id==""){
      setModalMessage("Please select vendor")
      setIsmessageModal(true);
      return
    }
    values.map((value) => {
      if (value.name === "" || value.sno === "") {
        //   setIsReqFieldModal(true);
        setModalMessage(`Required fields not filled!`);
        setIsmessageModal(true);
        console.log("missing inputs");
        flag = true;
      }
    });

    values.map((i) => {
      values.map((j) => {
        console.log(i.sno, j.sno);
        if (i != j && i.sno == j.sno) {
          setModalMessage(`Serial numbers have to be unique!`);
          setIsmessageModal(true);
          console.log("serial num same");
          flag = true;
        }
      });
    });
    if (flag == true) return;
    let ids = [];
    console.log("Submission Start");
    const newitems = [...values];
    newitems.map((item) => {
      item.purchtype = basevalues.purchtype;
      item.vendorId = selectedVendor._id;
      item.vendor = selectedVendor.name;
      item.invnumber = basevalues.invnumber;
      item.invdate = basevalues.invdate;
      item.location = basevalues.location;
      item.invtype = basevalues.invtype;
      item.gstno = selectedVendor.GSTNo;
      item.panno = selectedVendor.PANNo;
      item.aadharno = selectedVendor.aadharNo;
      item.purchlocation = basevalues.purchtype;
      item.history = history;
    });
    console.log(newitems);
    await Axios({
      url: `${API}/inventory/${Emp.getId()}/createitems`,
      method: "POST",
      data: newitems,
    })
      .then((data) => {
        console.log("Added", data);
        data.data.map((i) => ids.push(i._id));
        // setIsReviewModalOpen(true);

        console.log(ids);
        let histdata = { ...basevalues, invItems: ids };

        Axios({
          url: `${API}/inventory/${Emp.getId()}/createpurchasehistory`,
          method: "POST",
          data: histdata,
        })
          .then((data) => {
            console.log("hisory added", data);
            setValues([invdetails]);
            setBaseValues(thebval);
            setErr({
              type: "",
              name: "",
              sno: "",
              condition: "",
              location: "",
              invnumber: "",
            });
            setModalMessage("Item(s) Added")
              setIsmessageModal(true);
          })
          .catch((err) => {
            console.log("Purchase Hisry err", err.response);
            setErr({ ...err });
          });
      })
      .catch((err) => {
        console.log("INV err", err.response);

        if (err.response) setModalMessage(err.response.data.message);
        setIsmessageModal(true);
        setErr({ ...err });
      });
  };

  async function getVendorList() {
    let payload = {
      filters: {
        searchquery: "",
      },
    };
    try {
      let response = await axios({
        url: `${API}/vendor/${Emp.getId()}/getAll`,
        method: "POST",
        data: payload,
      });
      console.log(response.data.out);
      setVendors(response.data.out);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getVendorList();
  }, []);
  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Purchase Inventory");
    return () => {
      setTopHeading("");
    };
  }, []);
  // ------------------- Calculations----------------------------------
  useEffect(() => {
    // console.log("hello");
    // console.log(basevalues,values);
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
      // newbaseval.totalInvoice=(
      //   parseFloat(basevalues.totalInvoice) +
      //     parseFloat(newlist[calnum].invamount)
      // ).toString();

      let val =
        parseFloat(basevalues.totalInvoice) +
        parseFloat(newlist[calnum].invamount);
      //  console.log("base cal",toString(val))
      if (toString(val) != "[object Undefined]") {
        // console.log("gere")
        newbaseval.totalInvoice = toString(val);
      }
      // console.log(newbaseval)
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
        case "3M":
          newlist[calnum].expirydate = moment(basevalues.invdate)
            .add(3, "M")
            .format("DD-MM-YYYY");

          break;
        case "6M":
          newlist[calnum].expirydate = moment(basevalues.invdate)
            .add(6, "M")
            .format("DD-MM-YYYY");

          break;
        case "1Y":
          newlist[calnum].expirydate = moment(basevalues.invdate)
            .add(1, "Y")
            .format("DD-MM-YYYY");

          break;
        case "2Y":
          newlist[calnum].expirydate = moment(basevalues.invdate)
            .add(2, "Y")
            .format("DD-MM-YYYY");

          break;
        case "3Y":
          newlist[calnum].expirydate = moment(basevalues.invdate)
            .add(3, "Y")
            .format("DD-MM-YYYY");

          break;
        case "4Y":
          newlist[calnum].expirydate = moment(basevalues.invdate)
            .add(4, "Y")
            .format("DD-MM-YYYY");

          break;
        case "5Y":
          newlist[calnum].expirydate = moment(basevalues.invdate)
            .add(5, "Y")
            .format("DD-MM-YYYY");

          break;
          case "20Y":
          newlist[calnum].expirydate = moment(basevalues.invdate)
            .add(20, "Y")
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

  const MessageModalComponent = () => {
    return (
      <>
        <Modal isOpen={ismessageModal} onClose={() => setIsmessageModal(false)}>
          <ModalHeader></ModalHeader>
          <ModalBody>{modalMessage}</ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsmessageModal(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };
  // Vendor PICK

  const VendorModal = () => {
    return (
      <>
        <Modal
          isOpen={isVendorModalopen}
          onClose={() => setIsVendorModalopen(false)}
        >
          <ModalHeader>Pink Vendor</ModalHeader>
          <ModalBody>
            <TableContainer>
              <Table>
                <TableHeader>
                  <tr>
                    <TableCell>Customer</TableCell>
                    {/* <TableCell>Unit</TableCell> */}
                    {/* <TableCell>Status</TableCell>
              <TableCell>Date</TableCell> */}
                  </tr>
                </TableHeader>
                <TableBody>
                  {vendors.map((user, i) => (
                    <TableRow
                      key={i}
                      className="hover:bg-purple-900 "
                      onClick={() => {
                        console.log(user);
                        setselectedVendor(user);
                        setIsVendorModalopen(false);
                      }}
                    >
                      <TableCell>
                        <div>
                          <div>
                            <p className="font-semibold">{user.name}</p>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsVendorModalopen(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

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

          {/* ---------------- */}


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
              </Select>
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
          
          {/* -------------------- */}
        
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
                onChange={(e) => {
                  setBaseValues({ ...basevalues, invdate: e.target.value });
                  setDateCalculate(!datecalculate);
                }}
              />
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

          <div className="flex flex-col w-full  ">
            <Label className="w-full">
              <Button
                layout="outline"
                className="-mb-10 w-full"
                onClick={() => setIsVendorModalopen(true)}
              >
                Select Vendor
              </Button>
            </Label>
          </div>
        </div>
        {/* ------------------------Row 2-------------------------- */}
        {/* <div className="flex-row flex  space-x-3">
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
              </Select>
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
          <div className="flex flex-col w-full  ">
            <Label className="w-full">
              <Button
                layout="outline"
                className="-mb-10 w-full"
                onClick={() => setIsVendorModalopen(true)}
              >
                Select Vendor
              </Button>
            </Label>
          </div>
          
         
          
        </div> */}

        {/* -------------------------ROw 3-------------------- */}
        <div className="flex-row flex  space-x-3">
          <Label className=" mt-3">
            Vendor Name:{selectedVendor.name}
          </Label>
          <Label className=" ml-3 mt-3">
          GST No. {selectedVendor.GSTNo}
          </Label>
          {/* <Label className=" ml-3 mt-3">
          PAN No. {selectedVendor.PANNo}
          </Label>
          <Label className=" ml-3 mt-3">
          Aadhar No. {selectedVendor.aadharNo}
          </Label> */}
        </div>
      </div>
    );
  };

  const ItemForm = (num) => {
    return (
      <div className="px-4 py-3 my-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold flex-row flex justify-between">
          <span>Item Number : {num + 1}</span>{" "}
          
          <div
            layout="outline"
            onClick={() => {
              let newitem = [...values];
              newitem = newitem.filter((item, i) => {
                if (i != num) return item;
              });
              setValues(newitem);
            }}
            className="border-gray-100 rounded-full cursor pointer"
          ><CloseIcon fill="lightgray" className="w-5 h-5 cursor-pointer " aria-hidden="true"/>
            
          </div>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Select Type*</span>
              <Select
                className="mt-1"
                value={values[num].systype}
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
          {values[num].systype == "item" ? (
            <div className="flex flex-col w-full">
              <Label className="w-full">
                <span>Select Category*</span>
                <Select
                  className="mt-1"
                  value={values[num].type}
                  onChange={(e) => {
                    let newlist = [...values];
                    // console.log(e.target.value)
                    newlist[num].type = e.target.value.toLowerCase();
                    // newlist[num].type = newlist[num].type.toLowerCase();
                    // console.log(newlist)

                    setValues(newlist);
                  }}
                >
                  <option value="" selected disabled>
                    Select Type
                  </option>

                  <option value="mouse">Mouse</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="monitor">Monitor</option>
                  <option value="cpu">Cpu</option>
                  <option value="ram">Ram</option>
                  <option value="fan">Fan</option>
                  <option value="motherboard">Motherboard</option>
                  <option value="smps">SMPS</option>
                  <option value="hdd">HDD</option>
                  <option value="gcard">Gcard</option>
                  <option value="enetcard">Enet Card</option>
                  <option value="serialcard">Serial Card</option>
                  <option value="paralellcard">Paralell Card</option>
                  <option value="opticaldrive">Optical Drive</option>
                  <option value="others">Others</option>

                  {/* <option value="Mouse">Mouse</option>
                    <option value="Keyboard">Keyboard </option>
                    <option value="Monitor">Monitor </option>
                    <option value="Cpu">Cpu</option>
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
                    <option value="others">Others</option> */}
                </Select>
              </Label>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <Label className="w-full">
                <span>Select Category*</span>
                <Select
                  className="mt-1"
                  value={values[num].type}
                  onChange={(e) => {
                    let newlist = [...values];
                    // console.log(e.target.value)
                    newlist[num].type = e.target.value.toLowerCase();
                    // newlist[num].type = newlist[num].type.toLowerCase();
                    // console.log(newlist)

                    setValues(newlist);
                  }}
                >
                  <option value="" selected disabled>
                    Select Type
                  </option>

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
                </Select>
              </Label>
            </div>
          )}

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
                      value={values[num].brand}
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
                      value={values[num].model}
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
                <option value="Defective">Defective</option>
                <option value="DOA">DOA</option>
                <option value="Damaged">Damaged</option>
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
                <option value="3M">3 Months</option>
                <option value="6M">6 Months</option>
                <option value="1Y">1 Year</option>
                <option value="2Y">2 Years</option>
                <option value="3Y">3 Years</option>
                <option value="4Y">4 Years</option>
                <option value="5Y">5 Years</option>
                <option value="20Y">20 Years</option>
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
        {/* -------------------------ROw 3-------------------- */}
        <div className="flex-row flex  space-x-3">
          <Label className=" mt-3">
            Net Tax:{parseFloat(values[num].nettax)} 
          </Label>
          <Label className=" ml-5 mt-3">
          Invoice Amount:
            {parseFloat(values[num].invamount)}
          </Label>
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
          <div className="flex flex-row flex-wrap justify-around">
            <Button
              onClick={() => {
                let newitem = [...values];
                let add = invdetails;
                newitem.push(add);
                setValues(newitem);
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className=" mx-2 "
            >
              Add Item
            </Button>

            {/* <Button
              onClick={() => {
                let newitem = [...values];
                if (newitem[1]) {
                  newitem.pop();
                  setValues(newitem);
                }
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className=" mx-2 "
            >
              Remove Item
            </Button> */}

            <Button
              onClick={() => {
                let newitem = [...values];
                let add = { ...values[values.length - 1] };
                add.sno = "";
                console.log(add);
                newitem.push(add);
                setValues(newitem);
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className=" mx-2 "
            >
              Add Similar Item
            </Button>

            <Button
              onClick={submitItems}
              aria-label="Notifications"
              aria-haspopup="true"
              // layout="outline"
              className=" mx-2 "
            >
              Submit
            </Button>
            <div className=" dark:text-gray-100 text-black font-bold flex-1 my-auto mx-20">
              <span>
                 Invoice Amount: {basevalues.totalInvoice}
              </span>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <>
      {BasicForm()}
      {MessageModalComponent()}

      {values.map((item, i) => {
        return ItemForm(i);
      })}
      {BottomCard()}
      {VendorModal()}
    </>
  );
}

export default PurchaseInventory;
