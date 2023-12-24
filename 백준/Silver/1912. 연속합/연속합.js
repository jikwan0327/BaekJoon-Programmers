const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const n = +input[0]
const arr = input[1].split(' ').map(Number)
const dp = arr;

for(let i = 1; i < n; i++) {
    dp[i] = Math.max(arr[i], dp[i-1] + arr[i])
}

console.log(Math.max(...dp))