import { model, Schema } from "mongoose"

const productSchema = new Schema({
    productID: {type: Number, required: true, unique: true},
    productName: {type: String, required: true},
    productPrice: {type: Number, required: true},
    productStock: {type: Number, required: true}
})

export default model("product", productSchema)

/* Esto es un modelo para saber como es cada producto fuera del carro de compras */