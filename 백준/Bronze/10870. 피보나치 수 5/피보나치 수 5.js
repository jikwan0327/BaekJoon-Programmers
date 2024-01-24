const fs = require('fs')
const n = +fs.readFileSync('/dev/stdin').toString()
const dp = new Array(n+1).fill(0)
dp[0] = 0
dp[1] = 1

for(let i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2]

console.log(dp[n])