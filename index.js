//Las funciones para testear estan comentadas debajo

const fs = require("fs");

class ProductManager {

    constructor() {
        this.path = "./products.txt"
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
        await fs.promises.writeFile(this.path, JSON.stringify(this.products))
    }



    getProducts = async () => {
        let allGames = await fs.promises.readFile(this.path, "utf-8")
        console.log(JSON.parse(allGames))
    }



    getProductById = async (id) => {
        let findGame = this.products.find((game)=> game.id === id)
        findGame ? console.log(findGame) : console.log("Juego no encontrado")
    }



    deleteProductById = async (id) => {
        let allGames2 = await fs.promises.readFile(this.path, "utf-8")
        let gamesParse = JSON.parse(allGames2)
        let gameFilter = gamesParse.filter(game => game.id !== id)
        await fs.promises.writeFile(this.path, JSON.stringify(gameFilter))
        console.log(`Juego de id: ${id} eliminado`)
        console.log(gameFilter)
    }



    updateProduct = async ({id, ...game}) => {
        await this.deleteProductById(id)
        let productOld = await fs.promises.readFile(this.path, "utf-8")
        let oldParse = JSON.parse(productOld)
        let gameUpdated = [{...game, id}, ...oldParse]
        console.log(gameUpdated)
        await fs.promises.writeFile(this.path, JSON.stringify(gameUpdated))
    }

}

const product = new ProductManager

product.addProduct("Fifa 23", "sport", 30, "https://images.wallpapersden.com/image/download/fifa-23-gaming_bWplbWaUmZqaraWkpJRmZ21lrWxnZQ.jpg",100,"J01")
product.addProduct("Gta 5", "action", 25, "https://images.wallpapersden.com/image/download/gta-v-grand-theft-auto-v-game_ZmdpaGmUmZqaraWkpJRmZ21lrWxnZQ.jpg",100,"J02")
product.addProduct("Uncharted 4", "adventure", 20, "https://www.laps4.com/wp-content/uploads/2018/12/reportada-11005.jpg",100,"J03")

product.getProducts()

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
