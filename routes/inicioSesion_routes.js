import express from "express";
import { registroUser, mostrarRegistro } from "../controllers/inicioSesion/registroController.js";
const routerSesion = express.Router();

routerSesion.get('/', mostrarRegistro);
routerSesion.post('/',registroUser)
export default routerSesion