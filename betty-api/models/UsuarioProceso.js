const mongoose = require("mongoose");

const {
  Schema,
  model
} = mongoose;

const UsuarioProcesoSchema = new Schema({
  faseid: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Fase"
  },
  userid: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
}, {
  timestamps: true
});

module.exports = model("UsuarioProceso", UsuarioProcesoSchema);