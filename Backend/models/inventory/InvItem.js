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

    assetsIdHistory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Asset",
      },
    ],
    // to be set null if in inventory
    assetId:{
      type: mongoose.Schema.ObjectId,
        ref: "Asset", 
        default:null
    },

  sno: String,
  condition: String,
  location: String,
  invnumber: String,
});
InvItemSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("InvItem", InvItemSchema);
