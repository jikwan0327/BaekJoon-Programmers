let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let result = new Set()
input.pop()
let first = input.shift()
for(let i = 0; i < first; i++) {
    let [n, m] = input[i].split(' ')
    if(m == "leave") {
        result.delete(n)
    } else {
        result.add(n)
    }
}

console.log(Array.from(result.values()).sort().reverse().join('\n'))