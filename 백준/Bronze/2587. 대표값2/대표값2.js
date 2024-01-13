const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
input.pop()
input.sort((a, b) => a - b)


console.log(input.reduce((arr, a) => arr + a) / 5)
console.log(input[2])
