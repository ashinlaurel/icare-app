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

export default function EmployeeDetails() {
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
    let user = values;
    user.show_password = newpass;
    setValues(user);
  };

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
        employeeID: res.data[0].employeeID,
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
        show_password: res.data[0].show_password,
        sex: res.data[0].sex,
        contactNoLand: res.data[0].contactNoLand,
        dob: res.data[0].dob,
        age: res.data[0].age,
        // WhatsappNo:WhatsappNo ,
      });
      console.log("Done", res.data[0]);
      //   console.log("Hello");
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
            All the data linked with this employee will be lost.
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                try {
                  await axios({
                    url: `${API}/admin/${Emp.getId()}/deleteEmployee`,
                    method: "POST",
                    data: { id: id },
                  });
                  history.push(`/app/employee`);

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
      {ResetPassModal()}
      {PassChangeModal()}
      {DeleteModal()}
      <PageTitle>Employee: {values.employeeName}</PageTitle>

      {/* <SectionTitle> </SectionTitle> */}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <div className="flex flex-row flex-wrap ">
            <div className="w-1/2">
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Employee ID:</span>
                {values.employeeID}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Role:</span>{" "}
                {values.role == 0
                  ? "Admin"
                  : values.role == 11
                  ? "Engineer"
                  : "Assistant"}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Name:</span>{" "}
                {values.employeeName}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Email:</span> {values.email}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Password:</span>{" "}
                {values.show_password}
              </p>

              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Sex:</span> {values.sex}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Contact Number(Mobile):</span>{" "}
                {values.contactNo}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold">
                  {" "}
                  Contact Number(Landline):
                </span>{" "}
                {values.contactNoLand}
              </p>
            </div>
            <div className=" w-1/2">
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> DOB:</span> {values.dob}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Age:</span> {values.age}
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
                <span className="font-semibold"> Contact Person:</span>{" "}
                {values.contactPerson}
              </p>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold">
                  {" "}
                  Contact Person Occupation:
                </span>{" "}
                {values.contactPersonOcc}
              </p>
            </div>
          </div>
          <div className="my-10">
            <Link to={`/app/employee/${id}/update`}>
              <Button className="mr-3">Update Info</Button>
            </Link>
            <Link to={`/app/employee/${id}/viewsalary`}>
              <Button className="mr-3">Payment History</Button>
            </Link>
            <Link to={`/app/employee/${id}/update`}>
              <Button className="mr-3">View Full Info</Button>
            </Link>
            <Button className="" onClick={() => setPasswordModalOpen(true)}>
              Reset Password
            </Button>
            <Button onClick={() => setIsDeleteModalOpen(true)} className="mx-3">
              Delete Employee{" "}
            </Button>
            {/* <Button className="mx-3">Delete Customer</Button> */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
