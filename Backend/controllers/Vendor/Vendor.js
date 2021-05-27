const Vendor = require("../../models/Vendor/Vendor");

exports.VendorCreate = async (req, res) => {
  //////// dont forget to pass customer name and CustId is login from frontend
  const vend = req.body;
  // console.log(login)
  try {
    const newvend = new Vendor(vend);
    const newvendres = await newvend.save();

    return res.status(200).json(newvendres);
  } catch (err) {
    // const errors = handleError(err);
    console.log(err);
    res.status(400).json({ err });
  }
};

exports.getAllItems = (req, res) => {
  let { filters, pagination } = req.body;

  let { searchquery } = filters;
  console.log(filters);
  console.log(searchquery);
  // console.log(searchtype);
  const fuzzyquery = new RegExp(escapeRegex(searchquery), "gi");
  let options = {
    // populate: "invItems",
    page: 1,
    limit: 10,
  };

  let filteroptions = {
    // product: { brand: "IBM" },
  };

  if (filters.searchquery != "") {
    filteroptions.name = fuzzyquery;
  }

  if (filters.icarelocation) {
    filteroptions.district = filters.icarelocation;
    filteroptions.name = "INFOCARE SYSTEMS";
  }

  // -----------------------------------------------------------------------

  Vendor.paginate(filteroptions, options, function (err, result) {
    // console.log(result);
    if (err || !result) {
      return res.status(400).json({
        error: "No items found",
        err: err,
      });
    }
    // console.log(result.docs);
    let output = {
      total: result.total,
      out: result.docs,
    };
    return res.status(200).json(output);
  });
};

exports.updateVendor = async (req, res) => {
  let { id, update } = req.body;
  // console.log(id, update);
  try {
    let vend = await Vendor.findByIdAndUpdate(id, update, {
      safe: true,
      useFindAndModify: false,
    });
    return res.status(200).json({ vend });
  } catch (err) {
    // console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.getVendorById = async (req, res) => {
  try {
    let vend = await Vendor.findById(req.body.id);
    return res.status(200).json(vend);
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

exports.deleteVendor = async (req, res) => {
  let { id } = req.body;
  try {
    let vend = await Vendor.findByIdAndDelete(id);

    return res.status(200).json({ vend });
  } catch (err) {
    console.log("del Error", err);
    return res.status(400).json({ error: err });
  }
};

// -----------------------Fuzzy Search Regex----------------
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
