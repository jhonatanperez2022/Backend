import gamesSchema from "../models/gamesSchema.js"



export const save = async (req, res) => {

    const games = await gamesSchema.create(req.body)
    res.send({ status: 'success', games })
}

export const list = async (req, res) => {

    const games = await gamesSchema.find()
    res.send({ status: 'success', games })
}

export const getOne = async (req, res) => {
    const id = req.params.id
    const games = await gamesSchema.findOne({ _id: id })
    res.send({ status: 'success', games })
}

export const update = async (req, res) => {
    const id = req.params.id
    const games = await gamesSchema.updateOne({ _id: id }, req.body)
    res.send({ status: 'success', games })
}

export const deleteOne = async (req, res) => {
    const id = req.params.id
    const games = await gamesSchema.deleteOne({ _id: id })
    res.send({ status: 'success', games })
}

