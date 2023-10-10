let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
let answer = 0;
input.pop()
input.shift()
let target = input.shift()

input.sort((a,b) => a - b)
while(1) {
    if(input[input.length - 1] >= target) {
        input[input.length - 1] -= 1;
        answer += 1;
        target += 1;
        input.sort((a,b) => a - b)
    } else {
        break;
    }
    
}

console.log(answer)