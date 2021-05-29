import React, { useState, useEffect, useContext } from "react";

import PageTitle from "../../components/Typography/PageTitle";
import InfoCard from "../../components/Cards/InfoCard";

import { TopBarContext } from "../../context/TopBarContext";

import { useHistory } from "react-router-dom";

import RoundIcon from "../../components/RoundIcon";
import { PeopleIcon } from "../../icons";

function ViewDownloads() {
  let history = useHistory();
  const { setTopHeading } = useContext(TopBarContext);

  // ----------------------Heading Use Effect-------------

  useEffect(() => {
    setTopHeading("Downloads");

    return () => {
      setTopHeading("");
    };
  }, []);

  return (
    <>
      <PageTitle>Downloads</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <a
          className="cursor-pointer"
          href="https://icarewebsiteuploads.s3.ap-south-1.amazonaws.com/CCFR+FORMAT+-+Infocare.pdf"
          target="_blank"
          download="ccfr.pdf"
        >
          <InfoCard className="" title="Click To Download" value="CCFR PDF">
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>
        </a>
      </div>
    </>
  );
}

export default ViewDownloads;
