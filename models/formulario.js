import mongoose, { Schema } from "mongoose";
const formularioSchema = new Schema({
  nombre: {
    type: String,
    maxlength: 50,
  },
  edad: {
    type: Number,
  },
  pais: {
    type: String,
  },
  estado: {
    type: String,
  },
  ciudad: {
    type: String,
  },
});
const formulario = mongoose.model("formulario", formularioSchema);
export default formulario;
