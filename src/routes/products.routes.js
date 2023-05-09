import { Router } from "express";
import { deleteOne, getOne, list, save, update } from "../controllers/productController.js";

const gamesRouter = Router()


gamesRouter.post("/", save)
gamesRouter.get("/", list);
gamesRouter.get("/:id", getOne);
gamesRouter.put("/:id", update)
gamesRouter.delete("/:id", deleteOne);

export default gamesRouter;