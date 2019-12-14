const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const PhaseSchema = new Schema(
  {
    procesoid: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Proceso"
    },
    name: {
      type: String,
      required: true
    },
    adminid: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Phase", PhaseSchema);
