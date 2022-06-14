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
import VendorCard from "../../components/Cards/VendorCard";
import Emp from "../../helpers/auth/EmpProfile";
import { saveAs } from "file-saver";

function VendorList() {
  const [values, setValues] = useState([]);
  const [search, setSearch] = useState("");
  const { setTopHeading } = useContext(TopBarContext);
  const [page, setPage] = useState(1);

  //download
  const [isDwnldModalOpen, setIsDwnldModalOpen] = useState(false);

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Vendor List");
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
      filters: {
        searchquery: search,
      },
      pagination: {
        page: page,
      },
    };
    try {
      let response = await axios({
        url: `${API}/vendor/${Emp.getId()}/getAll`,
        method: "POST",
        data: payload,
      });

      console.log(response.data.out);
      if (!search) {
        let temp = [];
        values.map((vendor) => {
          temp.push(vendor);
        });
        response.data.out.map((vendor) => {
          temp.push(vendor);
        });

        setValues(temp);
      } else {
        setValues(response.data.out);
      }
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
              Are you sure you want to export the entire Vendors List ?
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
    let csv = `SlNo,VendorName,GST,PAN,Aadhaar,Address,PinCode,District,State,Phone1,Phone2,BankName,A/CName,A/CNo,Branch,IFSCode,CreditDays,\n`;

    try {
      let response = await axios({
        url: `${API}/vendor/getVendorsExport`,
        method: "POST",
      });
      console.log(response.data);
      let temp = response.data;
      temp.map((i, count) => {
        csv =
          csv +
          `"${count + 1}","${i.name}","${i.GSTNo}","${i.PANNo}","${
            i.aadharNo
          }","${i.address}","${i.PIN}","${i.district}","${i.state}","${
            i.phno1
          }","${i.phno2}","${i.bankName}","${i.bankAcName}","${i.bankAcNo}","${
            i.branch
          }","${i.IFSCCode}","${i.creditDays}",\n`;
      });
    } catch (error) {
      throw error;
    }
    // console.log(csv); //product.
    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(csvData, "Vendors.csv");
    setIsDwnldModalOpen(false);
  };

  return (
    <div className="mt-4">
      {DwnldModal()}
      <SectionTitle>Search</SectionTitle>

      <div className=" flex flex-row justify-start items-center w-full">
        <div className="mb-8  shadow-md w-11/12 p-3 bg-white dark:bg-gray-800 rounded-lg">
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
          <Link to={`/app/vendor/getVendorById/${user._id}`}>
            <VendorCard
              value={user.name}
              district={user.district}
              // link={`/app/customer/getCustomerById/${user._id}`}
            >
              <RoundIcon
                icon={PeopleIcon}
                iconColorClass="text-orange-500 dark:text-orange-100"
                bgColorClass="bg-orange-100 dark:bg-orange-500"
                className="mr-4"
              />
            </VendorCard>
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
  );
}

export default VendorList;
