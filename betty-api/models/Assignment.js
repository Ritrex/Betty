const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const AssignmentSchema = new Schema(
  {
    asssignor: { type: String },
    assignorid: { type: Schema.Types.ObjectId },
    details: {
      type: [
        {
          asssignor: { type: String },
          assignorid: { type: Schema.Types.ObjectId },
          assigneeid: { type: Schema.Types.ObjectId },
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
