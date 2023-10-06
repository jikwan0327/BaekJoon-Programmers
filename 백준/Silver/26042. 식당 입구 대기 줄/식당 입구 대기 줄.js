let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let repeat = Number(input.shift())
let max = 0;
let queue = []
let answer = 100001;

for(let i = 0; i < repeat; i++) {
    let [a, b] = input[i].split(' ').map(Number)
    if(a == 1) {
        queue.push(b)
        if(queue.length > max) {
           max = queue.length
            answer = queue[queue.length-1]
        } else if(queue.length == max) {
            if(answer > queue[queue.length-1]) {
                answer = queue[queue.length-1]
            }
        }
    } else {
        queue.shift()
    }
}

console.log(max, answer)