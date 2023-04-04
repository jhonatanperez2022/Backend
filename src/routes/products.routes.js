import { Router } from "express";
import ProductManager from "../ProductManager.js";

const gamesRouter = Router()
const products = new ProductManager();

gamesRouter.post("/", async (req, res) => {
    let newProduct = req.body
    res.send( await products.addProduct(newProduct))
})

gamesRouter.get("/", async (req, res) => {
    res.send( await products.getProducts())
});

gamesRouter.get("/:id", async (req, res) => {
    let id = req.params.id
    res.send( await products.getProductById(id))
});

gamesRouter.put("/:id", async (req, res) => {
    let id = req.params.id
    let updatingGame = req.body
    res.send( await products.updateProduct(id, updatingGame))
})

gamesRouter.delete("/:id", async (req, res) => {
    let id = req.params.id
    res.send( await products.deleteProductById(id))
});

export default gamesRouter