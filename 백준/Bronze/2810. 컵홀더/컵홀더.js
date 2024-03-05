const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = input[0]
const k = input[1].replaceAll('LL', 'S').length

console.log(k + 1 > n ? n : k + 1)