const mongoose = require("mongoose");

const {
  Schema,
  model
} = mongoose;

const OrgSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  proprietor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model("Organization", OrgSchema);