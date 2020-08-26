import axios from "axios";
import { API } from "../../backendapi";

var EmpProfile = (function () {
  var name = "";
  var email = "";
  var token = "";
  var id = "";

  var getName = function () {
    if (name == "") return localStorage.getItem("name");
    return name; // Or pull this from cookie/localStorage
  };
  var getEmail = function () {
    if (email == "") return localStorage.getItem("email");
    return email; // Or pull this from cookie/localStorage
  };
  var getToken = function () {
    if (token == "") return localStorage.getItem("token");
    return token; // Or pull this from cookie/localStorage
  };
  var getId = function () {
    if (id == "") return localStorage.getItem("id");
    return id; // Or pull this from cookie/localStorage
  };

  var setName = function (myname) {
    name = myname;

    localStorage.setItem("name", name);
  };
  var setEmail = function (email) {
    email = email;
    localStorage.setItem("email", email);
  };
  var setToken = function (tok) {
    token = tok;
    console.log("token", tok);
    localStorage.setItem("token", tok);
  };
  var setId = function (_id) {
    id = _id;
    localStorage.setItem("id", _id);
  };
  var isAuthenticated = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
    return axios
      .post(`${API}/admin/signInTest/${getId()}`)
      .then((res) => {
        console.log("authenticated");
        return true;
      })
      .catch((err) => {
        console.log("auth error", err);
        throw err;
      });
    // return getToken();
  };

  return {
    getName,
    setName,
    setEmail,
    getEmail,
    setToken,
    getToken,
    isAuthenticated,
    setId,
    getId,
  };
})();

export default EmpProfile;
