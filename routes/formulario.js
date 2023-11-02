import express, { json } from "express";
const router = express.Router();

import formulario from "../models/formulario";

// Enviamos los datos para guardar en la DB
router.post("/save", async (req, res) => {
  const body = req.body;
  return res.status(200).json({
    body: body,
    mensaje: "Guardado con exito",
  });
});

module.exports = router;
