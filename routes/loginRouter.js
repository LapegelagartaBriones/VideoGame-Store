import { mostrarlogin } from "../controllers/inicioSesion/loginController.js";
import express from "express";

const routerLogin = express.Router();

routerLogin.get("/", mostrarlogin);

export default routerLogin;