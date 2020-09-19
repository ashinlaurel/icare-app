import React, { useState, useEffect, useContext } from "react";
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
import { TopBarContext } from "../../context/TopBarContext";
/////////////----------------->>>>>> bug <<<<<------------customerList refresh--------------------------

function CreateCustomer() {
  const [accType, setAccType] = useState(0); /////// 0-Customer 1-Account

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isErrModalOpen, setIsErrModalOpen] = useState(false);
  const { setTopHeading } = useContext(TopBarContext);

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
    customerName: "",
    accountId: [],
    //account
    accountName: "",
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
  });
  const [err, setErr] = useState({
    email: "",
    name: "",
    // accountName: "",
    enc_password: "",
    confpassword: "",
  });

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Add Customer");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleConfPassChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
    if (values.password !== e.target.value) {
      setErr({ ...err, confpassword: "Confirm password does not match" });
    } else setErr({ ...err, confpassword: "" });
  };

  const submitCustomer = async () => {
    if (values.password !== values.confpassword) {
      setErr({ ...err, confpassword: "Confirm password does not match" });
      return;
    }
    // e.preventDefault();
    const newuser = {
      username: values.username,
      name: values.customerName,
      email: values.email,
      password: values.password,
      role: 1,
      childAccountIds: [],
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
    };
    signup(newuser, `customer/${Emp.getId()}/signup`)
      .then((data) => {
        console.log("Signed Up", data._id);
        setIsReviewModalOpen(true);
        setErr({
          username: "",
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
    if (customer._id == "") {
      setIsErrModalOpen(true);
      return;
    }
    // e.preventDefault();
    console.log("username", values.username);
    const newuser = {
      username: values.username,
      name: values.accountName,
      email: values.email,
      password: values.password,
      parentCustomerId: customer._id,
      parentCustomerName: customer.customerName,
      role: 2,
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
    };
    signup(newuser, `customer/${Emp.getId()}/signup`)
      .then((data) => {
        setIsReviewModalOpen(true);
        console.log("Signed Up", data);
        setErr({
          username: "",
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

  const ReviewSubmit = () => {
    return (
      <>
        <Modal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        >
          <ModalHeader>Customer Created Successfully!</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsReviewModalOpen(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const AccCustErr = () => {
    return (
      <>
        <Modal isOpen={isErrModalOpen} onClose={() => setIsErrModalOpen(false)}>
          <ModalHeader>Customer Not Selected!</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsErrModalOpen(false)}
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
      <div className="px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Add Customer</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex space-x-3">
          <Label className="w-1/4">
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
              <Label className="w-1/4">
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
              <Label className="w-1/4">
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
          <Label className="w-1/4">
            <span>User Name</span>
            <Input
              className="mt-1"
              type="text"
              value={values.username}
              onChange={handleChange("username")}
            />
          </Label>
          <HelperText valid={false}>{err.username}</HelperText>
          <Label className="w-1/4">
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
        </div>
        {/* ----------------------Row 2 ----------------------------- */}
        <div className="flex-row flex space-x-3 ">
          <Label className="w-1/2 mt-4">
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
          <Label className="w-1/2 mt-4">
            <span>Confirm password</span>
            <Input
              className="mt-1"
              type="password"
              value={values.confpassword}
              onChange={handleConfPassChange("confpassword")}
            />
          </Label>
          <HelperText valid={false}>{err.confpassword}</HelperText>
        </div>
        {/* ///////////////////////////////////////////////////////// */}
        <Label className="font-bold mt-5 mb-2">
          <span>Additional Information</span>
        </Label>
        <hr />
        {/* -------Row - 3 ---------------------- */}
        <div className="flex-row flex space-x-3 mt-3 mb-2">
          <Label className="w-1/4">
            <span>GST Number</span>
            <Input
              className="mt-1"
              type="text"
              value={values.GSTnumber}
              onChange={handleChange("GSTnumber")}
            />
          </Label>{" "}
          <Label className="w-1/4">
            <span>Contact Person</span>
            <Input
              className="mt-1"
              type="text"
              value={values.contactPerson}
              onChange={handleChange("contactPerson")}
            />
          </Label>{" "}
          <Label className="w-1/4">
            <span>Contact Number</span>
            <Input
              className="mt-1"
              type="text"
              value={values.contactNo}
              onChange={handleChange("contactNo")}
            />
          </Label>{" "}
          <Label className="w-1/4">
            <span>Whatsapp Number</span>
            <Input
              className="mt-1"
              type="text"
              value={values.WhatsappNo}
              onChange={handleChange("WhatsappNo")}
            />
          </Label>
        </div>
        <Label className="my-2">
          <span>Address</span>
          <Input
            className="mt-1"
            type="text"
            value={values.address}
            onChange={handleChange("address")}
          />
        </Label>{" "}
        {/* -----------------------Row-4 */}
        <div className="flex-row flex space-x-3 my-2">
          <Label className="w-1/4">
            <span>District</span>
            <Input
              className="mt-1"
              type="text"
              value={values.district}
              onChange={handleChange("district")}
            />
          </Label>{" "}
          <Label className="w-1/4">
            <span>State</span>
            <Input
              className="mt-1"
              type="text"
              value={values.state}
              onChange={handleChange("state")}
            />
          </Label>{" "}
          <Label className="w-1/4">
            <span>Location Type</span>
            <Input
              className="mt-1"
              type="text"
              value={values.locationType}
              onChange={handleChange("locationType")}
            />
          </Label>{" "}
          <Label className="w-1/4">
            <span>PIN code</span>
            <Input
              className="mt-1"
              type="text"
              value={values.pincode}
              onChange={handleChange("pincode")}
            />
          </Label>{" "}
        </div>
        {/* ///////////////////////////////////////////////////////// */}
        {accType === 1 ? (
          <>
            <Button
              onClick={() => setIsModalOpen(true)}
              aria-label="Notifications"
              aria-haspopup="true"
              className="mt-4 mx-4"
            >
              {customer.customerName === "" ? (
                <>Pick Customer Associated with the Account</>
              ) : (
                <>Customer: {customer.customerName}</>
              )}
            </Button>
          </>
        ) : null}
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
      {/* <PageTitle>Add Customer</PageTitle> */}
      {addForm()}

      {/* {productPicker()} */}
      {ReviewSubmit()}
      {AccCustErr()}
    </>
  );
}

export default CreateCustomer;
