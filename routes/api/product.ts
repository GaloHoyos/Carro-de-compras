import express, { Router } from 'express'
import productController from '../../controllers/product'

const router = Router()

router.get('/', productController.get)
router.post('/', productController.add)
router.delete('/', productController.delete)

export default router