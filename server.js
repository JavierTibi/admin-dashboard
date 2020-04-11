// Include it and extract some methods for convenience
const server = require('server')
const { get } = server.router

// Launch server with options and a couple of routes
server({ port: 80 }, [
  get('/')
])
