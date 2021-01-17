import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import moment from "moment"


import { API } from "../../backendapi";

import logo from "./icarelogo.png"

import "./pdf.css"
import { useParams } from "react-router-dom";

function SalaryPDF() {
  const [data, setData] = useState({})
  const [date, setDate] = useState(new Date());

const { id } = useParams();
 


  useEffect(() => {
    // Using an IIFE
    
    (async function thegetter() {
      console.log("getter called",id);
      let payload = {
       id:id
      };
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/admin/getsalarybyid`,
          method: "POST",
          data: payload,
        });
        console.log(response.data);

        setData(response.data);
        
      } catch (error) {
        throw error;
      }
    })();
    
  }, []);


  return (
    <>
      <div className=" font-serif mx-20  my-10  border-black ">
        <div className="font-bold text-center my-4 bg-orange-400 uppercase text-white">
         SALARY STATEMENT {moment(date).format('MMMM')} 2019         
        </div>
        <img src={logo}  width="200px"/>
        {/* sec 1 */}
        <div className="flex flex-row justify-between my-8 mx-10">
            <div className="text-left">
                <div>Location: Trivandrum</div> 
                
            </div> 
            <div className="text-left mr-10">
            
                <div>Category:Engineer</div> 
                <div>Site:Trivandrum</div> 
                
                
            </div>
        </div>
        {/* sec 2 */}
        <div className="flex flex-row justify-between my-4 mx-10">
            <div className="text-left">
                <div>Employee ID:{data.employeeID}</div> 
                <div>Name:{data.employeeName}</div> 
                <div>ING Bank Account No</div> 
                <div>Designation</div> 
                <div>Department</div> 
                <div>Payment Mode</div> 
            </div> 
            <div className="text-left  mr-6">
            
                <div>Salary Month:{moment(data.date).format('MM/YY')}</div> 
                <div>Date of Joining:</div> 
                <div>Employee PF No:{data.EmployerPF}</div> 
                <div>Employee ESIC No:{data.ESINo}</div> 
                <div>Employee PAN No.:{data.basic}</div> 
                <div>Days Payable:{data.EligibleDays}</div> 
                
            </div>
        </div>
        {/* sec 3  table*/}
       
        <table class="tb mt-16 mx-10 text-center">
            <thead>
                <tr>
                <th className="tb-head tb-row px-2">Earnings</th>
                <th className="tb-head tb-row px-2">Amount</th>
                <th className="tb-head tb-row px-2">Deduction</th>
                <th className="tb-head tb-row px-2">Amount</th>
                
                
                </tr>
            </thead>
            <tbody>
            
            <tr className="">
                <td className=" tb-row px-2">Basic Wages</td>
                <td className=" tb-row px-2">{data.Basic}</td>
                <td className=" tb-row px-2">Emp. PF Contribution</td>
                <td className=" tb-row px-2">{data.EmplPF}</td>
               
            </tr>
            <tr className="">
                <td className=" tb-row px-2">H. R. A</td>
                <td className=" tb-row px-2">{data.HRA}</td>
                <td className=" tb-row px-2">Emp. ESIC Contribution</td>
                <td className=" tb-row px-2">{data.EmplESI}</td>
               
            </tr>
            <tr className="">
                <td className=" tb-row px-2">SPECIAL ALLOWANCES</td>
                <td className=" tb-row px-2">{data.basic}</td>
                <td className=" tb-row px-2">Extra Mobile Usage</td>
                <td className=" tb-row px-2">{data.ExtraMobileUsage}</td>
               
            </tr>

            <tr className="">
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2">Other Deductions</td>
                <td className=" tb-row px-2">{data.OtherDeductions}</td>
               
            </tr>

            <tr className="">
                <td className="text-white tb-row px-2">...</td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2"></td>
               
            </tr>

            <tr className="">
                <td className=" tb-row px-2">Total Earnings</td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2">Total Deductions</td>
                <td className=" tb-row px-2">{data.Deduction}</td>
               
            </tr>

            <tr className="">
                <td className=" tb-row px-2">Net Salary</td>
                <td className=" tb-row px-2">{data.GrossSalary}</td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2"></td>
               
            </tr>
            <tr className="">
                <td className=" tb-row px-2">Net Salary in Words</td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2"></td>
               
            </tr>

            <tr className="">
                <td className=" text-white tb-row px-2">...</td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2"></td>
               
            </tr>

            <tr className="">
                <td className=" tb-row px-2">Net Cost to the Company [CTC]</td>
                <td className=" tb-row px-2">{data.CTC}</td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2"></td>
               
            </tr>

            <tr className="">
                <td className="text-white tb-row px-2">...</td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2"></td>
                <td className=" tb-row px-2"></td>
               
            </tr>

            <tr className="">
                <td className=" tb-row px-2">Net Take Home Salary </td>
                <td className=" tb-row px-2">{data.TakeHomeSalary}</td>
                <td className=" tb-row px-2">Transfer to PF A/c</td>
                <td className=" tb-row px-2">{data.basic}</td>
               
            </tr>

           
           
            </tbody>
        </table>
       
    </div>
      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default SalaryPDF;
