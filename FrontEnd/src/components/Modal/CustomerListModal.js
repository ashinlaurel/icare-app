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

export default function CustomerListModal({
  isModalOpen,
  setIsModalOpen,
  setCustomer,
}) {
  const [values, setValues] = useState([]);
  useEffect(() => {
    Axios.get(`${API}/customers`)
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
              <TableCell>Customer</TableCell>
              <TableCell>Unit</TableCell>
              {/* <TableCell>Status</TableCell>
              <TableCell>Date</TableCell> */}
            </tr>
          </TableHeader>
          <TableBody>
            {values.map((user, i) => (
              <TableRow
                key={i}
                className="hover:bg-purple-900 "
                onClick={() => {
                  setCustomer({
                    _id: user._id,
                    customerName: user.customerName,
                  });
                  setIsModalOpen(false);
                }}
              >
                <TableCell>
                  <div>
                    <div>
                      <p className="font-semibold">{user.customerName}</p>
                    </div>
                  </div>
                </TableCell>
                {/* <TableCell>
                    <span className="text-sm">$ {user.email}</span>
                  </TableCell> */}
                {/* <TableCell>
                    <Badge type={user.status}>{user.status}</Badge>
                  </TableCell> */}
                <TableCell>
                  <span className="text-sm">{user.infoId.unit}</span>
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
        <ModalHeader>Modal header</ModalHeader>
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
