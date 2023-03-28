import express from "express";

import ProductManager from "./ProductManager.js";



const app = express();
app.use(express.urlencoded({ extended: true }));

const products = new ProductManager();


app.get("/products", async (req, res) => {

    const showGames = await products.getProducts()

    let limit = (req.query.limit);
    if(limit > 0){
        const limitProducts = showGames.splice(0, limit);
        return res.send(limitProducts)
    }
    return res.send(showGames);
});

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Local Host ${server.address().port}`)
})
server.on("error", (error) => console.log(`Error del servidor ${error}`))