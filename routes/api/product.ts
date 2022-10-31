import express, { Router } from 'express'

const router = Router()

router.get('/', (req:any,res:any) =>{
    res.send('Aca deberia estar los items')
})
router.post('/', (req:any,res:any) =>{
    res.send('Aca agregamos un item')
})

export default router