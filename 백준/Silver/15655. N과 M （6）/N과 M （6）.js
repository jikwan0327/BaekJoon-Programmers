const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
const visited = new Array(n).fill(false)
let selected = []

function dfs(idx, depth) {
    if(depth === m) {
        console.log(selected.join(' '))
    }
    
    for(let i = idx; i < n; i++) {
        if(visited[i]) continue;
        selected.push(arr[i])
        visited[i] = true
        dfs(i, depth + 1)
        selected.pop()
        visited[i] = false
    }
}

dfs(0, 0)
