import React, { useEffect, useContext, useState, useMemo } from "react";
import Emp from "../../helpers/auth/EmpProfile";

import {
  Input,
  HelperText,
  Label,
  Button,
  Badge,
  Select,
} from "@windmill/react-ui";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";

import { TopBarContext } from "../../context/TopBarContext";
import { API } from "../../backendapi";
import Axios from "axios";
import moment from "moment";

const CreateInvent = () => {
  const { topheading, setTopHeading } = useContext(TopBarContext);
  const [messageModal, setMessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [itemType, setItemType] = useState("Mouse");
  const [condition, setCondition] = useState("Good");
  const [location, setLocation] = useState("Trivandrum");
  const [datecalculate, setDateCalculate] = useState(false);

  const [values, setValues] = useState({
    name: "",
    sno: "",
    invnumber: "",
    systype: "item",
    invdate: "",
    expirydate: "",
    wty: "",
    brand: "",
    model: "",
    stocktype: "Serviced",
  });
  const [err, setErr] = useState({
    type: "",
    name: "",
    sno: "",
    condition: "",
    location: "",
    // invnumber: "",
    takenFrom: "",
    caseId: "",
  });

  useEffect(() => {
    setTopHeading("Create Item");
    return () => {
      setTopHeading("");
    };
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const submitItem = async () => {
    
    if (values.sno === "") {
      setModalMessage("Serial number necessary");
      setMessageModal(true);
      console.log("missing inputs");
      return;
    }
    if (values.invdate === "") {
      setModalMessage("Added Date Required Necessary");
      setMessageModal(true);
      console.log("missing inputs");
      return;
    }
    if (values.wty === "") {
      setModalMessage("Warranty Period Necessary");
      setMessageModal(true);
      console.log("missing inputs");
      return;
    }
    const newitem = {
      name: values.name,
      sno: values.sno,
      type: values.type,
      condition: condition,
      location: location,
      invnumber: values.invnumber,
      systype: values.systype,
      invdate: values.invdate,
      expirydate: values.expirydate,
      wty: values.wty,
      brand:values.brand,
      model:values.model
    };
    console.log(newitem);
    await Axios({
      url: `${API}/inventory/${Emp.getId()}/create`,
      method: "POST",
      data: newitem,
    })
      .then((data) => {
        console.log("Added", data._id);
        setModalMessage("Added to Inventory");
        setMessageModal(true);
        // setIsReviewModalOpen(true);
        let newval = values;
        newval.name = "";
        newval.sno = "";
        newval.invnumber = "";

        setValues(newval);

        // setValues({ name: "", sno: "", invnumber: "", systype: "item" });
        setErr({
          type: "",
          name: "",
          sno: "",
          condition: "",
          location: "",
          invnumber: "",
        });
      })
      .catch((err) => {
        console.log("err", err);
        setErr({ ...err });
      });
  };

  const messageModalComponent = () => {
    return (
      <>
        <Modal isOpen={messageModal} onClose={() => setMessageModal(false)}>
          <ModalHeader>{modalMessage}</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setMessageModal(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  // ------Date Calculations-------

  useMemo(() => {
    // console.log("hello");
    // console.log(calnum);
    let newlist = values;
    // console.log(newlist);

    switch (newlist.wty) {
      case "0D":
        newlist.expirydate = moment(values.invdate).format("DD-MM-YYYY");

        break;
      case "3M":
        newlist.expirydate = moment(values.invdate)
          .add(3, "M")
          .subtract(1, "days")
          .format("DD-MM-YYYY");

        break;
      case "6M":
        newlist.expirydate = moment(values.invdate)
          .add(6, "M")
          .subtract(1, "days")
          .format("DD-MM-YYYY");

        break;
      case "1Y":
        newlist.expirydate = moment(values.invdate)
          .add(1, "Y")
          .subtract(1, "days")
          .format("DD-MM-YYYY");

        break;
      case "2Y":
        newlist.expirydate = moment(values.invdate)
          .add(2, "Y")
          .subtract(1, "days")
          .format("DD-MM-YYYY");

        break;
      case "3Y":
        newlist.expirydate = moment(values.invdate)
          .add(3, "Y")
          .subtract(1, "days")
          .format("DD-MM-YYYY");

        break;
      case "4Y":
        newlist.expirydate = moment(values.invdate)
          .add(4, "Y")
          .subtract(1, "days")
          .format("DD-MM-YYYY");

        break;
      case "5Y":
        newlist.expirydate = moment(values.invdate)
          .add(5, "Y")
          .subtract(1, "days")
          .format("DD-MM-YYYY");

        break;
      case "20Y":
        newlist.expirydate = moment(values.invdate)
          .add(20, "Y")
          .subtract(1, "days")
          .format("DD-MM-YYYY");

        break;

      default:
        break;
    }

    setValues(newlist);

    // console.log("newlist", newlist);
    // console.log("values", values);

    return () => {
      console.log("Calculations done!");
    };
  }, [datecalculate]);

  return (
    <div className="px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Label className="font-bold">
        <span>Add Item To Inventory</span>
      </Label>
      <hr className="mb-5 mt-2" />
      {/* ------------------------Row 1-------------------------- */}
      <div className="flex-row flex space-x-3">
      <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Select Type*</span>
              <Select
                className="mt-1"
                value={values.systype}
                onChange={
                  handleChange("systype")                  
                }
              >
                <option value="" selected disabled>
                  Select Type
                </option>
                <option value="item">Item</option>
                <option value="full system">Full System</option>
              </Select>
            </Label>
          </div>

          {values.systype == "item" ? (
            <div className="flex flex-col w-full">
              <Label className="w-full">
                <span>Select Category*</span>
                <Select
                  className="mt-1"
                  value={values.type}
                  onChange={
                    handleChange("type")
                  }
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
                  value={values.type}
                  onChange={
                    handleChange("type")
                  }
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

      {values.systype == "item" ? (
            <>
              <div className="flex flex-col w-full">
                <Label className="w-full">
                  <span>Product Name*</span>
                  <Input
                    className="mt-1"
                    type="text"
                    value={values.name}
                    onChange={handleChange("name")}
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
                      onChange={handleChange("brand")}
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
                      onChange={handleChange("model")}
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
              value={values.sno}
              onChange={handleChange("sno")}
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
                setCondition(e.target.value);
              }}
            >
              <option value="Good" selected>
                Good
              </option>
              <option value="Bad">Bad</option>
              <option value="Used">Used</option>
              <option value="DOA">DOA</option>
              <option value="Damaged">Damaged</option>
              <option value="Damaged">Scrap</option>
            </Select>
          </Label>
        </div>
      </div>
      {/* ----------------------Row 2 ----------------------------- */}
      <div className="flex-row flex space-x-3 my-2">
        <div className="flex flex-col w-full">
          <Label className="w-full">
            <span>Select Location*</span>
            <Select
              className="mt-1"
              onChange={(e) => {
                setLocation(e.target.value);
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
            <span>Date Of Addition*</span>
            <Input
              className="mt-1"
              type="date"
              value={values.invdate}
              onChange={handleChange("invdate")}
            />
          </Label>
          {/* <HelperText valid={false}>{err.invnumber}</HelperText> */}
        </div>
        <div className="flex flex-col w-full">
          <Label className="w-full">
            <span>Warranty*</span>
            <Select
              className="mt-1"
              value={values.wty}
              onChange={(e) => {
                let newlist = values;
                newlist.wty = e.target.value;
                setValues(newlist);
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
              <option value="2Y">2 Years</option>
              <option value="3Y">3 Years</option>
              <option value="4Y">4 Years</option>
              <option value="5Y">5 Years</option>
              <option value="20Y">20 Years</option>
            </Select>
          </Label>
        </div>

        <div className="flex flex-col w-full">
          <Label className="w-full">
            <span>Expiry Date</span>
            <Input
              className="mt-1"
              type="text"
              value={values.expirydate}
              readOnly={true}
            />
          </Label>
          <HelperText valid={false}>{err.name}</HelperText>
        </div>
        <div className="flex flex-col w-full">
          <Label className="w-full">
            <span>Taken From</span>
            <Input
              className="mt-1"
              type="text"
              value={values.takenFrom}
              onChange={handleChange("takenFrom")}
            />
          </Label>
          {/* <HelperText valid={false}>{err.invnumber}</HelperText> */}
        </div>
        <div className="flex flex-col w-full">
          <Label className="w-full">
            <span>Case ID</span>
            <Input
              className="mt-1"
              type="text"
              value={values.caseId}
              onChange={handleChange("caseId")}
            />
          </Label>
          {/* <HelperText valid={false}>{err.invnumber}</HelperText> */}
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////// */}
      {/* <Label className="font-bold mt-5 mb-2">
        <span>Expiry Date: {values.expirydate}</span>
      </Label> */}
      {/* <hr /> */}

      {/* ///////////////////////////////////////////////////////// */}

      <Button
        onClick={() => {
          submitItem();
        }}
        aria-label="Notifications"
        aria-haspopup="true"
        className="mt-4"
      >
        {" "}
        Add Item
      </Button>
      {messageModalComponent()}
    </div>
  );
};

export default CreateInvent;
