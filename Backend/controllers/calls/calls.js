const Call = require( '../../models/call/call');

exports.callCreate = async (req, res) => {
    //////// dont forget to pass customer name and CustId is login from frontend
    const call = req.body;
    try {
      const temp = new Call(call);
      const newcall = await temp.save();
  
      return res.status(201).json(newcall);
    } catch (err) {
      res.status(400).json(err);
    }
  };


 exports.getCalls = async (req, res) => {
    //////// dont forget to pass customer name and CustId is login from frontend
    let { pages, filters } = req.body;

  let { searchquery, searchtype } = filters

    let options = {
      populate: "assetId",
      page: pages.page,
      limit: pages.limit,
    };
  
    let filteroptions = {
      // product: { brand: "IBM" },
    };

    searchquery="";
    if (searchquery == "") {
      // Logic to add to filter when required
      if (filters.business != "") {
        filteroptions.business = filters.business;
      }
      if (filters.producttype != "") {
        filteroptions.producttype = filters.producttype;
      }
      // -----------------Customer,Account,Unit ID filters-------
      if (filters.unitId != "") {
        filteroptions.unitId = filters.unitId;
      } else if (filters.accountId != "") {
        filteroptions.accountId = filters.accountId;
      } else if (filters.customerId != "") {
        // console.log(filters.customerId);
        filteroptions.customerId = filters.customerId;
      }
  
      Call.paginate(filteroptions, options, function (err, result) {
        // console.log(result);
        if (err || !result) {
          return res.status(400).json({
            error: "No assets found",
            err: err,
          });
        }
        // console.log(result.docs);
        let output = {
          total: result.total,
          out: result.docs,
        };
        return res.json(output);
      });
    }
  };


 exports.assignEnggToCall = async (req, res) => {
    let { id, update } = req.body;
    console.log(id, update);
    try {
      let cust = await Call.findByIdAndUpdate(id, update, {
        safe: true,
        useFindAndModify: false,
      });
      return res.status(200).json({ cust });
    } catch (err) {
      console.log(id);
      return res.status(400).json({ error: err });
    }
  };
  