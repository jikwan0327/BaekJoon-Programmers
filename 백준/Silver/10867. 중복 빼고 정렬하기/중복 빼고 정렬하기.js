let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');
let answer = []
input[1].split(' ').map(res => {
    if(!answer.includes(res)) {
        answer.push(res)
    }
})

console.log(answer.map(Number).sort((a, b) => a - b).join(' '))