const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m, r] = input[0].split(' ').map(Number)
input.pop()
input.shift()
let graph = []
let answer = new Array(n).fill(0)
let i = 1;

for(let i = 0; i < n; i++) graph.push([])

input.map(res => {
    let  [x, y] = res.split(' ').map(Number)
    graph[x-1].push(y);
    graph[y-1].push(x);
})

graph.map(res => res.sort((a, b) => a - b))


const visited = new Array(n).fill(false)

function dfs(V, E, R) {
    visited[R-1] = true;
    answer[R-1] = i;
    i++
    for(let x of graph[R-1]) {
        if(!visited[x-1]) dfs(V, E, x);
    }
}

dfs(n, m, r)

console.log(answer.join('\n'))