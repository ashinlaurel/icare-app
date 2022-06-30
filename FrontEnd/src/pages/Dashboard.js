import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import axios from "axios";

import Emp from "../helpers/auth/EmpProfile";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import {
  ChatIcon,
  CartIcon,
  MoneyIcon,
  PeopleIcon,
  EditIcon,
  TrashIcon,
} from "../icons";
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
  Dropdown,
  DropdownItem,
  Button,
} from "@windmill/react-ui";

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";
import { API } from "../backendapi";
import SectionTitle from "../components/Typography/SectionTitle";
import { TopBarContext } from "../context/TopBarContext";
import { Link } from "react-router-dom";
import ValueCard from "../components/Cards/ValueCard";

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
  const [customercount, setCustomerCount] = useState(0);
  const [assetcount, setAssetCount] = useState(0);
  const [amcassetcount, setAmcAssetCount] = useState(0);
  const [wtyassetcount, setWtyAssetCount] = useState(0);
  const [nosassetcount, setNosAssetCount] = useState(0);
  const [unitcount, setUnitCount] = useState(0);
  const [amccontracts, setAmcContracts] = useState(0); // unique PO numbers
  const [assetvalue, setAssetValue] = useState(0);
  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // ---------------------Table Data Getter -------------------------
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
  }, [page, refresh]);

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
        // temporarily not calling these functions
        // let tamccontract = await axios({
        //   url: `${API}/asset/countamccontract`,
        //   method: "GET",
        // });
        // let tassetvalue = await axios({
        //   url: `${API}/asset/countassetvalue`,
        //   method: "GET",
        // });
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
        // setAmcContracts(tamccontract.data);
        // setAssetValue(tassetvalue.data);
      } catch (error) {
        throw error;
      }
    })();

    return () => {
      console.log("exiting dashboard");
    };
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, []);

  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    if (API == "http://localhost:3000/api") {
      setTopHeading("Dashboard: Dev Environment");
    } else {
      setTopHeading("Dashboard");
    }

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
        <ValueCard title="Total Value" value="0">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </ValueCard>
      </div>
      <hr className="mb-4" />

      {/* ------------------Search------------------------------ */}
      <SectionTitle>Quick Search</SectionTitle>
      <div className="flex flex-row items-center space-x-2">
        <div className="relative z-50 ">
          <button
            onClick={() => {
              setIsOpenTwo(!isOpenTwo);
            }}
            className="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            aria-label="Notifications"
            aria-haspopup="true"
          >
            {searchtype ? searchlabel : "Pick Search Type"}
          </button>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
          <Dropdown isOpen={isOpenTwo} onClose={() => setIsOpenTwo(false)}>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("");
                setSearchLabel("");
                setDisabler(true);
                setSearchQuery("");
                setRefresh(!refresh);
              }}
            >
              <span>All</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("prodserial");
                setSearchLabel("Product Serial");
                setDisabler(false);
              }}
            >
              <span>Product Serial</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("keyboardsno");
                setSearchLabel("Keyboard Serial");
                setDisabler(false);
              }}
            >
              <span>Keyboard Serial</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("mousesno");
                setSearchLabel("Mouse Serial");
                setDisabler(false);
              }}
            >
              <span>Mouse Serial</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("motherboardsno");
                setSearchLabel("Motherboard Serial");
                setDisabler(false);
              }}
            >
              <span>Motherboard Serial</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("monitorsno");
                setSearchLabel("Monitor Serial");
                setDisabler(false);
              }}
            >
              <span>Monitor Serial</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("hddsno");
                setSearchLabel("HDD Serial");
                setDisabler(false);
              }}
            >
              <span>HDD Serial</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("cpusno");
                setSearchLabel("CPU Serial");
                setDisabler(false);
              }}
            >
              <span>CPU Serial</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("ramsno");
                setSearchLabel("Ram Serial");
                setDisabler(false);
              }}
            >
              <span>RAM Serial</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("smpssno");
                setSearchLabel("SMPS Serial");
                setDisabler(false);
              }}
            >
              <span>SMPS Serial</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("fansno");
                setSearchLabel("Fan Serial");
                setDisabler(false);
              }}
            >
              <span>Fan Serial</span>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setIsOpenTwo(false);
                setSearchType("opticaldrivesno");
                setSearchLabel("Optical Drive Serial");
                setDisabler(false);
              }}
            >
              <span>Optical Drive Serial</span>
            </DropdownItem>
          </Dropdown>
        </div>

        <div class="block relative ">
          <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
            </svg>
          </span>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setRefresh(!refresh);
            }}
          >
            <input
              value={searchquery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              disabled={disabler}
              class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </form>
        </div>
      </div>

      {/* -----------------Quick Search Table ---------------  */}
      <TableContainer className="mt-4">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Customer</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Business</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Product Serial</TableCell>
              <TableCell>Contract From</TableCell>
              <TableCell>Contract To</TableCell>
              <TableCell>Purchase Number</TableCell>
              <TableCell>Purchase Date</TableCell>
              {/* <TableCell>Edit/Delete</TableCell> */}
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow
                className={`hover:shadow-lg dark:hover:bg-gray-600 ${
                  activerowid == user._id
                    ? "bg-blue-300 shadow-lg dark:bg-gray-600"
                    : "white"
                } `}
                key={i}
                onClick={() => {
                  setActiveRowId(user._id);
                  // console.log("the id is " + user._id);
                  setSelectedProd(user);
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
                  <span className="text-sm">{user.product.serialno}</span>
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
                {/* <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit">
                      <Link key={user._id} to={`/app/unit/update/${user._id}`}>
                        <EditIcon className="w-5 h-5" aria-hidden="true" />
                      </Link>
                      {""}
                    </Button>

                    <Button
                      layout="link"
                      size="icon"
                      aria-label="Delete"
                      onClick={async () => {
                        console.log("delete Asset");
                        try {
                          let response = await axios({
                            url: `${API}/asset/${Emp.getId()}/delete`,
                            method: "POST",
                            data: { id: user._id },
                          });
                          console.log(response.data);
                          let temp = data.filter((x) => x._id != user._id);
                          setData(temp);

                          // setData(response.data);
                        } catch (error) {
                          throw error;
                        }
                      }}
                    >
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell> */}
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

      {/* --------------Charts---------------------------- */}
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
