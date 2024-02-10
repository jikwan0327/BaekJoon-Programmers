const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, m] = input[0].split(' ').map(Number)
input.shift()

const graph = input.map(res => res.split(' ').map(Number))

function dfs(x, y) {
    if(x <= -1 | x >= m | y <= -1 | y >= n) return 0;
    
    if(graph[y][x] == 1) {
        graph[y][x] = 0;
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
        dfs(x + 1, y + 1);
        dfs(x + 1, y - 1);
        dfs(x - 1, y + 1);
        dfs(x - 1, y - 1);
    }
    return 0;
}

let answer = 0;
for(let x = 0; x < m; x++) {
    for(let y = 0; y < n; y++) {
        if(graph[y][x] == 1) {
            dfs(x, y);
            answer++;
        }
    }
}

console.log(answer)