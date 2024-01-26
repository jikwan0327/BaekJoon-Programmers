const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [r, c] = input[0].split(' ').map(Number)
input.shift()
let graph = []
let visited = new Map()
let ds = [[0, 1], [0, -1], [1, 0], [-1, 0]]

input.map(res => {
    graph.push(res.split(''))
})

function dfs(x, y, depth) {
    let maxCnt = depth;
    visited.set(graph[y][x], 1)
    for(let i = 0; i < 4; i++) {
        const nx = x + ds[i][0]
        const ny = y + ds[i][1]
        if(nx >= 0 && ny >= 0 && nx < c && ny < r) {
            if(!visited.get(graph[ny][nx])) maxCnt = Math.max(maxCnt, dfs(nx, ny, depth+1))
        }
    }
    visited.set(graph[y][x], 0)
    return maxCnt
}

console.log(dfs(0, 0, 1))