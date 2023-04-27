import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import InfoCard from "../components/Cards/InfoCard";

import { MoneyIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";

import { API } from "../backendapi";

import { TopBarContext } from "../context/TopBarContext";

import CustProfile from "../helpers/auth/CustProfile";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const { topheading, setTopHeading } = useContext(TopBarContext);

  // Quick Search States ------------------------
  const [selectedprod, setSelectedProd] = useState({});
  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");
  const [refresh, setRefresh] = useState(true);
  const [disabler, setDisabler] = useState(true);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  // table variable styles
  const [activerowid, setActiveRowId] = useState(0);

  // Count States ---------------------------------------------

  const [assetcount, setAssetCount] = useState(0);

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // -------Stats getter ---------------

  useEffect(() => {
    // Using an IIFE
    (async function thegetter() {
      // console.log("getter called");
      let payload = {};
      if (CustProfile.getRole() == 1) payload.customerId = CustProfile.getId();
      else if (CustProfile.getRole() == 2)
        payload.accountId = CustProfile.getId();
      else return;

      try {
        let response = await axios({
          url: `${API}/asset/countbycustomer`,
          method: "POST",
          data: payload,
        });
        console.log(response.data);
        // setTotalResults(response.data.total);
        // const { total, data } = response.data;
        // console.log(data + "Now");
        setAssetCount(response.data);
      } catch (error) {
        throw error;
      }
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, []);

  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    setTopHeading("Dashboard");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

  const handleChange = () => {
    console.log("change");
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <>
      {/* <PageTitle>Dashboard</PageTitle> */}

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mt-5 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Assets" value={assetcount}>
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <hr className="mb-4" />

      {/* ------------------Search------------------------------ */}

      {/* -----------------Quick Search Table ---------------  */}
    </>
  );
}

export default Dashboard;
