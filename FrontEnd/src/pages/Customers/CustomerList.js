import React, { useEffect, useState } from "react";
import axios from "axios";

import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import { Card, CardBody, Label } from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../../icons";
import RoundIcon from "../../components/RoundIcon";
import CustomerCard from "../../components/Cards/CustomerCard";
import { API } from "../../backendapi";
import { Link } from "react-router-dom";

function CustomerList() {
  const [values, setValues] = useState([]);
  const [search, setSearch] = useState("");

  //   Search Functions---------------------------------------------------------
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //   -----------------------Send Search for Fuzzy ---------------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      search: search,
    };
    try {
      let response = await axios({
        url: `${API}/customer/getall`,
        method: "POST",
        data: payload,
      });
      console.log(response.data);
      setValues(response.data);
    } catch (error) {
      throw error;
    }
  };

  //   ---------------Intital Load ----------------------------

  useEffect(() => {
    (async function thegetter() {
      let payload = {
        search: search,
      };
      try {
        let response = await axios({
          url: `${API}/customer/getall`,
          method: "POST",
          data: payload,
        });
        console.log(response.data);
        setValues(response.data);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <>
      <PageTitle>Customers</PageTitle>

      <SectionTitle>Search</SectionTitle>

      <Card className="mb-8 shadow-md">
        <CardBody>
          <Label className="">
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
          </Label>
        </CardBody>
      </Card>

      {/* <SectionTitle>Responsive cards</SectionTitle> */}

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {values.map((user) => (
          <Link to={`/app/customer/accounts/${user._id}`}>
            <CustomerCard value={user.customerName}>
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
    </>
  );
}

export default CustomerList;
