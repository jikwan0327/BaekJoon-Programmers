const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = +input.shift()
const arr = input[0].split('')
const alpha = {}
input.shift()
let stack = []

input.map((res, idx) => alpha[String.fromCharCode(idx + 65)] = +res)


arr.map(res => {
    if(res == "+" | res == "-" | res == "/" | res == "*") {
        const a = stack.pop()
        const b = stack.pop()
        if(res == "+") {
            stack.push(b + a)
        }
        if(res == "-") {
            stack.push(b - a)
        }
        if(res == "/") {
            stack.push(b / a)
        }
        if(res == "*") {
            stack.push(b * a)
        }
    } else {
        if(typeof res == 'number') {
            stack.push(res)
        } else {
            stack.push(alpha[res])
        }
    }
})

console.log(stack[0].toFixed(2))