const express = require('express')
const router = express.Router()

// import product controller
const productController = require('../controllers/product')

// -> Routing 
// GET
router.get('/products', productController.getProducts)

// POST
router.post('/product', productController.createProduct)

module.exports = router

