const fs = require('fs')
let [n, m] = fs.readFileSync('/dev/stdin').toString().split('\n')
let total = 0

while(n.includes(m)) {
    n = n.replace(m, ' ')
    total++;
}

console.log(total)