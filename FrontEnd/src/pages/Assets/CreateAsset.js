import React, { useState } from "react";
import axios from "axios";
import { API } from "../../backendapi";

import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import {
  Input,
  HelperText,
  Label,
  Select,
  Textarea,
  Button,
} from "@windmill/react-ui";

import { MailIcon, Add, Remove } from "../../icons";
import Axios from "axios";
import { data } from "autoprefixer";

function CreateAsset() {
  // Form states
  //   const theform = {
  //     brand: "",
  //     model: "",
  //     serialno: "",
  //     os: "",
  //     cpu: [
  //       { cpuname: "Intel", cpusno: "321AS26235" },
  //       { cpuname: "", cpusno: "" },
  //     ],
  //   };
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [serialno, setSerialNo] = useState("");
  const [os, setOs] = useState("");
  const [cpu, setCpu] = useState([{ cpuname: "", cpusno: "" }]);

  //functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      brand: brand,
      model: model,
      serialno: serialno,
      os: os,
      cpu: cpu,
    };
    console.log(payload);
    // console.log(API);
    try {
      await axios({
        url: `${API}/product/server/create`,
        method: "POST",
        data: payload,
      });
      console.log("Done");
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <PageTitle>Create Asset</PageTitle>
      <SectionTitle>Server</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <form onSubmit={handleSubmit}>
          <Label className="font-bold">
            <span>Essential Details</span>
          </Label>
          <hr className="mb-5 mt-2" />
          <Label className="my-3">
            <span>Brand</span>
            <Input
              className="mt-1"
              placeholder="Brand"
              name="brand"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            />
          </Label>
          <Label className="my-3">
            <span>Model</span>
            <Input
              className="mt-1"
              placeholder="Model"
              name="model"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />
          </Label>
          <Label className="my-3">
            <span>Serial Number</span>
            <Input
              className="mt-1"
              placeholder="Serial Number"
              name="serialno"
              value={serialno}
              onChange={(e) => {
                setSerialNo(e.target.value);
              }}
            />
          </Label>
          <Label className="my-3">
            <span>OS</span>
            <Input
              className="mt-1"
              placeholder="OS"
              name="os"
              value={os}
              onChange={(e) => {
                setOs(e.target.value);
              }}
            />
          </Label>
          {/* ----------------CPU------------------------------- */}
          <div className="flex flex-row items-center">
            <Label className="font-bold">
              <span>CPU</span>
            </Label>
            <div className="ml-3">
              <Button
                onClick={() => {
                  let newcpu = [...cpu];
                  let add = { cpuname: "", cpusno: "" };
                  newcpu.push(add);
                  setCpu(newcpu);
                }}
                icon={Add}
                layout="link"
                aria-label="Like"
              />
            </div>
            <div className="ml-3">
              <Button
                onClick={() => {
                  let newcpu = [...cpu];
                  if (newcpu[1]) {
                    newcpu.pop();
                    setCpu(newcpu);
                  }
                }}
                icon={Remove}
                layout="link"
                aria-label="Like"
              />
            </div>
          </div>
          <hr className="mb-5 mt-2" />
          {cpu.map((item, i) => {
            return (
              <div key={i}>
                <Label className="my-3">
                  <span>CPU {i + 1}</span>
                  <Input
                    className="mt-1"
                    placeholder={`CPU ${i + 1}`}
                    name="cpuname"
                    value={item.cpuname}
                    onChange={(e) => {
                      let newlist = [...cpu];
                      newlist[i].cpuname = e.target.value;
                      setCpu(newlist);
                    }}
                  />
                </Label>
                <Label className="my-3">
                  <span>CPU {i + 1}: Serial Number</span>
                  <Input
                    className="mt-1"
                    placeholder={`CPU ${i + 1}'s Serial Number `}
                    name="cpusno"
                    value={item.cpusno}
                    onChange={(e) => {
                      let newlist = [...cpu];
                      newlist[i].cpusno = e.target.value;
                      setCpu(newlist);
                    }}
                  />
                </Label>
              </div>
            );
          })}
          {/* ----------------CPU------------------------------- */}

          <div className="flex items-center justify-center my-10">
            <Button type="submit">Submit</Button>
          </div>

          {/* <Label className="mt-4">
            <span>Disabled</span>
            <Input disabled className="mt-1" placeholder="Jane Doe" />
          </Label> */}
        </form>
      </div>
    </>
  );
}

export default CreateAsset;
