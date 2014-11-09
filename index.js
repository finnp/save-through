var fs = require('fs')
var PassThrough = require('stream').PassThrough

module.exports = function (file) {
  var passthrough = new PassThrough()
  
  passthrough.pipe(fs.createWriteStream(file))
  
  return passthrough
}