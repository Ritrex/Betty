const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const RoleSchema = new Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = model("Role", RoleSchema);
