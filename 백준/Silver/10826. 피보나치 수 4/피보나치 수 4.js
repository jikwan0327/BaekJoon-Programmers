const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()
const dp = new Array(10_001).fill(BigInt(0))
dp[0] = 0;
dp[1] = 1;
for(let i = 2; i <= input; i++) {
    dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-2])
}
console.log(dp[input].toString())