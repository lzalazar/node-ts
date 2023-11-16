import express from "express";
import { HealtController } from "../../healt/HealtController";

export const healtRouter = express.Router();
const controller = new HealtController();
healtRouter.get('/',controller.status.bind(controller));

