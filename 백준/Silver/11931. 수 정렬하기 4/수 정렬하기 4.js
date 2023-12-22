const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
input.shift()
input.pop()

console.log(input.sort((a, b) => b- a).join('\n'))