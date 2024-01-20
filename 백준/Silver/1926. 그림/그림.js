const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

input.pop()
const [n, m] = input[0].split(' ').map(Number)
input.shift()
let graph = []

input.map(res => {
    const arr = res.split(' ').map(Number)
    graph.push(arr)
})

let answer = [0, 0];

function dfs(graph, x, y, n, m) {
    if(x <= - 1 | x >= n | y <= - 1 | y >= m) return 0
    if(graph[x][y] == 1) {
        graph[x][y] = -1
        let total = 1
        total += dfs(graph, x + 1, y, n, m)
        total += dfs(graph, x - 1, y, n, m)
        total += dfs(graph, x, y - 1, n, m)
        total += dfs(graph, x, y + 1, n, m)
        return total;
    }
    return 0;
}

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        let result = dfs(graph, i, j, n, m)
        if(result > 0) {
            answer[0]++;
            answer[1] = Math.max(result, answer[1])
        }
    }
}

console.log(answer.join('\n'))