const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = +input[0]
const arr = input[1].split('')
let total = 0

arr.map((res, idx) => {
    total += (res.charCodeAt() - 96) * 31**idx 
})

console.log(total)