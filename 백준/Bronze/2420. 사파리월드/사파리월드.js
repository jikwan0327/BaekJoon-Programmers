let fs = require('fs');
let [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
let cal = n -m
cal < 0 ? console.log(cal * -1) : console.log(cal)