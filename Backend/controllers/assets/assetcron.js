const Asset = require("../../models/assets/assets");
const Server = require("../../models/products/server");
// const { Schema } = require("mongoose");
// const { result, filter } = require("lodash");
// const Unit = require("../../models/customer/Unit");
// const originalproduct = require("../../models/products/originalproduct");
// const ObjectId = require("mongodb").ObjectID;


exports.contractCheckForAssets = (req, res) => {

  Asset.paginate(filteroptions, options, function (err, result) {
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
};
