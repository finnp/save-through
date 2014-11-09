#!/usr/bin/env node

if(process.argv.length < 3) {
  console.error('usage: save-through <path>')
  process.exit()
}

var path = process.argv[2]
var save = require('./')

process.stdin
  .pipe(save(path))
  .pipe(process.stdout)