const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = +input[0]
input.shift()
let graph = new Array(100).fill([]).map(() => new Array(100).fill(0))

input.map(res => {
    const [a, b] = res.split(' ').map(Number)
    for(let i = a - 1; i < a + 9; i++) {
        for(let j = b - 1; j < b + 9; j++) {
            graph[j][i] = 1;
        }
    }
})

let total = 0;
graph.map(res => {
    res.map(res2 => {
        total += res2
    })
})

console.log(total)