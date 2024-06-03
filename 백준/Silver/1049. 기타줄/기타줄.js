const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, m] = input.shift().split(' ').map(Number)

const arr = input.map(res => res.split(' ').map(Number))
const first = Math.min(...arr.map(res => res[0]))
const second = Math.min(...arr.map(res => res[1]))

console.log(Math.min(Math.ceil(n/6)*first, second*n, parseInt(n/6)*first + n%6*second))