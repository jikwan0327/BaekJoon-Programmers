const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = +input[0]
input.shift()
let graph = input.map(res => res.split(' ').map(Number))
let visited = new Array(n).fill([]).map(res => new Array(n).fill(false))

function dfs(x, y) {
    let result = false;
    if(visited[y][x]) return ;
    visited[y][x] = true;
    if(x == n - 1 && y == n - 1) return true;
    if(graph[y][x] == 0) return false
    let current = graph[y][x];
    if(x + current < n) {
        if(dfs(x + current, y)) result = true
    }
    if(y + current < n) {
        if(dfs(x, y + current)) result = true
    }
    return result
}

console.log(dfs(0, 0) ? 'HaruHaru' : 'Hing')