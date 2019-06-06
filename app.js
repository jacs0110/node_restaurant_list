// include express
const express = require('express')
const app = express()

// server variables
const port = 3000

// routes
app.get('/', (req, res) => {
  res.send('You are on express!')
})

// listening to port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})