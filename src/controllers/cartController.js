import cartSchema from "../models/cartSchema.js"




export const saveCart = async (req, res) => {

    const cart = await cartSchema.create(req.body)
    res.send({ status: 'success', cart })
}

export const listCart = async (req, res) => {

    const cart = await cartSchema.find()
    res.send({ status: 'success', cart })
}

export const getOneCart = async (req, res) => {
    const id = req.params.id
    const cart = await cartSchema.findOne({ _id: id })
    res.send({ status: 'success', cart })
}

export const saveGameInCart = async (req, res) => {
    const idCart = req.params.cid
    const idGame = req.params.pid
    const cart = await cartSchema.create({ _id: idCart, _id: idGame })
    res.send({ status: 'success', cart })
}

export const deleteCart = async (req, res) => {
    const id = req.params.id
    const cart = await cartSchema.deleteMany({ _id: id })
    res.send({ status: 'success', cart })
}

export const deleteGameInCart = async (req, res) => {
    const idCart = req.params.cid
    const idGame = req.params.pid
    const cart = await cartSchema.deleteOne({ _id: idCart, _id: idGame });
    res.send({ status: 'success', cart })
}

export const updateCart = async (req, res) => {
    const id = req.params.id
    const cart = await cartSchema.updateOne({ _id: id }, req.body)
    res.send({ status: 'success', cart })
}

export const updateGameInCart = async (req, res) => {
    const idCart = req.params.cid
    const idGame = req.params.pid
    const cart = await cartSchema.updateOne({ _id: idCart, _id: idGame }, req.body)
    res.send({ status: 'success', cart })
}