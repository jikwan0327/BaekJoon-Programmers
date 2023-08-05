let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

let n = Number(input[0])
let line2 = input[1].split(' ').map(Number)
let line3 = input[2].split(' ').map(Number)

let min = line3[0]
for(let i = 0; i < n; i++) {
    min = Math.min(min, line3[i])
    line3[i] = min; 
}

let total = 0;
for(let i = 0; i < n - 1; i++) {
    total += min * line2[i]
}
console.log(total)