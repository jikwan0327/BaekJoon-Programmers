const fs = require('fs')
const input = fs.readFileSync("/dev/stdin").toString().split('\n')
input.pop()
const [n, m, r] = input[0].split(' ').map(Number)
input.shift()
let graph = []
let answer = 0
let i = 1;
for(let i = 0; i <= n; i++) graph.push([])
let visited = new Array(n).fill(-1)

input.map(res => {
    const [x, y] = res.split(' ').map(Number)
    graph[x].push(y)
    graph[y].push(x)
})

function dfs(R, depth) {
    visited[R-1] = depth;
    answer += depth * i;
    i++;
    for(let res of graph[R].sort((a, b) => a - b)) {
        if(visited[res-1] == -1) dfs(res, depth+1)
    }
}

dfs(r, 0)

console.log(answer)