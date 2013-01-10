var request = require('Request')
  , fs = require('fs')
  , http = require('http')
  , path = require('path')
  , doodle = { 'proxy': 'http://wwwgw01:8080'
             , 'url'  : 'http://www.google.com/intl/en_com/images/srpr/logo3w.png'}
  , imgpath = path.join(__dirname, 'doodle.png')
  ;

var s = http.createServer(function (req, resp) {
  console.log(req.method, req.headers)
  if (req.method == 'PUT') {
    var f = fs.createWriteStream(imgpath)
    req.pipe(f)
    f.on('close', function () {
      resp.writeHead(201)
      resp.end()
      s.close()
    })
  }
})

s.listen(1337, function () {
  request.get(doodle).pipe(request.put('http://localhost:1337'))
})
