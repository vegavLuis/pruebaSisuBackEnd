import mongoose, { Schema } from "mongoose";
const formularioSchema = new Schema({
    nombre:{
        type: String,
        maxlength:50
    }
})