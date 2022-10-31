import e, { Request, Response } from "express";
import cartModel from '../models/cart'
import productModel from '../models/product'

const cartController = {
    get: async (req: Request, res: Response) => {
        try
        {
            const allCart = await cartModel.find()
            res.status(200).send(allCart)
        }
        catch(error)
        {
            res.status(500).send(error)
        }
    },
    add: async (req: Request, res: Response) =>{
        try
        {
            const isInProducts = await productModel.findOne({productID: req.body.productID})

            const isInCart = await cartModel.findOne({productID: req.body.productID})

            if (!isInProducts){
                res.send('Este producto no existe')
            }else if(!isInCart){
                const productInCart = new cartModel({productID: isInProducts.productID, name: isInProducts.productName, amount: 1, price: isInProducts.productPrice})

                productInCart.save()
                res.send(`Se agrego el producto ${productInCart.productName} al carro ${productInCart}`)
            } else if (isInCart){
                const product = isInCart

                product.productAmount++
                product.save()
                res.send(product)
            }
        }
        catch(error)
        {
            res.status(500).send(error)
        }
    },
    delete: async (req: Request, res: Response) =>{
        try
        {
            const isInProducts = await productModel.findOne({productID: req.body.productID})

            const isInCart = await cartModel.findOne({productID: req.body.productID})

            if(!isInProducts){
                res.send('El producto no existe')
            } else if(!isInCart){
                res.send('El producto no se encuentra en el carrito')
            } else if (isInCart && (isInCart.productAmount == 1)){
                const productoEliminado = await cartModel.findOneAndDelete({productID: req.body.productID})
                res.send('Se elimino el producto del carritto')
            } else if (isInCart){
                const producto = isInCart
                producto.productAmount--
                producto.save()
                res.send(producto)

            }
        }
        catch(error)
        {
            res.status(500).send(error)
        }

    }
}

export default cartController