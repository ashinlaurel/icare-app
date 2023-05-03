const Asset = require("../../models/assets/assets");

exports.contractCheckForAssets = (req, res) => {
  const currentDate = new Date();
  Asset.updateMany(
    {
      $and: [
        { contractto: { $lt: currentDate } },
        { business: { $in: ["AMC", "WTY"] } },
      ],
    },
    { business: "NOS" },
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        console.log(`${result.modifiedCount} assets updated to NOS`);
      }
    }
  );
};
