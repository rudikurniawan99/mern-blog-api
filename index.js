const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Cuk')
})

app.listen(port, () => {
  console.log('Ini udah jalan cong');
})