const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const AssignmentSchema = new Schema(
  {
    asssignor: { type: String },
    assignorid: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: String, default: Date.now().toString() },
    details: {
      type: [
        {
          asssignor: { type: String },
          assignorid: { type: Schema.Types.ObjectId, ref: "User" },
          assigneeid: { type: Schema.Types.ObjectId, ref: "User" },
          assignee: { type: String },
          updatedate: { type: Date, default: Date.now() },
          documenttype: { type: String }
        }
      ],
      default: []
    }
  },
  { timestamps: true }
);

module.exports = model("Assignment", AssignmentSchema);