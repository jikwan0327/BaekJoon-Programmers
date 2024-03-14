const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('')
let stack = []
let answer = ''

input.forEach(res => {
    if(res === "<") {
        answer += stack.reverse().join('')
        stack = []
        stack.push(res)
        return ;
    }
    if(res === '>') {
        stack.push(res)
        answer += stack.join('')
        stack = []
        return ;
    }
    
    if(stack[0] == '<') {
        stack.push(res)
    } else {
        if(res === ' ') {
            answer += stack.reverse().join('')
            answer += ' '
            stack = []
        } else {
            stack.push(res)
        }
    }
    
})

answer += stack.reverse().join('')

console.log(answer)