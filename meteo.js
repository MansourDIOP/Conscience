const express = require('express')
const app = express()
const port = 3005
var meteo = require('./meteo.json')
app.set('view engine','ejs')
app.get('/', (req, res) => {
  res.render('meteo',{meteo: meteo})
  })
  app.use(express.static('produit'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})