import React, { useState, useMemo } from "react";

// create context
export const BottomBarContext = React.createContext();

export const BottomBarProvider = ({ children }) => {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [bbaropen, setBBarOpen] = useState(0);
  const [assetdetails, setAssetDetails] = useState({});

  return (
    <BottomBarContext.Provider
      value={{ bbaropen, setBBarOpen, assetdetails, setAssetDetails }}
    >
      {children}
    </BottomBarContext.Provider>
  );
};
