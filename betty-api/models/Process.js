const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ProcessSchema = new Schema(
  {
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
    },
    assgimentid: { type: Schema.Types.ObjectId, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = model("Proceso", ProcessSchema);
