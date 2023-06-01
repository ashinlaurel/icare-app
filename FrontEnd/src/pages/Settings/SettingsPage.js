import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@windmill/react-ui";
import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import React, { useState, useEffect, useContext, useMemo } from "react";
import { Add, Remove } from "../../icons";
import Emp from "../../helpers/auth/EmpProfile";
const { default: Axios } = require("axios");
const { API } = require("../../backendapi");
const validator = require("validator");

export default function SettingsPage() {
  const [emails, setEmails] = useState([""]);
  //0 refers to model closed, 1 refers to model open with sucess, 2 refers to model open with unnsuccessful
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(0);
  //Populate emails initially by using the data in mongoDb
  useEffect(async () => {
    try {
      const result = await Axios({
        url: `${API}/settings/getReportsEmails`,
      });
      const tempEmails = result.data.emails;
      if (tempEmails) {
        setEmails(tempEmails);
      }
    } catch (e) {
      console.log(
        "Error occured in useEffect while trying to getReportsEmails: ",
        e
      );
    }
  }, []);

  const ReviewSubmit = () => {
    return (
      <>
        <Modal
          isOpen={isReviewModalOpen !== 0}
          onClose={() => setIsReviewModalOpen(0)}
        >
          <ModalHeader>
            {isReviewModalOpen === 1
              ? "Successfully Updated Emails"
              : "Error occured while updating emails. Try Again"}
          </ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              onClick={() => setIsReviewModalOpen(0)}
            >
              Okay!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const reportsEmailSetting = () => {
    return (
      <>
        <SectionTitle>Reports Emails</SectionTitle>
        <>
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              //Check if all emails are valid before sending a request
              for (const email of emails) {
                if (!validator.isEmail(email)) {
                  setIsReviewModalOpen(2);
                  return;
                }
              }

              const empId = Emp.getId();
              //Call the backend route to set emails in database
              try {
                let result = await Axios({
                  url: `${API}/settings/setReportsEmails`,
                  method: "POST",
                  data: { emails, empId },
                });
                if (result.error) {
                  throw result.error;
                }
                setIsReviewModalOpen(1);
                console.log("Updated Emails in DB");
              } catch (error) {
                setIsReviewModalOpen(2);
                console.log(
                  "Error occured while setting emails from settings to mongoDb: ",
                  error
                );
              }
            }}
          >
            <div className="flex flex-row items-center">
              <Label className="font-bold">
                <span>Emails</span>
              </Label>
              <div className="ml-3">
                <Button
                  onClick={() => {
                    let newEmails = [...emails, ""];
                    setEmails(newEmails);
                  }}
                  icon={Add}
                  layout="link"
                  aria-label="Like"
                />
              </div>
              <div className="ml-3">
                <Button
                  onClick={() => {
                    let newEmails = [...emails];
                    if (newEmails.length > 1) {
                      newEmails.pop();
                      setEmails(newEmails);
                    }
                  }}
                  icon={Remove}
                  layout="link"
                  aria-label="Like"
                />
              </div>
            </div>
            <hr className="mb-5 mt-2" />
            {/* <div className="grid gap-2 grid-cols-3"> */}
            <div className="flex flex-wrap ">
              {emails.map((item, i) => {
                return (
                  <div key={i} className="w-1/3 px-4 py-2 ">
                    <div className="flex flex-col lg:flex-row items-center justify-start lg:space-x-8">
                      <Label className="w-full my-3">
                        <span>Email {i + 1}</span>
                        <Input
                          className={`mt-1 border ${
                            !validator.isEmail(item)
                              ? "border-red-700 dark:border-red-400"
                              : ""
                          }`}
                          placeholder={`Email ${i + 1}`}
                          name="email"
                          value={item}
                          onChange={(e) => {
                            let newlist = [...emails];
                            newlist[i] = e.target.value;
                            setEmails(newlist);
                          }}
                        />
                      </Label>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center my-10">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </>
      </>
    );
  };

  return (
    <>
      {ReviewSubmit()}
      <div className="my-20">
        <PageTitle>Settings</PageTitle>
        {Emp.getRole() === 0 && reportsEmailSetting()}
        <div className="grid gap-8 my-8 md:grid-cols-2 xl:grid-cols-4"></div>
      </div>
    </>
  );
}
