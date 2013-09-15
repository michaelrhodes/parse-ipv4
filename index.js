var stream = require('stream')

var pattern = /([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})/g
var parseip = new stream.Transform

parseip._transform = function (data, encoding, next) {
  var ip
  while (ip = pattern.exec(data.toString())) {
    this.push(ip[1] + '\n')
  }
  next()
}

module.exports = parseip
