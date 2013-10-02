var stream = require('stream')

var pattern = /([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/g
var parseip = new stream.Transform

parseip._transform = function (data, encoding, next) {
  var ip = null
  var i = 1
  while (ip = pattern.exec(data.toString())) {
    this.push((i > 1 ? '\n' : '') + ip[1])
    i++ 
  }
  next()
}

module.exports = parseip
