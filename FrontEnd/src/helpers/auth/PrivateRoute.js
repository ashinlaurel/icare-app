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
      let isA = false;
      if (localStorage.getItem("type") == null) {
        throw "type Not set";
      } else if (
        localStorage.getItem("type") >= 1 &&
        localStorage.getItem("type") < 10
      ) {
        console.log("attepting customer/accoutn signin");
        ///////-----------------------------> 0 for employee 1 for customer
        isA = await Cust.isAuthenticated();
      } else {
        isA = await Emp.isAuthenticated();
      }
      // let isA = await Emp.isAuthenticated();
      // let isC = await Cust.isAuthenticated();
      setIsAuth(true);
      // if (isC) setIsAuth(isC);
      console.log("attepting customer/accoutn signin -> success");
      setLoading(false);
    } catch (err) {
      console.log("Auth check fail");
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
