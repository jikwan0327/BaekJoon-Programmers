const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
let n = +input[0];
let dp = [];

for (let i = 1; i <= n; i++) {
    let data = input[i]
    dp.push(data);
}

for(let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i], dp[i-1] * dp[i])
}



console.log(Math.max(...dp).toFixed(3))