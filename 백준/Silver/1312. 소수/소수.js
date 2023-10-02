let fs = require("fs");
let [A, B, N] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let answer = 0;
A %= B

for(let i = 0; i < N; i++) {
    A = (A%B)*10
    answer = parseInt(A/B)
}
console.log(answer)