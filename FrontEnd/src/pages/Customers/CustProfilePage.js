import React from "react";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import CTA from "../../components/CTA";
import InfoCard from "../../components/Cards/InfoCard";
import { Card, CardBody } from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../../icons";
import RoundIcon from "../../components/RoundIcon";

import Cust from "../../helpers/auth/CustProfile";

export default function CustProfilePage() {
  return (
    <div className="my-20">
      <SectionTitle>Profile Information</SectionTitle>

      <div className="grid gap-8 my-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Name" value={Cust.getName()}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Username" value={Cust.getUsername()}>
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
    </div>
  );
}
