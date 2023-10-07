let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(' ').map(Number);
let result = new Set()
let total = 0
for(let i = 1; i <= N + M; i++) {
    if(i <= N) {
        result.add(input[i])
    } else {
        if(result.has(input[i])) total += 1;
    }
}
console.log(total)