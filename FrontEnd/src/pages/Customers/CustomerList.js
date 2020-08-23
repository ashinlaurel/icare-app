import React, { useEffect, useState } from "react";
import axios from "axios";

import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import { Card, CardBody, Label } from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../../icons";
import RoundIcon from "../../components/RoundIcon";
import CustomerCard from "../../components/Cards/CustomerCard";
import { API } from "../../backendapi";

function CustomerList() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/customer/customers`)
      .then((users) => {
        console.log(users.data);
        let temp = [];
        users.data.map((user) => {
          temp.push(user);
        });
        setValues(temp);
      })
      .catch((err) => {
        console.log("axiosErr", err);
      });
  }, []);
  return (
    <>
      <PageTitle>Customers</PageTitle>

      <SectionTitle>Search</SectionTitle>

      <Card className="mb-8 shadow-md">
        <CardBody>
          <Label className="">
            <div className="relative text-gray-500 focus-within:text-purple-600">
              <input
                className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jane Doe"
              />
              <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Search
              </button>
            </div>
          </Label>
        </CardBody>
      </Card>

      {/* <SectionTitle>Responsive cards</SectionTitle> */}

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <CustomerCard title="Total clients" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </CustomerCard>
      </div>
    </>
  );
}

export default CustomerList;
