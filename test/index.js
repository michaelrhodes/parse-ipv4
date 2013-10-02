var run = require('tape').test
var fs = require('fs')
var split = require('split')()
var parseip = require('../')

run('Against ARP output', function (test) {
  var actual = []
  var expected = [
    '192.168.0.1', '192.168.0.6',
    '192.168.0.7', '192.168.0.14',
    '192.168.0.19'
  ]

  fs.createReadStream(__dirname + '/arp-output.txt')
    .pipe(parseip)
    .pipe(split)

  split.on('data', function (data) {
    actual.push(data.toString())
  })

  split.on('end', function () {
    test.deepEqual(expected, actual)
    test.end()
  })
})
