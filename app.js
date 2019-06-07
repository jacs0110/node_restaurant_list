// include express and packages
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

// server variables
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
  res.render('index')
})

// listening to port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})