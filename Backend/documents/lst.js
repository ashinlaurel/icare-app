// const logo= require("./icarelogo.png")
// const css=require("./lst.css")

module.exports = (data) => {
   const today = new Date();
   return `
     <!doctype html>
     <html>
        <head>
           <meta charset="utf-8">
         
          
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <link rel="stylesheet" href="/Users/alan/PROJECTS/INFOCARE/icare-app/Backend/controllers/LST/lst.css">
           <link rel="stylesheet" href="/Users/alan/PROJECTS/INFOCARE/icare-app/Backend/controllers/LST/tailwind.css">
           
           <title>PDF Template</title>
        </head>
        <body>

        <div class="container">
               <div class="top-title" >
               LOCATIONAL STOCK TRANSFER / DELIVERY CHALLAN
               </div>
               <div class="top-title">
               NOT FOR SALE (TRANSFER TO BRANCH LOCATION)
               </div>
               <div class="two-row flex flex-row bg-red-500">
                     <img src="/Users/alan/PROJECTS/INFOCARE/icare-app/Backend/controllers/LST/icarelogo.png" alt="InfoCare" class="logo " />
                     <div class="left-align">
                        <div class=" ">
                              LST No.: ${data.LSTNo}
                        </div> 
                        <div class=" ">
                              LST Date: ${   data.date}
                        </div> 
                     </div>
               </div>
               <div class="two-row bg-red-500">
                     <div class="left-align">
                        <div>FROM</div> 
                        <div>INFOCARE SYSTEMS</div> 
                        <div>Head Office, Gnd Floor, TC. 92/2015(3)</div> 
                        <div>VURA-28, Temple Road, Anayara PO</div> 
                        <div>Trivandrum, Kerala, 695029</div> 
                        <div>Ph: 0471-2740139, 9562905668</div> 
                     </div> 
                     <div class="text-left">
                     
                        <div>TO</div> 
                        <div>INFOCARE SYSTEMS</div> 
                        <div>Viswa Hindu Bhavan Hostel</div> 
                        <div>Room No:B15, Chalappuram</div> 
                        <div>Kozhikode, Kerala, 673002</div>  
                        <div>Ph : 0495-2303525/9562862878</div> 
                     </div>
               </div>


               <table class="tb">
                  <thead>
                     <tr>
                     <th className="tb-head tb-row">SI.No</th>
                     <th className="tb-head tb-row">Category</th>
                     <th className="tb-head tb-row">Description</th>
                     <th className="tb-head tb-row">Qty</th>
                     <th className="tb-head tb-row">Non Comercial Estimated Value Rs</th>
                     <th className="tb-head tb-row">Item Slno:</th>
                     <th className="tb-head tb-row">Case ID / Call No.</th>
                     
                     </tr>
                  </thead>
                  <tbody>
               ${data.invItems.map((item,i)=>{
                  return(
                  `


                     <tr>
                     <td className="tb-row">${i}</td>
                     <td className="tb-row">${item.type}</td>
                     <td className="tb-row">${item.name}</td>
                     <td className="tb-row">1</td>
                     <td className="tb-row">Val</td>
                     <td className="tb-row">${item.sno}</td>
                     <td className="tb-row">${item.caseId}</td>
                     </tr>

               
                  
                 
                  `
                  
               )})}

               <tr className="">
                     <td className="tb-head tb-row"></td>
                     <td className="tb-head tb-row"></td>
                     <td className="tb-head tb-row">SubTotal</td>
                     <td className="tb-head tb-row">4</td>
                     <td className="tb-head tb-row">TotVal</td>
                     <td className="tb-head tb-row"></td>
                     <td className="tb-head tb-row"></td>
                  </tr>

                  <tr className="">
                     <td className="tb-head tb-row">Despachted By</td>
                     <td className="tb-head tb-row"></td>
                     <td className="tb-head tb-row"></td>
                     <td className="tb-head tb-row"></td>
                     <td className="tb-head tb-row"></td>
                     <td className="tb-head tb-row">Received By</td>
                     <td className="tb-head tb-row"></td>
                  </tr>

                  <tr className="">
                     <td className="tb-head tb-row">Date</td>
                     <td className="tb-head tb-row"></td>
                     <td className="tb-head tb-row"></td>
                     <td className="tb-head tb-row"></td>
                     <td className="tb-head tb-row"></td>
                     <td className="tb-head tb-row">Date</td>
                     <td className="tb-head tb-row"></td>
                  </tr>
         
         
               </tbody>
               </table>
                     
        
        
        
               </div>
             
 
             
        </body>
     </html>
     `;
 };
 