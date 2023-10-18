let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let n = Number(input)
let d = new Array(n+1).fill(0)
d[0] = 1
d[1] = 1

for(let i = 2; i <= n; i++) {
    d[i] = (d[i - 1] + d[i - 2])%15746
}

console.log(d[n])