let fs = require("fs");
let input = +fs.readFileSync("/dev/stdin").toString();
const dp = new Array(input+1).fill(1)

for(let i = 2; i <= input; i++) {
    dp[i] = dp[i-1] * i
}

console.log(dp[input])