const CustomerLogin = require("../../models/customer/CustomerLogin");

const expressjwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");

const handleError = (err) => {
  console.log(err.message, err.code);
  const errors = { name: "", enc_password: "", username: "", emial: "" };
  if (err.code == 11000)
    errors.username = "Account already exists for this username.";
  if (err.message.includes("CustomerLogin validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

exports.signup = async (req, res) => {
  // const { login, info } = req.body;
  // console.log(login)

  //////////////// pas accountId as empty array ///////////
  try {
    const newuserlogin = new CustomerLogin(req.body);
    const userlogin = await newuserlogin.save();
    if (req.body.role == 2) {
      const customer = await CustomerLogin.findById(
        req.body.parentCustomerId
      ).exec();
      let accounts = customer.childAccountIds;
      accounts.push(String(userlogin._id));
      customer.childAccountIds = accounts;
      const final = await customer.save();
    }

    return res.status(201).json({
      _id: userlogin.id,
      name: userlogin.name,
      username: userlogin.username,
      email: userlogin.email,
    });
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

exports.resetPasswordByAdmin = async (req, res) => {
  let { id, pass } = req.body;
  let salt = uuidv1();
  if (!pass) return "";
  try {
    let encPass = crypto.createHmac("sha256", salt).update(pass).digest("hex");
    let user = await CustomerLogin.findByIdAndUpdate(
      id,
      { enc_password: encPass, salt: salt ,show_password:pass},
      {
        safe: true,
        useFindAndModify: false,
      }
    );
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

exports.signin = (req, res) => {
  const { username, password } = req.body;
  CustomerLogin.findOne({ username: username }, (err, user) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!user) {
      return res.status(400).json({ error: "Username not found" });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({ error: "Wrong password" });
    }
    var token = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.SECRET
    );
    res.cookie("token", token);
    return res.status(200).json({
      token,
      user: {
        _id: user.id,
        name: user.name,
        username: user.username,
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

exports.isCustSignedIn = expressjwt({
  secret: process.env.SECRET,
  requestProperty: "auth",
  algorithms: ["HS256"],
});

exports.isCustAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }
  console.log("user authenticated");
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "You are not ADMIN, Access denied",
    });
  }
  next();
};

exports.getCustById = (req, res, next, id) => {
  // console.log("Cid", id);
  CustomerLogin.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.profile = user;
    next();
  });
};
