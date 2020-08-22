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

  // filterhooks
  const [Business, setBusiness] = useState("");

  // Getting data states

  // pagination setup
  const resultsPerPage = 10;
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
        filters: {
          business: { Business },
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
  }, [page, Business]);

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
        {/* ------------------------------------------Filters----------------------------------------------------------------------------  */}
        <div className="">
          {/* -------------------------------------Row 1 ------------------------------------------------------------------------------- */}
          <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left  h-full ">
            <div className="flex flex-row items-center justify-center mr-1 h-10 sm:h-full w-48 rounded border py-2 shadow-md md:ml-5 md:mr-5  appearance-none  bg-white border-gray-400 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
              <label className="mr-2">Range Mode:</label>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 shadow-md  focus:outline-none"
                // defaultChecked={}
                // onInput={() => {}}
              />
            </div>
            <div className="flex sm:inline-flex my-3 sm:my-0">
              <div className="mr-2 sm:mr-0">
                <input
                  type="date"
                  id="thedate2"
                  name="thedate1"
                  // value={moment(datesel).format("YYYY-MM-DD")}
                  className="shadow-md h-full rounded border block appearance-none w-40 sm:w-44 bg-white border-gray-400 text-gray-700 text-xs md:text-sm py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  // onInput={(e) => {
                  // onDateSelection(date);
                  // onDateSelection(e.target.value);
                  // }}
                />
              </div>
              <div className="ml-2 sm:ml-2 ">
                <input
                  type="date"
                  id="thedate2"
                  name="thedate2"
                  // value={moment(dateseltwo).format("YYYY-MM-DD")}
                  className="shadow-md h-full rounded border block appearance-none w-40 sm:w-44 bg-white border-gray-400 text-gray-700 text-xs md:text-sm py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  // onInput={(e) => {
                  // onDateSelection(date);
                  // onDateSelectionTwo(e.target.value);
                  // }}
                  // disabled={!rangebol}
                />
              </div>
            </div>

            <div class="block relative xl:ml-64">
              <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  viewBox="0 0 24 24"
                  class="h-4 w-4 fill-current text-gray-500"
                >
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                </svg>
              </span>
              <form
              // onSubmit={(e) => {
              // searchSubmit(e);
              // }}
              >
                <input
                  // value={searchinp}
                  // onChange={(e) => setSearchInp(e.target.value)}
                  placeholder="Search"
                  class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </form>
            </div>
          </div>
          {/* ----------------------------------------Row 2 -------------------------------------------------------------------- */}
          <div className="mt-4 flex md:px-5">
            <div class="relative ">
              <select
                class=" shadow-md appearance-none h-full rounded border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                // value={sortBy}
                // onChange={onSortToggle}
              >
                <option value="TIME_ASC">Time(Latest)</option>
                <option value="TIME_DESC">Time(Oldest)</option>
                <option value="NAME_ASC">Name(A-Z)</option>
                <option value="NAME_DESC">Name(Z-A)</option>
              </select>

              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div class="relative mx-5 ">
              <select
                class=" shadow-md h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                value={Business}
                onChange={(e) => {
                  setBusiness(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Business Type
                </option>
                <option value="AMC">AMC</option>
                <option value="Warranty">Warranty</option>
              </select>

              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Unit</TableCell>
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
        {/* ----------------------------------------------Table----------------------------------------------------- */}
      </div>
    </>
  );
}

export default Assets;
