const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const n = +input.shift()
input.pop()
let graph = []
let graph2 = []
let answer = [0, 0]
input.forEach(res => {
    graph.push(res.split(''))
})
input.forEach(res => {
    graph2.push(res.split('').map(res => res.replace('R', 'G')))
})

function dfs(graph, x, y, color) {
    if(x <= -1 | x >= n | y <= -1 | y >= n) return false
    if(graph[x][y] == color) {
        graph[x][y] = -1;
        dfs(graph, x + 1, y, color)
        dfs(graph, x - 1, y, color)
        dfs(graph, x, y + 1, color)
        dfs(graph, x, y - 1, color)
        return true
    }
    return false
}

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(graph[i][j] !== -1) {
            if(dfs(graph, i, j, graph[i][j])) answer[0]++;
        }
    }
}

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(graph2[i][j] !== -1) {
            if(dfs(graph2, i, j, graph2[i][j])) answer[1]++;
        }
    }
}

console.log(answer.join(' '))