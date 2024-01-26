const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
let arr = new Array(n).fill(0).map((_, idx) => idx+1)

for(let i = 1; i <= m; i++) {
    const [x, y] = input[i].split(' ').map(Number)
    arr = arr.slice(0, x - 1).concat(arr.slice(x-1, y).reverse().concat(arr.slice(y)))
}

console.log(arr.join(' '))