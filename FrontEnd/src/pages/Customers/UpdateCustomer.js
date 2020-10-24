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

function UpdateCustomer() {
  let history = useHistory();
  let { id } = useParams(); /////// 0-Customer 1-Account

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [values, setValues] = useState({
    //both
    username: "",
    email: "",
    password: "",
    confpassword: "",
    //customer
    name: "",
    // accountId: [],
    //account
    unitId: [],
    // //------> customerName from above
    address: "",
    district: "",
    state: "",
    locationType: "",
    pincode: "",
    GSTnumber: "",
    contactPerson: "",
    contactNo: "",
    altContact: "",
    WhatsappNo: "",
    role: 0,
  });
  const [err, setErr] = useState({
    email: "",
    name: "",
    // accountName: "",
    enc_password: "",
    confpassword: "",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const getCustomerInfo = async () => {
    let data = { id: id };
    // console.log(API);
    try {
      let res = await axios({
        url: `${API}/customer/${Emp.getId()}/getCustomerById`,
        method: "POST",
        data: data,
      });

      setValues({
        username: res.data[0].username,
        email: res.data[0].email,
        name: res.data[0].name,
        address: res.data[0].address,
        district: res.data[0].district,
        state: res.data[0].state,
        locationType: res.data[0].locationType,
        pincode: res.data[0].pincode,
        GSTnumber: res.data[0].GSTnumber,
        contactPerson: res.data[0].contactPerson,
        contactNo: res.data[0].contactNo,
        altContact: res.data[0].altContact,
        role: res.data[0].role,
        // WhatsappNo:WhatsappNo ,
      });

      console.log("Done", res.data[0]);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getCustomerInfo();
  }, []);

  const submitCustomer = async () => {
    // e.preventDefault();
    const data = {
      id: id,
      update: {
        name: values.name,
        //   email: values.email,
        address: values.address,
        district: values.district,
        state: values.state,
        locationType: values.locationType,
        pincode: values.pincode,
        GSTnumber: values.GSTnumber,
        contactPerson: values.contactPerson,
        contactNo: values.contactNo,
        altContact: values.altContact,
        whatsappNo: values.WhatsappNo,
      },
    };
    console.log("PAYLOAD", data);
    try {
      await axios({
        url: `${API}/customer/${Emp.getId()}/update`,
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
          <ModalHeader>Customer Updated Successfully!</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() =>
                history.push(`/app/customer/getCustomerById/${id}`)
              }
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
          <span>Update Customer</span>
        </Label>
        <hr className="mb-2 mt-2" />
        <Label>
          <span> Type</span>
          <SectionTitle>
            {values.role == 1 ? <>Customer</> : <>Account</>}
          </SectionTitle>
        </Label>
        <Label>
          <span>UserName</span>
          <SectionTitle>{values.username} </SectionTitle>
        </Label>
        <HelperText valid={false}>{err.username}</HelperText>
        <Label>
          <span>Email</span>
          {/* ////////////// how to hadle unique */}
          <SectionTitle>{values.email} </SectionTitle>
          {/* <Input
            className="mt-1"
            type="email"
            placeholder=""
            value={values.email}
            onChange={handleChange("email")}
          /> */}
        </Label>
        <>
          <Label>
            <span>Customer Name</span>
            <Input
              className="mt-1"
              type="text"
              value={values.name}
              onChange={handleChange("name")}
            />
          </Label>
          <HelperText valid={false}>{err.customerName}</HelperText>
        </>
        <HelperText valid={false}>{err.email}</HelperText>
        {/* ///////////////////////////////////////////////////////// */}
        <Label className="font-bold mt-5 mb-2">
          <span>Additional Information</span>
        </Label>
        <hr />
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
          onClick={submitCustomer}
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
      <PageTitle>Add Customer</PageTitle>
      {addForm()}

      {/* {productPicker()} */}
      {ReviewSubmit()}
    </>
  );
}

export default UpdateCustomer;
