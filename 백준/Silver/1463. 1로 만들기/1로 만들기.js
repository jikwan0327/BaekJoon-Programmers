let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

let n = Number(input[0])
let d = new Array(n+1).fill(0)

for(let i = 2; i <= n; i++) {
    let index = []
    index.push(d[i-1] + 1);
    if(i % 2 == 0) {
        index.push(d[i/2] + 1);
    } 
    if(i % 3 == 0) {
        index.push(d[i/3] + 1);
    }
    d[i] = Math.min(...index)
}


console.log(d[n])