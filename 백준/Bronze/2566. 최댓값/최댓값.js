const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = input.map(res => res.split(' ').map(Number))
let answer = -1
let answer2 = []

for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
        if(answer < arr[i][j]) {
            answer = arr[i][j]
            answer2[0] = i + 1;
            answer2[1] = j + 1;
        }
    }
}

console.log(answer)
console.log(answer2.join(' '))