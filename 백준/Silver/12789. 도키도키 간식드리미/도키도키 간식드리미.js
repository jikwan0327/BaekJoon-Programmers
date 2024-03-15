const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = input.shift()
const arr = input[0].split(' ').map(Number)
let stack = []
let cnt = 1;

while(cnt <= n) {
    const first = arr[0];
    if(stack[stack.length-1] == cnt) {
        stack.pop()
        cnt++;
        continue;
    }
    if(first != cnt) {
        if(stack[stack.length - 1] > first || stack.length == 0) {
            arr.shift();
            stack.push(first);
        } else {
            return console.log("Sad")
        }
    } else {
        arr.shift()
        cnt++;
    }
}

console.log("Nice")