const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()
const [n, b] = input.split(' ')

console.log(parseInt(n).toString(b).toUpperCase())