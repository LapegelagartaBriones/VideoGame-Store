import express from "express";
import { mostrarSuper } from "../controllers/superController.js";
const superRouter = express.Router();

superRouter.get("/mostrar",mostrarSuper);

export default superRouter;