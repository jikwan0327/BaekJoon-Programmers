const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
input.pop()

for(let i = 0; i < input[0]; i++) {
    let k = input[i * 2 + 1];
    let n = input[i * 2 + 2];
    
    let dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0))
    
    for(let i = 1; i <= n; i++) {
        dp[0][i] = i
    }
    
    for(let j = 1; j <= k; j++) {
        for(let l = 1; l <= n; l++) {
            dp[j][l] = dp[j-1][l] + dp[j][l-1]
        }
    }
    console.log(dp[k][n])
}