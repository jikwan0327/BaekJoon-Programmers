const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
let selected = []
let answer = ''

function dfs(depth) {
    if(depth === m) {
        return answer += selected.join(' ') + '\n'
    }
    
    for(let i = 0; i < n; i++) {
        selected.push(arr[i])
        dfs(depth + 1)
        selected.pop()
    }
}

dfs(0)
console.log(answer)
