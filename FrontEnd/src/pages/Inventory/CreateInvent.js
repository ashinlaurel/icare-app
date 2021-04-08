import React, { useEffect, useContext, useState } from "react";
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

const CreateInvent = () => {
  const { topheading, setTopHeading } = useContext(TopBarContext);
  const [messageModal, setMessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [itemType, setItemType] = useState("Mouse");
  const [condition, setCondition] = useState("Good");
  const [location, setLocation] = useState("Trivandrum");
  const [values, setValues] = useState({
    name: "",
    sno: "",
    invnumber: "",
    systype: "item",
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
    if (values.name === "") {
      setModalMessage("Product name necessary");
      setMessageModal(true);
      console.log("missing inputs");
      return;
    }
    if (values.sno === "") {
      setModalMessage("Serial number necessary");
      setMessageModal(true);
      console.log("missing inputs");
      return;
    }
    const newitem = {
      name: values.name,
      sno: values.sno,
      type: itemType.toLowerCase(),
      condition: condition,
      location: location,
      invnumber: values.invnumber,
      systype: values.systype,
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
        setValues({ name: "", sno: "", invnumber: "" });
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
              onChange={(e) => {
                setItemType(e.target.value);
              }}
            >
              <option value="Mouse">Mouse</option>
              <option value="Kbd">Keyboard</option>
              <option value="Monitor">Monitor</option>
              <option value="Cpu">Cpu</option>
              <option value="Ram">Ram</option>
              <option value="Fan">Fan</option>
              <option value="Motherboard">Motherboard</option>
              <option value="SMPS">SMPS</option>
              <option value="HDD">HDD</option>
              <option value="SMPS">SMPS</option>
              <option value="GCard">Gcard</option>
              <option value="EnetCard">Enet Card</option>
              <option value="SerialCard">Serial Card</option>
              <option value="ParalellCard">Paralell Card</option>
              <option value="OpticalDrive">Optical Drive</option>
              <option value="Others">Others</option>
            </Select>
          </Label>
        </div>

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
      <span>Additional Information</span>
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
