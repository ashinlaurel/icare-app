import React, { useState, useEffect } from "react";
import axios from "axios";

import CTA from "../../components/CTA";
import InfoCard from "../../components/Cards/InfoCard";
import ChartCard from "../../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../../components/Chart/ChartLegend";
import PageTitle from "../../components/Typography/PageTitle";
import {
  ChatIcon,
  CartIcon,
  MoneyIcon,
  PeopleIcon,
  ButtonsIcon,
  HeartIcon,
} from "../../icons";
import RoundIcon from "../../components/RoundIcon";
import response from "../../utils/demo/tableData";
import {
  TableBody,
  TableContainer,
  Table,
  Button,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from "@windmill/react-ui";

import AssetFloat from "../../components/FloatDetails/AssetFloat";
import { API } from "../../backendapi";

function Assets() {
  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // Getting data states

  // pagination setup
  const resultsPerPage = 1;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data

  useEffect(() => {
    // Using an IIFE
    (async function thegetter() {
      let payload = {
        pages: {
          page: page,
          limit: resultsPerPage,
        },
      };
      try {
        let response = await axios({
          url: `${API}/asset/getall`,
          method: "POST",
          data: payload,
        });
        console.log(response.data);
      } catch (error) {
        throw error;
      }
    })();
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <>
      {floatbox ? <AssetFloat /> : null}
      <div className="mb-64">
        <div className="flex items-center">
          <PageTitle>Assets Management</PageTitle>
          <div>
            <Button
              className="mx-3"
              onClick={() => {
                setFloatBox(!floatbox);
              }}
              icon={HeartIcon}
              layout="link"
              aria-label="Like"
            />
          </div>
        </div>

        {/* <!-- Cards --> */}
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard title="Total clients" value="6389">
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="Account balance" value="$ 46,760.89">
            <RoundIcon
              icon={MoneyIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="New sales" value="376">
            <RoundIcon
              icon={CartIcon}
              iconColorClass="text-blue-500 dark:text-blue-100"
              bgColorClass="bg-blue-100 dark:bg-blue-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="Pending contacts" value="35">
            <RoundIcon
              icon={ChatIcon}
              iconColorClass="text-teal-500 dark:text-teal-100"
              bgColorClass="bg-teal-100 dark:bg-teal-500"
              className="mr-4"
            />
          </InfoCard>
        </div>

        <TableContainer className="">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Client</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map((user, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <Avatar
                        className="hidden mr-3 md:block"
                        src={user.avatar}
                        alt="User image"
                      />
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {user.job}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">$ {user.amount}</span>
                  </TableCell>
                  <TableCell>
                    <Badge type={user.status}>{user.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {new Date(user.date).toLocaleDateString()}
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
      </div>
    </>
  );
}

export default Assets;
