var EmpProfile = (function () {
  var name = "";
  var email = "";
  var token = "";

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

  var setName = function (myname) {
    name = myname;
    console.log("miname");
    localStorage.setItem("name", name);
  };
  var setEmail = function (email) {
    email = email;
    localStorage.setItem("email", email);
  };
  var setToken = function (token) {
    token = token;
    localStorage.setItem("token", `Bearer ${token}`);
  };
  var isAuthenticated = () => {
    /////-------------------->BackendCheck
    return getToken();
  };

  return {
    getName,
    setName,
    setEmail,
    getEmail,
    setToken,
    getToken,
    isAuthenticated,
  };
})();

export default EmpProfile;
