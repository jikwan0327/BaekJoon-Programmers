const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m, r] = input[0].split(' ').map(Number)
input.shift()
input.pop()
let answer = 0
let i = 1;
let graph = []
let t = new Array(n).fill(0)
let visited = new Array(n).fill(-1)
for(let i = 0; i <= n; i++) graph.push([])
input.map(res => {
    const [x, y] = res.split(' ').map(Number)
    graph[x].push(y);
    graph[y].push(x);
})

function dfs(R, depth) {
    visited[R-1] = depth
    t[R-1] = i;
    i++
    for(let res of graph[R].sort((a, b) => b - a)) {
        if(visited[res-1] == -1) dfs(res, depth+1)
    }
}

dfs(r, 0)

for(let i = 0; i < n; i++) {
    answer += visited[i] * t[i]
}

console.log(answer)