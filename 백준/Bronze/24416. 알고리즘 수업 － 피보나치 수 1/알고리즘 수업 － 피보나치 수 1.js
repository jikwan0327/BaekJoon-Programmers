const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()
const d = new Array(input).fill(0)
d[0] = 0;
d[1] = 1;
d[2] = 1;
for(let i = 3; i <= input; i++) {
    d[i] = d[i-1] + d[i-2]
}

console.log(d[input], input-2)