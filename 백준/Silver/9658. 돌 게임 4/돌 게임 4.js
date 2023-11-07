const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()
const a = [1, 0, 1, 0, 1, 1, 1]

console.log(a[input%7] ? 'SK' : "CY")