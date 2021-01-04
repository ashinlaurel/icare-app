const LST = require("../../models/LST/LST");




exports.LSTCreate = async (req, res) => {
  //////// dont forget to pass customer name and CustId is login from frontend
  const lst = req.body;
  // console.log(login)
  try {
    const newlst = new LST(lst);
    const newlstres = await newlst.save();


    return res.status(200).json(newlstres);
  } catch (err) {
    // const errors = handleError(err);
    console.log(err);
    res.status(400).json({ err });
  }
};
