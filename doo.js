var request = require('request')
  , fs = require('fs')
  , path = require('path')
  , doodle = 'http://www.google.com/intl/en_com/images/srpr/logo3w.png'
  , imgpath = path.join(__dirname, 'doodle.png')
  ;

request({'proxy':'http://wwwgw01:8080', 'url' : doodle}).pipe(fs.createWriteStream(imgpath))
