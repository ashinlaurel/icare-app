import axios from "axios";
import { API } from "../../backendapi";

var CustProfile = (function () {
  var name = "";
  var username = "";
  var token = "";
  var id = "";
  var role = 99;

  var getName = function () {
    if (name == "") return localStorage.getItem("name");
    return name; // Or pull this from cookie/localStorage
  };
  var getUsername = function () {
    if (username == "") return localStorage.getItem("username");
    return username; // Or pull this from cookie/localStorage
  };
  var getToken = function () {
    if (token == "") return localStorage.getItem("token");
    return token; // Or pull this from cookie/localStorage
  };
  var getId = function () {
    if (id == "") return localStorage.getItem("id");
    return id; // Or pull this from cookie/localStorage
  };
  var getRole = function () {
    // if (id == "") return localStorage.getItem("id");
    return role; // Or pull this from cookie/localStorage
  };

  var setName = function (myname) {
    name = myname;

    localStorage.setItem("name", name);
  };
  var setUsername = function (uname) {
    username = uname;
    localStorage.setItem("username", username);
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
  var setRole = function (r) {
    role = r;
  };
  var isAuthenticated = async () => {
    if (localStorage.getItem("type") !== "1") return false;
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
    return axios
      .post(`${API}/customer/signInTest/${getId()}`)
      .then((res) => {
        console.log("authenticated");
        setRole(res.data.user.role);
        return true;
      })
      .catch((err) => {
        console.log("auth error", err);
        throw err;
      });
    // return getToken();
  };
  var signout = () => {
    // axios.defaults.headers.common
    setName("");
    localStorage.setItem("name", "");
    setUsername("");
    localStorage.setItem("username", "");
    setToken("");
    localStorage.setItem("token", "");
    setId("");
    localStorage.setItem("id", "");
    setRole("9999");
    // localStorage.setItem("name","");
  };

  return {
    getName,
    setName,
    setUsername,
    getUsername,
    setToken,
    getToken,
    isAuthenticated,
    setId,
    getId,
    getRole,
    setRole,
    signout,
  };
})();

export default CustProfile;
