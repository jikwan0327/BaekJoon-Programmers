const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()
const dp = new Array(input+1).fill(BigInt(0))
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for(let i = 4; i <= input; i++) {
    dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-3])
}

console.log(dp[input].toString())