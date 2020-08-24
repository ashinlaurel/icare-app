import React, { useEffect, useState } from "react";
import axios from "axios";

import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import { Card, CardBody, Label } from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../../icons";
import RoundIcon from "../../components/RoundIcon";
import CustomerCard from "../../components/Cards/CustomerCard";
import { API } from "../../backendapi";
import { Link, useParams } from "react-router-dom";

function AccountsList() {
  const [values, setValues] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [accounts, setAccounts] = useState([]);
  // -----------------Getting Stuff from params-----------------------
  let { id } = useParams();

  //   ---------------Intital Load ----------------------------

  useEffect(() => {
    // console.log(id);
    (async function thegetter() {
      let payload = {
        customerid: id,
      };
      try {
        let response = await axios({
          url: `${API}/customer/getCustomerById`,
          method: "POST",
          data: payload,
        });
        console.log(response.data[0]);
        console.log(response.data[0].accountId);
        setAccounts(response.data[0].accountId);
        setCustomer(response.data[0]);
      } catch (error) {
        throw error;
      }
    })();
    // console.log(customer);
  }, []);

  return (
    <>
      <PageTitle>Accounts</PageTitle>

      <SectionTitle>{customer.customerName} Accounts</SectionTitle>

      {/* <SectionTitle>Responsive cards</SectionTitle> */}

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {accounts.map((account) => (
          <Link
            key={account._id}
            to={`/app/customer/accounts?q=${account._id}`}
          >
            <CustomerCard value={account.accountName}>
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

export default AccountsList;
