import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./LandingPages/Home";
import Navbar from "./partials/NavBar";
import CloudReadiness from "./LandingPages/Solutions/CloudReadiness";
import ServerPage from "./LandingPages/Products/ServerPage";
import CloudMigration from "./LandingPages/Solutions/CloudMigration";
import EnterpriseServer from "./LandingPages/Products/EnterpriseServer";

// import Home from "./LandingPages/Home";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    console.log("LandingPage");
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/website">
          <Home />
        </Route>
        {/* ----------------Solutions ---------------- */}
        <Route path="/website/solution/cloudsolutions">
          <CloudReadiness />
        </Route>
        <Route path="/website/solution/cloudmigration">
          <CloudMigration />
        </Route>
        {/* ----------------Products---------------- */}
        <Route path="/website/product/servers">
          <ServerPage />
        </Route>
        <Route path="/website/product/enterpriseservers">
          <EnterpriseServer />
        </Route>
        {/* -------------About Us---------------------- */}

        {/* <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset-password">
          <ResetPassword /> 
        </Route> */}
      </Switch>
    </>
  );
}

export default LandingPage;
