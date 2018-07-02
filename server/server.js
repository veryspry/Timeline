const server = require('./app')
const { db } = require('./db')

const PORT = 2000

db.sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}
      http://localhost:${PORT}`)
    })
  })
