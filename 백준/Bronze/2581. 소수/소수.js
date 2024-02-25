const fs = require('fs')
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

function isPrime(x) {
    if(x == 1) return false
    for(let i = 2; i <= Math.sqrt(x); i++) {
        if(x%i == 0) return false
    }
    return true
}

let answer = []

for(let i = a; i <= b; i++) {
    if(isPrime(i)) {
        answer.push(i)
    }
}

console.log(answer.length > 0 ? answer.reduce((arr, a) => arr + a) + '\n' + Math.min(...answer) : -1)