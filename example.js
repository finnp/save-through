var fs = require('fs')
var save = require('./')

fs.createReadStream('readme.md')
  .pipe(save('test.md'))
  .pipe(process.stdout)