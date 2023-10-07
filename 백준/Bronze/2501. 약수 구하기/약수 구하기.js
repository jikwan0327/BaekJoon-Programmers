let fs = require("fs");
let [N, K] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let answer = []

for(let i = 1; i <= N; i++) {
    if(N%i==0)
    answer.push(i)
}

console.log(answer[K-1] || 0)