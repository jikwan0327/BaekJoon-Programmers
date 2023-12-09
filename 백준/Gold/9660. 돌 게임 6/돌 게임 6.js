const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()
const dp = [0, 1, 0, 1, 1, 1, 1]

console.log(dp[input%7] ? 'SK' : 'CY')