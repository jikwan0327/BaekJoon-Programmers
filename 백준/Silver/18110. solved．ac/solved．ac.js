let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
input.shift()
input.pop()
let avg = Math.round(input.length*0.15)
input.sort((a, b) => a - b)
console.log(Math.round(input.slice(avg, input.length - avg).reduce((arr, now) => arr+now, 0)/(input.length-avg*2)) || 0)