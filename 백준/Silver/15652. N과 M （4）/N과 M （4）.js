const fs = require('fs')
const [N, M] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
const arr = new Array(N).fill(0).map((_, idx) => idx+1)
const visited = new Array(N).fill(false)
let selected = []
let result = ""

function dfs(idx, depth) {
    if(M === depth) {
        return result += selected.join(' ')+ '\n'
    }
    
    for(let i = idx; i < arr.length; i++) {
        selected.push(i+1)
        dfs(i, depth+1);
        selected.pop()
    }
}

dfs(0, 0)
console.log(result)