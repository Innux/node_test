var http = require('http')
var items = []

var server = http.createServer(function(req, res) {
  if('/' === req.url) {
    switch (req.method) {
      case 'GET':
        show(res)
        break
      case 'POST':
        addEventListener(req, res)
        break
      default:
        badRequest(res)
    }
  } else {
    notFound(res)
  }
})

server.listen(3333)

function show(res) {
  var html = '<html><ul>' + items.map(function(item){
    return '<li>' + item + '</li>'
  }).join('') + '</ul>'
}

