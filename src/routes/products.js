const express = require('express')
const router = express.Router()

// import product controller
const productsController = require('../controllers/product')

// -> Routing 
// GET
router.get('/products', productsController.getProducts)

module.exports = router

