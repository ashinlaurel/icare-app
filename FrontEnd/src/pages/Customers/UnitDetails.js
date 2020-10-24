import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
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
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";
import Axios from "axios";

export default function UnitDetails() {
  const { id } = useParams();
  let history = useHistory();
  // console.log(id);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
    accountId: "",
    customerId: "",
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
        accountId: res.data.accountId,
        customerId: res.data.customerId,
      });

      console.log("Done", values.assetsId);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getUnitInfo();
  }, []);

  const DeleteModal = () => {
    return (
      <>
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        >
          <ModalHeader>Are you sure you want to delete!</ModalHeader>
          <ModalBody>All assets under this unit will get deleted </ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                try {
                  await Axios({
                    url: `${API}/unit/${Emp.getId()}/delete`,
                    method: "POST",
                    data: { id: id },
                  });
                  history.push(
                    `/app/customer/accounts/units/${values.customerId}/${values.accountId}`
                  );
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
            <Button onClick={() => setIsDeleteModalOpen(true)} className="mx-3">
              Delete Unit
            </Button>
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
      {DeleteModal()}
    </div>
  );
}
