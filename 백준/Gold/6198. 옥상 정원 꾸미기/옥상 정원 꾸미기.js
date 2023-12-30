const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
const n = input[0]
let total = 0;

for(let i = 1; i < n; i++) {
    let count = 0;
    for(let j = i + 1; j <= n; j++) {
        if(input[i] > input[j]) count++
        else break;
    }
    total += count
}

console.log(total)