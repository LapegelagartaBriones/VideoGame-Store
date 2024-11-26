import express from "express";
import  { eliminarDelCarrito, juegoCarrito, mostrarCarrito } from "../controllers/carrito/carritoController.js";
import rutaProteger from "../middleware/rutasProteger.js"
const routerCarrito = express.Router();

routerCarrito.get("/mostrar",rutaProteger,mostrarCarrito);
routerCarrito.get("/juego/:id",juegoCarrito)
routerCarrito.post("/eliminar/:id", eliminarDelCarrito );

export default routerCarrito;