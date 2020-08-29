import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

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
  Dropdown,
  DropdownItem,
} from "@windmill/react-ui";

import AssetFloat from "../../components/FloatDetails/AssetFloat";
import { API } from "../../backendapi";
import UnitListModal from "../../components/Modal/UnitListModal";
import CustomerSelection from "../../components/Modal/AssetFilters/CustomerSelection";

function Assets() {
  const [floatbox, setFloatBox] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  // dropdown and modals
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(true);

  // filterhooks
  const [Business, setBusiness] = useState("");
  const [product, setProduct] = useState("");
  const [unit, setUnit] = useState({ _id: "", unitName: "" });
  const [customer, setCustomer] = useState({ _id: "", customerName: "" });
  const [account, setAccount] = useState({ _id: "", accountName: "" });

  // Selected Prod for the bottom bar----------
  const [selectedprod, setSelectedProd] = useState({});

  // search
  const [searchtype, setSearchType] = useState("");
  const [searchlabel, setSearchLabel] = useState("");
  const [searchquery, setSearchQuery] = useState("");

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
          business: Business,
          producttype: product,
          customer: customer,
          account: account,
          unitId: unit._id,
          customerId: customer._id,
          accountId: account._id,
          searchtype: searchtype,
          searchquery: searchquery,
        },
      };
      try {
        let response = await axios({
          url: `${API}/asset/getall`,
          method: "POST",
          data: payload,
        });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        throw error;
      }
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page, Business, product, refresh]);

  console.log(selectedprod);

  return (
    <>
      {/* ---------------------Customer Selection Modal----------------------------------------- */}
      <CustomerSelection
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setUnit={setUnit}
        unit={unit}
        customer={customer}
        setCustomer={setCustomer}
        account={account}
        setAccount={setAccount}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      {/* ---------------------Customer Selection Modal----------------------------------------- */}

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
          <div class="my-2 flex sm:flex-row flex-col items-start sm:items-center sm:justify-left h-full space-x-6 ">
            <div class="relative  ">
              <button
                class=" shadow-md appearance-none h-full rounded border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                }}
                // value={sortBy}
                // onChange={onSortToggle}
              >
                Pick Customer
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
                <option value="">All</option>
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
            {/* ---------------------------Product Drop Down-------------------------------------- */}
            <div className="relative ">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-4 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                aria-label="Notifications"
                aria-haspopup="true"
              >
                {product ? product : "Pick Product"}
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
              <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("");
                  }}
                >
                  <span>All</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Console");
                  }}
                >
                  <span>Console</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("DMP");
                  }}
                >
                  <span>DMP</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Inkjet");
                  }}
                >
                  <span>Inkjet</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("KVM");
                  }}
                >
                  <span>KVM</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Laptop");
                  }}
                >
                  <span>Laptop</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Laser");
                  }}
                >
                  <span>Laser</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("LMP");
                  }}
                >
                  <span>LMP</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Module");
                  }}
                >
                  <span>Module</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Router");
                  }}
                >
                  <span>Router</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Sanner");
                  }}
                >
                  <span>Scanner</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Server");
                  }}
                >
                  <span>Server</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Desktop");
                  }}
                >
                  <span>Desktop</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Storage");
                  }}
                >
                  <span>Storage</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Switch");
                  }}
                >
                  <span>Switch</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("UPS");
                  }}
                >
                  <span>UPS</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpen(false);
                    setProduct("Others");
                  }}
                >
                  <span>Others</span>
                </DropdownItem>
              </Dropdown>
            </div>

            {/* -------------------------------Search Type--------------------------------------- */}
            <div className="relative ">
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
                  }}
                >
                  <span>All</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpenTwo(false);
                    setSearchType("kbdsno");
                    setSearchLabel("Keyboard Serial");
                  }}
                >
                  <span>Keyboard Serial</span>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setIsOpenTwo(false);
                    setSearchType("cpusno");
                    setSearchLabel("CPU Serial");
                  }}
                >
                  <span>CPU Serial</span>
                </DropdownItem>
              </Dropdown>
            </div>
            {/* -----------------Search Bar------------------------------------ */}
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
                onSubmit={(e) => {
                  e.preventDefault();
                  setRefresh(!refresh);
                }}
              >
                <input
                  value={searchquery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  class="shadow-md z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </form>
            </div>
          </div>
          {/* ----------------------------------------Row 2 -------------------------------------------------------------------- */}
          <div className="my-4 flex ">
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
          </div>
        </div>
        {/* ----------------------------------------------Table----------------------------------------------------- */}
        <TableContainer className="">
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
                    setSelectedProd(user);
                  }}
                >
                  <TableCell className="w-8">
                    <div className="flex items-center text-sm ">
                      <Avatar
                        className="hidden ml-2 mr-3 md:block"
                        src="https://s3.amazonaws.com/uifaces/faces/twitter/suribbles/128.jpg"
                        alt="User image"
                      />
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
                    <Badge
                      type={user.business == "AMC" ? "primary" : "success"}
                    >
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
        {/* <TableContainer className="">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Customer</TableCell>
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
        </TableContainer> */}
        {/* ----------------------------------------------Table----------------------------------------------------- */}
      </div>

      {/* ------------------------------------Bottom Bar---------------------------------- */}
      <div class="rounded-lg  w-full bottom-0 h-64  border-t border-grey p-4 fixed pin-b bg-white dark:text-white dark:bg-gray-700 text-base ">
        Asset
        <hr />
        <br />
        <div className="flex items-start overflow-y-scroll">
          <div className="flex-row flex items-start space-x-40">
            <div className="flex-col flex items-start justify-center">
              <div>Business: {selectedprod.business}</div>
              <div>Purchase Number: {selectedprod.ponumber}</div>
              <div>
                {" "}
                Contract From:{" "}
                {moment(selectedprod.contractfrom).format("DD-MM-YYYY")}
              </div>
              <div>
                Contract To:{" "}
                {moment(selectedprod.contractto).format("DD-MM-YYYY")}
              </div>{" "}
            </div>
            <div className="flex-col flex items-start justify-center ">
              <div>
                Billing From:{" "}
                {moment(selectedprod.billingfrom).format("DD-MM-YYYY")}
              </div>{" "}
              <div>
                Billing To:{" "}
                {moment(selectedprod.billingto).format("DD-MM-YYYY")}
              </div>
              {/* AMCRate: */}
              {/* {selectedprod.amcrate} GST:{GST} GSTAMOUNT:{GSTAMOUNT} NetAmount: */}
              {/* {NetAmount} */}
            </div>
            <div className="flex-col flex items-start justify-center ">
              <div>ContractTo: {selectedprod.contractto}</div>{" "}
              <div>BillingFrom: {selectedprod.billingfrom}</div>{" "}
              <div>BillingTo: {selectedprod.billingto}</div>
              {/* AMCRate: */}
              {/* {selectedprod.amcrate} GST:{GST} GSTAMOUNT:{GSTAMOUNT} NetAmount: */}
              {/* {NetAmount} */}
            </div>
          </div>
          {/* <br />
        Product: {product}
        <br />
        Brind: {brand} model: {model} serialno: {serialno} os: {os}
        <br />
        {cpu.map((p, i) => {
          return (
            <>
              CPU:{p.cpuname}, {p.cpusno}
            </>
          );
        })} */}
        </div>
      </div>
    </>
  );
}

export default Assets;
