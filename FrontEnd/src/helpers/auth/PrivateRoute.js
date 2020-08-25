import React from "react";
import { Route, Redirect } from "react-router-dom";
import Emp from "./EmpProfile";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("her", Emp.getToken());
  return (
    <Route
      {...rest}
      render={(props) =>
        Emp.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/admin/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
