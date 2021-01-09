import React from "react";
import moment from "moment";
import SectionTitle from "../Typography/SectionTitle";
import { API } from "../../backendapi";
import Emp from "../../helpers/auth/EmpProfile";
import axios from "axios";
import { Button } from "@windmill/react-ui";
import { Link } from "react-router-dom";
const SalaryModule = ({ asset }) => {
  console.log(asset);
  const {
    queryID,
    employeeID,
    employeeName,
    date,
    PFNo,
    ESINo,
    UANNo,
    Basic,
    DA,
    // BplusDA: values.BplusDA,
    HRAperc,
    rent,
    AccountName,
    BankName,
    BankAcNo,
    IFSCCode,
    BranchName,
    BplusDA,
    EligibleDays,
    PerformanceAllowance,
    Incentive,
    Bonus,
    GrossSalary,
    HRA,
    EmplPF,
    EmplESI,
    ExtraMobileUsage,
    LostDamage,
    OtherDeductions,
    Deduction,
    TakeHomeSalary,
    EmployerPF,
    EmployerESI,
    CTC,
  } = asset;

  return (
    <div>
      <div className="mt-1 flex flex-row ">
        <div className="flex flex-col  text-sm my-1 w-full ">
          <div>
            <span className="font-semibold w-1/5">PF No. :</span>
            {PFNo}
          </div>
          <div>
            <span className="font-semibold w-1/5">ESI No. </span> {ESINo}
          </div>
          <div>
            <span className="font-semibold w-1/5">UAN No. :</span> {UANNo}
          </div>
          <div>
            <span className="font-semibold w-1/5">Account Name </span>{" "}
            {AccountName}
          </div>
          <div>
            <span className="font-semibold w-1/5">Bank: </span> {BankName}
          </div>
          <div>
            <span className="font-semibold w-1/5">IFSC Code: </span> {IFSCCode}
          </div>
        </div>

        {/*  Row 2 */}

        <div className="flex flex-col  text-sm my-1 w-full ">
          <div>
            <span className="font-semibold w-1/5">Basic :</span>
            {Basic}
          </div>
          <div>
            <span className="font-semibold w-1/5">DA%: </span> {DA}%
          </div>
          <div>
            <span className="font-semibold w-1/5">Eligible Days:</span>{" "}
            {EligibleDays}
          </div>
          <div>
            <span className="font-semibold w-1/5">Payable Basic + DA: </span>{" "}
            {BplusDA}
          </div>
          <div>
            <span className="font-semibold w-1/5">HRA%: </span> {HRAperc}%
          </div>
          <div>
            <span className="font-semibold w-1/5">HRA: </span> {HRA}
          </div>
          <div>
            <span className="font-semibold w-1/5">Rent: </span> {rent}
          </div>
        </div>

        {/*  Row 3 */}
        <div className="flex flex-col  text-sm my-1 w-full ">
          <div>
            <span className="font-semibold w-1/5">Performance:</span>
            {PerformanceAllowance}
          </div>
          <div>
            <span className="font-semibold w-1/5">Incentive: </span> {Incentive}
          </div>
          <div>
            <span className="font-semibold w-1/5">Bonus:</span> {Bonus}
          </div>
          <div>
            <span className="font-semibold w-1/5">Gross Salary: </span>{" "}
            {GrossSalary}
          </div>
          <div>
            <span className="font-semibold w-1/5">Empl PF: </span> {EmplPF}
          </div>
          <div>
            <span className="font-semibold w-1/5">Empl ESI: </span> {EmplESI}
          </div>
        </div>
        {/* Row 4 */}
        <div className="flex flex-col  text-sm my-1 w-full ">
          <div>
            <span className="font-semibold w-1/5">Extra Mobile Usage:</span>
            {ExtraMobileUsage}
          </div>
          <div>
            <span className="font-semibold w-1/5">
              Salary/Other Advances :{" "}
            </span>{" "}
            {OtherDeductions}
          </div>
          <div>
            <span className="font-semibold w-1/5">Spare Lost/Damage :</span>{" "}
            {LostDamage}
          </div>
          <div>
            <span className="font-semibold w-1/5">Net Deductions : </span>{" "}
            {Deduction}
          </div>
          <div>
            <span className="font-semibold w-1/5">Employer PF: </span>{" "}
            {EmployerPF}
          </div>
          <div>
            <span className="font-semibold w-1/5">Employer ESI: </span>{" "}
            {EmployerESI}
          </div>
        </div>
        {/* -----------Row 5---------- */}
        {/* <div className="flex flex-col  text-sm my-1 w-full ">
          {ram[0] ? (
            <div>
              <span className="font-semibold w-1/5">RAM1 Serial:</span>{" "}
              {ram[0] ? ram[0].ramsno : ""}
            </div>
          ) : null}

          {ram[1] ? (
            <div>
              <span className="font-semibold w-1/5">RAM2 Model:</span>{" "}
              {ram[1] ? ram[1].ramname : ""}
            </div>
          ) : null}

          {ram[1] ? (
            <div>
              <span className="font-semibold w-1/5">RAM2 Serial : </span>{" "}
              {ram[1] ? ram[1].ramsno : ""}
            </div>
          ) : null}
          {opticaldrive[0] ? (
            <div>
              <span className="font-semibold w-1/5">Optical Model: </span>{" "}
              {opticaldrive[0] ? opticaldrive[0].opticaldrivename : ""}
            </div>
          ) : null}

          {opticaldrive[0] ? (
            <div>
              <span className="font-semibold w-1/5">Optical Serial : </span>{" "}
              {opticaldrive[0] ? opticaldrive[0].opticaldrivesno : ""}
            </div>
          ) : null}
        </div> */}
      </div>
    </div>
  );
};

export default SalaryModule;
