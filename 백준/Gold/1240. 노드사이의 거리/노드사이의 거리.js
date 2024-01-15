const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
const [n, m] = input[0].split(' ').map(Number)
let graph = []
for(let i = 0; i <= n; i++) graph.push([])

for(let i = 1; i < n; i++) {
    const [x, y, cost] = input[i].split(' ').map(Number)
    graph[x].push([y, cost])
    graph[y].push([x, cost])
}


function dfs(x, dist) {
    if(visited[x]) return;
    visited[x] = true;
    distance[x] = dist
    for(let [y, cost] of graph[x]) dfs(y, dist+cost)
}

for(let i = n; i < n+m; i++) {
    const [x, y] = input[i].split(' ').map(Number)
    visited = new Array(n+1).fill(false)
    distance = new Array(n+1).fill(-1)
    dfs(x, 0)
    console.log(distance[y])
}