const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
input.pop()
input.shift()
let graph = []
let visited = new Array(n+1).fill(false)
let answer = 0

for(let i = 0; i <= n; i++) graph.push([])

input.map(res => {
    const [x, y] = res.split(' ').map(Number)
    graph[x].push(y)
    graph[y].push(x)
})

function dfs(x) {
    if(visited[x]) return false
    visited[x] = true
    
    for(let res of graph[x]) {
        if(!visited[res]) {
            dfs(res)
        }
    }
    return true
}

for(let i = 1; i <= n; i++) {
    if(dfs(i)) answer++
    
}

console.log(answer)