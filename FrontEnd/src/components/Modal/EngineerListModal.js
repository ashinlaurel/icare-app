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

export default function EngineerListModal({
  isModalOpen,
  setIsModalOpen,
  setEngineer,
  nextModal,
}) {
  const [values, setValues] = useState([]);
  useEffect(() => {
    console.log("HERERRE");
    Axios.post(`${API}/admin/${Emp.getId()}/getAll`)
      .then((users) => {
        console.log(users.data);
        let temp = [];
        users.data.map((user) => {
          temp.push(user);
        });
        setValues(temp);
      })
      .catch((err) => {
        console.log("axiosErr", err);
      });
  }, []);

  const userTable = () => {
    return (
      <TableContainer>
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
                  setEngineer({
                    _id: user._id,
                    enggName: user.employeeName,
                  });
                  setIsModalOpen(false);
                  nextModal(true);
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
    );
  };

  return (
    <>
      {/* <div>
      <Button onClick={openModal}>Open modal</Button>
    </div> */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader>Assign Engineer</ModalHeader>
        <ModalBody>{userTable()}</ModalBody>
        <ModalFooter>
          <Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>
          <Button className="w-full sm:w-auto">Accept</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
