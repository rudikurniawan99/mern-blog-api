const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

//declare products routes
const productsRoutes = require('./src/routes/products')
const authRoutes = require('./src/routes/auth')

//use body parser to handle route request
app.use(bodyParser.json())

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


//group routing
app.use('/v1/', productsRoutes)
app.use('/v1/auth/', authRoutes)

app.listen(port)