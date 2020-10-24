import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Emp from "./EmpProfile";
import Cust from "./CustProfile";
import axios from "axios";
import { API } from "../../backendapi";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log("her", Emp.isAuthenticated());
  const [isAuth, setIsAuth] = useState("");
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      let isA = await Emp.isAuthenticated();
      let isC = await Cust.isAuthenticated();
      if (isA) setIsAuth(isA);
      if (isC) setIsAuth(isC);
      setLoading(false);
    } catch (err) {
      setIsAuth(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
    // axios.defaults.headers.common["Authorization"] = `Bearer ${Emp.getToken()}`;
    // axios
    //   .post(`${API}/admin/signInTest/${Emp.getId()}`)
    //   .then((res) => {
    //     console.log("authenticated");
    //     setIsAuth(true);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log("auth error", err);
    //     setLoading(false);
    //   });
  }, []);
  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <Route
          {...rest}
          render={(props) =>
            isAuth ? <Component {...props} /> : <Redirect to="/admin/signin" />
          }
        />
      )}
    </>
  );
};

export default PrivateRoute;
