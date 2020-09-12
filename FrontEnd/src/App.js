import React, { lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import { API } from "./backendapi";
import AdminSignUp from "./pages/Admin/AdminSignup";
import AdminLogin from "./pages/Admin/AdminLogin";
import PrivateRoute from "./helpers/auth/PrivateRoute";
import EmpProfile from "./helpers/auth/EmpProfile";
import Cust from "./helpers/auth/CustProfile";
import HomePage from "./pages/Homepage/HomePage";

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
          <Route path="/home" component={HomePage} />
          <Route path="/signin">
            {/* {localStorage.getItem("type") == "0" ? ( */}
            {/* <Redirect to="/app" /> */}
            {/* ) : ( */}
            <CustomerLogin />
            {/* )} */}
          </Route>
          <Route path="/signin" component={CustomerLogin} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot-password" component={ForgotPassword} />
          {/* //admin */}
          <Route path="/admin/signup" component={AdminSignUp} />
          <Route path="/admin/signin" component={AdminLogin} />
          {/* Place new routes over this */}
          <PrivateRoute path={`/app`} component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/home" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
