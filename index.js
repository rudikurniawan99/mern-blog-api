const express = require('express')
const app = express()
const port = 4000

//declare products routes
const productsRoutes = require('./src/routes/products')


/**
 * How to solve CORS ORIGIN error
 */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
  res.setHeader('Access-Allow-Control-Header', 'Content-Type, Authorization')
  next()
})
/**------------------------------ */


//use products routes
app.use('/', productsRoutes)

app.listen(port)