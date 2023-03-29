import express from "express";

import ProductManager from "./ProductManager.js";



const app = express();
app.use(express.urlencoded({ extended: true }));

const products = new ProductManager();


app.get("/products", async (req, res) => {

    let showGames = await products.getProducts()

    let limit = parseInt(req.query.limit);
    if(limit > 0){
        const limitProducts = showGames.splice(0, limit);
        return res.send(limitProducts)
    }
    return res.send(showGames);
});


app.get("/products/:id", async (req, res) => {

    let showGames = await products.getProducts()
    let id = parseInt(req.params.id);
    let gameById = showGames.find(juego => juego.id === id)
    res.send(gameById)

})

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Local Host ${server.address().port}`)
})
server.on("error", (error) => console.log(`Error del servidor ${error}`))