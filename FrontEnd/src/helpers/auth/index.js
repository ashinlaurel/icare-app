import Axios from "axios";
import { API } from "../../backendapi";

export const signup = (newuser, path) => {
  return Axios.post(`${API}/${path}`, newuser)
    .then((user) => {
      console.log("h", user.data);
      return user.data;
    })
    .catch((error) => {
      console.log("ERRRROs");
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        throw error.response.data.errors;
      }
    });
};

export const signin = (user) => {
  return Axios.post(`${API}/admin/signin`, user)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error.response);
      throw error.response.data.error;
    });
};

export const authenticate = (data, callback) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    callback();
  }
};

export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
