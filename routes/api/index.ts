import express, { Router } from 'express'

const router = Router()

router.use('/cart', (req:any,res:any) =>{
    res.send('Aca deberia estar el carrito')
})
router.use('/products', (req:any,res:any) =>{
    res.send('Aca deberian estar los productos')
})


export default router