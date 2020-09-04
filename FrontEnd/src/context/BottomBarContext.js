import React, { useState, useMemo } from "react";

// create context
export const BottomBarContext = React.createContext();

export const BottomBarProvider = ({ children }) => {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [bbaropen, setBBarOpen] = useState(0);

  return (
    <BottomBarContext.Provider value={[bbaropen, setBBarOpen]}>
      {children}
    </BottomBarContext.Provider>
  );
};
