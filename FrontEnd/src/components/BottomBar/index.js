import React, { useState, useContext } from "react";
import { BottomBarContext } from "../../context/BottomBarContext";
import AssetModule from "./AssetModule";

const BottomBar = () => {
  //   const [bbaropen, setBBarOpen] = useState(1);
  const [bbaropen, setBBarOpen] = useContext(BottomBarContext);
  const [assetdetails, setAssetDetails] = useContext(BottomBarContext);

  return (
    <div
      class={
        bbaropen
          ? `rounded-lg overflow-auto ml-64 w-screen bottom-0 h-64  border border-grey p-4 fixed pin-b bg-white dark:text-white dark:bg-gray-700 text-base`
          : `hidden`
      }
    >
      {/* ---------------------Heading------------ */}
      Asset Details
      <hr />
      <br />
      <AssetModule selectedprod={assetdetails} />
    </div>
  );
};

export default BottomBar;
