import express from "express";
import { inicio, juegoSeleccionado } from "../controllers/inicioController.js";

const inicioRouter = express.Router();

inicioRouter.get('/', inicio);
inicioRouter.get('/verMas/:id', juegoSeleccionado);
export default inicioRouter;