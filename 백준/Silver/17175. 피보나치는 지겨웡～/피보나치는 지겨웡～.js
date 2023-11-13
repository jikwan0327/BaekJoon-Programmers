const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()
const dp = new Array(input+1).fill(0)
dp[0] = 1;
dp[1] = 1;
dp[2] = 3;


for(let i = 3; i <= input; i++) {
    dp[i] = (dp[i-2] + dp[i-1] + 1) % 1_000_000_007
}

console.log(dp[input])