import React, { useEffect } from "react";
import { Switch, Route, useLocation, Router } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./LandingPages/Home";
import Navbar from "./partials/NavBar";
import CloudReadiness from "./LandingPages/Solutions/CloudReadiness";
import ServerPage from "./LandingPages/Products/ServerPage";
import CloudMigration from "./LandingPages/Solutions/CloudMigration";
import EnterpriseServer from "./LandingPages/Products/EnterpriseServer";
import EnterpriseStorage from "./LandingPages/Products/EnterpriseStorage";
// import Habcsolution from "./LandingPages/Solutions/Habcsolution";
import Networking from "./LandingPages/Products/Networking";
import Endusercomp from "./LandingPages/Products/Endusercomp";
import HABCDR from "./LandingPages/Solutions/HABCDR";
import ITInfra from "./LandingPages/Solutions/ITinfrastructure";
import StructuredNetworking from "./LandingPages/Solutions/StructuredNetworking";
import ITSecurity from "./LandingPages/Solutions/ITSecurity";
import FacilityManagement from "./LandingPages/ManageIT/FacilityManagement";
import AnnualMaintanence from "./LandingPages/ManageIT/AnnualMaintanence";
import OnDemand from "./LandingPages/ManageIT/OnDemand";
import Company from "./LandingPages/AoutUs/Company";
import Career from "./LandingPages/AoutUs/Career";
import PartnersHome from "./partials/PartnersHome";
import Partners from "./LandingPages/AoutUs/Partners";
import PrivacyPolicy from "./LandingPages/AoutUs/PrivacyPolicy";
import ContactUs from "./LandingPages/AoutUs/ContactUs";
import HabcSolution from "./LandingPages/Solutions/Habcsolution";

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
      {/* <Navbar /> */}

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
      <Route path="/website/solution/habcsolution">
        <HabcSolution />
      </Route>
      {/* <Route path="/website/solution/habcdr">
        <HABCDR />
      </Route> */}
      <Route path="/website/solution/itinfrastructure">
        <ITInfra />
      </Route>
      <Route path="/website/solution/structurednetworking">
        <StructuredNetworking />
      </Route>
      <Route path="/website/solution/itsecurity">
        <ITSecurity />
      </Route>
      {/* ----------------Products---------------- */}
      <Route path="/website/product/servers">
        <ServerPage />
      </Route>
      <Route path="/website/product/enterpriseservers">
        <EnterpriseServer />
      </Route>
      <Route path="/website/product/enterprisestorage">
        <EnterpriseStorage />
      </Route>
      <Route path="/website/product/networking">
        <Networking />
      </Route>
      <Route path="/website/product/endusercomp">
        <Endusercomp />
      </Route>
      {/* -------------Managed IT---------------------- */}
      <Route path="/website/managedit/FacilityManagement">
        <FacilityManagement />
      </Route>
      <Route path="/website/managedit/AnnualMaintanence">
        <AnnualMaintanence />
      </Route>
      <Route path="/website/managedit/OnDemand">
        <OnDemand />
      </Route>

      {/* -------------About Us---------------------- */}
      <Route path="/website/aboutus/Company">
        <Company />
      </Route>
      <Route path="/website/aboutus/Career">
        <Career />
      </Route>
      <Route path="/website/aboutus/Partners">
        <Partners />
      </Route>
      <Route path="/website/aboutus/PrivacyPolicy">
        <PrivacyPolicy />
      </Route>
      <Route path="/website/aboutus/ContactUs">
        <ContactUs />
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
    </>
  );
}

export default LandingPage;
