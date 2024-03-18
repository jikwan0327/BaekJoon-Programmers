const fs = require('fs')
const [a, b, v] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let current = 0
let cnt = 0

console.log(Math.ceil((v-b)/(a-b)))