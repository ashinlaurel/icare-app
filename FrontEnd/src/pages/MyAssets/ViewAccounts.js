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

function ViewAccounts() {
  const [accounts, setAccounts] = useState([]);
  // -----------------Getting Stuff from params-----------------------

  //   ---------------Intital Load ----------------------------

  useEffect(() => {
    (async function thegetter() {
      let payload = {
        customerId: localStorage.getItem("id"),
      };
      try {
        let response = await axios({
          url: `${API}/customer/accounts`,
          method: "POST",
          data: payload,
        });
        console.log(response.data);
        // console.log(response.data[0].accountId);
        setAccounts(response.data);

        // setCustomer(response.data[0]);
      } catch (error) {
        throw error;
      }
    })();
    // console.log(customer);
  }, []);

  return (
    <>
      <PageTitle>Accounts</PageTitle>

      <SectionTitle> Accounts</SectionTitle>

      {/* <SectionTitle>Responsive cards</SectionTitle> */}

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {accounts.map((account) => (
          <Link
            key={account._id}
            to={`/app/myassets/accounts/units/${localStorage.getItem("id")}/${
              account._id
            }`}
          >
            <CustomerCard value={account.name}>
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

export default ViewAccounts;
