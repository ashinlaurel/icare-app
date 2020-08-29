const EmployeeLogin = require("../../models/employee/EmployeeLogin");
const expressjwt = require("express-jwt");
const jwt = require("jsonwebtoken");

const handleError = (err) => {
  console.log(err.message, err.code);
  const errors = { employeeName: "", enc_password: "", email: "" };
  if (err.code == 11000)
    errors.email = "Account already exists for this email.";
  if (err.message.includes("EmployeeLogin validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

exports.signup = async (req, res) => {
  try {
    const user = await EmployeeLogin.create(req.body);
    return res.status(201).json({
      user: {
        _id: user.id,
        employeeName: user.employeeName,
        email: user.email,
      },
    });
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  EmployeeLogin.findOne({ email: email }, (err, user) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!user) {
      return res.status(400).json({ error: "Email not found" });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({ error: "Wrong password" });
    }
    var token = jwt.sign({ _id: user._id }, process.env.SECRET);
    res.cookie("token", token);
    return res.status(200).json({
      token,
      user: {
        _id: user.id,
        employeeName: user.employeeName,
        email: user.email,
        role: user.role,
      },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfully",
  });
};

exports.isSignedIn = expressjwt({
  secret: process.env.SECRET,
  requestProperty: "auth",
  algorithms: ["HS256"],
});

exports.isAuthenticated = (req, res, next) => {
  // console.log("herer");
  // req.emp = req.params;
  // console.log(req.emp);
  let checker = req.emp && req.auth && req.emp.id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  // console.log(req.emp);
  if (req.emp.role === 0) {
    next();
  } else
    return res.status(403).json({
      error: "You are not ADMIN, Access denied",
    });
};

exports.getEmpById = (req, res, next, id) => {
  // console.log("id", id);
  EmployeeLogin.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.emp = user;
    next();
  });
};
