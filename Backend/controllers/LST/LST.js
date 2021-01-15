const LST = require("../../models/LST/LST");
const pdf = require("html-pdf");
const pdfTemplate = require("../../documents/lst");
const puppeteer = require('puppeteer')


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

exports.getById = async (req, res) => {
  try {
    let {id}=req.body
    // console.log(req.body.id)
    let lst = await LST.findById(id).populate("invItems");
    return res.status(200).json(lst);
  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
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

// exports.downloadPdf = async (req, res) => {
//   let { id } = req.body;

//   try {
//         let lst = await LST.findById(req.body.id).populate("invItems");
        
      
//    let options={
    
//      // Rendering options
//      "base": "file:///Users/alan/PROJECTS/INFOCARE/icare-app/Backend/controllers/LST", 
//    }
        
//   pdf
//     .create(pdfTemplate(lst), options)
//     .toFile("./controllers/LST/lstnew.pdf", (err) => {
//       if (err) {
//         res.send(Promise.reject());
//       }

//       // res.send(Promise.resolve());

//       res.status(200).sendFile(`${__dirname}/lstnew.pdf`);
//     });

//   } catch (err) {
//     console.log(id);
//     return res.status(400).json({ error: err });
//   }
// };

exports.downloadPdf = async (req, res) => {
  let { id } = req.body;

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(`${process.env.FRONT}/lstpdf/${id}`, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({ format: 'A4' });
   
    await browser.close();
    res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
	  res.send(pdf)
 
 

  } catch (err) {
    console.log(id);
    return res.status(400).json({ error: err });
  }
};

// -----------------------Fuzzy Search Regex----------------
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3001/lstpdf/600143a03f2e0845de4fd474', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4' });
 
  await browser.close();
  return pdf
}