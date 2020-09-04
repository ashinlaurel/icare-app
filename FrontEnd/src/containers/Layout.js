import React, { useState, useContext, Suspense, useEffect, lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { aroutes, croutes } from "../routes/index";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";
import AssetFloat from "../components/FloatDetails/AssetFloat";
import BottomBar from "../components/BottomBar";

const Page404 = lazy(() => import("../pages/404"));

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();
  const [role, setRole] = useState(1);

  useEffect(() => {
    const trole = localStorage.getItem("type");
    // console.log("Layout.js" + role);
    setRole(trole);
  }, []);

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {role == 0
                ? aroutes.map((route, i) => {
                    return route.component ? (
                      <Route
                        key={i}
                        exact={true}
                        path={`/app${route.path}`}
                        render={(props) => <route.component {...props} />}
                      />
                    ) : null;
                  })
                : croutes.map((route, i) => {
                    return route.component ? (
                      <Route
                        key={i}
                        exact={true}
                        path={`/app${route.path}`}
                        render={(props) => <route.component {...props} />}
                      />
                    ) : null;
                  })}
              <Redirect exact from="/app" to="/app/dashboard" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
      <BottomBar />
    </div>
  );
}

export default Layout;
