const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const n = +input[0]
const color = input[1].split(' ').map(Number)
let graph = []

for(let i = 0; i <= n; i++) graph.push([])

for(let i = 2; i <= n; i++) {
    const [x, y] = input[i].split(' ').map(Number)
    graph[x].push(y)
    graph[y].push(x)
}
const visited = new Array(n+1).fill(false)
let cnt = 0

color.unshift(0)

function dfs(p_node, c_node) {
    visited[c_node] = true;
    if(color[p_node] != color[c_node]) cnt++;
    
    for(let res of graph[c_node]) {
        if(!visited[res]) dfs(c_node, res)
    }
    
}

dfs(0, 1)
console.log(cnt)