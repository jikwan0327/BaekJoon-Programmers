const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
const [n, m] = input[0].split(' ').map(Number)
input.shift()
const basket = new Array(n).fill(0)

input.map(res => {
    const [i, j, k] = res.split(' ').map(Number)
    for(let l = i-1; l < j; l++) {
        basket[l] = k
    }
})

console.log(basket.join(' '))