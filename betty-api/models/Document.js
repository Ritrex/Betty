const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const DocSchema = new Schema(
  {
    url: {
      type: [String],
      required: true
    },
    faseid: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Fase"
    },
    state: {
      type: String,
      enum: ["finished", "started", "cancelled", ""],
      default: ["started"]
    },
    state: {
      type: [String],
      default: []
    },
    tipo: {
      type: String,
      enum: ["texo", "imagen", "audio"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Doc", DocSchema);
