const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const n = +input[0]
const arr = input[1].split(' ').map(Number)
let stack = []
let answer = []

for(let i = 0; i < n; i++) {
    if(stack.length == 0) {
        answer.push(0)
        stack.push([arr[i], i+1])
    } else {
        while(stack.length && stack[stack.length-1][0] < arr[i]) {
            stack.pop()
        }
        if(stack.length) answer.push(stack[stack.length-1][1])
        else answer.push(0)
        stack.push([arr[i], i+1])
    }
}

console.log(answer.join(' '))