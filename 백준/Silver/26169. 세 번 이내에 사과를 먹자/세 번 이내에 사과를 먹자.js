const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [c, r] = input.pop().split(' ').map(Number)
let graph = []

input.map(res => graph.push(res.split(' ').map(Number)))

function dfs(x, y, depth) {
    if(x <= -1 | x >= 5 | y <= -1 | y >= 5) return 0;
    if(depth == 4) return graph[y][x];
    if(graph[y][x] !== -1) {
        let result = graph[y][x]
        graph[y][x] = -1
        result += Math.max(dfs(x + 1, y, depth + 1), dfs(x - 1, y, depth + 1), dfs(x, y + 1, depth + 1), dfs(x, y - 1, depth + 1))
        return result
    }
    return 0;
}

console.log(dfs(r, c, 1) >= 2 ? 1 : 0)