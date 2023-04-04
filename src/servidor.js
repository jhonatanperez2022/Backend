import express from "express";
import gamesRouter from "./routes/products.routes.js";
import cartRouter from "./routes/cart.routes.js";


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", gamesRouter)
app.use("/api/cart", cartRouter)




const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Local Host ${server.address().port}`)
})
server.on("error", (error) => console.log(`Error del servidor ${error}`))