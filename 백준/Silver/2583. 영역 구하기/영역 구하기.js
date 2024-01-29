const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, m, k] = input[0].split(' ').map(Number)
const graph = new Array(n).fill([]).map(res => new Array(m).fill(false))
input.shift()
let answer = 0
let answer2 = []

input.map(res => {
    const [x1, y1, x2, y2] = res.split(' ').map(Number)
    for(let x = x1; x < x2; x++) {
        for(let y = y1; y < y2; y++) {
            graph[y][x] = true;
        }
    }
})

function dfs(x, y) {
    if(x <= -1 | x >= m | y <= -1 | y >= n) return false;
    if(!graph[y][x]) {
        let total = 1
        graph[y][x] = true;
        total += dfs(x + 1, y)
        total += dfs(x, y+1)
        total += dfs(x -1, y)
        total += dfs(x, y-1)
        return total
    }
    return false
}

for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
        if(!graph[j][i]) {
            answer2.push(dfs(i, j))
            answer++
        }
    }
}

console.log(answer)
console.log(answer2.sort((a, b) => a - b).join(' '))