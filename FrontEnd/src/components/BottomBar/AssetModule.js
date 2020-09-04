import React from "react";
import moment from "moment";
const AssetModule = ({ selectedprod }) => {
  return (
    <div className="flex flex-row flex-wrap  ">
      <div className="flex-col flex items-start justify-center mx-5 my-5  ">
        <div>Business: {selectedprod.business}</div>
        <div>Purchase Number: {selectedprod.ponumber}</div>
        <div>
          {" "}
          Contract From:{" "}
          {moment(selectedprod.contractfrom).format("DD-MM-YYYY")}
        </div>
        <div>
          Contract To: {moment(selectedprod.contractto).format("DD-MM-YYYY")}
        </div>{" "}
      </div>
      <div className="flex-col flex items-start justify-center mx-5 my-5">
        <div>Business: {selectedprod.business}</div>
        <div>Purchase Number: {selectedprod.ponumber}</div>
        <div>
          {" "}
          Contract From:{" "}
          {moment(selectedprod.contractfrom).format("DD-MM-YYYY")}
        </div>
        <div>
          Contract To: {moment(selectedprod.contractto).format("DD-MM-YYYY")}
        </div>{" "}
      </div>
      <div className="flex-col flex items-start justify-center mx-5 my-5">
        <div>Business: {selectedprod.business}</div>
        <div>Purchase Number: {selectedprod.ponumber}</div>
        <div>
          {" "}
          Contract From:{" "}
          {moment(selectedprod.contractfrom).format("DD-MM-YYYY")}
        </div>
        <div>
          Contract To: {moment(selectedprod.contractto).format("DD-MM-YYYY")}
        </div>{" "}
      </div>
      <div className="flex-col flex items-start justify-center mx-5 my-5">
        <div>Business: {selectedprod.business}</div>
        <div>Purchase Number: {selectedprod.ponumber}</div>
        <div>
          {" "}
          Contract From:{" "}
          {moment(selectedprod.contractfrom).format("DD-MM-YYYY")}
        </div>
        <div>
          Contract To: {moment(selectedprod.contractto).format("DD-MM-YYYY")}
        </div>{" "}
      </div>
      <div className="flex-col flex items-start justify-center mx-5 my-5">
        <div>Business: {selectedprod.business}</div>
        <div>Purchase Number: {selectedprod.ponumber}</div>
        <div>
          {" "}
          Contract From:{" "}
          {moment(selectedprod.contractfrom).format("DD-MM-YYYY")}
        </div>
        <div>
          Contract To: {moment(selectedprod.contractto).format("DD-MM-YYYY")}
        </div>{" "}
      </div>
      <div className="flex-col flex items-start justify-center mx-5 my-5">
        <div>Business: {selectedprod.business}</div>
        <div>Purchase Number: {selectedprod.ponumber}</div>
        <div>
          {" "}
          Contract From:{" "}
          {moment(selectedprod.contractfrom).format("DD-MM-YYYY")}
        </div>
        <div>
          Contract To: {moment(selectedprod.contractto).format("DD-MM-YYYY")}
        </div>{" "}
      </div>
      <div className="flex-col flex items-start justify-center mx-5 my-5">
        <div>Business: {selectedprod.business}</div>
        <div>Purchase Number: {selectedprod.ponumber}</div>
        <div>
          {" "}
          Contract From:{" "}
          {moment(selectedprod.contractfrom).format("DD-MM-YYYY")}
        </div>
        <div>
          Contract To: {moment(selectedprod.contractto).format("DD-MM-YYYY")}
        </div>{" "}
      </div>
    </div>
    // <>
    //   <div className="flex flex-col items-start  space-y-5">
    //     {/* --------------Row 1 -------------- */}
    //     <div className="flex-row flex items-start space-x-40">
    //       <div className="flex-col flex items-start justify-center">
    //         <div>Business: {selectedprod.business}</div>
    //         <div>Purchase Number: {selectedprod.ponumber}</div>
    //         <div>
    //           {" "}
    //           Contract From:{" "}
    //           {moment(selectedprod.contractfrom).format("DD-MM-YYYY")}
    //         </div>
    //         <div>
    //           Contract To:{" "}
    //           {moment(selectedprod.contractto).format("DD-MM-YYYY")}
    //         </div>{" "}
    //       </div>
    //       <div className="flex-col flex items-start justify-center ">
    //         <div>
    //           Billing From:{" "}
    //           {moment(selectedprod.billingfrom).format("DD-MM-YYYY")}
    //         </div>{" "}
    //         <div>
    //           Billing To: {moment(selectedprod.billingto).format("DD-MM-YYYY")}
    //         </div>
    //         <div>AMC Rate:{selectedprod.amcrate}</div>
    //         <div>Net Amount:{selectedprod.netamount}</div>
    //         {/* {selectedprod.amcrate} GST:{GST} GSTAMOUNT:{GSTAMOUNT} NetAmount: */}
    //         {/* {NetAmount} */}
    //       </div>
    //       <div className="flex-col flex items-start justify-center ">
    //         <div>
    //           Keyboard:
    //           {selectedprod.product
    //             ? selectedprod.product.keyboard[0].kbdname
    //             : ""}
    //         </div>{" "}
    //         <div>Keyboard:</div> <div>KBD SNo: {selectedprod.billingfrom}</div>{" "}
    //         <div>Mouse : {selectedprod.billingto}</div>
    //         <div>Mouse SNo : {selectedprod.billingto}</div>
    //         {/* AMCRate: */}
    //         {/* {selectedprod.amcrate} GST:{GST} GSTAMOUNT:{GSTAMOUNT} NetAmount: */}
    //         {/* {NetAmount} */}
    //       </div>
    //     </div>

    //     {/* ----------------------Row - 2------------------------- */}

    //     {/* ---------------------------------Cpu--------------------------------- */}
    //     <div className="flex-row flex items-start space-x-40">
    //       <div className="flex-col flex items-start justify-center">
    //         {selectedprod.product
    //           ? selectedprod.product.cpu.map((cpu, i) => (
    //               <>
    //                 <div>
    //                   CPU {i + 1} : {cpu.cpuname}
    //                 </div>
    //                 <div>
    //                   CPU {i + 1} SNo : {cpu.cpusno}
    //                 </div>
    //               </>
    //             ))
    //           : ""}
    //       </div>
    //       <div className="flex-col flex items-start justify-center ">
    //         <div>
    //           Billing From:{" "}
    //           {moment(selectedprod.billingfrom).format("DD-MM-YYYY")}
    //         </div>{" "}
    //         <div>
    //           Billing To: {moment(selectedprod.billingto).format("DD-MM-YYYY")}
    //         </div>
    //         <div>AMC Rate:{selectedprod.amcrate}</div>
    //         <div>Net Amount:{selectedprod.netamount}</div>
    //         {/* {selectedprod.amcrate} GST:{GST} GSTAMOUNT:{GSTAMOUNT} NetAmount: */}
    //         {/* {NetAmount} */}
    //       </div>
    //       <div className="flex-col flex items-start justify-center ">
    //         {/* <div>Keyboard: {selectedprod.product.keyboard[0].kbdname} </div>{" "} */}
    //         <div>Keyboard: </div> <div>KBD SNo: {selectedprod.billingfrom}</div>{" "}
    //         <div>Mouse : {selectedprod.billingto}</div>
    //         <div>Mouse SNo : {selectedprod.billingto}</div>
    //         {/* AMCRate: */}
    //         {/* {selectedprod.amcrate} GST:{GST} GSTAMOUNT:{GSTAMOUNT} NetAmount: */}
    //         {/* {NetAmount} */}
    //         <div>
    //           {selectedprod.product &&
    //           selectedprod.product.keyboard.length > 0 ? (
    //             <>Keyboard SNo : {selectedprod.product.keyboard[0].kbdname}</>
    //           ) : null}
    //         </div>
    //         {selectedprod.product
    //           ? console.log(selectedprod.product.keyboard)
    //           : null}
    //         {/* (user.product.keyboard[0].kbdname); */}
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default AssetModule;
