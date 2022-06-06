import React, { useState, useEffect, useContext } from "react";

import PageTitle from "../../components/Typography/PageTitle";
import InfoCard from "../../components/Cards/InfoCard";

import { TopBarContext } from "../../context/TopBarContext";

import { useHistory } from "react-router-dom";

import RoundIcon from "../../components/RoundIcon";
import { PeopleIcon } from "../../icons";
import {
  CallsGreaterThanAgeGenerate,
  TotalCallsGenerate,
} from "./ReportsHelper";

function ViewReports() {
  let history = useHistory();
  const { setTopHeading } = useContext(TopBarContext);

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Reports");

    return () => {
      setTopHeading("");
    };
  }, []);

  return (
    <>
      {/*----------------- Call Reports --------------------*/}
      <PageTitle>Call Reports</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <div className=" cursor-pointer" onClick={() => TotalCallsGenerate()}>
          <InfoCard
            className=""
            title="Click To Download"
            value="Total Active Calls"
          >
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>
        </div>

        <div
          className=" cursor-pointer"
          onClick={() => CallsGreaterThanAgeGenerate(2)}
        >
          <InfoCard
            className=""
            title="Click To Download"
            value="Calls > 24 hrs"
          >
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>
        </div>
        <div
          className=" cursor-pointer"
          onClick={() => CallsGreaterThanAgeGenerate(3)}
        >
          <InfoCard
            className=""
            title="Click To Download"
            value="Calls > 3 days"
          >
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>
        </div>
      </div>

      {/* --------------------- Asset Reports ------------------- */}
      <PageTitle>Asset Reports</PageTitle>
      {/* <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <div className=" cursor-pointer" onClick={() => TotalCallsGenerate()}>
          <InfoCard
            className=""
            title="Click To Download"
            value="Total Active Calls"
          >
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>
        </div>

        <div
          className=" cursor-pointer"
          onClick={() => CallsGreaterThanAgeGenerate(2)}
        >
          <InfoCard
            className=""
            title="Click To Download"
            value="Calls > 24 hrs"
          >
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>
        </div>
        <div
          className=" cursor-pointer"
          onClick={() => CallsGreaterThanAgeGenerate(3)}
        >
          <InfoCard
            className=""
            title="Click To Download"
            value="Calls > 3 days"
          >
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>
        </div>
      </div> */}
    </>
  );
}

export default ViewReports;
