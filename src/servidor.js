import express from "express";
import { engine } from "express-handlebars";
import { resolve } from 'path';
import { Server } from "socket.io";
import gamesRouter from "./routes/products.routes.js";
import cartRouter from "./routes/cart.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { save } from "./controllers/productController.js";
import session from "express-session";
import sessionRouter from "./routes/sessionRouter.js";

dotenv.config()


    mongoose.connect("mongodb+srv://thecapoflash:siemprenacional2022@chproject.q813agp.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));

    const app = express();


    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));
    app.use(session({
        secret: "js2022",
        resave: true,
        saveUninitialized: true
    }));
    
    app.use("/api/products", gamesRouter)
    app.use("/api/cart", cartRouter)
    app.use("/api/sessions", sessionRouter);






const viewsPath = resolve('src/views');

app.engine('handlebars', engine({
    layoutsDir: `${viewsPath}/layouts`,
    defaultLayout: `${viewsPath}/layouts/main.handlebars`
}));
app.set('view engine', 'handlebars');
app.set('views', viewsPath);

app.get('/', async (req, res) => {
    const allGames = save;
    res.render('home', {
        name: 'TricoJuegos',
        allGames: allGames

    })
})


const products = []

const todosLosProductos = save;


    const PORT = 8080;
    
    const httpServer = app.listen(PORT, () => {
        console.log(`Local Host ${PORT}`)
    })
    
    const socketServer = new Server(httpServer);

    socketServer.on('connection', socket => {
    console.log('Nuevo cliente conectado')
    
    socket.emit('todosLosProductos', todosLosProductos)
    socket.emit('productList', products);


    socket.on('addProduct', (data) => {
        products.push(data);
        socket.emit('productList', products)
    })
    socket.on('deleteProduct', (data) => {
        products = products.filter(game => game.name !== data )
        socket.emit('productList', products)
    })

})