const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserProcessSchema = new Schema(
  {
    phaseid: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Fase"
    },
    userid: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("UserProcess", UserProcessSchema);
