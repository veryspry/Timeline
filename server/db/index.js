const db = require('./db')
const Sequelize = require('sequelize')


// Models
const Day = db.define('days', {
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  focusForDay: {

  }
})

const Resource = db.define('resources', {
  name: {
    type: Sequelize.DATE
  },
  resourceUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
})

const Coffee = db.define('coffee', {
  name: {
    type: Sequelize.STRING
  },
  roaster: {
    type: Sequelize.STRING
  }
})

const Music = db.define('music', {
  album: {
    type: Sequelize.STRING,
  },
  song: {
    type: Sequelize.STRING,
  },
  artist: {
    type: Sequelize.STRING,
  }
})
