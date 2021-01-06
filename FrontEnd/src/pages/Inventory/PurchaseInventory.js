import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { API } from "../../backendapi";
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
/////////////----------------->>>>>> bug <<<<<------------customerList refresh--------------------------

function PurchaseInventory() {
  const { setTopHeading } = useContext(TopBarContext);
  const [flow, setFlow] = useState("basic");

  const [basevalues, setBaseValues] = useState({
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
  });

  const [values, setValues] = useState([
    {
      type: "",
      name: "",
      assetsIdHistory: "",
      assetId: "",
      sno: "",
      condition: "",
      // ----------------

      taxcategory: "",
      rate: "",
      igst: "",
      cgst: "",
      sgst: "",
      amount: "",
      tcs: "",
      invamount: "",
      wty: "",
      expirydate: "",
    },
  ]);

  const [err, setErr] = useState({
    type: "",
    name: "",
    sno: "",
    condition: "",
    location: "",
    invnumber: "",
  });

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Purchase Inventory");
    return () => {
      setTopHeading("");
    };
  }, []);
  // ------------------- ----------------------------------

  //   const handleChange = (name) => (e) => {
  //     setValues({ ...values, [name]: e.target.value });
  //   };

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
          <span>Purchase Information</span>
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
                <option value="Kottayum">Kottayum</option>
                <option value="Kozhikode">Kozhikode</option>
              </Select>
            </Label>
          </div>
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
                value={basevalues.pannos}
                onChange={handleBaseChange("pannos")}
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
        <Label className="font-bold">
          <span>Item Number : {num + 1}</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Select Category*</span>
              <Select
                className="mt-1"
                onChange={(e) => {
                  let newlist = [...values];
                  newlist[num].type = e.target.value;
                  setValues(newlist);
                }}
              >
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

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Serial Number*</span>
              <Input
                className="mt-1"
                type="text"
                value={values.sno}
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
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
              </Select>
            </Label>
          </div>
        </div>
        {/* ----------------------Row 2 ----------------------------- */}
        {/* <div className="flex-row flex space-x-3 my-2">
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
              <option value="Kottayum">Kottayum</option>
              <option value="Kozhikode">Kozhikode</option>
            </Select>
          </Label>
        </div>
        <div className="flex flex-col w-full">
          <Label className="w-full">
            <span>Invoice Number*</span>
            <Input
              className="mt-1"
              type="text"
              value={values.invnumber}
              onChange={handleChange("invnumber")}
            />
          </Label>
          <HelperText valid={false}>{err.invnumber}</HelperText>
        </div>
      </div> */}
        {/* ///////////////////////////////////////////////////////// */}
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
              onClick={() => {
                let newitem = [...values];
                let add = {
                  type: "",
                  name: "",
                  assetsIdHistory: "",
                  assetId: "",
                  sno: "",
                  condition: "",
                  // ----------------

                  taxcategory: "",
                  rate: "",
                  igst: "",
                  cgst: "",
                  sgst: "",
                  amount: "",
                  tcs: "",
                  invamount: "",
                  wty: "",
                  expirydate: "",
                };
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

            <Button
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
            </Button>

            <Button
              //   onClick={submitCustomer}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
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

export default PurchaseInventory;
