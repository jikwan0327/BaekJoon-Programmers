const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
console.log(input.reduce((arr, num) => arr + num ,0))