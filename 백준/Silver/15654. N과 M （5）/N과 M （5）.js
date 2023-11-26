const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a,b) => a - b)
let visited = new Array(n).fill(false)
let selected = []

function dfs(depth) {
    if(depth == m) {
        let result = [];
        for(let res of selected) result.push(res);
        return console.log(result.join(' '))
    }
    for(let i = 0; i < arr.length; i++) {
        if(visited[i]) continue;
        selected.push(arr[i]);
        visited[i] = true;
        dfs(depth + 1);
        selected.pop();
        visited[i] = false;
    }
}
dfs(0)