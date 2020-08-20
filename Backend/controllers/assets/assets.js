const Asset = require("../../models/assets/assets");

// get category by id when params passed
// exports.getCategoryById = (req, res, next, id) => {
//   Category.findById(id).exec((err, category) => {
//     if (err || !category) {
//       return res.status(400).json({
//         error: "No category found",
//       });
//     }
//     req.category = category;
//     next();
//   });
// };

exports.createAsset = (req, res) => {
  const theasset = new Asset(req.body);
  theasset.save((err, asset) => {
    if (err || !asset) {
      return res.status(400).json({
        error: "Can't save asset!",
      });
    }
    return res.status(200).json(asset);
  });
  //   console.log("hello");
};

// exports.getCategory = (req, res) => {
//   return res.json(req.category);
// };

// exports.getAllCategory = (req, res) => {
//   Category.find().exec((err, categories) => {
//     if (err || !categories) {
//       return res.status(400).json({
//         error: "No category found",
//       });
//     }
//     return res.json(categories);
//   });
// };

// exports.updateCategory = (req, res) => {
//   const category = req.category;
//   category.name = req.body.name;
//   category.save((err, updatedCategory) => {
//     if (err || !updatedCategory) {
//       return res.status(400).json({
//         error: " Cant Update the Category",
//       });
//     }
//     return res.json(updatedCategory);
//   });
// };

// TODO : Note this was done by my method diff from guide so check if working!!!!!!!
// exports.deleteCategory = (req, res) => {
//   Category.deleteOne({ _id: req.category._id }).exec((err, deletedCategory) => {
//     if (err || !deletedCategory) {
//       return res.status(400).json({
//         error: " Cant Delete the Category",
//       });
//     }
//     return res.json(deletedCategory);
//   });
// };
