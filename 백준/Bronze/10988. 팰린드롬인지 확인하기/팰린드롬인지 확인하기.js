const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()
if(input === input.split('').reverse().join('')) return console.log(1)
console.log(0)