import React, { useState, useEffect, useRef } from "react";
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
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { API } from "../../backendapi";
import { recordId, validHierarchySelection } from "../../helpers/assetHierarchy";

export default function UnitListModal({
  isModalOpen,
  setIsModalOpen,
  unit: committedUnit,
  setUnit: commitUnit,
  account: committedAccount,
  setAccount: commitAccount,
  customer: committedCustomer,
  setCustomer: commitCustomer,
  setRefresh,
}) {
  const [customer, setCustomer] = useState(committedCustomer);
  const [account, setAccount] = useState(committedAccount);
  const [unit, setUnit] = useState(committedUnit);
  const [customers, setCustomers] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [units, setUnits] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [customersLoading, setCustomersLoading] = useState(false);
  const [accountsLoading, setAccountsLoading] = useState(false);
  const [unitsLoading, setUnitsLoading] = useState(false);
  const [error, setError] = useState("");
  const requests = useRef({ customers: 0, accounts: 0, units: 0 });
  const selected = useRef({ customerId: "", accountId: "" });
  const open = useRef(isModalOpen);
  open.current = isModalOpen;
  const handleChange = e => setSearch(e.target.value);

  const loadCustomers = async (text) => {
    const token = ++requests.current.customers;
    setCustomersLoading(true);
    setError("");
    try {
      const response = await axios.post(`${API}/customer/customers`, { search: text, role: 1, hierarchyOnly: true });
      if (open.current && token === requests.current.customers) {
        setCustomers(response.data.filter(row => row && row.role === 1));
      }
    } catch (err) {
      if (open.current && token === requests.current.customers) setError("Unable to load customers. Please search again.");
    } finally {
      if (open.current && token === requests.current.customers) setCustomersLoading(false);
    }
  };
  const handleSubmit = e => { e.preventDefault(); loadCustomers(search); };

  useEffect(() => {
    if (!isModalOpen) return;
    setCustomer(committedCustomer);
    setAccount(committedAccount);
    setUnit(committedUnit);
    selected.current = { customerId: recordId(committedCustomer._id), accountId: recordId(committedAccount._id) };
    setAccounts([]);
    setUnits([]);
    setAccountsLoading(false);
    setUnitsLoading(false);
    setTabIndex(0);
    setSearch("");
    loadCustomers("");
    return () => {
      requests.current.customers++;
      requests.current.accounts++;
      requests.current.units++;
    };
    // Snapshot committed values when opening; draft choices stay local until Select.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  const pickCustomer = async (row) => {
    if (row.role !== 1 || !customers.some(c => c._id === row._id)) return;
    selected.current = { customerId: row._id, accountId: "" };
    const token = ++requests.current.accounts;
    requests.current.units++;
    setCustomer({ _id: row._id, customerName: row.name, role: row.role });
    setAccount({ _id: "", accountName: "" });
    setUnit({ _id: "", unitName: "" });
    setAccounts([]);
    setUnits([]);
    setUnitsLoading(false);
    setAccountsLoading(true);
    setTabIndex(1);
    setError("");
    try {
      const response = await axios.post(`${API}/customer/accounts`, { customerId: row._id });
      if (open.current && token === requests.current.accounts && selected.current.customerId === row._id) {
        setAccounts(response.data.filter(a => a && a.role === 2 && recordId(a.parentCustomerId) === row._id));
      }
    } catch (err) {
      if (open.current && token === requests.current.accounts) setError("Unable to load accounts. Select the customer again.");
    } finally {
      if (open.current && token === requests.current.accounts) setAccountsLoading(false);
    }
  };

  const pickAccount = async (row) => {
    if (accountsLoading || row.role !== 2 || recordId(row.parentCustomerId) !== selected.current.customerId ||
        !accounts.some(a => a._id === row._id)) return;
    selected.current.accountId = row._id;
    const token = ++requests.current.units;
    setAccount({ _id: row._id, accountName: row.name, role: row.role, parentCustomerId: recordId(row.parentCustomerId) });
    setUnit({ _id: "", unitName: "" });
    setUnits([]);
    setUnitsLoading(true);
    setTabIndex(2);
    setError("");
    try {
      const response = await axios.post(`${API}/customer/units`, { accountId: row._id });
      if (open.current && token === requests.current.units && selected.current.accountId === row._id) {
        setUnits(response.data.filter(u => u && recordId(u.accountId) === row._id &&
          recordId(u.customerId) === selected.current.customerId));
      }
    } catch (err) {
      if (open.current && token === requests.current.units) setError("Unable to load units. Select the account again.");
    } finally {
      if (open.current && token === requests.current.units) setUnitsLoading(false);
    }
  };

  const pickUnit = row => {
    if (accountsLoading || unitsLoading || recordId(row.customerId) !== selected.current.customerId ||
        recordId(row.accountId) !== selected.current.accountId || !units.some(u => u._id === row._id)) return;
    setUnit({ _id: row._id, unitName: row.unitName, customerId: recordId(row.customerId), accountId: recordId(row.accountId) });
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
                    value={search}
                    onChange={handleChange}
                  />
                </form>
              </TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {customers.map((customer, i) => (
              <TableRow
                key={customer._id}
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
                key={account._id}
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
                key={unit._id}
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
        <ModalBody className="overflow-y-scroll h-64">
          <Tabs selectedIndex={tabIndex} onSelect={(ind) => { if ((ind === 1 && (!customer._id || accountsLoading)) || (ind === 2 && (!account._id || accountsLoading || unitsLoading))) return false; setTabIndex(ind); }}>
            <TabList>
              <Tab>Customer</Tab>
              <Tab disabled={!customer._id || accountsLoading}>Account</Tab>
              <Tab disabled={!account._id || accountsLoading || unitsLoading}>Unit</Tab>
            </TabList>
            <TabPanel>{customersLoading ? <p role="status">Loading customers…</p> : CustomerTable()}</TabPanel>
            <TabPanel>{accountsLoading ? <p role="status">Loading accounts…</p> : AccountTable()}</TabPanel>
            <TabPanel>{unitsLoading ? <p role="status">Loading units…</p> : UnitTable()}</TabPanel>
          </Tabs>
        </ModalBody>
        {error && <p role="alert" className="px-6 text-red-600">{error}</p>}
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
            disabled={accountsLoading || unitsLoading || !validHierarchySelection(customer, account, unit)}
            onClick={() => {
              if (!validHierarchySelection(customer, account, unit)) return;
              commitCustomer(customer);
              commitAccount(account);
              commitUnit(unit);
              setIsModalOpen(false);
              if (setRefresh) setRefresh(true);
            }}
          >
            Select
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
