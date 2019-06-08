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

// get unique restaurant categories
let categories = []
let results = []
restaurantList.results.forEach((e) => {
  results.push(e.category)
})

categories = [...new Set(results)];

// routes
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results, categories: categories })
})

app.get('/show/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(e => e.id.toString() === req.params.restaurant_id)

  res.render('show', { restaurant: restaurant })
})

app.get('/category/:category', (req, res) => {
  const restaurants = restaurantList.results.filter(e => {
    return e.category.includes(req.params.category)
  })
  res.render('index', { restaurants: restaurants, categories: categories })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(e => {
    return e.name.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

// listening to port
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})