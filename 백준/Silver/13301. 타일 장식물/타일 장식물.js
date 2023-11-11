const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()
const dp = new Array(input+1).fill(0)
dp[1] = 1;
dp[2] = 1;
for(let i = 3; i <= input; i++) dp[i] = dp[i-1] + dp[i-2]

console.log(dp[input]*4+dp[input-1]*2)