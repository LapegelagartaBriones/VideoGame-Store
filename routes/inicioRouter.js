import express from "express";
import { inicio } from "../controllers/inicioController.js";

const inicioRouter = express.Router();

inicioRouter.get('/', inicio);

export default inicioRouter;