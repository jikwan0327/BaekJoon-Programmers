const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()
const d = new Array(90).fill(0)
d[0] = 1;
d[1] = 1;
for(let i = 2; i < input; i++) {
    d[i] = BigInt(d[i-1]) + BigInt(d[i-2]);
}
console.log(d[input-1].toString())