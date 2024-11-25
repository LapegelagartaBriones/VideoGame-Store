import express from "express";
import { mostrarRegistro, registroUser, mostrarLogin, confirmarInscripcion, iniciarSesion, cerrarSesion } from "../controllers/inicioSesion/loginController.js";
const loginRouter = express.Router();

loginRouter.get('/', mostrarRegistro);
loginRouter.post('/',registroUser);
loginRouter.get("/iniciarSesion", mostrarLogin);
loginRouter.get('/confirmarInscripcion/:token', confirmarInscripcion);
loginRouter.post('/iniciarSesion', iniciarSesion);
loginRouter.get('/cerrarSesion', cerrarSesion);
export default loginRouter;