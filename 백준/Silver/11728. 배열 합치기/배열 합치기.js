const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
input.shift()
let arr = []

input.map(res => {
    let arr2 = res.split(' ').map(Number)
    arr = [...arr, ...arr2]
})

console.log(arr.sort((a, b) => a - b).join(' '))