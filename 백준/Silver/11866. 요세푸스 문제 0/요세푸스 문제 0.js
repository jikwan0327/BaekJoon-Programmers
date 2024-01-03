let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let queue = new Array(Number(input[0])).fill(0).map((_, idx) => idx + 1)
let answer = []
let cnt = 1;

while(queue.length) {
    const shiftItem = queue.shift()
    if(cnt % input[1] == 0) {
        answer.push(shiftItem)
    } else {
        queue.push(shiftItem)
    }
    cnt += 1;
}

console.log("<"+ answer.join(', ') + ">")