import React, { useState, useEffect } from "react";
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

export default function AddUnitModal({
  isModalOpen,
  setIsModalOpen,
  account,
  setAccount,
  customer,
  setCustomer,
}) {
  const [customers, setCustomers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [units, setUnits] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    Axios.post(`${API}/customer/customers`, { search: "", role: 1 })
      .then((users) => {
        console.log(users.data);
        let temp = [];
        users.data.map((user) => {
          temp.push(user);
        });
        setCustomers(temp);
      })
      .catch((err) => {
        console.log("axiosErr", err);
      });
  }, []);

  const pickCustomer = async (customer) => {
    // console.log(customer);
    setCustomer({
      _id: customer._id,
      customerName: customer.name,
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

  return (
    <>
      {/* <div>
      <Button onClick={openModal}>Open modal</Button>
    </div> */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader>
          Select {tabIndex == 0 ? <>Customer</> : <>Account</>}
        </ModalHeader>
        <ModalBody>
          <Tabs selectedIndex={tabIndex} onSelect={(ind) => setTabIndex(ind)}>
            <TabList>
              <Tab>Customer</Tab>
              <Tab>Account</Tab>
            </TabList>
            <TabPanel>{CustomerTable()}</TabPanel>
            <TabPanel>{AccountTable()}</TabPanel>
          </Tabs>
          <Badge className="mx-2 text-md" type="success">
            Customer: {customer.customerName}
          </Badge>
          <Badge className="mx-2 text-md" type="success">
            Account : {account.accountName}
          </Badge>
        </ModalBody>
        <ModalFooter>
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
