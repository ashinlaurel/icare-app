import React, { useState, useContext } from "react";
import { BottomBarContext } from "../../context/BottomBarContext";
import AssetModule from "./AssetModule";

const BottomBar = () => {
  //   const [bbaropen, setBBarOpen] = useState(1);
  const [bbaropen, setBBarOpen] = useContext(BottomBarContext);
  const [assetdetails, setAssetDetails] = useContext(BottomBarContext);

  return (
    <div className="flex items-center justify-center ">
      <div
        class={
          bbaropen
            ? `rounded-lg ml-64 w-10/12 overflow-y-scroll  bottom-0 h-64  border border-grey p-4 fixed pin-b bg-white dark:text-white dark:bg-gray-700 text-base`
            : `hidden`
        }
      >
        {/* ---------------------Heading------------ */}
        Asset Details
        <hr />
        <br />
        <AssetModule selectedprod={assetdetails} />
      </div>
    </div>
  );
};

export default BottomBar;
