const LST = require("../../models/LST/LST");
const pdf = require("html-pdf");
const pdfTemplate = require("../../documents/lst");

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

exports.getAllItems = (req, res) => {
  let { pages, filters } = req.body;

  let { searchquery } = filters;
  // console.log(filters);
  // console.log(searchquery);
  // console.log(searchtype);
  const fuzzyquery = new RegExp(escapeRegex(searchquery), "gi");

  let options = {
    populate: "invItems",
    page: pages.page,
    limit: pages.limit,
  };

  let filteroptions = {
    // product: { brand: "IBM" },
  };

  // ---Conditional Addition of filters
  if (filters.from != "") {
    filteroptions.from = filters.from;
  }
  if (filters.to != "") {
    filteroptions.to = filters.to;
  }
  if (filters.status != "") {
    filteroptions.status = filters.status;
  }
  // if (filters.location != "") {
  //   filteroptions.location = filters.location;
  // }
  // if (filters.condition != "") {
  //   filteroptions.condition = filters.condition;
  // }
  if (filters.searchquery != "") {
    filteroptions.LSTNo = fuzzyquery;
  }

  // -----------------------------------------------------------------------

  LST.paginate(filteroptions, options, function (err, result) {
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

exports.updateLST = async (req, res) => {
  let { id, update } = req.body;
  // console.log(id, update);
  try {
    let lst = await LST.findByIdAndUpdate(id, update, {
      safe: true,
      useFindAndModify: false,
    });
    return res.status(200).json({ lst });
  } catch (err) {
    // console.log(id);
    return res.status(400).json({ error: err });
  }
};

// Pdf Download ------------------

exports.downloadPdf = async (req, res) => {
  // let { id, update } = req.body;

  pdf.create(pdfTemplate(req.body), {}).toFile("lstpdf.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
};

// app.post("/downloadpdf", (req, res) => {
// pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
//   if (err) {
//     res.send(Promise.reject());
//   }

//   res.send(Promise.resolve());
// });
// });

// -----------------------Fuzzy Search Regex----------------
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
