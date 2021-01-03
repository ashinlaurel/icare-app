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
import { unitCreate } from "../../helpers/unitHelper";
import AddUnitModal from "../../components/Modal/AddUnitModal";
import { useHistory } from "react-router-dom";
/////////////----------------->>>>>> bug <<<<<------------customerList refresh--------------------------

function CreateEmployee() {
  let history = useHistory();
  // dropdown states
  const [accType, setAccType] = useState(0); /////// 0-Customer 1-Account 2-Unit
  const [sex, setSex] = useState("Male");
  const [dob, setDob] = useState("");

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isErrModalOpen, setIsErrModalOpen] = useState(false);
  const [isReqFieldModal, setIsReqFieldModal] = useState(false);
  const { setTopHeading } = useContext(TopBarContext);

  const [values, setValues] = useState({
    //both

    employeeID: "",
    email: "",
    password: "",
    confpassword: "",
    employeeName: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
    contactPerson: "",
    contactNo: "",
    contactNoLand: "",
    contactPersonOcc: "",
    altContact: "",
    WhatsappNo: "",
    age: "",

    // ---new ones
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
    setTopHeading("Add Employee");
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
    if (
      (values.employeeID === "") |
      (values.employeeName === "") |
      (values.email === "") |
      (values.password === "") |
      (values.confpassword === "")
    ) {
      setIsReqFieldModal(true);
      return;
    }
    // e.preventDefault();
    const newuser = {
      employeeID: values.employeeID,
      employeeName: values.employeeName,
      email: values.email,
      password: values.password,
      role: accType,
      address: values.address,
      district: values.district,
      state: values.state,
      pincode: values.pincode,
      contactPerson: values.contactPerson,
      contactNo: values.contactNo,
      contactNoLand: values.contactNoLand,
      contactPersonOcc: values.contactPersonOcc,
      whatsappNo: values.WhatsappNo,
      sex: sex,
      age: values.age,
      dob: dob,
    };
    console.log(newuser);
    signup(newuser, `admin/${Emp.getId()}/signup`)
      .then((data) => {
        console.log("Signed Up", data._id);
        setIsReviewModalOpen(true);
        setErr({
          employeeID: "",
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

  const ReviewSubmit = () => {
    return (
      <>
        <Modal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        >
          <ModalHeader>
            {accType === 0 ? <>Admin </> : null}
            {accType === 11 ? <>Engineer </> : null}
            {accType === 12 ? <>Assistant </> : null}
            Created Successfully!
          </ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              // onClick={() => setIsReviewModalOpen(false)}
              onClick={() => setIsReviewModalOpen(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const ReqFieldErrModal = () => {
    return (
      <>
        <Modal
          isOpen={isReqFieldModal}
          onClose={() => setIsReqFieldModal(false)}
        >
          <ModalHeader>Required fields are not filled!</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsReqFieldModal(false)}
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
          <span>Add Employee</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* -----Row 0 --------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Employee ID*</span>
              <Input
                className="mt-1"
                type="text"
                value={values.employeeID}
                onChange={handleChange("employeeID")}
              />
            </Label>
            <HelperText valid={false}>{err.employeeID}</HelperText>
          </div>
        </div>
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Select Account Type*</span>
              <Select
                className="mt-1"
                onChange={(e) => {
                  setAccType(parseInt(e.target.value));
                }}
              >
                <option value="0">Admin</option>
                <option value="11">Engineer</option>
                <option value="12">Assistant</option>
              </Select>
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Employee Name*</span>
              <Input
                className="mt-1"
                type="text"
                value={values.employeeName}
                onChange={handleChange("employeeName")}
              />
            </Label>
            <HelperText valid={false}>{err.employeeName}</HelperText>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>Email*</span>
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
        </div>
        {/* ----------------------Row 2 ----------------------------- */}
        <div className="flex-row flex space-x-3 ">
          <Label className="w-full mt-4">
            <span>Password*</span>
            <Input
              className="mt-1"
              placeholder=""
              type="password"
              value={values.password}
              onChange={handleChange("password")}
            />
          </Label>
          <HelperText valid={false}>{err.enc_password}</HelperText>
          <div className="flex flex-col w-full">
            <Label className="w-full mt-4">
              <span>Confirm password*</span>

              <Input
                className="mt-1"
                type="password"
                value={values.confpassword}
                onChange={handleConfPassChange("confpassword")}
              />
            </Label>

            <HelperText valid={false}>{err.confpassword}</HelperText>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////// */}
        <Label className="font-bold mt-5 mb-2">
          <span>Additional Information</span>
        </Label>
        <hr />
        {/* -------Row - 3 ---------------------- */}
        <div className="flex-row flex space-x-3 mt-3 mb-2">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Sex</span>
              <Select
                className="mt-1"
                onChange={(e) => {
                  setSex(e.target.value);
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Select>
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Contact Number(Mobile)</span>
              <Input
                className="mt-1"
                value={values.contactNo}
                onChange={handleChange("contactNo")}
              />
            </Label>{" "}
            {values.contactNo.length != 10 && values.contactNo != 0 ? (
              <>
                <HelperText valid={false}>
                  Phone number shound be 10 digits
                </HelperText>
              </>
            ) : null}
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Contact Number(Landline)</span>
              <Input
                className="mt-1"
                value={values.contactNoLand}
                onChange={handleChange("contactNoLand")}
              />
            </Label>{" "}
            {/* {values.contactNoLand.length != 10 && values.contactNoLand != 0 ? (
              <>
                <HelperText valid={false}>
                  Phone number shound be 10 digits
                </HelperText>
              </>
            ) : null} */}
          </div>
          {/* <HelperText valid={false}>{digiterr.contactNo}</HelperText> */}
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Whatsapp Number</span>
              <Input
                className="mt-1"
                value={values.WhatsappNo}
                onChange={handleChange("WhatsappNo")}
              />
            </Label>
            {values.WhatsappNo.length != 10 && values.WhatsappNo != 0 ? (
              <>
                <HelperText valid={false}>
                  Phone number shound be 10 digits
                </HelperText>
              </>
            ) : null}
          </div>
        </div>
        {/* ---------------Row 4 ---------------- */}
        <div className="flex-row flex space-x-3 mt-3 mb-2">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>DOB</span>
              <Input
                className="mt-1"
                type="date"
                name="brand"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Age</span>
              <Input
                className="mt-1"
                value={values.age}
                onChange={handleChange("age")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Contact Person</span>
              <Input
                className="mt-1"
                type="text"
                value={values.contactPerson}
                onChange={handleChange("contactPerson")}
              />
            </Label>{" "}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Contact Person's Occupation</span>
              <Input
                className="mt-1"
                value={values.contactPersonOcc}
                onChange={handleChange("contactPersonOcc")}
              />
            </Label>{" "}
          </div>
          {/* <HelperText valid={false}>{digiterr.contactNo}</HelperText> */}
        </div>
        {/* -----------------------Row-5 ------------- */}
        <div className="flex-row flex space-x-3 my-2">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>District</span>
              <Input
                className="mt-1"
                type="text"
                value={values.district}
                onChange={handleChange("district")}
              />
            </Label>{" "}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>State</span>
              <Input
                className="mt-1"
                type="text"
                value={values.state}
                onChange={handleChange("state")}
              />
            </Label>{" "}
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>PIN code</span>
              <Input
                className="mt-1"
                type="text"
                value={values.pincode}
                onChange={handleChange("pincode")}
              />
            </Label>{" "}
            {values.pincode.length != 6 && values.pincode != 0 ? (
              <>
                <HelperText valid={false}>PIN shound be 6 digits</HelperText>
              </>
            ) : null}
          </div>
        </div>
        {/* ---------------Row - 6 ---------------------- */}
        <Label className="my-2">
          <span>Address</span>
          <Input
            className="mt-1"
            type="text"
            value={values.address}
            onChange={handleChange("address")}
          />
        </Label>{" "}
        {/* ///////////////////////////////////////////////////////// */}
        <Button
          onClick={submitCustomer}
          aria-label="Notifications"
          aria-haspopup="true"
          className="mt-4"
        >
          Add Employee
        </Button>
      </div>
    );
  };

  return (
    <>
      {/* <PageTitle>Add Customer</PageTitle> */}
      {addForm()}

      {/* {productPicker()} */}
      {ReviewSubmit()}

      {ReqFieldErrModal()}
    </>
  );
}

export default CreateEmployee;
