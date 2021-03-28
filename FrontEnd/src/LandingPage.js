import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./LandingPages/Home";
import Navbar from "./partials/NavBar";
import CloudSolutions from "./LandingPages/Services/CloudSolutions";

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
    console.log("LAnfingPage");
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
        <Route path="/website/service/cloudsolutions">
          <CloudSolutions />
        </Route>

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
