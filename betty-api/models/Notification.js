const mongoose = require("mongoose");

const {
  Schema,
  model
} = mongoose;

const NotificationSchema = new Schema({
  recipientid: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model("Notification", NotificationSchema);