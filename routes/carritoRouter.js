import express from "express";
import { CarritoConfig, mostrarCarrito, seleccionarCarrito } from "../controllers/carrito/carritoController.js";
import rutaProteger from "../middleware/rutasProteger.js"
const routerCarrito = express.Router();

routerCarrito.get("/mostrarCarrito",rutaProteger,mostrarCarrito);
routerCarrito.get("/carritoConfig", rutaProteger, CarritoConfig);
routerCarrito.post("/carritoConfig",seleccionarCarrito );

export default routerCarrito;