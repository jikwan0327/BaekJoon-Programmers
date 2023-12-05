const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const selected = []
const arr = input[1].split(' ').map(Number).sort((a,b) => a - b)
const map = new Set()
const result = []
let visited = new Array(n).fill(false)

function dfs(depth) {
    if(depth === m) {
        return result.push(selected.join(' '))
    }
    
    for(let i = 0 ; i < arr.length; i++) {
        if(visited[i]) continue
        selected.push(arr[i]);
        visited[i] = true
        dfs(depth + 1);
        visited[i] = false
        selected.pop()
    }
    
}

dfs(0)

for(let i = 0; i < result.length; i++) {
    map.add(result[i])
}

for(let i of map) {
    console.log(i)
}