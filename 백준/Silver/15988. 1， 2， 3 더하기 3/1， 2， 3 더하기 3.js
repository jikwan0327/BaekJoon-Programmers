const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
input.shift()
input.pop()
const d = new Array(Math.max(...input) + 1).fill(BigInt(0))
d[0] = 1;
d[1] = 2;
d[2] = 4;

for(let i = 3; i <= Math.max(...input); i++) {
    d[i] = (d[i-1] + d[i-2] + d[i-3])  % 1_000_000_009
}
input.map(res => console.log(d[res-1].toString()))