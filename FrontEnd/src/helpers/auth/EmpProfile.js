import axios from "axios";
import { API } from "../../backendapi";

var EmpProfile = (function () {
  var name = "";
  var email = "";
  var token = "";
  var id = "";
  var role = 99;

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
  var getRole = function () {
    // if (id == "") return localStorage.getItem("id");
    return role; // Or pull this from cookie/localStorage
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
  var setRole = function (r) {
    role = r;
  };
  var isAuthenticated = async () => {
    console.log("type", localStorage.getItem("type"));
    if (localStorage.getItem("type") !== "0") return false;
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
    return axios
      .post(`${API}/admin/signInTest/${getId()}`)
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
    localStorage.removeItem("name");
    setEmail("");
    localStorage.removeItem("email");
    setToken("");
    localStorage.removeItem("token");
    setId("");
    localStorage.removeItem("id");
    setRole("9999");
    localStorage.removeItem("type");
    // localStorage.setItem("name","");
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
    getRole,
    setRole,
    signout,
  };
})();

export default EmpProfile;
