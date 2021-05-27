import React, { useEffect, useContext, useState, useMemo } from "react";
import Emp from "../../helpers/auth/EmpProfile";
import { Input, Label, Button, Badge, Select } from "@windmill/react-ui";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@windmill/react-ui";

import { TopBarContext } from "../../context/TopBarContext";
import { API } from "../../backendapi";
import Axios from "axios";
import moment from "moment";

export default function ApplyLeave() {
  const { topheading, setTopHeading } = useContext(TopBarContext);
  const [values, setValues] = useState({
    name: "",
    employeeId: "",
    startdate: "",
    enddate: "item",
    reason: "",
  });

  const [messageModal, setMessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    setTopHeading("Create Item");
    return () => {
      setTopHeading("");
    };
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const submitItem = async () => {
    // if (values.sno === "") {
    //   setModalMessage("Serial number necessary");
    //   setMessageModal(true);
    //   console.log("missing inputs");
    //   return;
    // }
    // if (values.invdate === "") {
    //   setModalMessage("Added Date Required Necessary");
    //   setMessageModal(true);
    //   console.log("missing inputs");
    //   return;
    // }
    // if (values.wty === "") {
    //   setModalMessage("Warranty Period Necessary");
    //   setMessageModal(true);
    //   console.log("missing inputs");
    //   return;
    // }

    values.name = Emp.getName();
    values.employeeId = Emp.getId();
    console.log(values);

    await Axios({
      url: `${API}/leave/${Emp.getId()}/create`,
      method: "POST",
      data: values,
    })
      .then((data) => {
        console.log("Added", data);
        setModalMessage("Leave Application Submitted.");
        setMessageModal(true);

        let newval = values;
        newval.startdate = "";
        newval.enddate = "";
        newval.reason = "";

        setValues(newval);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const messageModalComponent = () => {
    return (
      <>
        <Modal isOpen={messageModal} onClose={() => setMessageModal(false)}>
          <ModalHeader>{modalMessage}</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setMessageModal(false)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  return (
    <div>
      {messageModalComponent()}
      <div className="px-4 py-3 mt-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="font-bold">
          <span>Apply for Leave</span>
        </Label>
        <hr className="mb-5 mt-2" />
        {/* ------------------------Row 1-------------------------- */}
        <div className="flex-row flex space-x-3 w-full">
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>Start Date*</span>
              <Input
                className="mt-1"
                type="date"
                value={values.startdate}
                onChange={handleChange("startdate")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.invnumber}</HelperText> */}
          </div>

          <div className="flex flex-col w-full">
            <Label className="w-full">
              <span>End Date*</span>
              <Input
                className="mt-1"
                type="date"
                value={values.enddate}
                onChange={handleChange("enddate")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.invnumber}</HelperText> */}
          </div>
          <div className="flex flex-col w-full">
            <Label className="w-full">
              <div>Number of Days</div>
              <div className="text-xl font-semibold my-2 p-2 mx-5 text-black dark:text-white">
                {values.startdate != "" && values.enddate != "" ? (
                  Math.floor(
                    (Date.parse(values.enddate) -
                      Date.parse(values.startdate)) /
                      86400000
                  ) > 0 ? (
                    Math.floor(
                      (Date.parse(values.enddate) -
                        Date.parse(values.startdate)) /
                        86400000
                    )
                  ) : (
                    <>Invalid Dates</>
                  )
                ) : null}
              </div>
            </Label>
            {/* <HelperText valid={false}>{err.invnumber}</HelperText> */}
          </div>
        </div>
        {/* ----------------------Row 2 ----------------------------- */}
        <div className="flex-row flex space-x-3 my-2">
          <div className="flex flex-col w-full ">
            <Label className="w-full">
              <span>Reason</span>
              <Input
                className="mt-1  "
                type="text-area"
                value={values.reason}
                onChange={handleChange("reason")}
              />
            </Label>
            {/* <HelperText valid={false}>{err.invnumber}</HelperText> */}
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////// */}

        <Button
          onClick={() => {
            submitItem();
          }}
          aria-label="Notifications"
          aria-haspopup="true"
          className="mt-4"
        >
          {" "}
          Add Item
        </Button>
      </div>
    </div>
  );
}
