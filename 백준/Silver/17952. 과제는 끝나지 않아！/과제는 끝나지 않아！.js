const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = input.shift()
let stack = []
let total = 0;

input.map(res => {
    const [k, a, t] = res.split(' ').map(Number)
    if(k == 1) {
        stack.push([a, t-1])
    } else {
        if(stack.length > 0) {
            stack[stack.length-1][1]--;
        }
    }
    if(stack.length > 0) {
        if(stack[stack.length-1][1] == 0) {
            total += stack[stack.length-1][0]
            stack.pop()
        };
    }
})

console.log(total)