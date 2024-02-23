const fs = require('fs')
const [m, n] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const answer = []

function decimal(num) {
    if(num == 1) return false
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) return false
    }
    return true
}

for(let i = m; i <= n; i++) {
    if(decimal(i)) answer.push(i)
}

console.log(answer.join('\n'))