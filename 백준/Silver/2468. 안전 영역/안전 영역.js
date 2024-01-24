const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const n = +input[0]
input.shift()
input.pop()
let max = 0
let graph = []
let answer = 0;

input.map(res => {
    const arr = res.split(' ').map(Number)
    max = Math.max(...arr, max)
    graph.push(arr)
})

function dfs(graph, height, x, y) {
    if(x <= -1 | x >= n | y <= -1 | y >= n) return false;
    if(graph[x][y] !== -1) {
        graph[x][y] = -1;
        dfs(graph, height, x + 1, y)
        dfs(graph, height, x, y + 1)
        dfs(graph, height, x - 1, y)
        dfs(graph, height, x, y - 1)
        return true
    }
    return false;
}

for(let i = 0; i <= max; i++) {
    let graph_copy = graph.map(res => res.map(res2 => res2 <= i ? -1 : res2))
    let total = 0;
    for(let j = 0; j < n; j++) {
        for(let k = 0; k < n; k++) {
            if(dfs(graph_copy, i, j, k)) total++;
        }
    }
    answer = Math.max(total, answer)
}

console.log(answer)