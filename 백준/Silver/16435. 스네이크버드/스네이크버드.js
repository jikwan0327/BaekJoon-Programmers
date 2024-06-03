const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, l] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
let result = l

arr.map(res => {
    if(result >= res) {
        result++;
    }
})

console.log(result)