const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

//declare products routes
const authRoutes = require('./src/routes/auth')
const blogRoutes = require('./src/routes/blog')

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
app.use('/v1/auth/', authRoutes)
app.use('/v1/blog', blogRoutes)

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500
  const message = error.message
  const data  = error.data

  res.status(status).json({
    message: message,
    data: data
  })
})

app.listen(port)