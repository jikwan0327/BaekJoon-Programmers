let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
input.pop()
let first = input.shift()
let d = new Array(Math.max(...input) + 1).fill(0).map((_, idx) => idx);
d[1] = 1;
d[2] = 1;
d[3] = 1;
d[4] = 2;

for(let j = 5; j < Math.max(...input) + 1; j++) {
    d[j] = d[j - 1] + d[j-5]
}

for(let i = 0; i < first; i++) {
    console.log(d[input[i]])
}