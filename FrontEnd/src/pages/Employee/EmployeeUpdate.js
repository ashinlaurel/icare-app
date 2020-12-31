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

function EmployeeUpdate() {
  const { id } = useParams();
  let history = useHistory();
  // dropdown states
  const [accType, setAccType] = useState(0); /////// 0-Customer 1-Account 2-Unit
  const [sex, setSex] = useState("Male");
  const [dob, setDob] = useState("");

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isErrModalOpen, setIsErrModalOpen] = useState(false);
  const [isReqFieldModal, setIsReqFieldModal] = useState(false);
  const { setTopHeading } = useContext(TopBarContext);

  // -----flowstate---
  const [flow, setFlow] = useState("personal");

  const [values, setValues] = useState({
    //both
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
    // ---Qualification form
    educational: "",
    technical: "",
    experience: "",
    // ---Joining Formalities form
    PAN: "",
    AadharNo: "",
    EmergencyContact: "",
    EC: "",
    Phone: "",
    BloodGr: "",
    //--- Appoinment details form
    DOJ: "",
    CurrentLocation: "",
    Department: "",
    Designation: "",
    Role: "",
    ///---External Certifications
    ExtCert_1: "",
    ExtCert_1_ID: "",
    ExtCert_1_Validity: "",
    ExtCert_2: "",
    ExtCert_2_ID: "",
    ExtCert_2_Validity: "",
    ExtCert_3: "",
    ExtCert_3_ID: "",
    ExtCert_3_Validity: "",
    // Skill set
    PC_L1: "",
    PC_L2: "",
    LAP_L1: "",
    LAP_L2: "",
    SVR_L1: "",
    SVR_L2: "",
    STO_L1: "",
    STO_L2: "",
    NW_L1: "",
    NW_L2: "",
    PRN_L1: "",
    PRN_L2: "",
    LMP_L1: "",
    LMP_L2: "",
    D_OS_L1: "",
    D_OS_L2: "",
    SVR_OS_L1: "",
    SVR_OS_L2: "",
    LIN_L1: "",
    APP_L1: "",
    // Secruty Details
    // PFNo	ESINo	UANNo	BasicDA	BplusDA	HRA	Incentive_1	Incentive_1	Gross Salary	EmplPF	EmplESI Deduction	TakeHomeSalary	EomployerPF	EomployerESI	CTC	AccountName	BankName	BankAcNo	IFSCCode	BranchName
    PFNo: "",
    ESINo: "",
    UANNo: "",
    BasicDA: "",
    BplusDA: "",
    HRA: "",
    Incentive_1: "",
    Incentive_2: "",
    GrossSalary: "",
    EmplPF: "",
    EmplESI: "",
    Deduction: "",
    TakeHomeSalary: "",
    EmployerPF: "",
    EmployerESI: "",
    CTC: "",
    AccountName: "",
    BankName: "",
    BankAcNo: "",
    IFSCCode: "",
    BranchName: "",
    //separation
    ResignDate: "",
    RelievedDate: "",
    NoticePeriodServed: "",
    Live: "",
  });

  const [err, setErr] = useState({
    email: "",
    name: "",
    // accountName: "",
    enc_password: "",
    confpassword: "",
  });

  const getCustomerInfo = async () => {
    let data = { id: id };
    // console.log(API);
    try {
      let res = await axios({
        url: `${API}/admin/${Emp.getId()}/getEmployeeById`,
        method: "POST",
        data: data,
      });
      setValues({
        username: res.data[0].username,
        email: res.data[0].email,
        employeeName: res.data[0].employeeName,
        address: res.data[0].address,
        district: res.data[0].district,
        state: res.data[0].state,
        pincode: res.data[0].pincode,
        contactPerson: res.data[0].contactPerson,
        contactPersonOcc: res.data[0].contactPersonOcc,
        contactNo: res.data[0].contactNo,
        role: res.data[0].role,
        sex: res.data[0].sex,
        contactNoLand: res.data[0].contactNoLand,
        dob: res.data[0].dob,
        age: res.data[0].age,
        WhatsappNo: res.data[0].whatsappNo,
        // ---Qualification form
        educational: res.data[0].educational,
        technical: res.data[0].technical,
        experience: res.data[0].experience,
        // ---Joining Formalities form
        PAN: res.data[0].PAN,
        AadharNo: res.data[0].AadharNo,
        EmergencyContact: res.data[0].EmergencyContact,
        EC: res.data[0].EC,
        Phone: res.data[0].Phone,
        BloodGr: res.data[0].BloodGr,
        //--- Appoinment details form
        DOJ: res.data[0].DOJ,
        CurrentLocation: res.data[0].CurrentLocation,
        Department: res.data[0].Department,
        Designation: res.data[0].Designation,
        Role: res.data[0].Role,
        ///---External Certifications
        ExtCert_1: res.data[0].ExtCert_1,
        ExtCert_1_ID: res.data[0].ExtCert_1_ID,
        ExtCert_1_Validity: res.data[0].ExtCert_1_Validity,
        ExtCert_2: res.data[0].ExtCert_2,
        ExtCert_2_ID: res.data[0].ExtCert_2_ID,
        ExtCert_2_Validity: res.data[0].ExtCert_2_Validity,
        ExtCert_3: res.data[0].ExtCert_3,
        ExtCert_3_ID: res.data[0].ExtCert_3_ID,
        ExtCert_3_Validity: res.data[0].ExtCert_3_Validity,
        // Skill set
        PC_L1: res.data[0].PC_L1,
        PC_L2: res.data[0].PC_L2,
        LAP_L1: res.data[0].LAP_L1,
        LAP_L2: res.data[0].LAP_L2,
        SVR_L1: res.data[0].SVR_L1,
        SVR_L2: res.data[0].SVR_L2,
        STO_L1: res.data[0].STO_L1,
        STO_L2: res.data[0].STO_L2,
        NW_L1: res.data[0].NW_L1,
        NW_L2: res.data[0].NW_L2,
        PRN_L1: res.data[0].PRN_L1,
        PRN_L2: res.data[0].PRN_L2,
        LMP_L1: res.data[0].LMP_L1,
        LMP_L2: res.data[0].LMP_L2,
        D_OS_L1: res.data[0].D_OS_L1,
        D_OS_L2: res.data[0].D_OS_L2,
        SVR_OS_L1: res.data[0].SVR_OS_L1,
        SVR_OS_L2: res.data[0].SVR_OS_L2,
        LIN_L1: res.data[0].LIN_L1,
        APP_L1: res.data[0].APP_L1,
        // Secruty Details
        // PFNo	ESINo	UANNo	BasicDA	BplusDA	HRA	Incentive_1	Incentive_1	Gross Salary	EmplPF	EmplESI Deduction	TakeHomeSalary	EomployerPF	EomployerESI	CTC	AccountName	BankName	BankAcNo	IFSCCode	BranchName
        PFNo: res.data[0].PFNo,
        ESINo: res.data[0].ESINo,
        UANNo: res.data[0].UANNo,
        BasicDA: res.data[0].BasicDA,
        BplusDA: res.data[0].BplusDA,
        HRA: res.data[0].HRA,
        Incentive_1: res.data[0].Incentive_1,
        Incentive_2: res.data[0].Incentive_2,
        GrossSalary: res.data[0].GrossSalary,
        EmplPF: res.data[0].EmplPF,
        EmplESI: res.data[0].EmplESI,
        Deduction: res.data[0].Deduction,
        TakeHomeSalary: res.data[0].TakeHomeSalary,
        EmployerPF: res.data[0].EmployerPF,
        EmployerESI: res.data[0].EmployerESI,
        CTC: res.data[0].CTC,
        AccountName: res.data[0].AccountName,
        BankName: res.data[0].BankName,
        BankAcNo: res.data[0].BankAcNo,
        IFSCCode: res.data[0].IFSCCode,
        BranchName: res.data[0].BranchName,
        //separation
        ResignDate: res.data[0].ResignDate,
        RelievedDate: res.data[0].RelievedDate,
        NoticePeriodServed: res.data[0].NoticePeriodServed,
        Live: res.data[0].Live,
      });
      console.log("Done", res.data[0]);
      //   console.log("Hello");
    } catch (error) {
      throw error;
    }
  };

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Update Employee");
    getCustomerInfo();
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
      sex: values.sex,
      age: values.age,
      dob: values.dob,

      // ---Qualification form
      educational: values.educational,
      technical: values.technical,
      experience: values.experience,

      //Joining Formalities

      PAN: values.PAN,
      AadharNo: values.AadharNo,
      EmergencyContact: values.EmergencyContact,

      EC: values.EC,
      Phone: values.Phone,
      BloodGr: values.BloodGr,
      //Appoinment details
      DOJ: values.DOJ,
      CurrentLocation: values.CurrentLocation,
      Department: values.Department,
      Designation: values.Designation,
      Role: values.Role,
      //External Certifications
      ExtCert_1: values.ExtCert_1,
      ExtCert_1_ID: values.ExtCert_1_ID,
      ExtCert_1_Validity: values.ExtCert_1_Validity,
      ExtCert_2: values.ExtCert_2,
      ExtCert_2_ID: values.ExtCert_2_ID,
      ExtCert_2_Validity: values.ExtCert_2_Validity,
      ExtCert_3: values.ExtCert_3,
      ExtCert_3_ID: values.ExtCert_3_ID,
      ExtCert_3_Validity: values.ExtCert_3_Validity,
      //Skill Set
      PC_L1: values.PC_L1,
      PC_L2: values.PC_L2,
      LAP_L1: values.LAP_L1,
      LAP_L2: values.LAP_L2,
      SVR_L1: values.SVR_L1,
      SVR_L2: values.SVR_L2,
      STO_L1: values.STO_L1,
      STO_L2: values.STO_L2,
      NW_L1: values.NW_L1,
      NW_L2: values.NW_L2,
      PRN_L1: values.PRN_L1,
      PRN_L2: values.PRN_L2,
      LMP_L1: values.LMP_L1,
      LMP_L2: values.LMP_L2,
      D_OS_L1: values.D_OS_L1,
      D_OS_L2: values.D_OS_L2,
      SVR_OS_L1: values.SVR_OS_L1,
      SVR_OS_L2: values.SVR_OS_L2,
      LIN_L1: values.LIN_L1,
      APP_L1: values.APP_L1,
      // Salary Details
      PFNo: values.PFNo,
      ESINo: values.ESINo,
      UANNo: values.UANNo,
      BasicDA: values.BasicDA,
      BplusDA: values.BplusDA,
      HRA: values.HRA,
      Incentive_1: values.Incentive_1,
      Incentive_2: values.Incentive_2,
      GrossSalary: values.GrossSalary,
      EmplPF: values.EmplPF,
      EmplESI: values.EmplESI,
      Deduction: values.Deduction,
      TakeHomeSalary: values.TakeHomeSalary,
      EmployerPF: values.EmployerPF,
      EmployerESI: values.EmployerESI,
      CTC: values.CTC,
      AccountName: values.AccountName,
      BankName: values.BankName,
      BankAcNo: values.BankAcNo,
      IFSCCode: values.IFSCCode,
      BranchName: values.BranchName,
      //Separation Details

      ResignDate: values.ResignDate,
      RelievedDate: values.RelievedDate,
      NoticePeriodServed: values.NoticePeriodServed,
      Live: values.Live,
    };
    console.log(newuser);

    const data = {
      id: id,
      update: newuser,
    };
    try {
      await axios({
        url: `${API}/admin/${Emp.getId()}/update`,
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

  //Basic Form
  const BasicsForm = () => {
    return (
      <div className="px-4 py-3  mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Personal Information</span>
        </Label>
        <hr className="mb-5 mt-2" />
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
      </div>
    );
  };

  // Qualification Form
  const QualificationForm = () => {
    return (
      <div className="px-4 py-3  mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Qualifications</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Educational</span>
              <Input
                className="mt-1"
                type="text"
                value={values.educational}
                onChange={handleChange("educational")}
              />
            </Label>
            <HelperText valid={false}>{err.employeeName}</HelperText>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Technical</span>
              <Input
                className="mt-1"
                type="text"
                value={values.technical}
                onChange={handleChange("technical")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>Experience</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.experience}
                onChange={handleChange("experience")}
              />
            </Label>
            <HelperText valid={false}>{err.email}</HelperText>
          </div>
        </div>
      </div>
    );
  };

  const JoiningFormalitiesForm = () => {
    return (
      <div className="px-4 py-3  mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Joining Formalities</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>PAN</span>
              <Input
                className="mt-1"
                type="text"
                value={values.PAN}
                onChange={handleChange("PAN")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>EC</span>
              <Input
                className="mt-1"
                type="text"
                value={values.EC}
                onChange={handleChange("EC")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>EmergencyContact</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.EmergencyContact}
                onChange={handleChange("EmergencyContact")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        {/* ------------------------Row 2-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>PAN</span>
              <Input
                className="mt-1"
                type="text"
                value={values.PAN}
                onChange={handleChange("PAN")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Phone</span>
              <Input
                className="mt-1"
                type="text"
                value={values.Phone}
                onChange={handleChange("Phone")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>BloodGr</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.BloodGr}
                onChange={handleChange("BloodGr")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>
      </div>
    );
  };

  const AppoinmentDetailsForm = () => {
    return (
      <div className="px-4 py-3  mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Appoinment Details</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>DOJ</span>
              <Input
                className="mt-1"
                type="text"
                value={values.DOJ}
                onChange={handleChange("DOJ")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>CurrentLocation</span>
              <Input
                className="mt-1"
                type="text"
                value={values.CurrentLocation}
                onChange={handleChange("CurrentLocation")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>Department</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.Department}
                onChange={handleChange("Department")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>
        {/* ------------------------Row 2-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Designation</span>
              <Input
                className="mt-1"
                type="text"
                value={values.Designation}
                onChange={handleChange("Designation")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Role</span>
              <Input
                className="mt-1"
                type="text"
                value={values.Role}
                onChange={handleChange("Role")}
              />
            </Label>
          </div>
        </div>
      </div>
    );
  };

  const ExternalCertificationsForm = () => {
    return (
      <div className="px-4 py-3  mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Appoinment Details</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>ExtCert_1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.ExtCert_1}
                onChange={handleChange("ExtCert_1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>ExtCert_1_ID</span>
              <Input
                className="mt-1"
                type="text"
                value={values.ExtCert_1_ID}
                onChange={handleChange("ExtCert_1_ID")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>ExtCert_1_Validity</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.ExtCert_1_Validity}
                onChange={handleChange("ExtCert_1_Validity")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>
        {/* ------------------------Row 2-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>ExtCert_2</span>
              <Input
                className="mt-1"
                type="text"
                value={values.ExtCert_2}
                onChange={handleChange("ExtCert_2")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>ExtCert_2_ID</span>
              <Input
                className="mt-1"
                type="text"
                value={values.ExtCert_2_ID}
                onChange={handleChange("ExtCert_2_ID")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>ExtCert_2_Validity</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.ExtCert_2_Validity}
                onChange={handleChange("ExtCert_2_Validity")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        {/* ------------------------Row 3-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>ExtCert_3</span>
              <Input
                className="mt-1"
                type="text"
                value={values.ExtCert_3}
                onChange={handleChange("ExtCert_3")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>ExtCert_3_ID</span>
              <Input
                className="mt-1"
                type="text"
                value={values.ExtCert_3_ID}
                onChange={handleChange("ExtCert_3_ID")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>ExtCert_3_Validity</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.ExtCert_3_Validity}
                onChange={handleChange("ExtCert_3_Validity")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>
      </div>
    );
  };

  const SkillSetForm = () => {
    return (
      <div className="px-4 py-3  mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Skill Set</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>PC_L1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.PC_L1}
                onChange={handleChange("PC_L1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>PC_L2</span>
              <Input
                className="mt-1"
                type="text"
                value={values.PC_L2}
                onChange={handleChange("PC_L2")}
              />
            </Label>
          </div>
        </div>

        {/* ------------------------Row 2-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>LAP_L1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.LAP_L1}
                onChange={handleChange("LAP_L1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>LAP_L2</span>
              <Input
                className="mt-1"
                type="text"
                value={values.LAP_L2}
                onChange={handleChange("LAP_L2")}
              />
            </Label>
          </div>
        </div>

        {/* ------------------------Row 3-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>SVR_L1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.SVR_L1}
                onChange={handleChange("SVR_L1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>SVR_L2</span>
              <Input
                className="mt-1"
                type="text"
                value={values.SVR_L2}
                onChange={handleChange("SVR_L2")}
              />
            </Label>
          </div>
        </div>

        {/* ------------------------Row 4-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>STO_L1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.STO_L1}
                onChange={handleChange("STO_L1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>STO_L2</span>
              <Input
                className="mt-1"
                type="text"
                value={values.STO_L2}
                onChange={handleChange("STO_L2")}
              />
            </Label>
          </div>
        </div>

        {/* ------------------------Row 5-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>NW_L1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.NW_L1}
                onChange={handleChange("NW_L1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>NW_L2</span>
              <Input
                className="mt-1"
                type="text"
                value={values.NW_L2}
                onChange={handleChange("NW_L2")}
              />
            </Label>
          </div>
        </div>

        {/* ------------------------Row 6-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>PRN_L1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.PRN_L1}
                onChange={handleChange("PRN_L1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>PRN_L2</span>
              <Input
                className="mt-1"
                type="text"
                value={values.PRN_L2}
                onChange={handleChange("PRN_L2")}
              />
            </Label>
          </div>
        </div>

        {/* ------------------------Row 7-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>LMP_L1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.LMP_L1}
                onChange={handleChange("LMP_L1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>LMP_L2</span>
              <Input
                className="mt-1"
                type="text"
                value={values.LMP_L2}
                onChange={handleChange("LMP_L2")}
              />
            </Label>
          </div>
        </div>

        {/* ------------------------Row 8-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>D_OS_L1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.D_OS_L1}
                onChange={handleChange("D_OS_L1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>D_OS_L2</span>
              <Input
                className="mt-1"
                type="text"
                value={values.D_OS_L2}
                onChange={handleChange("D_OS_L2")}
              />
            </Label>
          </div>
        </div>

        {/* ------------------------Row 9-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>SVR_L1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.SVR_L1}
                onChange={handleChange("SVR_L1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>SVR_L2</span>
              <Input
                className="mt-1"
                type="text"
                value={values.SVR_L2}
                onChange={handleChange("SVR_L2")}
              />
            </Label>
          </div>
        </div>

        {/* ------------------------Row 10-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>LIN_L1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.LIN_L1}
                onChange={handleChange("LIN_L1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>APP_L1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.APP_L1}
                onChange={handleChange("APP_L1")}
              />
            </Label>
          </div>
        </div>
      </div>
    );
  };

  const SalaryDetailsForm = () => {
    return (
      <div className="px-4 py-3  mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Salary Details</span>
        </Label>
        <hr className="mb-5 mt-2" />

        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>PFNo</span>
              <Input
                className="mt-1"
                type="text"
                value={values.PFNo}
                onChange={handleChange("PFNo")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>ESINo</span>
              <Input
                className="mt-1"
                type="text"
                value={values.ESINo}
                onChange={handleChange("ESINo")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>UANNo</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.UANNo}
                onChange={handleChange("UANNo")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>
        {/* ------------------------Row 2-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>BasicDA</span>
              <Input
                className="mt-1"
                type="text"
                value={values.BasicDA}
                onChange={handleChange("BasicDA")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>B+DA</span>
              <Input
                className="mt-1"
                type="text"
                value={values.BplusDA}
                onChange={handleChange("BplusDA")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>HRA</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.HRA}
                onChange={handleChange("HRA")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        {/* ------------------------Row 3-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Incentive_1</span>
              <Input
                className="mt-1"
                type="text"
                value={values.Incentive_1}
                onChange={handleChange("Incentive_1")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Incentive_2</span>
              <Input
                className="mt-1"
                type="text"
                value={values.Incentive_2}
                onChange={handleChange("Incentive_2")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>GrossSalary</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.GrossSalary}
                onChange={handleChange("GrossSalary")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        {/* ------------------------Row 4-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>EmplPF</span>
              <Input
                className="mt-1"
                type="text"
                value={values.EmplPF}
                onChange={handleChange("EmplPF")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>EmplESI</span>
              <Input
                className="mt-1"
                type="text"
                value={values.EmplESI}
                onChange={handleChange("EmplESI")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>Deduction</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.Deduction}
                onChange={handleChange("Deduction")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        {/* ------------------------Row 5-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>TakeHomeSalary</span>
              <Input
                className="mt-1"
                type="text"
                value={values.TakeHomeSalary}
                onChange={handleChange("TakeHomeSalary")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>EmployerPF</span>
              <Input
                className="mt-1"
                type="text"
                value={values.EmployerPF}
                onChange={handleChange("EmployerPF")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>EmployerESI</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.EmployerESI}
                onChange={handleChange("EmployerESI")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        {/* ------------------------Row 6-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>CTC</span>
              <Input
                className="mt-1"
                type="text"
                value={values.CTC}
                onChange={handleChange("CTC")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>AccountName</span>
              <Input
                className="mt-1"
                type="text"
                value={values.AccountName}
                onChange={handleChange("AccountName")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>BankName</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.BankName}
                onChange={handleChange("BankName")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        {/* ------------------------Row 7-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>BankAcNo</span>
              <Input
                className="mt-1"
                type="text"
                value={values.BankAcNo}
                onChange={handleChange("BankAcNo")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>IFSCCode</span>
              <Input
                className="mt-1"
                type="text"
                value={values.IFSCCode}
                onChange={handleChange("IFSCCode")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>BranchName</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.BranchName}
                onChange={handleChange("BranchName")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>
      </div>
    );
  };

  const SeparationDetailsForm = () => {
    return (
      <div className="px-4 py-3  mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Appoinment Details</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>ResignDate</span>
              <Input
                className="mt-1"
                type="text"
                value={values.ResignDate}
                onChange={handleChange("ResignDate")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>RelievedDate</span>
              <Input
                className="mt-1"
                type="text"
                value={values.RelievedDate}
                onChange={handleChange("RelievedDate")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>NoticePeriodServed</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.NoticePeriodServed}
                onChange={handleChange("NoticePeriodServed")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>
      </div>
    );
  };

  const StatusForm = () => {
    return (
      <div className="px-4 py-3  mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Status</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Live</span>
              <Input
                className="mt-1"
                type="text"
                value={values.Live}
                onChange={handleChange("Live")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Flow Buttons */}
      <Card className="mb-4 shadow-md mt-4">
        <CardBody>
          <div className="flex flex-row flex-wrap">
            <Button
              onClick={() => {
                setFlow("personal");
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className="mt-4 mx-2 "
            >
              1. Personal Information
            </Button>
            <Button
              onClick={() => {
                setFlow("qualifications");
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className="mt-4 mx-2 "
            >
              2.Qualifications
            </Button>
            <Button
              onClick={() => {
                setFlow("joiningFormalities");
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className="mt-4 mx-2 "
            >
              3.Joining Formalities
            </Button>

            <Button
              onClick={() => {
                setFlow("appoinmentDetails");
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className="mt-4 mx-2 "
            >
              4.Appoinment Details
            </Button>

            <Button
              onClick={() => {
                setFlow("ExternalCertifications");
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className="mt-4 mx-2 "
            >
              5.External Certifications
            </Button>

            <Button
              onClick={() => {
                setFlow("SkillSet");
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className="mt-4 mx-2 "
            >
              6.Skill set
            </Button>

            <Button
              onClick={() => {
                setFlow("SalaryDetails");
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className="mt-4 mx-2 "
            >
              7.Salary Details
            </Button>

            <Button
              onClick={() => {
                setFlow("SeparationDetails");
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className="mt-4 mx-2 "
            >
              8.Separation Details
            </Button>

            <Button
              onClick={() => {
                setFlow("Status");
              }}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className="mt-4 mx-2 "
            >
              9.Status
            </Button>

            <Button
              onClick={submitCustomer}
              aria-label="Notifications"
              aria-haspopup="true"
              layout="outline"
              className="mt-4 mx-2 "
            >
              Submit
            </Button>
          </div>
        </CardBody>
      </Card>
      {flow == "personal" ? BasicsForm() : null}
      {flow == "qualifications" ? QualificationForm() : null}
      {flow == "joiningFormalities" ? JoiningFormalitiesForm() : null}
      {flow == "appoinmentDetails" ? AppoinmentDetailsForm() : null}
      {flow == "ExternalCertifications" ? ExternalCertificationsForm() : null}
      {flow == "SkillSet" ? SkillSetForm() : null}
      {flow == "SalaryDetails" ? SalaryDetailsForm() : null}
      {flow == "SeparationDetails" ? SeparationDetailsForm() : null}
      {flow == "Status" ? StatusForm() : null}

      {/* {productPicker()} */}
      {ReviewSubmit()}

      {ReqFieldErrModal()}
    </>
  );
}

export default EmployeeUpdate;
