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
import { API } from "../../backendapi";
import Emp from "../../helpers/auth/EmpProfile";

export default function SelectEmployeeModalForCalls({
  isModalOpen,
  setIsModalOpen,
  setEmployee,
}) {
  const [values, setValues] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // console.log("HERERRE");
    async function getter() {
      let payload = {
        search: search,
        limit: 5,
      };
      // console.log("payload", payload);

      // here we are just getting all the employees not their calls
      try {
        let users = await Axios({
          url: `${API}/admin/${Emp.getId()}/getAllEmpCalls`,
          method: "POST",
          data: payload,
        });
        console.log(users.data);
        let temp = [];
        users.data.map((user) => {
          temp.push(user);
        });
        // console.log(temp);
        setValues(temp);
      } catch (error) {
        throw error;
      }
    }

    getter();
  }, [search]);

  const userTable = () => {
    return (
      <div>
        <form
          className="mb-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="block w-full pr-20 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
            placeholder="Search Customers"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <TableContainer className=" max-h-64 overflow-scroll">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                {/* <TableCell>Status</TableCell>
              <TableCell>Date</TableCell> */}
              </tr>
            </TableHeader>
            <TableBody>
              {values.map((user, i) => (
                <TableRow
                  key={i}
                  className="hover:bg-blue-300 dark:hover:bg-gray-100 bg-opacity-25 "
                  onClick={() => {
                    console.log(user);
                    setEmployee(user);

                    setIsModalOpen(false);
                    //   nextModal(true)
                  }}
                >
                  <TableCell>
                    <div>
                      <div>
                        <p className="font-semibold">{user.employeeName}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>
                        <p className="font-semibold">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            {/* <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              label="Table navigation"
              onChange={onPageChange}
            /> */}
          </TableFooter>
        </TableContainer>
      </div>
    );
  };

  return (
    <>
      {/* <div>
      <Button onClick={openModal}>Open modal</Button>
    </div> */}
      <Modal isOpen={isModalOpen}>
        <ModalHeader>Select Employee</ModalHeader>
        <ModalBody>{userTable()}</ModalBody>
        <ModalFooter>
          <Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button className="w-full sm:w-auto">Accept</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
