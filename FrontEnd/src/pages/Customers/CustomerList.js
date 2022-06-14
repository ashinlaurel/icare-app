import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import {
  Button,
  Card,
  CardBody,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../../icons";
import RoundIcon from "../../components/RoundIcon";
import CustomerCard from "../../components/Cards/CustomerCard";
import { API } from "../../backendapi";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import { saveAs } from "file-saver";

function CustomerList() {
  const [values, setValues] = useState([]);
  const [search, setSearch] = useState("");
  const { setTopHeading } = useContext(TopBarContext);
  const [page, setPage] = useState(1);

  //download
  const [isDwnldModalOpen, setIsDwnldModalOpen] = useState(false);

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Customers");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  //   Search Functions---------------------------------------------------------
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //   -----------------------Send Search for Fuzzy ---------------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setPage(1);
    thegetter();
  };

  //   ---------------Intital Load ----------------------------

  useEffect(() => {
    thegetter();
  }, [page]);

  async function thegetter() {
    let payload = {
      search: search,
      role: 1,
      page: page,
    };
    try {
      let response = await axios({
        url: `${API}/customer/customers`,
        method: "POST",
        data: payload,
      });
      console.log(response.data);

      if (!search) {
        let temp = [];
        values.map((vendor) => {
          temp.push(vendor);
        });
        response.data.map((vendor) => {
          temp.push(vendor);
        });

        setValues(temp);
      } else {
        setValues(response.data);
      }
      // setValues(response.data);
    } catch (error) {
      throw error;
    }
  }

  const DwnldModal = () => {
    return (
      <>
        <Modal
          isOpen={isDwnldModalOpen}
          onClose={() => setIsDwnldModalOpen(false)}
          className=" dark:bg-gray-800 p-5  mx-10  bg-gray-50 text-gray-900 dark:text-white text-center  rounded-lg  "
        >
          <ModalHeader className="">
            <div className="text-lg w-88">
              Are you sure you want to export the entire Customers List ?
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="">
              <Button
                layout="outline"
                onClick={() => {
                  downloadAssets();
                }}
              >
                Export
              </Button>
            </div>
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
        </Modal>
      </>
    );
  };

  const downloadAssets = async () => {
    let csv = `SlNo,CustomerName,Account,UnitName,Address,District,State,Pincode,LocationType,GstNo,ContactPerson,ContactNo,WhatsappNo,CustomerEmail,UserName,\n`;

    try {
      let response = await axios({
        url: `${API}/unit/getUnitsExport`,
        method: "POST",
      });
      console.log(response.data);
      let temp = response.data;
      temp.map((i, count) => {
        csv =
          csv +
          `"${count + 1}","${i.customerName}","${i.accountName}","${
            i.unitName
          }","${i.address}","${i.district}","${i.state}","${i.pincode}","${
            i.locationType
          }","${i.GSTnumber}","${i.contactPerson}","${i.contactNo}","${
            i.whatsappNo
          }","${i.customerId.email}","${i.username}",\n`;
      });

      // setValues(response.data);
    } catch (error) {
      throw error;
    }
    // console.log(csv); //product.
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(csvData, "Assets.csv");
  };
  return (
    <>
      {DwnldModal()}
      <div className="mt-4">
        <SectionTitle>Search</SectionTitle>

        <div className=" flex flex-row justify-start items-center w-full">
          <div className="mb-8  shadow-md w-11/12 p-3 bg-white rounded-lg">
            <div className="relative text-gray-500 focus-within:text-purple-600">
              <form onSubmit={handleSubmit}>
                <input
                  className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder="Search Customers"
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div class="mb-8 ml-8  w-1/12 ">
            <Button
              className="py-3"
              onClick={() => {
                setIsDwnldModalOpen(true);
              }}
            >
              Export All
            </Button>
          </div>
        </div>

        {/* <SectionTitle>Responsive cards</SectionTitle> */}

        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((user) => (
            <Link to={`/app/customer/accounts/${user._id}`}>
              <CustomerCard
                value={user.name}
                link={`/app/customer/getCustomerById/${user._id}`}
              >
                <RoundIcon
                  icon={PeopleIcon}
                  iconColorClass="text-orange-500 dark:text-orange-100"
                  bgColorClass="bg-orange-100 dark:bg-orange-500"
                  className="mr-4"
                />
              </CustomerCard>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Button
            onClick={() => {
              let temp = page;
              temp++;
              setPage(temp);
            }}
          >
            Load More
          </Button>
        </div>
      </div>
    </>
  );
}

export default CustomerList;
