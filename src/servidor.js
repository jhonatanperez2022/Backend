import express from "express";
import { engine } from "express-handlebars";
import { resolve } from 'path';
import { Server } from "socket.io";
import gamesRouter from "./routes/products.routes.js";
import cartRouter from "./routes/cart.routes.js";
import ProductManager from "./ProductManager.js";


const app = express();

const games = new ProductManager()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", gamesRouter)
app.use("/api/cart", cartRouter)

const viewsPath = resolve('src/views');

app.engine('handlebars', engine({
    layoutsDir: `${viewsPath}/layouts`,
    defaultLayout: `${viewsPath}/layouts/main.handlebars`
}));
app.set('view engine', 'handlebars');
app.set('views', viewsPath);

app.get('/', async (req, res) => {
    const allGames = await games.getProducts()
    res.render('home', {
        name: 'TricoJuegos',
        allGames: allGames

    })
})


const products = []
const todosLosProductos = await games.getProducts()

const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Local Host ${PORT}`)
})
const socketServer = new Server(httpServer);

socketServer.on('connection', socket => {
    console.log('Nuevo cliente conectado')
    
    socket.emit('todosLosProductos', todosLosProductos)
    socket.emit('productList', products);


    socket.on('addProduct', async (data) => {
        products.push(data);
        socket.emit('productList', products)
    })

})

// httpServer.on("error", (error) => console.log(`Error del servidor ${error}`))