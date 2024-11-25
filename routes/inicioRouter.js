import express from "express";
import { inicio, juegoSeleccionado, juegoSeleccionadoPlataforma } from "../controllers/inicioController.js";
import { agregarCarrito } from "../controllers/carrito/carritoController.js";

const inicioRouter = express.Router();

inicioRouter.get('/', inicio);
inicioRouter.get('/verMas/:id', juegoSeleccionado);
inicioRouter.get("/:id_plataforma", juegoSeleccionadoPlataforma);
inicioRouter.get("/:id",agregarCarrito);
export default inicioRouter;