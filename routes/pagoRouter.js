import express from "express";
import { mostrarPago, realizarCompra } from "../controllers/pago/pagoController.js";
import rutaProteger from "../middleware/rutasProteger.js";

const pagoRouter= express.Router();

pagoRouter.get("/mostrarPago",rutaProteger ,mostrarPago);
pagoRouter.get("/compraRealizada", realizarCompra);

export default pagoRouter;