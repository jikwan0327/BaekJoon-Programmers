const fs = require('fs')
const [N, M] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
const arr = new Array(N).fill(0).map((_, idx) => idx+1)
const visited = new Array(N).fill(false)
let selected = []
let result = ""

function dfs(depth) {
    if(M === depth) {
        return result += selected.join(' ')+ '\n'
    }
    
    for(let i = 0; i < arr.length; i++) {
        selected.push(i+1)
        dfs(depth+1);
        selected.pop()
    }
}

dfs(0)
console.log(result)