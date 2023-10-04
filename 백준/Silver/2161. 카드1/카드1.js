let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
let queue = new Array(Number(input[0])).fill(0).map((_, idx) => idx + 1)
let answer = []
let cnt = 0;

while(queue.length > 0) {
    let temp = queue.shift()
    if(cnt%2) {
        queue.push(temp)
    } else {
        answer.push(temp)
    }
    cnt += 1;
}

console.log(answer.join(' '))