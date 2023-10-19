let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString()
let k = Number(input)
let a = new Array(k+1).fill(0)
let b = new Array(k+1).fill(0)

a[0] = 1;
b[1] = 1;

for(let i = 2; i <= k; i++) {
    a[i] = a[i-1] + a[i-2]
    b[i] = b[i-1] + b[i-2]
}

console.log(a[k], b[k])
