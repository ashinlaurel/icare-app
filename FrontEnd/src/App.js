import React, { lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import { API } from "./backendapi";
import AdminSignUp from "./pages/Admin/AdminSignup";
import AdminLogin from "./pages/Admin/AdminLogin";
import PrivateRoute from "./helpers/auth/PrivateRoute";
import EmpProfile from "./helpers/auth/EmpProfile";
import Cust from "./helpers/auth/CustProfile";
import HomePage from "./pages/Homepage/HomePage";
import LSTPDF from "./pages/TEMPPDF/LSTPDF";
import SalaryPDF from "./pages/TEMPPDF/SalaryPDF";

// LANDING PAGE STUFF

import LandingPage from "./LandingPage";

const Layout = lazy(() => import("./containers/Layout"));
const CustomerLogin = lazy(() => import("./pages/Customers/CustomerLogin"));
const SignUp = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  // console.log(Cust.isAuthenticated() ? "yes" : "no");

  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          {/* //customer */}
          {/* Home Page */}

          {/* <Route exact path="/" component={HomePage} /> */}

          <Route path="/website" component={LandingPage} />
          <Route path="/signin">
            {/* {localStorage.getItem("type") == "0" ? ( */}
            {/* <Redirect to="/app" /> */}
            {/* ) : ( */}
            <CustomerLogin />
            {/* )} */}
          </Route>
          {/* <Route path="/signin" component={CustomerLogin} /> */}
          {/* <Route path="/signup" component={SignUp} /> */}
          <Route path="/lstpdf/:id/:despatchedby" component={LSTPDF} />
          <Route path="/lstpdf/:id/" component={LSTPDF} />
          <Route path="/salarypdf/:id" component={SalaryPDF} />
          <Route path="/forgot-password" component={ForgotPassword} />
          {/* //admin */}
          <Route path="/admin/signup" component={AdminSignUp} />
          <Route path="/admin/signin" component={AdminLogin} />

          {/* Place new routes over this */}
          <PrivateRoute path={`/app`} component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/website" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
