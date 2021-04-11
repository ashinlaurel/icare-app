import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
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
} from "@windmill/react-ui";
import Axios from "axios";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { API } from "../../backendapi";


export default function UnitListModal({
  isModalOpen,
  setIsModalOpen,
  unit,
  setUnit,
  account,
  setAccount,
  customer,
  setCustomer,
}) {
  const [customers, setCustomers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [units, setUnits] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [search, setSearch] = useState("");

  //   Search Functions---------------------------------------------------------
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //   -----------------------Send Search for Fuzzy ---------------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      search: search,
      role: 1,
    };
    try {
      let response = await axios({
        url: `${API}/customer/customers`,
        method: "POST",
        data: payload,
      });
      console.log(response.data);
      setCustomers(response.data);
    } catch (error) {
      throw error;
    }
  };

  //   ---------------Intital Load ----------------------------

  useEffect(() => {
    (async function thegetter() {
      let payload = {
        search: search,
        role: 1,
      };
      try {
        let response = await axios({
          url: `${API}/customer/customers`,
          method: "POST",
          data: payload,
        });
        console.log(response.data);
        setCustomers(response.data);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  const pickCustomer = async (customer) => {
    // console.log(customer);
    setCustomer({
      _id: customer._id,
      customerName: customer.name,
    });
    setAccount({
      _id: "",
      accountName: "",
    });
    setUnit({
      _id: "",
      unitName: "",
    });
    try {
      const accs = await Axios.post(`${API}/customer/accounts`, {
        customerId: customer._id,
      });
      console.log(accs.data);
      // let temp = [];
      // accs.data.map((acc) => {
      //   temp.push(acc);
      // });
      setAccounts(accs.data);
      setTabIndex(1);
    } catch (err) {
      console.log("axiosErr", err);
    }
  };

  const pickAccount = async (account) => {
    console.log(account);
    setAccount({
      _id: account._id,
      accountName: account.name,
    });
    setUnit({
      _id: "",
      unitName: "",
    });
    try {
      const u = await Axios.post(`${API}/customer/units`, {
        accountId: account._id,
      });
      console.log(u.data);
      // let temp = [];
      // u.data.map((acc) => {
      //   temp.push(acc);
      // });
      setUnits(u.data);
      setTabIndex(2);
    } catch (err) {
      console.log("axiosErr", err);
    }
  };

  const pickUnit = async (unit) => {
    console.log(unit);
    setUnit({
      _id: unit._id,
      unitName: unit.unitName,
    });
  };

  const CustomerTable = () => {
    return (
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Customer</TableCell>
              {/* <TableCell>Unit</TableCell> */}
              {/* <TableCell>Status</TableCell>
              <TableCell>Date</TableCell> */}
            </tr>
            <tr>
              <TableCell>
                <form onSubmit={handleSubmit}>
                  <input
                    className="block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="Search Customers"
                    onChange={handleChange}
                  />
                </form>
              </TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {customers.map((customer, i) => (
              <TableRow
                key={i}
                className="hover:bg-purple-200 cursor-pointer"
                onClick={() => pickCustomer(customer)}
              >
                <TableCell>
                  <div>
                    <div>
                      <p className="font-semibold">{customer.name}</p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter></TableFooter>
      </TableContainer>
    );
  };

  const AccountTable = () => {
    return (
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Account</TableCell>
              {/* <TableCell>Unit</TableCell> */}
              {/* <TableCell>Status</TableCell>
              <TableCell>Date</TableCell> */}
            </tr>
          </TableHeader>
          <TableBody>
            {accounts.map((account, i) => (
              <TableRow
                key={i}
                className="hover:bg-purple-200 cursor-pointer"
                onClick={() => pickAccount(account)}
              >
                <TableCell>
                  <div>
                    <div>
                      <p className="font-semibold">{account.name}</p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter></TableFooter>
      </TableContainer>
    );
  };

  const UnitTable = () => {
    return (
      <TableContainer>
        <Table className=" w-full overflow-y-scroll">
          <TableHeader>
            <tr>
              <TableCell>Unit</TableCell>
              {/* <TableCell>Unit</TableCell> */}
              {/* <TableCell>Status</TableCell>
              <TableCell>Date</TableCell> */}
            </tr>
          </TableHeader>
          <TableBody>
            {units.map((unit, i) => (
              <TableRow
                key={i}
                className="hover:bg-purple-200 cursor-pointer"
                onClick={() => pickUnit(unit)}
              >
                <TableCell>
                  <div>
                    <div>
                      <p className="font-semibold">{unit.unitName}</p>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter></TableFooter>
      </TableContainer>
    );
  };

  return (
    <>
      {/* <div>
      <Button onClick={openModal}>Open modal</Button>
    </div> */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
        <ModalHeader>
          Select{" "}
          {tabIndex == 0 ? (
            <>Customer</>
          ) : tabIndex == 1 ? (
            <>Account</>
          ) : (
            <>Unit</>
          )}
        </ModalHeader>
        <ModalBody className="overflow-y-scroll h-64" >
          <Tabs selectedIndex={tabIndex} onSelect={(ind) => setTabIndex(ind)}>
            <TabList>
              <Tab>Customer</Tab>
              <Tab>Account</Tab>
              <Tab>Unit</Tab>
            </TabList>
            <TabPanel>{CustomerTable()}</TabPanel>
            <TabPanel>{AccountTable()}</TabPanel>
            <TabPanel>{UnitTable()}</TabPanel>
          </Tabs>
          
        </ModalBody>
        <ModalFooter>
        <Badge className="mx-2 text-md" type="success">
            Customer: {customer.customerName}
          </Badge>
          <Badge className="mx-2 text-md" type="success">
            Account : {account.accountName}
          </Badge>
          <Badge className="mx-2 text-md" type="success">
            Unit: {unit.unitName}
          </Badge>
          <Button
            className="w-full sm:w-auto"
            // layout="outline"
            onClick={() => setIsModalOpen(false)}
          >
            Select
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
