import express, { Router } from 'express'
import cartController from '../../controllers/cart'

const router = Router()

router.get('/', cartController.get)
router.post('/', cartController.add)
router.delete('/', cartController.delete)

export default router

// Utilizamos express para ver que van a hacer get, post y delete y en que rutas