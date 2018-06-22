const server = require('./app')

const PORT = 2000

server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
