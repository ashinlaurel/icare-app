import React, { useState } from "react";
import axios from "axios";
import { API } from "../../backendapi";

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
import { unitCreate } from "../../helpers/unitHelper";
import AccountListModal from "../../components/Modal/AccountListModel";
import AddUnitModal from "../../components/Modal/AddUnitModal";

function CreateUnit() {
  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });
  const [values, setValues] = useState({
    unitName: "defaultUnit",
    assetId: [],
    address: "default",
    district: "default",
    state: "default",
    locationType: "default",
    pincode: "default",
    GSTnumber: "default",
    contactPerson: "default",
    contactNo: "default",
    altContact: "default",
    WhatsappNo: "default",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const submitUnit = async (e) => {
    // e.preventDefault();
    const payload = {
      customerId: customer._id,
      customerName: customer.customerMame,
      accountId: account._id,
      accountName: account.accountName,

      unitName: values.unitName,
      address: values.address,
      district: values.district,
      state: values.state,
      locationType: values.locationType,
      pincode: values.pincode,
      GSTnumber: values.GSTnumber,
      contactPerson: values.contactPerson,
      contactNo: values.contactNo,
      altContact: values.altContact,
      WhatsappNo: values.WhatsappNo,
    };
    unitCreate(payload)
      .then((data) => {
        console.log("Signed Up", data);
      })
      .catch((err) => {
        console.log("err", err);
        // setErr({ ...err });
      });
  };

  //ASSET
  const addForm = () => {
    return (
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Add Unit</span>
        </Label>
        <hr className="mb-5 mt-2" />
        <Label>
          <span>Unit Name</span>
          <Input
            className="mt-1"
            type="text"
            value={values.unitName}
            onChange={handleChange("unitName")}
          />
        </Label>{" "}
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
            onChange={handleChange("contactNi")}
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
        <Button
          onClick={() => setIsModalOpen(true)}
          aria-label="Notifications"
          aria-haspopup="true"
          className="mt-4 mx-3"
        >
          Select Customer
        </Button>
        <hr className="my-8" />
        <Button
          onClick={submitUnit}
          aria-label="Notifications"
          aria-haspopup="true"
          className="mt-4"
        >
          Create Unit
        </Button>
      </div>
    );
  };

  return (
    <>
      <AddUnitModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setAccount={setAccount}
        account={account}
        customer={customer}
        setCustomer={setCustomer}
      />
      <PageTitle>Add Customer</PageTitle>
      {addForm()}

      {/* {productPicker()} */}
    </>
  );
}

export default CreateUnit;
