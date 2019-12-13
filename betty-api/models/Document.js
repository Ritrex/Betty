const mongoose = require("mongoose");

const {
  Schema,
  model
} = mongoose;

const DocSchema = new Schema({
  url: {
    type: [String],
    required: true
  },
  faseid: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Fase"
  },
  estado: {
    type: String,
    enum: ["finished", "started", "cancelled"],
    default: ["started"]
  },
  tipo: {
    type: String,
    enum: ["texo", "imagen", "audio"]
  }
}, {
  timestamps: true
});

module.exports = model("Doc", DocSchema);