import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import ImageLight from "../../assets/img/login-office.jpeg";
import ImageDark from "../../assets/img/login-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../../icons";
import { Label, Input, Button } from "@windmill/react-ui";
import { signin, authenticate, isAutheticated } from "../../helpers/auth";
import { HelperText } from "@windmill/react-ui";
import { useHistory } from "react-router-dom";
import EmpProfile from "../../helpers/auth/EmpProfile";

function AdminLogin() {
  // isAutheticated();
  let history = useHistory();
  const [values, setValues] = useState({
    email: "admin@test.com",
    password: "password",
  });
  const [err, setErr] = useState();

  useEffect(() => {
    console.log("empName", EmpProfile.getEmail());
    if (EmpProfile.getEmail()) history.push("/app");
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newuser = {
      email: values.email,
      password: values.password,
    };
    if (values.email === "" || values.password == "") {
      setErr("Please enter email and password");
      return;
    }
    signin(newuser, "admin/signin")
      .then((data) => {
  
        console.log("Signed In", data.user);
        EmpProfile.setName(data.user.employeeName);
        EmpProfile.setEmail(data.user.email);
        EmpProfile.setToken(data.token);
        EmpProfile.setId(data.user._id);
        EmpProfile.setLocation(data.user.location);
        localStorage.setItem("type", 0); ///////-----------------------------> 0 for employee 1 for customer
        console.log("authenticated");
        history.push("/app");
        // return <Redirect to="/app" />;
        // });
      })
      .catch((err) => {
        setErr(err);
        console.log("err", err);
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
                Employee Login
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="john@doe.com"
                  value={values.email}
                  onChange={handleChange("email")}
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

              <hr className="my-8" />

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
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
