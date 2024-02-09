const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, m, k] = input[0].split(' ').map(Number)
input.shift()
const graph = new Array(n).fill([]).map(() => new Array(m).fill('.'))

input.map(res => {
    const [x, y] = res.split(' ').map(Number)
    graph[x-1][y-1] = '#'
})


function dfs(x, y) {
    if(x <= -1 | x >= m | y <= -1 | y >= n) return 0;
    
    if(graph[y][x] == '#') {
        graph[y][x] = '.'
        let result = 1;
        result += dfs(x + 1, y)
        result += dfs(x - 1, y)
        result += dfs(x, y + 1)
        result += dfs(x, y - 1)
        return result
    }
    return 0;
}
let answer = 0;

input.map(res => {
    const [y, x] = res.split(' ').map(Number)
    answer = Math.max(dfs(x-1, y-1), answer)
})

console.log(answer)