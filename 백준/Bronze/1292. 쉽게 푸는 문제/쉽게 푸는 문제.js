const fs = require('fs')
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
let arr = []
let total = 0


for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= i; j++) {
        arr.push(i)   
    }
}


for(let i = n - 1; i < m; i++) {
    total += arr[i]
}
console.log(total)