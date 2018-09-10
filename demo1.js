var http = require('http')
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello Node\n')
}).listen(8888)

console.log('Server running')