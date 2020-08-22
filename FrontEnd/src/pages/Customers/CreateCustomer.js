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

function CreateCustomer() {
  const [accType, setAccType] = useState(0); /////// 0-Customer 1-Account

  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [values, setValues] = useState({
    //both
    email: "ftest@test.com",
    password: "password",
    confpassword: "password",
    //customer
    customerName: "custTest",
    accountId: [],
    //account
    accountName: "accTest",
    unitId: [],
    // //------> customerName from above
    // customerId: "",
    //INFO
    // account: "default",
    // unit: "default",
    // address: "default",
    // district: "default",
    // state: "default",
    // locationType: "default",
    // pincode: "default",
    // GSTnumber: "default",
    // contactPerson: "default",
    // contactNo: "default",
    // altContact: "default",
    // WhatsappNo: "default",
  });
  const [err, setErr] = useState({
    email: "",
    customerName: "",
    accountName: "",
    enc_password: "",
    confpassword: "",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleConfPassChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
    if (values.password !== e.target.value) {
      setErr({ ...err, confpassword: "Confirm password does not match" });
    } else setErr({ ...err, confpassword: "" });
  };

  const submitCustomer = async (e) => {
    if (values.password !== values.confpassword) {
      setErr({ ...err, confpassword: "Confirm password does not match" });
      return;
    }
    // e.preventDefault();
    const newuser = {
      customerName: values.customerName,
      email: values.email,
      password: values.password,

      // info: {
      //   account: values.account,
      //   unit: values.unit,
      //   address: values.address,
      //   district: values.district,
      //   state: values.state,
      //   locationType: values.locationType,
      //   pincode: values.pincode,
      //   GSTnumber: values.GSTnumber,
      //   contactPerson: values.contactPerson,
      //   contactNo: values.contactNo,
      //   altContact: values.altContact,
      //   WhatsappNo: values.WhatsappNo,
      // },
    };
    signup(newuser, "customer/signup")
      .then((data) => {
        console.log("Signed Up", data);
        setErr({
          email: "",
          customerName: "",
          enc_password: "",
          confpassword: "",
        });
      })
      .catch((err) => {
        console.log("err", err);
        setErr({ ...err });
      });
  };

  const sumbitAccount = async (e) => {
    if (values.password !== values.confpassword) {
      setErr({ ...err, confpassword: "Confirm password does not match" });
      return;
    }
    // e.preventDefault();
    const newuser = {
      accountName: values.accountName,
      email: values.email,
      password: values.password,
      customerId: customer._id,
      customerName: customer.customerName,
    };
    signup(newuser, "account/signup")
      .then((data) => {
        console.log("Signed Up", data);
        setErr({
          email: "",
          accountName: "",
          enc_password: "",
          confpassword: "",
        });
      })
      .catch((err) => {
        console.log("err", err);
        setErr({ ...err });
      });
  };

  //ASSET
  const addForm = () => {
    return (
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Add Customer</span>
        </Label>
        <hr className="mb-5 mt-2" />
        <Label>
          <span>Select Account Type</span>
          <Select
            className="mt-1"
            onChange={(e) => {
              setAccType(parseInt(e.target.value));
            }}
          >
            <option value="0">Customer</option>
            <option value="1">Accounts</option>
          </Select>
        </Label>
        {accType === 0 ? (
          <>
            <Label>
              <span>Customer Name</span>
              <Input
                className="mt-1"
                type="text"
                value={values.customerName}
                onChange={handleChange("customerName")}
              />
            </Label>
            <HelperText valid={false}>{err.customerName}</HelperText>
          </>
        ) : (
          <>
            <Label>
              <span>Account Name</span>
              <Input
                className="mt-1"
                type="text"
                value={values.accountName}
                onChange={handleChange("accountName")}
              />
            </Label>
            <HelperText valid={false}>{err.accountName}</HelperText>
          </>
        )}

        <Label>
          <span>Email</span>
          <Input
            className="mt-1"
            type="email"
            placeholder=""
            value={values.email}
            onChange={handleChange("email")}
          />
        </Label>
        <HelperText valid={false}>{err.email}</HelperText>
        <Label className="mt-4">
          <span>Password</span>
          <Input
            className="mt-1"
            placeholder=""
            type="password"
            value={values.password}
            onChange={handleChange("password")}
          />
        </Label>
        <HelperText valid={false}>{err.enc_password}</HelperText>
        <Label className="mt-4">
          <span>Confirm password</span>
          <Input
            className="mt-1"
            type="password"
            value={values.confpassword}
            onChange={handleConfPassChange("confpassword")}
          />
        </Label>
        <HelperText valid={false}>{err.confpassword}</HelperText>
        <hr />
        {accType === 1 ? (
          <>
            <Button
              onClick={() => setIsModalOpen(true)}
              aria-label="Notifications"
              aria-haspopup="true"
              className="mt-4"
            >
              {customer.customerName === "" ? (
                <>Pick Customer Associated with the Account</>
              ) : (
                <>Customer: {customer.customerName}</>
              )}
            </Button>
          </>
        ) : null}
        <hr />
        <Button
          onClick={() => {
            accType === 0 ? submitCustomer() : sumbitAccount();
          }}
          aria-label="Notifications"
          aria-haspopup="true"
          className="mt-4"
        >
          {" "}
          Create {accType === 0 ? <> Customer </> : <> Account</>}
        </Button>

        {/* <hr className="my-8" />
        <Label className="font-bold">
          <span>Additional Information</span>
        </Label>
      
        <hr className="my-2" />
        // ////////////////////////// . INFO
        <Label>
          <span>Account</span>
          <Input
            className="mt-1"
            type="text"
            value={values.account}
            onChange={handleChange("account")}
          />
        </Label>{" "}
        <Label>
          <span>Unit</span>
          <Input
            className="mt-1"
            type="text"
            value={values.unit}
            onChange={handleChange("unit")}
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
        <Button
          //   tag={Link}
          // to="/AdminSignUp"
          block
          className="mt-4"
          onClick={handleSubmit}
        >
          Create account
        </Button>
        <hr className="my-8" /> */}
      </div>
    );
  };

  return (
    <>
      <CustomerCreateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setCustomer={setCustomer}
      />
      <PageTitle>Add Customer</PageTitle>
      {addForm()}

      {/* {productPicker()} */}
    </>
  );
}

export default CreateCustomer;
