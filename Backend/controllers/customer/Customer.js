const CustomerLogin = require("../../models/customer/CustomerLogin");
const CustomerInfo = require("../../models/customer/CustomerInfo");

exports.getAllCust = async (req, res) => {
  try {
    const users = await CustomerLogin.find().populate("infoId");
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "getAll Error" });
  }
};
