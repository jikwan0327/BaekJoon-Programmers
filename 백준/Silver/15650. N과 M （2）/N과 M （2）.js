const fs = require('fs')
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
const arr = new Array(n).fill(0).map((_, idx) => idx + 1)
const visited = new Array(n).fill(false)
let selected = []

function dfs(idx, depth) {
    if(depth == m) {
        console.log(selected.join(' '))
    }

    for(let i = idx; i < n; i++) {
        if(visited[i]) continue;
        selected.push(i+1);
        visited[i] = true;
        dfs(i, depth + 1);
        selected.pop();
        visited[i] = false;
    }
}

dfs(0, 0);