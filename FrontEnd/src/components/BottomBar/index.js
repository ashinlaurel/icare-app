import React, { useState, useContext } from "react";
import { BottomBarContext } from "../../context/BottomBarContext";

const BottomBar = () => {
  //   const [bbaropen, setBBarOpen] = useState(1);
  const [bbaropen, setBBarOpen] = useContext(BottomBarContext);
  return (
    <div
      class={
        bbaropen
          ? `rounded-lg overflow-auto ml-64 w-screen bottom-0 h-64  border border-grey p-4 fixed pin-b bg-white dark:text-white dark:bg-gray-700 text-base`
          : `hidden`
      }
    >
      {/* ---------------------Heading------------ */}
      Bottom Bar
      <hr />
      <br />
      <div className="flex flex-col items-start  space-y-5">
        {/* --------------Row 1 -------------- */}
        <div className="flex-row flex items-start space-x-40"></div>

        {/* ----------------------Row - 2------------------------- */}

        {/* ---------------------------------Cpu--------------------------------- */}
        <div className="flex-row flex items-start space-x-40"></div>
      </div>
    </div>
  );
};

export default BottomBar;
