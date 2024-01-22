const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
input.pop()
input.shift()
let graph = []
let answer = 0

input.map(res => {
    graph.push(res.split(''))
})

function dfs(graph, x, y, n, m, now) {
    if(x <= -1 | x >= n | y <= -1 | y >= m) return false

    if(now == graph[x][y] && graph[x][y] !== 0) {
        if(graph[x][y] == '-') {
            graph[x][y] = 0
            dfs(graph, x, y + 1, n, m, now)
            dfs(graph, x, y - 1, n, m, now)
        } else if(graph[x][y] == '|') {
            graph[x][y] = 0
            dfs(graph, x + 1, y, n, m, now)
            dfs(graph, x - 1, y, n, m, now)
        }
        return true
    }
    return false
}

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(dfs(graph, i, j, n, m, graph[i][j])) answer++;
    }
}

console.log(answer)