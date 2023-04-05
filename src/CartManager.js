
import fs from "fs/promises";
import { nanoid } from "nanoid";
import ProductManager from "./ProductManager.js";

const allProducts = new ProductManager()

class CartManager {
    constructor () {
        this.path = "./src/cart.json"
    }


    readCart = async () => {
        let cart = await fs.readFile(this.path, "utf-8")
        return JSON.parse(cart)
    }
    writeCart = async (cart) => {
        await fs.writeFile(this.path, JSON.stringify(cart))
    }

    addCart = async () => {
        let oldCart = await this.readCart()
        let id = nanoid()
        let newCart = [{ id: id, product: []}, ...oldCart]
        await this.writeCart(newCart)
        return "Carrito agregado"
    }

    getCartById = async (id) => {
        let allCarts = await this.readCart()
        let cartExist = allCarts.some(cart => cart.id === id)
        if (!cartExist) return "Carrito no encontrado"
        let theCart = allCarts.find(cart => cart.id === id)
        return theCart
    }

    addProductInCart = async (cartId, prodId) => {
        let allCarts = await this.readCart()
        let cartExist = allCarts.find(cart => cart.id === cartId)
        if (!cartExist) return "Carrito no encontrado"
        let allGames = await allProducts.readProducts()
        let gameExist = allGames.find(game => game.id === prodId)
        if(!gameExist) return "Juego no encontrado"
        let filterCart = allCarts.filter(cart => cart.id !== cartId)

        if(cartExist.product.some(prod => prod.id === prodId)){
            let prodInCart = cartExist.product.find(prod => prod.id === prodId)
            prodInCart.quantity++
            let newCart = [cartExist, ...filterCart]
            await this.writeCart(newCart)
            return "Juego sumado al carrito"
        }

        cartExist.product.push({ id: prodId, quantity: 1 });
        let newCart = [cartExist, ...filterCart]
        await this.writeCart(newCart)
        return "Juego agregado al carrito"
    }


}

export default CartManager