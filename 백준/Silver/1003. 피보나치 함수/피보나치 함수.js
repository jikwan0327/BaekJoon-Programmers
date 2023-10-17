let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
input.shift()
input.pop()
let answer = ""
let d = new Array(40).fill(0)
d[0] = 0
d[1] = 1

for(let i = 2; i <= 40; i++) {
    d[i] = d[i-1] + d[i-2]
}



input.map((res) => {
    if(res == 0) console.log(1, 0)
    else console.log(d[res - 1], d[res])
})

console.log(answer)