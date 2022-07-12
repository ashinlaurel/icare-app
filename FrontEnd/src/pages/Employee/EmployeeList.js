import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import { Card, CardBody, Label } from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../../icons";
import RoundIcon from "../../components/RoundIcon";
import CustomerCard from "../../components/Cards/CustomerCard";
import { API } from "../../backendapi";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import EmployeeCard from "../../components/Cards/EmployeeCard";

function EmployeeList() {
  const [values, setValues] = useState([]);
  const [search, setSearch] = useState("");
  const { setTopHeading } = useContext(TopBarContext);

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Employee List");
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
    let payload = {
      search: search,
      //   role: 1,
    };
    try {
      let response = await axios({
        url: `${API}/admin/employees`,
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
        role: 1,
      };
      try {
        let response = await axios({
          url: `${API}/admin/employees`,
          method: "POST",
          data: payload,
        });
        console.log(response.data);
        setValues(response.data);
      } catch (error) {
        throw error;
      }
    })();
  }, [search]);

  return (
    <div className="mt-4">
      <SectionTitle>Search</SectionTitle>

      <Card className="mb-8  shadow-md">
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
          <Link to={`/app/employee/getEmployeeById/${user._id}`}>
            <EmployeeCard
              value={user.employeeName}
              role={user.role}
              // link={`/app/customer/getCustomerById/${user._id}`}
            >
              {user.photo ? (
                <img
                  src={user.photo}
                  style={{ height: 64, width: 64 }}
                  className=" mr-4 rounded-full"
                />
              ) : (
                <RoundIcon
                  icon={PeopleIcon}
                  // width="60" height="60"
                  iconColorClass="text-orange-500 dark:text-orange-100"
                  bgColorClass="bg-orange-100 dark:bg-orange-500"
                  className="mr-4"
                />
              )}
            </EmployeeCard>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
