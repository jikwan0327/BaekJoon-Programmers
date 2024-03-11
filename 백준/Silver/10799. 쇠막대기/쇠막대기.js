const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('')
let stack = []
let total = 0

input.map((res, idx) => {
    if(res == '(') {
        stack.push(res)
    } else {
        stack.pop()
        if(input[idx-1] === "(") {
            total += stack.length
        } else {
            total++;
        }
    }
})

console.log(total-1)