const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

input.pop()
const n = +input.shift()
const m = +input.shift()
let graph = []

for(let i = 0; i <= n; i++) graph.push([])
for(let i = 0; i < m; i++) {
    const [x, y] = input[i].split(' ').map(Number)
    graph[x].push(y);
    graph[y].push(x)
}

let cnt = 0;
let visited = new Array(n + 1).fill(false);
function dfs(x) {
    visited[x] = true;
    cnt++;
    for (y of graph[x]) {
        if (!visited[y]) dfs(y);
    }
}
dfs(1);
console.log(cnt - 1);