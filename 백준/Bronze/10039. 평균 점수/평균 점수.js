const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
let total = 0

for(let i = 0; i < 5; i++) {
    if(input[i] > 40) {
        total += input[i]
    } else {
        total += 40
    }
}

console.log(total/5)