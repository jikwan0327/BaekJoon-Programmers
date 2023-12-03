const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
let selected = []

function dfs(depth) {
    if(depth === m) {
        return console.log(selected.join(' '))
    }
    for(let i = 0; i < n; i++) {
        if(arr[i] < selected[selected.length-1]) continue;
        selected.push(arr[i]);
        dfs(depth + 1);
        selected.pop();
    }
}

dfs(0)