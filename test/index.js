var test = require('tap').test
var fs = require('fs')
var parseip = require('../')

test('arp output', function (t) {
  var actual = ''
  var expected = [
    '192.168.0.1', '192.168.0.6',
    '192.168.0.7', '192.168.0.14',
    '192.168.0.19'
  ].join('\n') + '\n'

  fs.createReadStream('./arp-output.txt')
    .pipe(parseip)

  parseip.on('data', function (data) {
    actual += data.toString()
  })

  parseip.on('end', function () {
    t.equal(expected, actual)
    t.end()
  })
})
