import { Router } from "express";
import UserController from "./controller/UserController";

const routers = Router();
routers.post("/user", UserController.create);
routers.get("/users", UserController.findAll);
routers.put('/user/:id', UserController.update);
routers.delete('/user/:id', UserController.delete);

export default routers;