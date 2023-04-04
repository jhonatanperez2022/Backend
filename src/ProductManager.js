
import fs from "fs/promises";
import { nanoid } from "nanoid";



class ProductManager {

    constructor() {
        this.path = "./src/products.json"
    }


    readProducts = async () => {
        let products = await fs.readFile(this.path, "utf-8")
        return JSON.parse(products)
    }
    writeProducts = async (product) => {
        await fs.writeFile(this.path, JSON.stringify(product))
    }



    addProduct = async (product) => {
        let oldProduct = await this.readProducts()
        product.id = nanoid()
        let allProducts = [...oldProduct, product]
        await this.writeProducts(allProducts)
        return "Juego agregado"
    }


    getProducts = async () => {
        return await this.readProducts()
        
    }


    getProductById = async (id) => {
        let allGames = await this.readProducts()
        let gameExist = allGames.some(game => game.id === id)
        if (!gameExist) return "Juego no encontrado"
        let theGame = allGames.find(game => game.id === id)
        return theGame
    }


    deleteProductById = async (id) => {
        let allGames = await this.readProducts()
        let gameExist = allGames.some(game => game.id === id)
        if (!gameExist) return "Juego no encontrado"
        let filterGame = allGames.filter(game => game.id !== id)
        await this.writeProducts(filterGame)
        return "Juego eliminado"
    }


    updateProduct = async (id, product) => {
        let allGames = await this.readProducts()
        let findGame = allGames.find(game => game.id === id)
        if (!findGame) return "Juego no encontrado"
        await this.deleteProductById(id)
        let oldGames = await this.readProducts()
        let updatedProduct = [{...product, id : id},...oldGames]
        await this.writeProducts(updatedProduct)
        return "Juego actualizado"
    }

}

export default ProductManager;

