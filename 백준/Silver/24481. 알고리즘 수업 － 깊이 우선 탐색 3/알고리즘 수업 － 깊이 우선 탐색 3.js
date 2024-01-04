const fs = require('fs')
const input = fs.readFileSync("/dev/stdin").toString().split('\n')
const [n, m, r] = input[0].split(' ').map(Number)
let graph = []
for(let i = 0; i < n; i++) graph[i] = []
input.shift()
input.pop()
input.map(res => {
    const [x, y] = res.split(' ').map(Number)
    graph[x-1].push(y)
    graph[y-1].push(x)
})

let visited = new Array(n).fill(-1)

function dfs(R, i) {
    visited[R-1] = i
    for(let x of graph[R-1].sort((a, b) => a - b)) {
        if(visited[x-1]==-1) dfs(x, i+1)
    }
}

dfs(r, 0)

console.log(visited.join('\n'))