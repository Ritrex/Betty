const mongoose = require("mongoose");

const {
  Schema,
  model
} = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Rol"
    }],
    default: []
  }
}, {
  timestamps: true
});

module.exports = model("User", UserSchema);