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

let lstpurchased={
mouse:	100,
keyboard:	100,
monitor:	2000,
cpu:	2000,
ram:	500,
fan:	100,
motherboard:	2000,
smps:	200,
hdd:	250,
gcard:	250,
enetcard:	100,
serialcard:	100,
parallelcard:	100,
opticaldrive:	250,
hbacard:	1000,
raidcontroller:	1000,
tapedrive:	1000,
others:	100,
}

let lstserviced={
  mouse:	50,
keyboard:	50,
monitor:	1000,
cpu:	1000,
ram:	250,
fan:	50,
motherboard:	1000,
smps:	100,
hdd:	125,
gcard:	125,
enetcard:	50,
serialcard:	50,
parallelcard:	50,
opticaldrive:	125,
hbacard:	500,
raidcontroller:	500,
tapedrive:	500,
others:	100,
}
let lstdefective={
  mouse:	50,
keyboard:	50,
monitor:	250,
cpu:	250,
ram:	50,
fan:	50,
motherboard:	250,
smps:	50,
hdd:	50,
gcard:	50,
enetcard:	50,
serialcard:	50,
parallelcard:	50,
opticaldrive:	50,
hbacard:	250,
raidcontroller:	250,
tapedrive:	250,
others:	50,

}

let lstcmrr = {
  console:	1000,
  dmp:	1000,
  inkjet:	1000,
  kvm:	1000,
  laptop:	4000,
  laser:	1000,
  lmp:	4000,
  module:	1000,
  router:	1000,
  scanner:	1000,
  server:	4000,
  desktop:	2000,
  storage:	4000,
  switch:	1000,
  ups:	2000,
  others:	1000,
  

}

 

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
        if(response.data.LSTtype=="CMRR"){
          response.data.CMRRItems.map(item=>{
            t+=lstcmrr[item.type.toLowerCase()]?lstcmrr[item.type.toLowerCase()]:0;
          })
        }else{
        response.data.invItems.map(item=>{
          t+=!item.stocktype?item.amount?parseInt(item.amount)/100:lstserviced[item.type] : // << put services temporaroly
          item.stocktype=="Purchased"?lstpurchased[item.type]:
             item.stocktype=="Serviced"?lstserviced[item.type]:
                item.stocktype=="Defective"?lstdefective[item.type]:null;
        })
      }
        setSum(t);
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

        if(response.data.to=="Vendor"){
          let toresponse = await axios({
            url: `${API}/vendor/getbyid`,
            method: "POST",
            data: {id:response.data.vendorId},
          });
          console.log("To",toresponse.data);
          setToArrd(toresponse.data);

        }else{
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
      }

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
                <div>GST No: {fromAddr.GSTNo}</div> 
            </div> 
            <div className="w-8/12 bg-blue-400"> </div>
            <div className="text-left ">
              {data.LSTtype=="Customer"?(<>
                <div>TO</div> 
                <div>{data.unitId.name}</div> 
                <div>{data.unitId.address}</div> 
                
                <div>{data.unitId.district}, {data.unitId.state}, {data.unitId.PIN}</div> 
                <div>Ph: {data.unitId.contactNo}, {data.unitId.whatsappNo}</div> 
                <div>GST No: {data.unitId.GSTnumber}</div> 

                
              </>):(<>
                <div>TO</div> 
                <div>{toArrd.name}</div> 
                <div>{toArrd.address}</div> 
                
                <div>{toArrd.district}, {toArrd.state}, {toArrd.PIN}</div> 
                <div>Ph: {toArrd.phno1}, {toArrd.phno2}</div> 
                <div>GST No: {toArrd.GSTNo}</div> 
                </>)} 
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
              {data.LSTtype=="CMRR"?
              data.CMRRItems.map((item,i)=>(
                <>

                <tr>
                <td className="tb-row px-2">{i+1}</td>
                <td className="tb-row px-2">{item.type}</td>
                <td className="tb-row px-2">{item.name}</td>
                <td className="tb-row px-2">1</td>
                <td className="tb-row px-2">Rs.{lstcmrr[item.type.toLowerCase()]}</td>
                <td className="tb-row px-2">{item.sno}</td>
                <td className="tb-row px-2">{item.caseId}</td>
                </tr>

                </>
            ))

              :

             data.invItems?data.invItems.map((item,i)=>(
                <>

                <tr>
                <td className="tb-row px-2">{i+1}</td>
                <td className="tb-row px-2">{item.type}</td>
                <td className="tb-row px-2">{item.name}</td>
                <td className="tb-row px-2">1</td>
                <td className="tb-row px-2">Rs.{!item.stocktype?item.amount?parseInt(item.amount)/100:lstserviced[item.type] : //<<----- Should be null, put servied instead temporarily
                                                    item.stocktype=="Purchased"?lstpurchased[item.type]:
                                                       item.stocktype=="Serviced"?lstserviced[item.type]:
                                                          item.stocktype=="Defective"?lstdefective[item.type]:null}</td>
                <td className="tb-row px-2">{item.sno}</td>
                <td className="tb-row px-2">{item.caseId}</td>
                </tr>

                </>
            )):null
            }
            <tr className="">
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2"></td>
                <td className="tb-head tb-row px-2">SubTotal</td>
                <td className="tb-head tb-row px-2">{data.invItems?data.invItems.length:0}</td>
                <td className="tb-head tb-row px-2">Rs.{sum} </td>
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
        <div>This is to certify that we are stock transferring  ___  packet containing computer spares {data.LSTtype=="Customer"?(<>to {data.customerName}</>):(<>to our Office  at {toArrd.district} </>)}  through _______________________________ on { moment(data.date).format("DD/MM/YYYY")} for internal use. </div>
        <div>This is only internal transaction of goods between our offices for our own use not meant for sale and hence has no commercial value. The value of goods for statuary purpose is Rs {sum}/-</div>
        
        <div className="sign">Yours Faithfully</div>
        <div className="m-t " > <p id="bottom-text" className="text-xs" >HEAD OFFICE : Ground Floor, "Rehoboth", TC 92/2518(3), VURA-28, TEMPLE ROAD, ANAYARA PO, TRIVANDRUM, 695029. 0471-2740139</p></div>
      </div>
      

      {/* ------------------------------------Bottom Bar---------------------------------- */}
    </>
  );
}

export default LSTPDF;
