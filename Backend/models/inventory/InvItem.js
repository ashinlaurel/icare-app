const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const InvItemSchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please select the item type"],
  },
  name: {
    type: String,
    maxlength: 32,
    trim: true,
  },

  //   customerId: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "CustomerLogin",
  //   },

  //   assetsId: [
  //     {
  //       type: mongoose.Schema.ObjectId,
  //       ref: "Asset",
  //     },
  //   ],

  sno: String,
  condition: String,
  location: String,
});
InvItemSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("InvItem", InvItemSchema);
