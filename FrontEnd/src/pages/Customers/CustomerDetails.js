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

export default function CustomerDetails() {
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
  });
  const [err, setErr] = useState({
    email: "",
    name: "",
    // accountName: "",
    enc_password: "",
    confpassword: "",
  });

  const changePassword = async () => {
    let data = { id, pass: newpass };
    try {
      let user = await Axios({
        url: `${API}/customer/${Emp.getId()}/resetPassByAdmin`,
        method: "POST",
        data: data,
      });
      setIsReviewModalOpen(true);
      setPasswordModalOpen(false);
      console.log("Done", user);
    } catch (error) {
      throw error;
    }
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
        customerName: res.data[0].customerName,
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
        parentCustomerId: res.data[0].parentCustomerId,
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

  const ResetPassModal = () => {
    return (
      <>
        <Modal
          isOpen={PasswordModalOpen}
          onClose={() => setPasswordModalOpen(false)}
        >
          <ModalHeader>Change Password for {values.username}!</ModalHeader>
          <ModalBody>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <Label>
                <span>New Password</span>
                <Input
                  className="mt-5"
                  type="password"
                  value={newpass}
                  onChange={(e) => setNewpass(e.target.value)}
                  placeholder="New Password"
                />
              </Label>{" "}
              <Label>
                <span>Confirm Password</span>
                <Input
                  className="my-5"
                  type="password"
                  placeholder="Confirm Password"
                  value={newpassconf}
                  onChange={(e) => {
                    setNewpassconf(e.target.value);
                    if (e.target.value != newpass)
                      setPasserror("Passwords do not match!");
                    else setPasserror("");
                  }}
                />
              </Label>
              <HelperText valid={false}>{passerror}</HelperText>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => changePassword()}
            >
              Change Password
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const PassChangeModal = () => {
    return (
      <>
        <Modal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
        >
          <ModalHeader>Password Updated Successfully!</ModalHeader>
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

  const DeleteModal = () => {
    return (
      <>
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        >
          <ModalHeader>Are you sure you want to delete!</ModalHeader>
          <ModalBody>
            All {values.role == 1 ? <>accounts, </> : <></>} units and assets
            under this
            {values.role == 1 ? <> customer </> : <> account </>}
            will get deleted{" "}
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                console.log("role", values.role);
                try {
                  if (values.role == 1) {
                    console.log("Here role", values.role);
                    await axios({
                      url: `${API}/customer/${Emp.getId()}/deletecust`,
                      method: "POST",
                      data: { id: id },
                    });
                    history.push(`/app/customer`);
                  } else {
                    await Axios({
                      url: `${API}/customer/${Emp.getId()}/deleteacc`,
                      method: "POST",
                      data: { id: id },
                    });
                    history.push(
                      `/app/customer/accounts/${values.parentCustomerId}`
                    );
                  }

                  console.log("unit deleted");
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
      {ResetPassModal()}
      {PassChangeModal()}
      {DeleteModal()}
      <PageTitle>
        {values.name} Type:{values.role == 1 ? <>Customer</> : <>Account</>}{" "}
      </PageTitle>

      {/* <SectionTitle> </SectionTitle> */}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <div className="flex flex-row flex-wrap">
            <div>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Username:</span>{" "}
                {values.username}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Email:</span> {values.email}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Name:</span> {values.name}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Contact Person:</span>{" "}
                {values.contactPerson}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Contact Number:</span>{" "}
                {values.contactNo}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Alternate Contact:</span>{" "}
                {values.altContact}
              </p>
            </div>
            <div className="ml-10 lg:mr-48  mx-20">
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Location Type:</span>{" "}
                {values.locationType}
              </p>
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
                {values.pincode}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> GST Number:</span>{" "}
                {values.GSTnumber}
              </p>
            </div>
          </div>
          <div className="my-10">
            <Link to={`/app/customer/${id}/update`}>
              <Button className="mr-3">Update Info</Button>
            </Link>
            <Button className="mx-3" onClick={() => setPasswordModalOpen(true)}>
              Reset Password
            </Button>
            <Button onClick={() => setIsDeleteModalOpen(true)} className="mx-3">
              Delete {values.role == 1 ? <>Customer</> : <>Account</>}
            </Button>
            {/* <Button className="mx-3">Delete Customer</Button> */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
