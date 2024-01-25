const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n , m] = input[0].split(' ').map(Number)
input.shift()
let graph = []
let doyeon;
input.map((res, y) => {
    res.split('').forEach((res, x) => {if(res == 'I') doyeon = [x, y]})
    graph.push(res.split(''))
})
const [x, y] = doyeon
let answer = 0;

function dfs(x, y) {
    if(x <= -1 | x >= m | y <= -1 | y >= n) return false;
    
    if(graph[y][x] !== 'X') {
        if(graph[y][x] == 'P') answer++;
        graph[y][x] = 'X'
        dfs(x + 1, y)
        dfs(x - 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)
        return true
    }
    return false;
}

dfs(x, y)
console.log(answer || "TT")