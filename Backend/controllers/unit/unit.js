const Unit = require("../../models/customer/Unit");
const Account = require("../../models/customer/Account");
const CustomerLogin = require("../../models/customer/CustomerLogin");

// const handleError = (err) => {
//   console.log(err.message, err.code);
//   const errors = { customerName: "", enc_password: "", email: "" };
//   if (err.code == 11000)
//     errors.email = "Account already exists for this email.";
//   if (err.message.includes("CustomerLogin validation failed")) {
//     Object.values(err.errors).forEach(({ properties }) => {
//       errors[properties.path] = properties.message;
//     });
//   }
//   return errors;
// };

exports.unitCreate = async (req, res) => {
  //////// dont forget to pass customer name and CustId is login from frontend
  const unit = req.body;
  // console.log(login)
  try {
    const newunit = new Unit(unit);
    const newunitres = await newunit.save();

    const account = await CustomerLogin.findById(unit.accountId).exec();
    // console.log("account", account,newunitres.);
    let units = account.unitIds;
    units.push(String(newunitres._id));
    account.unitIds = units;
    console.log("account", account);
    const final = account.save();

    return res.status(201).json({
      _id: newunit.id,
      unitName: newunit.unitName,
      //   email: userlogin.email,
    });
  } catch (err) {
    // const errors = handleError(err);
    res.status(400).json({ err });
  }
};

exports.getAllUnits = async (req, res) => {
  try {
    const users = await Unit.find(); //populate("infoId");
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "getAll Error" });
  }
};

exports.deleteUnit = async (req, res) => {
  let { id } = req.body;
  try {
    let unit = await Unit.findByIdAndDelete({ _id: id });
    let accId = unit.accountId;
    let acc = await CustomerLogin.update(
      { _id: accId },
      { $pull: { unitIds: id } }
    );
    return res.status(200).json({ acc, acc });
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.getUnitById = async (req, res) => {
  try {
    let unit = await Unit.findById(req.body.id).populate("assetsId");
    return res.status(200).json(unit);
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.updateUnit = async (req, res) => {
  let { id, update } = req.body;
  console.log(id, update);
  try {
    let unit = await Unit.findByIdAndUpdate(id, update, {
      safe: true,
      useFindAndModify: false,
    });
    return res.status(200).json({ unit });
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};
