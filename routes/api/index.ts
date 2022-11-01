import express, { Router } from 'express'
import cartRouter from './cart'
import productRouter from './product'

const router = Router()

router.use('/cart', cartRouter)             //la ruta localhost:3000/api/cart usara cartRouter que fue importado desde ./cart
router.use('/product', productRouter)      //la ruta localhost:3000/api/products usara productRouter que fue importado desde ./product

export default router