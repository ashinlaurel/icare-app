import React, { useState, useEffect, useContext } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";

import axios from "axios";
import moment from "moment";

import { API } from "../../backendapi";
import { Card, CardBody } from "@windmill/react-ui";

import Emp from "../../helpers/auth/EmpProfile";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import { Input, HelperText, Label, Select } from "@windmill/react-ui";
import { Link } from "react-router-dom";

import { EditIcon, TrashIcon } from "../../icons";
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

import { useHistory, useParams } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
/////////////----------------->>>>>> bug <<<<<------------customerList refresh--------------------------

function ViewSalary() {
  const { id } = useParams();
  let history = useHistory();
  const [activerowid, setActiveRowId] = useState(0);
  const [deleteId, setDeleteId] = useState(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { topheading, setTopHeading } = useContext(TopBarContext);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const [totalResults, setTotalResults] = useState(20);

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  // ----------------------Heading Use Effect-------------
  useEffect(() => {
    setTopHeading("Salary History");
    return () => {
      setTopHeading("");
    };
  }, []);
  // -----------------------------------------------------

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
          queryID: id,
        },
      };
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/admin/${Emp.getId()}/getAllSalary`,
          method: "POST",
          data: payload,
        });

        // console.log(response);
        // console.log(response.data.out);
        // console.log(response.data.total);
        setTotalResults(response.data.total);

        setData(response.data.out);
      } catch (error) {
        throw error;
      }
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  const DeleteModal = () => {
    return (
      <>
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        >
          <ModalHeader>Are you sure you want to delete!</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={async () => {
                try {
                  let response = await axios({
                    url: `${API}/admin/${Emp.getId()}/deleteSalary`,
                    method: "POST",
                    data: { id: deleteId },
                  });
                  console.log(response.data);
                  let temp = data.filter((x) => x._id != deleteId);
                  setData(temp);
                  setIsDeleteModalOpen(false);

                  // setData(response.data);
                } catch (error) {
                  throw error;
                }
              }}
            >
              Confirm Delete
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };
  return (
    <>
      <div>
        <TableContainer className="mt-4">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>Date</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>Employee ID</TableCell>
                <TableCell>Eligible Days</TableCell>
                <TableCell>Eligible B + DA</TableCell>
                <TableCell>Deductions</TableCell>
                <TableCell>Take Home Salary</TableCell>
                <TableCell>Gross Salary</TableCell>
                <TableCell>CTC</TableCell>
                <TableCell>Delete</TableCell>
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
                    // setBBarOpen(1);
                    setActiveRowId(user._id);
                    // console.log("the id is " + user._id);
                    // setSelectedProd(user);
                    // setAssetDetails(user);
                    // console.log(user.product.keyboard[0].keyboardname);
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
                        <p className="font-semibold">
                          {moment(user.date).format("DD/MM/YYYY")}
                        </p>
                        {/* <p className="text-xs text-gray-600 dark:text-gray-400">
                          {user.accountName}
                        </p> */}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.employeeName}</span>
                  </TableCell>
                  {/* <TableCell>
                    <Badge
                      type={user.business == "AMC" ? "primary" : "success"}
                    >
                      {user.business}
                    </Badge>
                  </TableCell> */}
                  <TableCell>
                    <span className="text-sm">{user.employeeID}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.EligibleDays}</span>
                  </TableCell>

                  <TableCell>
                    <span className="text-sm">{user.BplusDA}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.Deduction}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.TakeHomeSalary}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.GrossSalary}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.CTC}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      {/* <Button layout="link" size="icon" aria-label="Edit">
                        <Link
                          key={user._id}
                          to={`/app/unit/update/${user._id}`}
                        >
                          <EditIcon className="w-5 h-5" aria-hidden="true" />
                        </Link>{" "}
                      </Button> */}

                      <Button
                        layout="link"
                        size="icon"
                        aria-label="Delete"
                        onClick={async () => {
                          console.log("delete Asset");
                          setIsDeleteModalOpen(true);
                          setDeleteId(user._id);
                        }}
                      >
                        <TrashIcon className="w-5 h-5" aria-hidden="true" />
                      </Button>
                    </div>
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
      {DeleteModal()}
    </>
  );
}

export default ViewSalary;
