import React, { useState, useMemo } from "react";

// create context
export const TopBarContext = React.createContext();

export const TopBarProvider = ({ children }) => {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [topheading, setTopHeading] = useState("");

  return (
    <TopBarContext.Provider
      value={{
        topheading,
        setTopHeading,
      }}
    >
      {children}
    </TopBarContext.Provider>
  );
};
