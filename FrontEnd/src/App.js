import React, { lazy } from "react";
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

const Layout = lazy(() => import("./containers/Layout"));
const CustomerLogin = lazy(() => import("./pages/Customers/CustomerLogin"));
const SignUp = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          {/* //customer */}
          <Route path="/signin" component={CustomerLogin} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot-password" component={ForgotPassword} />
          {/* //admin */}
          <Route path="/admin/signup" component={AdminSignUp} />
          <Route path="/admin/signin" component={AdminLogin} />
          {/* Place new routes over this */}
          <PrivateRoute path={`/app`} component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/admin/signin" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
