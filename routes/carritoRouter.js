import express from "express";
import { mostrarCarrito } from "../controllers/carrito/carritoController.js";
import rutaProteger from "../middleware/rutasProteger.js"
const routerCarrito = express.Router();

routerCarrito.get("/",rutaProteger,mostrarCarrito);

export default routerCarrito;