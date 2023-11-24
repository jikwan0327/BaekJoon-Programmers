const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()

const arr = new Array(input).fill(0).map((_, idx) => idx + 1)
const visited = new Array(input).fill(false)
const selected = []

function dfs(arr, depth) {
    if(depth == input) {
        let result = []
        for(let i of selected) result.push(i)
        console.log(result.join(' '))
    }
    
    for(let i = 1; i <= arr.length; i++) {
        if(visited[i]) continue;
        selected.push(i)
        visited[i] = true;
        dfs(arr, depth + 1);
        selected.pop();
        visited[i] = false;
    }
    
    
}

dfs(arr, 0)