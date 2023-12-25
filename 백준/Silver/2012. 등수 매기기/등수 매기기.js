const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
input.pop()
input.shift()
let total = 0;

input.sort((a, b) => a - b)

input.map((res, idx) => {
    if(res - idx - 1 >= 0) {
        total += res - idx - 1
    } else {
        total += idx - res + 1
    }
})

console.log(total)