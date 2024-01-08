const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const n = +input[0]
input.pop()
input.shift()
let graph = []
for(let i = 0; i <= n; i++) graph.push([])
input.map(res => {
    const [x, y] = res.split(' ').map(Number)
    graph[x].push(y)
    graph[y].push(x)
})

let visited = new Array(n).fill(false)
let arr = new Array(n-1).fill(0)

function dfs(R, depth) {
    visited[R-1] = true;
    for(let res of graph[R].sort((a, b) => a - b)) {
        if(!visited[res-1]) {
            arr[res-2] = R
            dfs(res, depth+1)
        }
    }
}

dfs(1, 0)

console.log(arr.join('\n'))