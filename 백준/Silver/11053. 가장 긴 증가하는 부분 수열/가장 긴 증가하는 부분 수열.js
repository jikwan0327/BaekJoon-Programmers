const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const n = +input[0]
let arr = input[1].split(' ').map(Number)
const dp = new Array(n).fill(1)

for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
        if(arr[i] > arr[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }
}

console.log(Math.max(...dp))