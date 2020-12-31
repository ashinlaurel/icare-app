import React, { useState, useContext } from "react";
import { BottomBarContext } from "../../context/BottomBarContext";
import { DropdownIcon, HeartIcon } from "../../icons";
import Buttons from "../../pages/Buttons";
import AssetModule from "./AssetModule";
import CreateAssetModule from "./CreateAssetModule";
import { Button } from "@windmill/react-ui";

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
            ? `rounded-lg ml-64 w-10/12 overflow-y-scroll bottom-0 h-64   p-4 fixed pin-b bg-white dark:text-white dark:bg-gray-700 text-base`
            : `hidden`
        }
      >
        {/* ---------------------Heading------------ */}
        <div className="flex flex-row justify-between">
          <div>Asset Details</div>
          <div>
            <Button
              icon={DropdownIcon}
              layout="link"
              aria-label="Like"
              className="-mt-3"
              onClick={() => {
                setBBarOpen(0);
              }}
            />
          </div>
        </div>

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
