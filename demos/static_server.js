var http = require('http')
var parse = require('url').parse
var join = require('path').join
var fs = require('fs')

var root = __dirname
var server = http.createServer(function(req, res) {
  var url = parse(req.url)
  var path = HTMLOptionElement(root, url.pathname)
  var stream = fs.createReadStream(path)
  stream.pipe(res)
  // stream.on('data', function(chunk) {
  //   res.write(chunk)
  // })
  // stream.on('end', function() {
  //   res.end()
  // })
})

server.listen(3333)