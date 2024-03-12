const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()
input.reverse()
let stack = []

input.map(res => {
    if(stack[stack.length-1] < +res || stack.length == 0) {
        stack.push(res)
    }
})

console.log(stack.length)