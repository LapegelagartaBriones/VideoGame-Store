import express from "express";
import { agregarCarrito, crearCarrito, mostrarCarrito, seleccionarCarrito } from "../controllers/carrito/carritoController.js";
import rutaProteger from "../middleware/rutasProteger.js"
const routerCarrito = express.Router();

routerCarrito.get("/",rutaProteger,mostrarCarrito);
routerCarrito.post("/agregar-juego/:id_juego",agregarCarrito);
routerCarrito.get("seleccionar-carrito/:id_carrito",seleccionarCarrito);
routerCarrito.post("/crear-carrito", crearCarrito);
export default routerCarrito;