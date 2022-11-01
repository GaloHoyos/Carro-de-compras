import { model, Schema } from "mongoose"

const cartSchema = new Schema({
    productID: {type: Number, required: true, unique: true},
    productName: {type: String, required: true},
    productAmount: {type: Number, required: true},
    productPrice: {type: Number, required: true}
})

export default model("cart", cartSchema)

/* Este es un modelo para como van a ser los productos dentro del carrito de compra */