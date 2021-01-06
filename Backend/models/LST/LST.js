const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const LSTSchema = new Schema({
  LSTNo: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  from: {
    type: String,
    required: true,
    trim: true,
  },
  to: {
    type: String,
    required: true,
    trim: true,
  },
  invItems: [
      {
    type: Schema.Types.ObjectId,
    ref:'InvItem',
  }],

  status: {
    type: String,
    trim: true,
  },

  
});
LSTSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("LST", LSTSchema);
