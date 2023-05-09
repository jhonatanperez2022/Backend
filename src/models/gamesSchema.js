import mongoose, { Schema } from "mongoose";

const gamesCollection = 'products';

const GamesModel = new Schema ({
    title: {type: Schema.Types.String, require: true},
    price: {type: Schema.Types.Number, require: true},
    description: {type: Schema.Types.String, require: true},
    category: {type: Schema.Types.String, require: true},
    stock: {type: Schema.Types.Number, require: true},
    enable: {type: Schema.Types.Boolean, default: true}
})

export default mongoose.model(gamesCollection, GamesModel);