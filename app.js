// include express and packages
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const restaurantList = require('./restaurant.json')

// server variables
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

app.get('/show/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(e => e.id.toString() === req.params.restaurant_id)

  res.render('show', { restaurant: restaurant })
})

// listening to port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})