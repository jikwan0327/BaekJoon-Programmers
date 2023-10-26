const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
input.shift()
input.pop()

let dp = new Array(11).fill(0)
dp[0] = 1;
dp[1] = 2;
dp[2] = 4;
for(let i = 3; i < 11; i++) {
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
}
input.map(res => {
    console.log(dp[res-1])
})