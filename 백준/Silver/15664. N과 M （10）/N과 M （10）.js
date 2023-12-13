const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
let arr = input[1].split(' ').sort((a,b) => a - b)
let visited = new Array(n).fill(false)
let selected = []
let map = new Set()
let answer = ''

function dfs(idx, depth) {
    if(depth === m) {
        return map.add(selected.join(' '))
    }
    
    for(let i = idx; i < n; i++) {
        if(visited[i]) continue;
        visited[i] = true
        selected.push(arr[i])
        dfs(i, depth+1)
        selected.pop()
        visited[i] = false
    }
}

dfs(0, 0);

console.log([...map].join('\n'))