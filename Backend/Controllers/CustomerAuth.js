const Customer = require("../Models/CustomerLogin");
const expressjwt = require("express-jwt");
const jwt = require("jsonwebtoken");

const handleError = (err) => {
  console.log(err.message, err.code);
  const errors = { customerName: "", enc_password: "", email: "" };
  if (err.code == 11000)
    errors.email = "Account already exists for this email.";
  if (err.message.includes("Customer validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

exports.signup = async (req, res) => {
  try {
    const user = await Customer.create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  Customer.findOne({ email: email }, (err, user) => {
    if (!user) {
      return res.status(400).json({ error: "Email not found" });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({ error: "Wrong password" });
    }
    const token = jwt.si;
    return res.status(200).json(user);
  });
};
