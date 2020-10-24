import React, { useState, useContext } from "react";
import { BottomBarContext } from "../../context/BottomBarContext";
import AssetModule from "./AssetModule";
import CreateAssetModule from "./CreateAssetModule";

const BottomBar = () => {
  //   const [bbaropen, setBBarOpen] = useState(1);

  const {
    bbaropen,
    setBBarOpen,
    setAssetDetails,
    assetdetails,
    setCreateAssetDetails,
    createAssetDetails,
  } = useContext(BottomBarContext);
  // console.log("AssetDetails", assetdetails);
  return (
    <div className="flex items-center justify-center ">
      <div
        class={
          bbaropen
            ? `rounded-lg ml-64 w-10/12 overflow-y-scroll bottom-0 h-64  border border-grey p-4 fixed pin-b bg-white dark:text-white dark:bg-gray-700 text-base`
            : `hidden`
        }
      >
        {/* ---------------------Heading------------ */}
        Asset Details
        <hr />
        {JSON.stringify(assetdetails) !== JSON.stringify({}) ? (
          <AssetModule selectedprod={assetdetails} />
        ) : null}
        {JSON.stringify(createAssetDetails) !== JSON.stringify({}) ? (
          <CreateAssetModule asset={createAssetDetails} />
        ) : null}
      </div>
    </div>
  );
};

export default BottomBar;
