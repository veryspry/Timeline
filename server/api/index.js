const express = require('express')
const router = express.Router()
const { db, Day, Resource, Coffee, Music } = require('../db/index')


router.get('/', async (req, res, next) => {
  const response = await Day.findAll({
    include: [
      {model: Resource},
      {model: Coffee},
      {model: Music}
    ]
})
  res.send(response)
})

router.get('/day', async (req, res, next) => {
  const day = await Day.findAll()
  res.send(day)
})

router.get('/resources', async (req, res, next) => {
  const resources = await Resource.findAll()
  res.send(resources)
})

router.get('/coffee', async (req, res, next) => {
  const coffee = await Coffee.findAll()
  res.send(coffee)
})

router.get('/music', async (req, res, next) => {
  const music = await Music.findAll()
  res.send(music)
})


module.exports = router
