import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";

import Emp from "../helpers/auth/EmpProfile";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import response from "../utils/demo/tableData";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Card,
  CardBody,
  Label,
} from "@windmill/react-ui";

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";
import Axios from "axios";
import { API } from "../backendapi";
import SectionTitle from "../components/Typography/SectionTitle";
import { TopBarContext } from "../context/TopBarContext";

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

  // Count States ---------------------------------------------
  const [customercount, setCustomerCount] = useState(0);
  const [assetcount, setAssetCount] = useState(0);
  const [amcassetcount, setAmcAssetCount] = useState(0);
  const [wtyassetcount, setWtyAssetCount] = useState(0);
  const [nosassetcount, setNosAssetCount] = useState(0);
  const [unitcount, setUnitCount] = useState(0);
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
      try {
        let tcustomercount = await axios({
          url: `${API}/customer/countcustomers`,
          method: "GET",
        });
        let tassetcount = await axios({
          url: `${API}/asset/count`,
          method: "GET",
        });
        let tamcassetcount = await axios({
          url: `${API}/asset/countamc`,
          method: "GET",
        });
        let twtyassetcount = await axios({
          url: `${API}/asset/countwty`,
          method: "GET",
        });
        let tnosassetcount = await axios({
          url: `${API}/asset/countnos`,
          method: "GET",
        });
        let tunitcount = await axios({
          url: `${API}/unit/count`,
          method: "GET",
        });
        // console.log(tassetcount);
        setCustomerCount(tcustomercount.data);
        setAssetCount(tassetcount.data);
        setAmcAssetCount(tamcassetcount.data);
        setWtyAssetCount(twtyassetcount.data);
        setNosAssetCount(tnosassetcount.data);
        setUnitCount(tunitcount.data);
      } catch (error) {
        throw error;
      }
    })();

    return () => {
      console.log("exiting dashboard");
    };
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, []);

  // ---------------------------------------------

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    // Using an IIFE
    (async function thegetter() {
      console.log("getter called");
      let payload = {
        pages: {
          page: page,
          limit: resultsPerPage,
        },
        filters: {
          searchtype: searchtype,
          searchquery: searchquery,
        },
      };
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/asset/${Emp.getId()}/getall`,
          method: "POST",
          data: payload,
        });
        console.log(response.data.out);
        setTotalResults(response.data.total);
        // const { total, data } = response.data;
        // console.log(data + "Now");
        setData(response.data.out);
      } catch (error) {
        throw error;
      }
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

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
        <InfoCard title="Total Customers" value={customercount}>
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total Units" value={unitcount}>
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Total Assets" value={assetcount}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Assets (AMC)" value={amcassetcount}>
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Assets (WTY)" value={wtyassetcount}>
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Assets (NOS)" value={nosassetcount}>
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="AMC Contracts" value="0">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Total Value" value="0">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      {/* ------------------Search------------------------------ */}
      <SectionTitle>Search</SectionTitle>

      <Card className="mb-8 shadow-md">
        <CardBody>
          <Label className="">
            <div className="relative text-gray-500 focus-within:text-purple-600">
              <form onSubmit={handleSubmit}>
                <input
                  className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder="Quick Search"
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
      {/* -----------------Quick Search Table ---------------  */}
      <TableContainer className="mt-4">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Customer</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Business</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Contract From</TableCell>
              <TableCell>Contract To</TableCell>
              <TableCell>Purchase Number</TableCell>
              <TableCell>Purchase Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow
                className="hover:shadow-lg"
                key={i}
                onClick={() => {
                  // setSelectedProd(user);
                  // setAssetDetails(user);
                }}
              >
                <TableCell className="w-8">
                  <div className="flex items-center text-sm ">
                    {/* <Avatar
                        className="hidden ml-2 mr-3 md:block"
                        src="https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg"
                        alt="User image"
                      /> */}
                    <div>
                      <p className="font-semibold">{user.customerName}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {user.accountName}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.unitName}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.business == "AMC" ? "primary" : "success"}>
                    {user.business}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.producttype}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {moment(user.contractfrom).format("DD/MM/YYYY")}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {moment(user.contractto).format("DD/MM/YYYY")}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.ponumber}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {moment(user.podate).format("DD/MM/YYYY")}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>

      {/* <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Revenue">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div> */}
    </>
  );
}

export default Dashboard;
