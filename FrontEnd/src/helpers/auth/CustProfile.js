import axios from "axios";
import { API } from "../../backendapi";

var CustProfile = (function () {
  var name = "";
  var username = "";
  var token = "";
  var id = "";
  var role = 99;
  var phone;

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
  var getPhone = function () {
    if (phone == "") return localStorage.getItem("phone");
    return phone; // Or pull this from cookie/localStorage
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
  var setPhone = function (p) {
    localStorage.setItem("phone", p);
    phone = p;
  };
  var isAuthenticated = async () => {
    if (localStorage.getItem("type") !== "1") return false;
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
    return axios
      .post(`${API}/customer/signInTest/${getId()}`)
      .then((res) => {
        console.log("Cust authenticated");
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
    localStorage.removeItem("name");
    setUsername("");
    localStorage.removeItem("username");
    setToken("");
    localStorage.removeItem("token");
    setId("");
    localStorage.removeItem("id");
    setRole("9999");
    localStorage.removeItem("type");
    setPhone("");
    localStorage.removeItem("phone");
    // localStorage.setItem("name","");
  };

  return {
    getName,
    setName,
    setUsername,
    getUsername,
    setToken,
    getToken,
    getPhone,
    isAuthenticated,
    setId,
    getId,
    getRole,
    setRole,
    signout,
    setPhone,
  };
})();

export default CustProfile;
