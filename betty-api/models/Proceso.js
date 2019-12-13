const mongoose = require("mongoose");

const {
  Schema,
  model
} = mongoose;

const ProcesoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  admin: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  organizaton: {
    type: Schema.Types.ObjectId
  }
}, {
  timestamps: true
});

module.exports = model("Proceso", ProcesoSchema);