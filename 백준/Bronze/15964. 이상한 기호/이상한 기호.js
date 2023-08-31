let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
let A = input[0]
let B = input[1]

console.log((A+B) * (A-B))