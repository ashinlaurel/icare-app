import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { API } from "../../backendapi";
import axios from "axios";
import Emp from "../../helpers/auth/EmpProfile";
import InfoCard from "../../components/Cards/InfoCard";
import {
  Card,
  CardBody,
  Input,
  HelperText,
  Label,
  Button,
  Badge,
  Select,
} from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../../icons";
import RoundIcon from "../../components/RoundIcon";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";
import Axios from "axios";

export default function VendorDetails() {
  let history = useHistory();
  const { id } = useParams();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [PasswordModalOpen, setPasswordModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newpass, setNewpass] = useState("");
  const [newpassconf, setNewpassconf] = useState("");
  const [passerror, setPasserror] = useState("");

  // console.log(id);
  const [values, setValues] = useState({
    //both
    employeeID: "",
    username: "",
    email: "",
    // password: "",
    // confpassword: "",
    //customer
    customerName: "",
    // accountId: [],
    //account
    // accountName: "",
    // unitId: [],
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
    parentCustomerId: "",
    show_password: "",
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
        url: `${API}/vendor/${Emp.getId()}/getById`,
        method: "POST",
        data: data,
      });
      setValues(res.data);
      console.log("Done", res.data);
      //   console.log("Hello");
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getCustomerInfo();
  }, []);



  const DeleteModal = () => {
    return (
      <>
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        >
          <ModalHeader>Are you sure you want to delete!</ModalHeader>
          <ModalBody>
            
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                try {
                  await axios({
                    url: `${API}/vendor/${Emp.getId()}/delete`,
                    method: "POST",
                    data: { id: id },
                  });
                  history.push(`/app/vendorlist`);

                  console.log("employee deleted");
                } catch (err) {
                  throw err;
                }
              }}
            >
              Confirm Delete
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  return (
    <div>
     
      {DeleteModal()}
      <PageTitle>Vendor: {values.name}</PageTitle>

      {/* <SectionTitle> </SectionTitle> */}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <div className="flex flex-row flex-wrap ">
            <div className="w-1/2">
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Aadhar No:</span>{" "}
                {values.aadharNo}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> PAN No:</span> {values.PANNo}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> GST No.:</span>{" "}
                {values.GSTNo}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Contact Person.:</span>{" "}
                {values.contactPerson}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Bank Name.:</span>{" "}
                {values.bankName}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Acc Name.:</span>{" "}
                {values.bankAcName}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Acc No.:</span>{" "}
                {values.bankAcNo}
              </p>

              

  
            </div>
            <div className=" w-1/2">
              
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Address:</span>{" "}
                {values.address}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> District:</span>{" "}
                {values.district}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> State:</span> {values.state}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Pincode:</span>{" "}
                {values.PIN}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Branch:</span>{" "}
                {values.branch}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> IFSC Code:</span>{" "}
                {values.IFSCCode}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Credit Days:</span>{" "}
                {values.creditDays}
              </p>
             
            </div>
          </div>
          <div className="my-10">
            <Link to={`/app/vendor/${id}/update`}>
              <Button className="mr-3">Update Info</Button>
            </Link>

            <Button onClick={() => setIsDeleteModalOpen(true)} className="mx-3">
              Delete Vendor{" "}
            </Button>
            {/* <Button className="mx-3">Delete Customer</Button> */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
