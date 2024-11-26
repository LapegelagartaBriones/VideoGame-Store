import express from "express";
import { inicio, juegoSeleccionado, juegoSeleccionadoPlataforma } from "../controllers/inicioController.js";


const inicioRouter = express.Router();

inicioRouter.get('/', inicio);
inicioRouter.get('/verMas/:id', juegoSeleccionado);
inicioRouter.get("/:id_plataforma", juegoSeleccionadoPlataforma);
export default inicioRouter;