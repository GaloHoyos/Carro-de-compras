import express, { Router } from 'express'

const router = Router()

router.get('/', (req:any,res:any) =>{
    res.send('Aca deberia estar el carrito')
})
router.post('/', (req:any,res:any) =>{
    res.send('Aca ponemos un item en el carrito')
})
router.post(':id/quantity', (req:any,res:any) =>{
    res.send('Aca agregamos mas items al carrito')
})

export default router

// Utilizamos express para ver que van a hacer get y post.