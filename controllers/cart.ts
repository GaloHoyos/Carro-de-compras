import e, { Request, Response } from "express";
import cartModel from '../models/cart'
import productModel from '../models/product'

const cartController = {
    get: async (req: Request, res: Response) => {
        try
        {
            const myCart = await cartModel.findOne()
            if (!myCart) {
                res.send('El carrito se encuentra vacio')
            } else {

                let i
                let total = 0
                let subTotal = 0

                let cant = 0
            
                const myCart = await cartModel.find()

            for (i=0; i < myCart.length; i++)
            {
                subTotal = myCart[i].productPrice
                cant = myCart[i].productAmount
                total = total + (cant*subTotal)
            }


             res.status(200).send(`Su carrito:\n   ${myCart}\n  Precio total: ${total}`)

            }
            
        }
        catch(error)
        {
            res.status(500).send(error)
        }
    },
    add: async (req: Request, res: Response) =>{
        try
        {
            const inProducts = await productModel.findOne({productID: req.body.productID})

            const inCart = await cartModel.findOne({productID: req.body.productID})

            if (!inProducts){
                res.send('Este producto no existe')
            }else if(!inCart){
                const productInCart = new cartModel({productID: inProducts.productID, productName: inProducts.productName, productAmount: 1, productPrice: inProducts.productPrice})

                productInCart.save()
                res.send(`Se agrego el producto ${productInCart.productName} al carrito!`)
            } else if (inCart){
                const product = inCart

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
            const inProducts = await productModel.findOne({productID: req.body.productID})

            const inCart = await cartModel.findOne({productID: req.body.productID})

            if(!inProducts){
                res.send('El producto no existe')
            } else if(!inCart){
                res.send('El producto no se encuentra en el carrito')
            } else if (inCart && (inCart.productAmount == 1)){
                const productoEliminado = await cartModel.findOneAndDelete({productID: req.body.productID})
                res.send('Se elimino el producto del carrito')
            } else if (inCart){
                const producto = inCart
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