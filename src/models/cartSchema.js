import mongoose, { Schema } from "mongoose";

const cartCollection = 'carts';

const CartModel = new Schema ({
    title: {type: Schema.Types.String, require: true},
    price: {type: Schema.Types.Number, require: true},
    category: {type: Schema.Types.String, require: true},
    stock: {type: Schema.Types.Number, require: true},
    enable: {type: Schema.Types.Boolean, default: true}
})

export default mongoose.model(cartCollection, CartModel);