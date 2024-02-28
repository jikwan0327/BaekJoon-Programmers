const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

arr.map(res => res - n * m)

console.log(arr.map(res => res - n * m).join(' '))