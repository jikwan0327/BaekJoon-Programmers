const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const n = +input[0]
let answer = 0

for(let i = 1; i <= n; i++) {
    const map = new Map()
    let check = true
    input[i] = input[i].split('')
    for(let j = 0; j < input[i].length; j++) {
        if(map.get(input[i][j]) !== 1 | input[i][j-1] == input[i][j]) {
            map.set(input[i][j], 1);
        } else { 
            check = false
            break;
        }
    }
    if(check) answer++
}

console.log(answer)