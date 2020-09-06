import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../backendapi";
import axios from "axios";
import Emp from "../../helpers/auth/EmpProfile";
import InfoCard from "../../components/Cards/InfoCard";
import { Card, CardBody } from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../../icons";
import RoundIcon from "../../components/RoundIcon";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import { Button } from "@windmill/react-ui";

export default function CustomerDetails() {
  const { id } = useParams();
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
        // WhatsappNo:WhatsappNo ,
      });

      console.log("Done", res.data[0].username);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getCustomerInfo();
  }, []);

  return (
    <div>
      <PageTitle>Customer {values.name} </PageTitle>

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
                <span className="font-semibold"> GST Numeber:</span>{" "}
                {values.GSTnumber}
              </p>
            </div>
          </div>
          <div className="my-10">
            <Button className="mr-3">Update Info</Button>
            <Button className="mx-3">Update Password</Button>
            <Button className="mx-3">Delete Customer</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
