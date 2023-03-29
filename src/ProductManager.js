//Las funciones para testear estan comentadas debajo

// const fs = require("fs");

import fs from "fs/promises";

class ProductManager {

    constructor() {
        this.path = "./src/products.txt"
        this.products = [];
    }

    static id = 0;


    addProduct = async (title, description, price, img, stock, code) => {
        ProductManager.id++
        let newProduct = {
            title,
            description,
            price,
            img,
            stock,
            code,
            id: ProductManager.id
        }
        this.products.push(newProduct)
        await fs.writeFile(this.path, JSON.stringify(this.products))
    }



    getProducts = async () => {
        let allGames = await fs.readFile(this.path, "utf-8")
        return JSON.parse(allGames)
    }



    getProductById = async (id) => {
        let findGame = this.products.find((game)=> game.id === id)
        findGame ? console.log(findGame) : console.log("Juego no encontrado")
    }



    deleteProductById = async (id) => {
        let allGames2 = await fs.readFile(this.path, "utf-8")
        let gamesParse = JSON.parse(allGames2)
        let gameFilter = gamesParse.filter(game => game.id !== id)
        await fs.writeFile(this.path, JSON.stringify(gameFilter))
        console.log(`Juego de id: ${id} eliminado`)
        console.log(gameFilter)
    }



    updateProduct = async ({id, ...game}) => {
        await this.deleteProductById(id)
        let productOld = await fs.readFile(this.path, "utf-8")
        let oldParse = JSON.parse(productOld)
        let gameUpdated = [{...game, id}, ...oldParse]
        console.log(gameUpdated)
        await fs.writeFile(this.path, JSON.stringify(gameUpdated))
    }

}

const product = new ProductManager

product.addProduct("Fifa 23", "sport", 30, "https://images.wallpapersden.com/image/download/fifa-23-gaming_bWplbWaUmZqaraWkpJRmZ21lrWxnZQ.jpg",100,"J01")
product.addProduct("Gta 5", "action", 25, "https://images.wallpapersden.com/image/download/gta-v-grand-theft-auto-v-game_ZmdpaGmUmZqaraWkpJRmZ21lrWxnZQ.jpg",100,"J02")
product.addProduct("Uncharted 4", "adventure", 20, "https://www.laps4.com/wp-content/uploads/2018/12/reportada-11005.jpg",100,"J03")
product.addProduct("Red Dead Redemption 2", "adventure", 25, "https://images.wallpapersden.com/image/download/red-dead-redemption-2-game-poster-2018_a2dobmyUmZqaraWkpJRmZ21lrWxnZQ.jpg",100,"J04")
product.addProduct("Spiderman", "action", 15, "https://uhdwallpapers.org/uploads/converted/18/04/08/spider-man-game-on-ps4-1280x720_59684-rm-90.jpg",100,"J05")
product.addProduct("Ufc 4", "action", 20, "https://www.sportsgamersonline.com/wp-content/uploads/2020/07/maxresdefault-10.jpg",100,"J06")
product.addProduct("Horizon Zero Dawn", "adventure", 15, "https://cdn-ext.fanatical.com/production/product/1280x720/d5f7dc78-2c2d-4604-90ee-79ca108c01fc.jpeg",100,"J07")
product.addProduct("Call Of Duty Cold War", "action", 20, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLHcOZ7mBAp4pWwsLK40nXgE5x0F_a9fUmdUGyHtAc_YjsiOoGNoHolzkLYe9uUdDBCQ&usqp=CAU",100,"J08")
product.addProduct("Resident Evil Village", "adventure", 25, "https://cdn-ext.fanatical.com/production/product/1280x720/3195fab1-5a9c-4a3d-b4d6-a31f876fe404.jpeg",100,"J09")
product.addProduct("The Last Of Us 2", "adventure", 30, "https://i.ytimg.com/vi/ek-iAALNeRo/maxresdefault.jpg",100,"J10")

// product.getProducts()

//FUNCIONES:

// product.getProductById(3)

// product.deleteProductById(2)

// product.updateProduct({
//     title: 'Fifa 23',
//     description: 'sport',
//     price: 45,
//     img: 'https://images.wallpapersden.com/image/download/fifa-23-gaming_bWplbWaUmZqaraWkpJRmZ21lrWxnZQ.jpg',
//     stock: 85,
//     code: 'J01',
//     id: 1
// })

export default ProductManager;