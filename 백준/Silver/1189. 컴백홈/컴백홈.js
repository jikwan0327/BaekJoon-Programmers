const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [r, c, k] = input[0].split(' ').map(Number)
input.shift()
let graph = input.map(res => res.split(''))
let total = 0

function dfs(x, y, depth) {
    if(x <= -1 | x >= c | y <= -1 | y >= r) return ;
    if(graph[y][x] == 'T') return ;
    if(x == c - 1 && y == 0 && depth == k) return total++;

    if(graph[y][x] == '.') {
        graph[y][x] = 'T'
        dfs(x + 1, y, depth + 1)
        graph[y][x] = '.'
        graph[y][x] = 'T'
        dfs(x - 1, y, depth + 1)
        graph[y][x] = '.'
        graph[y][x] = 'T'
        dfs(x, y - 1, depth + 1)
        graph[y][x] = '.'
        graph[y][x] = 'T'
        dfs(x, y + 1, depth + 1)
        graph[y][x] = '.'
    }
    return ;
}

dfs(0, r-1, 1)

console.log(total)