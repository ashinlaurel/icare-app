import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
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
import { useHistory, useParams } from "react-router-dom";
/////////////----------------->>>>>> bug <<<<<------------customerList refresh--------------------------

function VendorUpdate() {
  const { id } = useParams();
  let history = useHistory();
  // dropdown states
  const [accType, setAccType] = useState(0); /////// 0-Customer 1-Account 2-Unit
  const [sex, setSex] = useState("Male");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("All");

  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isErrModalOpen, setIsErrModalOpen] = useState(false);
  const [isReqFieldModal, setIsReqFieldModal] = useState(false);
  const { setTopHeading } = useContext(TopBarContext);

  const [values, setValues] = useState({
    //both

    name:"",
    aadharNo:"",
    PANNo:"",
    GSTNo:"",
    address:"",
    district:"",
    state:"",
    PIN:"",

    // ---new ones
  });


  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Update Vendor");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  useEffect(() => {
    thegetter();
  }, [])

  const thegetter = async () => {
    let data = { id: id };
    // console.log(API);
    try {
      let res = await Axios({
        url: `${API}/vendor/${Emp.getId()}/getById`,
        method: "POST",
        data: data,
      });

      setValues(res.data);

      console.log("Done", res.data);
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  

  const submitItem = async () => {
    if (values.name === "") {
        setIsReqFieldModal(true);
      console.log("missing inputs");
      return;
    }
    let payload={
      id:id,
      update:values
    }
  
    await Axios({
      url: `${API}/vendor/${Emp.getId()}/update`,
      method: "POST",
      data: payload,
    })
      .then((data) => {
        console.log("Added", data._id);
        setIsReviewModalOpen(true);
        })
      .catch((err) => {
        console.log("err", err);
        // setErr({ ...err });
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
            Vendor Updated Successfully!
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
          <span>Add Vendor</span>
        </Label>
        <hr className="mb-5 mt-2" />
  
       {/* -------Row - 1 ---------------------- */}
       <div className="flex-row flex space-x-3 mt-3 mb-2">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Name*</span>
              <Input
                className="mt-1"
                value={values.name}
                onChange={handleChange("name")}
              />
            </Label>{" "}
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Contact Person</span>
              <Input
                className="mt-1"
                value={values.contactPerson}
                onChange={handleChange("contactPerson")}
              />
            </Label>{" "}
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>GST Number</span>
              <Input
                className="mt-1"
                value={values.GSTNo}
                onChange={handleChange("GSTNo")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>PAN Number</span>
              <Input
                className="mt-1"
                value={values.PANNo}
                onChange={handleChange("PANNo")}
              />
            </Label>{" "}
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Aadhar Number</span>
              <Input
                className="mt-1"
                value={values.aadharNo}
                onChange={handleChange("aadharNo")}
              />
            </Label>{" "}
          </div>
        </div>
        {/* ---------------Row 4 ---------------- */}
        <div className="flex-row flex space-x-3 mt-3 mb-2">
          <div className="flex flex-col w-full ">
            <Label className="w-full">
              <span>Address</span>
              <Input
                className="mt-1"
                value={values.address}
                onChange={handleChange("address")}
              />
            </Label>{" "}
          </div>

          <div className="flex flex-col w-full ">
            <Label className="w-full">
              <span>PIN Number</span>
              <Input
                className="mt-1"
                value={values.PIN}
                onChange={handleChange("PIN")}
              />
            </Label>{" "}
          </div>
          {/* <HelperText valid={false}>{digiterr.contactNo}</HelperText> */}
        </div>

        {/* ---------------Row 3 ---------------- */}
        <div className="flex-row flex space-x-3 mt-3 mb-2">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>District</span>
              <Input
                className="mt-1"
                value={values.district}
                onChange={handleChange("district")}
              />
            </Label>
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
              <span>Phone Number 1</span>
              <Input
                className="mt-1"
                value={values.phno1}
                onChange={handleChange("phno1")}
              />
            </Label>{" "}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Phone Number 2</span>
              <Input
                className="mt-1"
                value={values.phno2}
                onChange={handleChange("phno2")}
              />
            </Label>
          </div>

          {/* <HelperText valid={false}>{digiterr.contactNo}</HelperText> */}
        </div>

           {/* ---------------Row 4 ---------------- */}
           <div className="flex-row flex space-x-3 mt-3 mb-2">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Bank Name</span>
              <Input
                className="mt-1"
                value={values.bankName}
                onChange={handleChange("bankName")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Acc Name</span>
              <Input
                className="mt-1"
                type="text"
                value={values.bankAcName}
                onChange={handleChange("bankAcName")}
              />
            </Label>{" "}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Acc No.</span>
              <Input
                className="mt-1"
                value={values.bankAcNo}
                onChange={handleChange("bankAcNo")}
              />
            </Label>{" "}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Branch</span>
              <Input
                className="mt-1"
                value={values.branch}
                onChange={handleChange("branch")}
              />
            </Label>
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>IFSC Code</span>
              <Input
                className="mt-1"
                value={values.IFSCCode}
                onChange={handleChange("IFSCCode")}
              />
            </Label>
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Credit Days</span>
              <Input
                className="mt-1"
                value={values.creditDays}
                onChange={handleChange("creditDays")}
              />
            </Label>
          </div>

          {/* <HelperText valid={false}>{digiterr.contactNo}</HelperText> */}
        </div>
        
      
        {/* ///////////////////////////////////////////////////////// */}
        <Button
          onClick={submitItem}
          aria-label="Notifications"
          aria-haspopup="true"
          className="mt-4"
        >
          Update Vendor
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

export default VendorUpdate;
