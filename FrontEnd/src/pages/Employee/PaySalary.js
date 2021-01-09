import React, { useState, useContext, useEffect, useMemo } from "react";
import {
  Input,
  HelperText,
  Label,
  Button,
  Badge,
  Select,
} from "@windmill/react-ui";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";

import Emp from "../../helpers/auth/EmpProfile";

import { Card, CardBody } from "@windmill/react-ui";
import { TopBarContext } from "../../context/TopBarContext";
import EngineerListModal from "../../components/Modal/EngineerListModal";
import SelectEmployeeModal from "../../components/Modal/SelectEmployeeModal";
import Axios from "axios";
import { API } from "../../backendapi";

const PaySalary = () => {
  const [selectEngModal, setSelectEngModal] = useState(false);
  const [submitmodal, setSubmitModal] = useState(false);
  const { topheading, setTopHeading } = useContext(TopBarContext);
  //   const [employee, setEmployee] = useState([]);
  const clearvalues = {
    queryID: "",
    employeeID: "",
    employeeName: "",
    date: "",
    PFNo: "",
    ESINo: "",
    UANNo: "",
    Basic: "",
    DA: "",
    // BplusDA: values.BplusDA,
    HRAperc: "",
    rent: "",
    AccountName: "",
    BankName: "",
    BankAcNo: "",
    IFSCCode: "",
    BranchName: "",
  };
  const [values, setValues] = useState(clearvalues);
  const [thedate, setThedate] = useState(new Date());
  const [salvalues, setSalValues] = useState({
    BplusDA: "",
    EligibleDays: "",
    Incentive_1: "0",
    Incentive_2: "0",
    GrossSalary: "",
    HRA: "",
    EmplPF: "",
    EmplESI: "",
    Deduction: "",
    TakeHomeSalary: "",
    EmployerPF: "",
    EmployerESI: "",
    CTC: "",
  });

  // useEffect(() => {
  //   let tempdays = daysInThisMonth();
  //   setSalValues({ ...salvalues, EligibleDays: tempdays });
  //   return () => {
  //     console.log("done");
  //   };
  // }, []);

  // ------------Calculations ------------
  useEffect(() => {
    setSalValues({
      ...salvalues,
      BplusDA: parseFloat(
        parseInt(values.Basic) *
          (1 + parseInt(values.DA) / 100) *
          (parseInt(salvalues.EligibleDays) / daysInThisMonth())
      ).toFixed(2),
      HRA: parseFloat(parseInt(salvalues.BplusDA)).toFixed(2),
      GrossSalary: parseFloat(
        parseInt(salvalues.Incentive_1) +
          parseInt(salvalues.Incentive_2) +
          parseInt(salvalues.BplusDA)
      ).toFixed(2),
      EmplPF: parseFloat(salvalues.BplusDA * 0.12).toFixed(2),
      EmplESI: parseFloat(salvalues.GrossSalary * 0.75).toFixed(2),
      Deduction: parseFloat(
        parseInt(salvalues.EmplPF) + parseInt(salvalues.EmplESI)
      ).toFixed(2),
      TakeHomeSalary: parseFloat(
        parseInt(salvalues.GrossSalary) - parseInt(salvalues.Deduction)
      ).toFixed(2),
      EmployerPF: parseFloat(parseInt(salvalues.BplusDA) * 0.125).toFixed(2),
      EmployerESI: parseFloat(parseInt(salvalues.GrossSalary) * 0.325).toFixed(
        2
      ),
      CTC: parseFloat(
        parseInt(salvalues.GrossSalary) +
          parseInt(salvalues.EmployerESI) +
          parseInt(salvalues.EmployerESI)
      ).toFixed(2),
    });
    return () => {
      console.log("auto updated");
    };
  }, [
    values,
    salvalues.BplusDA,
    salvalues.Incentive_1,
    salvalues.Incentive_2,
    salvalues.EligibleDays,
    salvalues.EmplPF,
    salvalues.EmplESI,
    salvalues.Deduction,
    salvalues.EmployerESI,
    salvalues.EmployerPF,
  ]);

  function daysInThisMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }

  const EmployeeSelector = () => {
    return (
      <Card className="mb-4 shadow-md mt-4">
        <CardBody>
          <div className="flex flex-row flex-wrap items-center justify-between">
            <div>Name: {values.employeeName} </div>
            <div>ID: {values.employeeID} </div>
            <div>CTC: {salvalues.CTC} </div>
            <div>
              <Button
                aria-label="Notifications"
                onClick={() => {
                  setSelectEngModal(true);
                }}
                aria-haspopup="true"
                layout="outline"
                className="mt-4 mx-2 "
              >
                Select Employee{" "}
              </Button>
              <Button
                aria-label="Notifications"
                aria-haspopup="true"
                layout="outline"
                onClick={handleSubmit}
                className="mt-4 mx-2 "
              >
                Pay Salary
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
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
                readOnly={true}
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
                readOnly={true}
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
                readOnly={true}
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
              <span>Basic</span>
              <Input
                className="mt-1"
                type="text"
                value={values.Basic}
                readOnly={true}
                // onChange={handleChange("Basic")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>DA %</span>
              <Input
                className="mt-1"
                type="text"
                value={values.DA}
                readOnly={true}
                // onChange={handleChange("DA")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>HRA %</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.HRAperc}
                readOnly={true}
                // onChange={handleChange("HRAperc")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>HRA</span>
              <Input
                className="mt-1"
                type="text"
                readOnly={true}
                value={values.HRA}
                // onChange={handleChange("HRA")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
        </div>

        {/* ----------------- Row 3 -------------------- */}
        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Rent</span>
              <Input
                className="mt-1 "
                type="text"
                value={values.rent}
                readOnly={true}
                // onChange={handleChange("rent")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Account Name</span>
              <Input
                className="mt-1"
                type="text"
                value={values.AccountName}
                readOnly={true}
                // onChange={handleChange("AccountName")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>Bank Name</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                readOnly={true}
                value={values.BankName}
                // onChange={handleChange("BankName")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Bank Account No</span>
              <Input
                className="mt-1"
                type="text"
                readOnly={true}
                value={values.BankAcNo}
                // onChange={handleChange("BankAcNo")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>IFSC Code</span>
              <Input
                className="mt-1"
                type="text"
                readOnly={true}
                value={values.IFSCCode}
                // onChange={handleChange("IFSCCode")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>Branch Name</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={values.BranchName}
                readOnly={true}
                // onChange={handleChange("BranchName")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        <hr className="my-4"></hr>

        {/* -----------User Inputs----------- */}

        {/* ------------------------Row 5-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Incentive_1</span>
              <Input
                className="mt-1"
                type="text"
                value={salvalues.Incentive_1}
                onChange={handleSalChange("Incentive_1")}
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
                value={salvalues.Incentive_2}
                onChange={handleSalChange("Incentive_2")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>Eligible Days</span>
              <Input
                className="mt-1"
                type="text"
                placeholder=""
                value={salvalues.EligibleDays}
                onChange={handleSalChange("EligibleDays")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        <hr className="my-4"></hr>
        {/* ------------------------Row 6-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>HRA</span>
              <Input
                className="mt-1"
                type="text"
                readOnly={true}
                value={salvalues.HRA}
                onChange={handleSalChange("HRA")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>EmplPF</span>
              <Input
                className="mt-1"
                type="text"
                readOnly={true}
                value={salvalues.EmplPF}
                onChange={handleSalChange("EmplPF")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>EmplESI</span>
              <Input
                className="mt-1"
                readOnly={true}
                type="text"
                value={salvalues.EmplESI}
                onChange={handleSalChange("EmplESI")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>Deduction</span>
              <Input
                className="mt-1"
                type="text"
                readOnly={true}
                placeholder=""
                value={salvalues.Deduction}
                onChange={handleSalChange("Deduction")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        {/* ------------------------Row 7-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>TakeHomeSalary</span>
              <Input
                className="mt-1"
                readOnly={true}
                type="text"
                value={salvalues.TakeHomeSalary}
                onChange={handleSalChange("TakeHomeSalary")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>EmployerPF</span>
              <Input
                className="mt-1"
                readOnly={true}
                type="text"
                value={salvalues.EmployerPF}
                onChange={handleSalChange("EmployerPF")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>EmployerESI</span>
              <Input
                className="mt-1"
                readOnly={true}
                type="text"
                placeholder=""
                value={salvalues.EmployerESI}
                onChange={handleSalChange("EmployerESI")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
        </div>

        {/* ------------------------Row 8-------------------------- */}

        <div className="flex-row flex  space-x-3">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Payable Basic + DA </span>
              <Input
                className="mt-1"
                readOnly={true}
                type="text"
                readOnly={true}
                value={salvalues.BplusDA}
                onChange={handleSalChange("BplusDA")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full ">
              <span>Gross Salary</span>
              <Input
                className="mt-1"
                readOnly={true}
                type="text"
                placeholder=""
                value={salvalues.GrossSalary}
                onChange={handleSalChange("GrossSalary")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.email}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>CTC</span>
              <Input
                className="mt-1"
                readOnly={true}
                type="text"
                value={salvalues.CTC}
                onChange={handleSalChange("CTC")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.employeeName}</HelperText> */}
          </div>
        </div>
      </div>
    );
  };

  const SubmissionModal = () => {
    return (
      <>
        <Modal isOpen={submitmodal} onClose={() => setSubmitModal(false)}>
          <ModalHeader>Payment Successful!</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              // onClick={() => setIsReviewModalOpen(false)}
              onClick={() => setSubmitModal(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };
  const handleSalChange = (name) => (e) => {
    setSalValues({ ...salvalues, [name]: e.target.value });
  };

  const handleSubmit = async () => {
    // if (values.password !== values.confpassword) {
    //   setErr({ ...err, confpassword: "Confirm password does not match" });
    //   return;
    // }
    // if (
    //   (values.employeeName === "") |
    //   (values.email === "") |
    //   (values.password === "") |
    //   (values.confpassword === "")
    // ) {
    //   setIsReqFieldModal(true);
    //   return;
    // }
    // e.preventDefault();
    const newsalary = {
      queryID: values._id,
      employeeID: values.employeeID,
      employeeName: values.employeeName,
      date: thedate,
      // email: values.email,
      // password: values.password,
      // role: accType,
      // address: values.address,
      // district: values.district,
      // state: values.state,
      // pincode: values.pincode,
      // contactPerson: values.contactPerson,
      // contactNo: values.contactNo,
      // contactNoLand: values.contactNoLand,
      // contactPersonOcc: values.contactPersonOcc,
      // whatsappNo: values.WhatsappNo,
      // sex: values.sex,
      // age: values.age,
      // dob: values.dob,

      // Salary Details
      PFNo: values.PFNo,
      ESINo: values.ESINo,
      UANNo: values.UANNo,
      Basic: values.Basic,
      DA: values.DA,
      // BplusDA: values.BplusDA,
      HRAperc: values.HRAperc,
      rent: values.rent,
      // ---from salvalues
      BplusDA: salvalues.BplusDA,
      EligibleDays: salvalues.EligibleDays,
      HRA: salvalues.HRA,
      Incentive_1: salvalues.Incentive_1,
      Incentive_2: salvalues.Incentive_2,
      GrossSalary: salvalues.GrossSalary,
      EmplPF: salvalues.EmplPF,
      EmplESI: salvalues.EmplESI,
      Deduction: salvalues.Deduction,
      TakeHomeSalary: salvalues.TakeHomeSalary,
      EmployerPF: salvalues.EmployerPF,
      EmployerESI: salvalues.EmployerESI,
      CTC: salvalues.CTC,
      // ------------------------------
      AccountName: values.AccountName,
      BankName: values.BankName,
      BankAcNo: values.BankAcNo,
      IFSCCode: values.IFSCCode,
      BranchName: values.BranchName,
      //Separation Details

      // ResignDate: values.ResignDate,
      // RelievedDate: values.RelievedDate,
      // NoticePeriodServed: values.NoticePeriodServed,
      // Live: values.Live,
    };
    console.log(newsalary);
    setValues(clearvalues);

    // const data = {
    //   id: values._id,
    //   update: newsalary,
    // };
    try {
      await Axios({
        url: `${API}/admin/${Emp.getId()}/createSalary`,
        method: "POST",
        data: newsalary,
      });
      setSubmitModal(true);
      console.log("Done");
    } catch (error) {
      throw error;
    }
  };

  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    setTopHeading("Pay Employee ");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------
  return (
    <>
      {EmployeeSelector()}
      {SalaryDetailsForm()}
      {SubmissionModal()}
      <SelectEmployeeModal
        isModalOpen={selectEngModal}
        setIsModalOpen={setSelectEngModal}
        setEmployee={setValues}

        // nextModal={setaddEnggModalOpen}
      />
    </>
  );
};

export default PaySalary;
