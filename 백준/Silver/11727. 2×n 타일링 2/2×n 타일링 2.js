const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()
const d = new Array(input+1).fill(0)
d[1] = 1;
d[2] = 3;

for(let i = 3; i <= input; i++) {
    d[i] = (d[i-1] + d[i-2]*2) % 10007
}

console.log(d[input])