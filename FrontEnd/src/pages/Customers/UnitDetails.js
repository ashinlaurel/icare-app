import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
import CustomerCard from "../../components/Cards/CustomerCard";

export default function UnitDetails() {
  const { id } = useParams();
  // console.log(id);
  const [values, setValues] = useState({
    unitName: "",
    assetsId: [],
    address: "",
    district: "",
    state: "",
    locationType: "",
    pincode: "",
    GSTnumber: "",
    contactPerson: "",
    contactNo: "",
    altContact: "",
    whatsappNo: "",
  });

  const getUnitInfo = async () => {
    let data = { id: id };
    // console.log(API);
    try {
      let res = await axios({
        url: `${API}/unit/${Emp.getId()}/getbyid`,
        method: "POST",
        data: data,
      });

      setValues({
        unitName: res.data.unitName,
        assetsId: res.data.assetsId,
        address: res.data.address,
        district: res.data.district,
        state: res.data.state,
        locationType: res.data.locationType,
        pincode: res.data.pincode,
        GSTnumber: res.data.GSTnumber,
        contactPerson: res.data.contactPerson,
        contactNo: res.data.contactNo,
        altContact: res.data.altContact,
        whatsappNo: res.data.whatsappNo,
      });

      console.log("Done", values.assetsId);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getUnitInfo();
  }, []);

  return (
    <div>
      <PageTitle>{values.unitName}</PageTitle>

      {/* <SectionTitle> </SectionTitle> */}
      <Card className="mb-8 shadow-md">
        <CardBody>
          <div className="flex flex-row flex-wrap">
            <div>
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> Name:</span> {values.unitName}
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
              <p className="text-md text-gray-900 dark:text-gray-100 py-2">
                <span className="font-semibold"> GST Number:</span>{" "}
                {values.GSTnumber}
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
            </div>
          </div>
          <div className="my-10">
            <Link to={`/app/unit/${id}/update`}>
              <Button className="mr-3">Update Info</Button>
            </Link>
            <Button className="mx-3">Delete Unit</Button>
          </div>
          {/* {values.assetsId.length == 0 ? null : ( */}
        </CardBody>
      </Card>
      <br />
      <SectionTitle>Assets under {values.unitName}</SectionTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {values.assetsId.map((asset) => (
          <CustomerCard
            value={asset.producttype}
            //   link={`/app/customer/getCustomerById/${asset._id}`}
            desc={`PO Number: ${asset.ponumber}`}
          >
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </CustomerCard>
        ))}
      </div>
    </div>
  );
}
