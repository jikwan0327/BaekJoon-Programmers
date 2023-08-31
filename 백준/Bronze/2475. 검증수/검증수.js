let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
let total = 0
let a = input.map((res) => total += res ** 2)
console.log(total%10)