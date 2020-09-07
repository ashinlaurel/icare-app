import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../backendapi";

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
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
/////////////----------------->>>>>> bug <<<<<------------customerList refresh--------------------------

function UpdateUnit() {
  let history = useHistory();
  let { id } = useParams(); /////// 0-Customer 1-Account

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [values, setValues] = useState({
    unitName: "",
    assetId: [],
    address: "",
    district: "",
    state: "",
    locationType: "",
    pincode: "",
    GSTnumber: "",
    contactPerson: "",
    contactNo: "",
    altContact: "",
    whatsappNo: "",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const getUnitInfo = async () => {
    let data = { id: id };
    // console.log(API);
    try {
      let res = await axios({
        url: `${API}/unit/${Emp.getId()}/getbyid`,
        method: "POST",
        data: data,
      });

      setValues({
        unitName: res.data.unitName,
        assetId: res.data.assetId,
        address: res.data.address,
        district: res.data.district,
        state: res.data.state,
        locationType: res.data.locationType,
        pincode: res.data.pincode,
        GSTnumber: res.data.GSTnumber,
        contactPerson: res.data.contactPerson,
        contactNo: res.data.contactNo,
        altContact: res.data.altContact,
        whatsappNo: res.data.whatsappNo,
      });

      console.log("Done", res.data[0]);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getUnitInfo();
  }, []);

  const submitUnit = async () => {
    // e.preventDefault();
    const data = {
      id: id,
      update: {
        unitName: values.unitName,
        assetId: values.assetId,
        address: values.address,
        district: values.district,
        state: values.state,
        locationType: values.locationType,
        pincode: values.pincode,
        GSTnumber: values.GSTnumber,
        contactPerson: values.contactPerson,
        contactNo: values.contactNo,
        altContact: values.altContact,
        whatsappNo: values.whatsappNo,
      },
    };
    console.log("PAYLOAD", data);
    try {
      await axios({
        url: `${API}/unit/${Emp.getId()}/update`,
        method: "POST",
        data: data,
      });
      setIsReviewModalOpen(true);
      console.log("Done");
    } catch (error) {
      throw error;
    }
  };

  const ReviewSubmit = () => {
    return (
      <>
        <Modal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        >
          <ModalHeader>Unit Updated Successfully!</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => history.push(`/app/unit/getunitbyid/${id}`)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  //ASSET
  const addForm = () => {
    return (
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Update Unit</span>
        </Label>
        <hr className="mb-2 mt-2" />
        <>
          <Label>
            <span>Unit Name</span>
            <Input
              className="mt-1"
              type="text"
              value={values.unitName}
              onChange={handleChange("unitName")}
            />
          </Label>
        </>
        {/* ///////////////////////////////////////////////////////// */}
        <Label className="font-bold mt-5 mb-2"></Label>
        <Label>
          <span>Address</span>
          <Input
            className="mt-1"
            type="text"
            value={values.address}
            onChange={handleChange("address")}
          />
        </Label>{" "}
        <Label>
          <span>District</span>
          <Input
            className="mt-1"
            type="text"
            value={values.district}
            onChange={handleChange("district")}
          />
        </Label>{" "}
        <Label>
          <span>state</span>
          <Input
            className="mt-1"
            type="text"
            value={values.state}
            onChange={handleChange("state")}
          />
        </Label>{" "}
        <Label>
          <span>Location Type</span>
          <Input
            className="mt-1"
            type="text"
            value={values.locationType}
            onChange={handleChange("locationType")}
          />
        </Label>{" "}
        <Label>
          <span>PIN code</span>
          <Input
            className="mt-1"
            type="text"
            value={values.pincode}
            onChange={handleChange("pincode")}
          />
        </Label>{" "}
        <Label>
          <span>GST Number</span>
          <Input
            className="mt-1"
            type="text"
            value={values.GSTnumber}
            onChange={handleChange("GSTnumber")}
          />
        </Label>{" "}
        <Label>
          <span>Contact Person</span>
          <Input
            className="mt-1"
            type="text"
            value={values.contactPerson}
            onChange={handleChange("contactPerson")}
          />
        </Label>{" "}
        <Label>
          <span>Contact Number</span>
          <Input
            className="mt-1"
            type="text"
            value={values.contactNo}
            onChange={handleChange("contactNo")}
          />
        </Label>{" "}
        <Label>
          <span>Whatsapp Number</span>
          <Input
            className="mt-1"
            type="text"
            value={values.WhatsappNo}
            onChange={handleChange("WhatsappNo")}
          />
        </Label>
        <hr className="my-8" />
        {/* ///////////////////////////////////////////////////////// */}
        <hr />
        <Button
          onClick={submitUnit}
          aria-label="Notifications"
          aria-haspopup="true"
          className="mt-4"
        >
          Update Information
        </Button>
      </div>
    );
  };

  return (
    <>
      <PageTitle>Edit Unit Information</PageTitle>
      {addForm()}

      {/* {productPicker()} */}
      {ReviewSubmit()}
    </>
  );
}

export default UpdateUnit;
