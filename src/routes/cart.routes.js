import { Router } from "express";
import { deleteCart, deleteGameInCart, getOneCart, listCart, saveCart, saveGameInCart, updateCart, updateGameInCart } from "../controllers/cartController.js";

const cartRouter = Router()


cartRouter.post("/", saveCart)
cartRouter.get("/", listCart)
cartRouter.get("/:id", getOneCart)
cartRouter.post("/:cid/products/:pid", saveGameInCart)
cartRouter.delete("/:id", deleteCart)
cartRouter.delete("/:cid/products/:pid", deleteGameInCart)
cartRouter.put("/:id", updateCart)
cartRouter.put("/:cid/products/:pid", updateGameInCart)

export default cartRouter