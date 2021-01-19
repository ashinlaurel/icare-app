import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import moment from "moment"


import { API } from "../../backendapi";

import logo from "./icarelogo.png"

import "./pdf.css"
import { useParams } from "react-router-dom";

function LSTPDF() {
const [data, setData] = useState({});
const [fromAddr, setFromAddr] = useState({})
const [toArrd, setToArrd] = useState({});

const { id } = useParams();
 

const [sum, setSum] = useState(0)

  useEffect(() => {
    // Using an IIFE
    console.log(id);
    (async function thegetter() {
      console.log("getter called");
      let payload = {
       id:id
      };
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await axios({
          url: `${API}/lst/getbyid`,
          method: "POST",
          data: payload,
        });
        console.log(response.data);

        setData(response.data);
        let t=0;
        response.data.invItems.map(i=>{
          t+=parseInt(i.amount);
        })
        setSum(t/100);
        ////// getiing vendor address
        let frompayload = {
          filters: {
            icarelocation: response.data.from,
            searchquery:""
          },
        };
        
        let fromResponse = await axios({
          url: `${API}/vendor/getall`,
          method: "POST",
          data: frompayload,
        });
        console.log("FROM",fromResponse.data.out[0]);
        setFromAddr(fromResponse.data.out[0]);

        let topayload = {
          filters: {
            icarelocation: response.data.to,
            searchquery:""
          },
        };
        
        let toresponse = await axios({
          url: `${API}/vendor/getall`,
          method: "POST",
          data: topayload,
        });
        console.log("To",toresponse.data.out[0]);
        setToArrd(toresponse.data.out[0]);

      } catch (error) {
        console.log(error)
        throw error;
        
      }
    })();
  }, []);


  return (
    <>
      <div className=" pdfcontainer mx-20  my-10 font-serif">
        <div className="font-bold text-center">
        LOCATIONAL STOCK TRANSFER / DELIVERY CHALLAN
        </div>
        <div className="font-bold text-center">
        NOT FOR SALE (TRANSFER TO BRANCH LOCATION)
        </div>
        <div className="flex flex-row justify-between my-10">
            <img src={logo}  width="200px"/>
            <div className="text-left">
            <div className=" ">
                    LST No.: {data.LSTNo}
            </div> 
            <div className=" ">
                    LST Date: { moment(data.date).format("DD/MM/YYYY")}
            </div> 
            </div>
        </div>
        <div className="flex flex-row justify-between my-4">
            <div className="text-left ">
                <div>FROM</div> 
                <div>{fromAddr.name}</div> 
                <div>{fromAddr.address}</div> 
                
                <div>{fromAddr.district}, {fromAddr.state}, {fromAddr.PIN}</div> 
                <div>Ph: {fromAddr.phno1}, {fromAddr.phno2}</div> 
            </div> 
            <div className="w-8/12 bg-blue-400"> </div>
            <div className="text-left ">
            
                <div>TO</div> 
                <div>{toArrd.name}</div> 
                <div>{toArrd.address}</div> 
                
                <div>{toArrd.district}, {toArrd.state}, {toArrd.PIN}</div> 
                <div>Ph: {toArrd.phno1}, {toArrd.phno2}</div> 
            </div>
        </div>
        {/* ////////////////////////////// */}

        <table class="tb my-4 text-center">
            <thead>
                <tr>
                <th className="tb-head tb-row px-2">SI.No</th>
                <th className="tb-head tb-row px-2">Category</th>
                <th className="tb-head tb-row px-2">Description</th>
                <th className="tb-head tb-row px-2">Qty</th>
                <th className="tb-head tb-row px-2">Non Comercial Estimated Value Rs</th>
                <th className="tb-head tb-row px-2">Item Slno:</th>
                <th className="tb-head tb-row px-2">Case ID / Call No.</th>
                
                </tr>
            </thead>
            <tbody>
            {/* {console.log(data.invItems)} */}
             {data.invItems?data.invItems.map((item,i)=>(
                <>

                <tr>
                <td className="tb-row px-2">{i}</td>
                <td className="tb-row px-2">{item.type}</td>
                <td className="tb-row px-2">{item.name}</td>
                <td className="tb-row px-2">1</td>
                <td className="tb-row px-2">Rs.{parseInt(item.amount)/100}</td>
                <td className="tb-row px-2">{item.sno}</td>
                <td className="tb-row px-2">{item.caseId}</td>
                </tr>

                </>
            )):null}
            <tr className="">
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2">SubTotal</td>
                <td className="tb-head tb-row px-2">{data.invItems?data.invItems.length:0}</td>
                <td className="tb-head tb-row px-2">{sum} </td>
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2"></td>
            </tr>

            <tr className="">
                <td className="tb-head tb-row px-2">Despachted By</td>
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2">Received By</td>
                <td className="tb-head tb-row px-2"></td>
            </tr>

            <tr className="">
                <td className="tb-head tb-row px-2">Date</td>
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2">Date</td>
                <td className="tb-head tb-row px-2"></td>
            </tr>
            </tbody>
        </table>

        <div className="bold m-t">Declaration: TO WHOM SOEVER IT MAY CONCERN</div>
        <div>This is to certify that we are stock transferring  1  packet containing computer spares to our Office  at {toArrd.district} through Professional Courier on { moment(data.date).format("DD/MM/YYYY")} for internal use. </div>
        <div>This is only internal transaction of goods between our offices for our own use not meant for sale and hence has no commercial value. The value of goods for statuary purpose is Rs {sum}/-</div>
        
        <div className="sign">Yours Faithfully</div>
        <div className="m-t " > <p id="bottom-text" className="text-xs" >HEAD OFFICE : Ground Floor, "Rehoboth", TC 92/2518(3), VURA-28, TEMPLE ROAD, ANAYARA PO, TRIVANDRUM, 695029. 0471-2740139</p></div>
      </div>
      

      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default LSTPDF;
