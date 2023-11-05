const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const first = +input[0]
let arr = input[1].split(' ').map(Number)
let total = 0
arr.reverse()
let dp = new Array(first).fill(1)

for(let i = 0; i < first; i++) {
    for(let j = 0; j < i; j++) {
        if(arr[i] > arr[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }
}
console.log(first - Math.max(...dp))