const express = require('express')
const app = express()
const port = 4000

//declare products routes
const productsRoutes = require('./src/routes/products')


//use products routes
app.use('/', productsRoutes)

app.listen(port)