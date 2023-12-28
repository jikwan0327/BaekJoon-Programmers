const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m, t] = input[0].split(' ').map(Number)
let graph = []
input.pop()
input.shift()
let i = 1;
let answer = new Array(n).fill(0)

for(let i = 0; i <= n; i++) graph[i] = []
input.map(res => {
    let [x, y] = res.split(' ').map(Number)
    graph[x].push(y);
    graph[y].push(x);
})

const visited = new Array(n+1).fill(false)
function dfs(x) {
    visited[x] = true
    answer[x-1] = i;
    i++;
    
    for(let y of graph[x].sort((a, b) => b - a)) {
        if(!visited[y]) dfs(y)
    }
}

dfs(t)

console.log(answer.join('\n'))