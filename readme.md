# parse-ipv4
parse-ipv4 is a through stream that loosely parses out IPv4 addresses.

[![Build status](https://travis-ci.org/michaelrhodes/parse-ipv4.png?branch=master)](https://travis-ci.org/michaelrhodes/parse-ipv4)

## Install

```
npm install parse-ipv4
```

### Example
Find the addresses of other computers on your network

``` js
var parseip = require('parse-ipv4')
var spawn = require('child_process').spawn

var arp = spawn('arp', ['-a'])
arp.stdout
  .pipe(parseip)
  .pipe(process.stdout)
```

### License
MIT
