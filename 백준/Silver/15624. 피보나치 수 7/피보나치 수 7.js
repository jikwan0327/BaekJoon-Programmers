const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()
const dp = new Array(input+1).fill(0)
dp[0] = 0;
dp[1] = 1;

for(let i = 2; i <= input; i++) {
    dp[i] = (dp[i-1] + dp[i-2])% 1000000007
}
console.log(dp[input])