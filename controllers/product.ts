import { Request, Response } from "express";
import cartModel from '../models/cart'
import productModel from '../models/product'

const productController = {
    get: async (req: Request, res: Response) => {
        try
        {
            const allCart = await productModel.find()
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
            const inProducts = await productModel.findOne({productID : req.body.productID})
            if(!inProducts){
                const newProduct = new productModel({...req.body})
                await newProduct.save()
                res.send(newProduct)
            }else if (inProducts){
                res.send('Ya existe el producto')
            }
        }
        catch(error)
        {
            res.status(500).send(error)
        }
    },
    delete: async (req: Request, res: Response) => {
        try
        {
            const inProducts = await productModel.findOne({productID : req.body.productID})
            if(!inProducts){
                res.send('No existe el producto')
            }else if (inProducts){
                const productoEliminado = await productModel.findOneAndDelete({productID : req.body.productID})
                res.send('El producto ha sido eliminado')

            }
        }
        catch(error)
        {
            res.status(500).send(error)
        }
    }
}

export default productController