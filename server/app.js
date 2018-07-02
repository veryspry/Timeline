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

app.use('/api', require('./api/index.js'))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
})

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
