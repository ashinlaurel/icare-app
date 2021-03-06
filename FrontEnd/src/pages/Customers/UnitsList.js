import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import { Card, CardBody, Label, Button } from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../../icons";
import RoundIcon from "../../components/RoundIcon";
import CustomerCard from "../../components/Cards/CustomerCard";
import { API } from "../../backendapi";
import { Link, useParams } from "react-router-dom";
import { BottomBarContext } from "../../context/BottomBarContext";
import { TopBarContext } from "../../context/TopBarContext";

function UnitsList() {
  const [units, setUnits] = useState([]);

  const { setTopHeading } = useContext(TopBarContext);

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Units");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  // -----------------Getting Stuff from params-----------------------
  let { id, accountid } = useParams();

  const { bbaropen, setBBarOpen, setAssetDetails, assetdetails } = useContext(
    BottomBarContext
  );

  //   ---------------Intital Load ----------------------------

  useEffect(() => {
    // console.log(id);
    (async function thegetter() {
      //   let payload = {
      //     customerid: id,
      //   };
      //   try {
      //     let response = await axios({
      //       url: `${API}/customer/getCustomerById`,
      //       method: "POST",
      //       data: payload,
      //     });
      //     console.log(response.data[0]);
      //     console.log(response.data[0].accountId);
      //     setAccounts(response.data[0].accountId);
      //     setCustomer(response.data[0]);
      //   } catch (error) {
      //     throw error;
      //   }
      try {
        const u = await axios.post(`${API}/customer/units`, {
          accountId: accountid,
        });
        console.log(u.data);
        let temp = [];
        u.data.map((acc) => {
          temp.push(acc);
        });
        setUnits(temp);
      } catch (err) {
        console.log("axiosErr", err);
      }
    })();
    // console.log(customer);
  }, []);

  return (
    <div className="mt-4">
      {/* <SectionTitle>{customer.customerName} Accounts</SectionTitle> */}

      {/* <SectionTitle>Responsive cards</SectionTitle> */}

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {units.map((unit) => (
          <CustomerCard
            btnone="Assets"
            btnonelink={`/app/customer/accounts/units/${id}/${accountid}/${unit._id}`}
            value={unit.unitName}
            object={unit}
            link={`/app/unit/getUnitById/${unit._id}`}
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

export default UnitsList;
