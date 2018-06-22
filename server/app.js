const express = require('express')
const app = express()
const path = require('path')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')

module.exports = app
// logging middleware
app.use(volleyball)
// parse our data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// serve up our static files
app.use(express.static(path.join(__dirname, '..', 'public')))

// app.use()


app.get('/', (req, res, next) => {
  res.send('test')
})
