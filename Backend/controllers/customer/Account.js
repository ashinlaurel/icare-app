const Account = require("../../models/customer/Account");
const CustomerLogin = require("../../models/customer/CustomerLogin");

const expressjwt = require("express-jwt");
const jwt = require("jsonwebtoken");

const handleError = (err) => {
  console.log(err.message, err.code);
  const errors = { customerName: "", enc_password: "", email: "" };
  if (err.code == 11000)
    errors.email = "Account already exists for this email.";
  if (err.message.includes("CustomerLogin validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

exports.signup = async (req, res) => {
  //////// dont forget to pass customer name and CustId is login from frontend
  const account = req.body;
  console.log("here");
  // console.log(login)
  try {
    const newuserlogin = new Account(account);
    const userlogin = await newuserlogin.save();

    const customer = await CustomerLogin.findById(account.customerId).exec();
    let accounts = customer.accountId;
    accounts.push(String(userlogin._id));
    customer.accountId = accounts;
    const final = await customer.save();

    return res.status(201).json({
      _id: userlogin.id,
      customerName: userlogin.accountName,
      email: userlogin.email,
    });
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

// exports.signin = (req, res) => {
//   const { email, password } = req.body;
//   CustomerLogin.findOne({ email: email }, (err, user) => {
//     if (err) return res.status(400).json({ error: err.message });
//     if (!user) {
//       return res.status(400).json({ error: "Email not found" });
//     }
//     if (!user.authenticate(password)) {
//       return res.status(400).json({ error: "Wrong password" });
//     }
//     var token = jwt.sign({ _id: user._id }, process.env.SECRET);
//     res.cookie("token", token);
//     return res.status(200).json({
//       token,
//       user: {
//         _id: user.id,
//         customerName: user.customerName,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   });
// };

// exports.signout = (req, res) => {
//   res.clearCookie("token");
//   res.json({
//     message: "User signout successfully",
//   });
// };

// exports.isSignedIn = expressjwt({
//   secret: process.env.SECRET,
//   requestProperty: "auth",
//   algorithms: ["HS256"],
// });

// exports.isAuthenticated = (req, res, next) => {
//   let checker = req.profile && req.auth && req.profile._id == req.auth._id;
//   if (!checker) {
//     return res.status(403).json({
//       error: "ACCESS DENIED",
//     });
//   }
//   next();
// };

// exports.isAdmin = (req, res, next) => {
//   if (req.profile.role === 0) {
//     return res.status(403).json({
//       error: "You are not ADMIN, Access denied",
//     });
//   }
//   next();
// };
