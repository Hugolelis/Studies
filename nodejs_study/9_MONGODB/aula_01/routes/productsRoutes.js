import express from 'express'
export const router = express.Router()

import { productController } from '../controllers/productController.js'

router.get('/create', productController.createProduct)
router.post('/create', productController.createProductPost)
router.get('/:id', productController.getProduct)
router.post('/edit', productController.editProductPost)
router.get('/edit/:id', productController.editProduct)
router.post('/remove/:id', productController.removeProduct)
router.get('/', productController.showProducts)