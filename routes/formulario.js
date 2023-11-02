import express, { json } from "express";
const router = express.Router()

import formulario from "../models/formulario";

// Enviamos los datos para guardar en la DB
router.post('/save', async(req, res)=>{
    const body = req.body
    try {
        const data = await formulario.create(body)
        res.status(200).json()({
            data: data,
            mensaje: "Guardado con exito"
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ocurrio un error",
            error
        })
    }
})

module.exports = router