const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()
let arr = []
input.forEach(res => {
    const [x, y] = res.split(' ').map(Number)
    arr.push(x)
})
const dp = new Array(Math.max(...arr) + 1).fill(0)
dp[1] = 1;

for(let i = 2; i < Math.max(...arr) + 1; i++) {
    dp[i] = BigInt(dp[i -1]) + BigInt(dp[i - 2])
}

input.map((res, idx) => {
    const [x, y] = res.split(' ').map(Number)
    console.log(`Case #${idx+1}: ${BigInt(dp[x]) % BigInt(y)}`)
})