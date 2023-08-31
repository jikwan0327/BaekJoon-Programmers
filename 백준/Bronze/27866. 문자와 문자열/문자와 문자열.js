let fs = require('fs');
let [S, i] = fs.readFileSync('/dev/stdin').toString().split('\n');

console.log(S.split('')[i-1])