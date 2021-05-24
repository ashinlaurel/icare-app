import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import ImageLight from "../../assets/img/login-office.jpeg";
import ImageDark from "../../assets/img/login-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../../icons";
import { Label, Input, Button } from "@windmill/react-ui";
import { signin, authenticate, isAutheticated } from "../../helpers/auth";
import { HelperText } from "@windmill/react-ui";
import { useHistory } from "react-router-dom";
import CustProfile from "../../helpers/auth/CustProfile";
import Axios from "axios";
import { API } from "../../backendapi";

function CustomerLogin() {
  let history = useHistory();

  useEffect(() => {
    console.log("empName", CustProfile.getUsername());
    if (CustProfile.getUsername()) history.push("/app/myassets/accounts");
  }, []);

  useEffect(() => {
    // Using an IIFE
    (async function thegetter() {
      // console.log("Testing Route");
      // console.log(`${API}/test`);
      // console.log(`${API}/asset/${Emp.getId()}/getall`);

      try {
        let response = await Axios({
          url: `${API}/test`,
          method: "GET",
        });
        console.log(response);
      } catch (error) {
        throw error;
      }
    })();
    // setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, []);

  // isAutheticated();
  const [values, setValues] = useState({
    username: "customer",
    password: "password",
  });
  const [err, setErr] = useState();

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newuser = {
      username: values.username,
      password: values.password,
    };
    if (values.username === "" || values.password == "") {
      setErr("Please enter username and password");
      return;
    }
    signin(newuser, "customer/signin")
      .then((data) => {
        // console.log("userinfo", data.user);
        console.log("Signed In", data.user._id);
        CustProfile.setName(data.user.CustomerName);
        CustProfile.setUsername(data.user.username);
        CustProfile.setToken(data.token);
        CustProfile.setId(data.user._id);
        CustProfile.setRole(data.user.role);
        // localStorage.setItem("type", 1); ///////-----------------------------> 0 for employee 1 for customer
        localStorage.setItem("type", data.user.role);
        console.log("authenticated");
        history.push("/app/myassets/accounts");
        // return <Redirect to="/app" />;
        // });
        ///test
      })
      .catch((err) => {
        setErr(err);
        // console.log("err", err);
      });
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Customer Login
              </h1>
              <Label>
                <span>Username</span>
                <Input
                  className="mt-1"
                  placeholder="username"
                  value={values.username}
                  onChange={handleChange("username")}
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  placeholder=""
                  value={values.password}
                  onChange={handleChange("password")}
                />
              </Label>

              <Button
                className="mt-4"
                block
                tag={Link}
                // to="/app"
                onClick={handleSubmit}
              >
                Log in
              </Button>
              <HelperText valid={false}>{err}</HelperText>

              {/* <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create account
                </Link>
              </p> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
