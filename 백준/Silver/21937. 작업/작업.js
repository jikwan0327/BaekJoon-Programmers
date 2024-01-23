const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const graph = []
let checked = new Array(n+1).fill(false)

for(let i = 0; i <= n; i++) graph.push([])
for(let i = 1; i <= m; i++) {
    const [x, y] = input[i].split(' ').map(Number)
    graph[y].push(x)
}

let answer = 0

function dfs(x) {
    if(checked[x]) return ;
    checked[x] = true;
    answer++;
    for(let res of graph[x]) {
        if(!checked[res]) dfs(res);
    }
}

dfs(input[m+1])
console.log(answer-1)