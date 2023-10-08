let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
let N = input.shift()
input.pop()
input.sort((a, b) => a - b)
const map = new Map()

console.log(Math.round(input.reduce((arr, cur) => arr += cur, 0)/N)||0)
console.log(input[Math.floor(N/2)])
input.map(res => map.set(res, (map.get(res)||0) + 1 ))

let max = Array.from(map.entries()).sort((a,b) => a[1] - b[1]).pop()[1]
let filter_num = Array.from(map.entries()).filter((res) => res[1] == max).sort((a,b) => a[1] - b[1])

if(filter_num.length == 1) {
    console.log(filter_num[0][0])
} else {
    console.log(filter_num[1][0])
}

console.log(input[N - 1] - input[0])