const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n ,m] = input[0].split(' ').map(Number)
input.shift()
const graph = []
input.forEach(res => graph.push(res.split('')))
let answer = [0 , 0]

function dfs(x, y, color) {
    if(x <= -1 | x >= n | y <= -1 | y >= m) return 0;
    if(graph[y][x] == -1) return 0;
    if(graph[y][x] == color) {
        graph[y][x] = -1;
        let total = 1;
        total += dfs(x + 1, y, color);
        total += dfs(x - 1, y, color);
        total += dfs(x, y + 1, color);
        total += dfs(x, y - 1, color);
        return total;
    }
    return 0;
}

for(let y = 0; y < m; y++) {
    for(let x = 0; x < n; x++) {
        if(graph[y][x] !== -1) {
            answer[0] += dfs(x, y, 'W') ** 2
            answer[1] += dfs(x, y, 'B') ** 2
        }
    }
}

console.log(answer.join(' '))