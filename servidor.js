import express from "express";

import ProductManager from "./ProductManager.js";



const app = express();
app.use(express.urlencoded({ extended: true }));

const products = new ProductManager();


const showGames = products.getProducts()

app.get("/products", async (req, res) => {

    let limit = parseInt(req.query.limit);
    if(!limit) return console.log(showGames)
    let allProducts = await showGames
    let productLimit = allProducts.slice(0, limit)
    console.log(productLimit)
});

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Local Host ${server.address().port}`)
})
server.on("error", (error) => console.log(`Error del servidor ${error}`))