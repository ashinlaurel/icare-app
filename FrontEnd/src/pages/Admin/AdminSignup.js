import React, { useState } from "react";
import { Link } from "react-router-dom";

import ImageLight from "../../assets/img/create-account-office.jpeg";
import ImageDark from "../../assets/img/create-account-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../../icons";
import { Input, Label, Button } from "@windmill/react-ui";
import { signup, signin, authenticate } from "../../helpers/auth";
import { HelperText } from "@windmill/react-ui";

function AdminSignUp() {
  const [values, setValues] = useState({
    employeeName: "admin",
    email: "admin@test.com",
    password: "password",
    confpassword: "password",
  });
  const [err, setErr] = useState({
    email: "",
    employeeName: "",
    enc_password: "",
    confpassword: "",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleConfPassChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
    if (values.password !== e.target.value) {
      setErr({ ...err, confpassword: "Confirm password does not match" });
    } else setErr({ ...err, confpassword: "" });
  };

  const handleSubmit = async (e) => {
    if (values.password !== values.confpassword) {
      setErr({ ...err, confpassword: "Confirm password does not match" });
      return;
    }
    e.preventDefault();
    const newuser = {
      employeeName: values.employeeName,
      email: values.email,
      password: values.password,
    };
    signup(newuser, "admin/signup")
      .then((data) => {
        // console.log("Signed Up", data);
        setErr({
          email: "",
          employeeName: "",
          enc_password: "",
          confpassword: "",
        });
        signin({ email: newuser.email, password: newuser.password }).then(
          (data) => {
            // console.log("Signed In", data);
            authenticate(data.token, () => {
              console.log("authenticated");
            });
          }
        );
      })
      .catch((err) => {
        // console.log("err", err);
        setErr({ ...err });
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
                Employee Registration
              </h1>
              <Label>
                <span>Name</span>
                <Input
                  className="mt-1"
                  type="text"
                  value={values.employeeName}
                  onChange={handleChange("employeeName")}
                />
              </Label>
              <HelperText valid={false}>{err.employeeName}</HelperText>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder=""
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </Label>
              <HelperText valid={false}>{err.email}</HelperText>
              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  placeholder=""
                  type="password"
                  value={values.password}
                  onChange={handleChange("password")}
                />
              </Label>
              <HelperText valid={false}>{err.enc_password}</HelperText>
              <Label className="mt-4">
                <span>Confirm password</span>
                <Input
                  className="mt-1"
                  type="password"
                  value={values.confpassword}
                  onChange={handleConfPassChange("confpassword")}
                />
              </Label>
              <HelperText valid={false}>{err.confpassword}</HelperText>

              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  I agree to the{" "}
                  <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Button
                tag={Link}
                // to="/AdminSignUp"
                block
                className="mt-4"
                onClick={handleSubmit}
              >
                Create account
              </Button>

              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/admin/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminSignUp;
