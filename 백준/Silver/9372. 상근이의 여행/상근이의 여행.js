const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const t = +input[0]
let j = 1;

for(let i = 1; i <= t; i++) {
    let graph = []
    let answer = new Map()
    const [n, m] = input[j].split(' ').map(Number)
    j++;
    for(let k = 0; k < n; k++) graph.push([])
    for(let q = j; q < j + m; q++) {
        const [x, y] = input[q].split(' ').map(Number)
        graph[x-1].push(y)
        graph[y-1].push(x)
    }
    let visited = new Array(n).fill(false)
    
    function dfs(x) {
        visited[x-1] = true;
        answer.set(x)
        for(let i of graph[x-1]) {
            if(!visited[i-1]) dfs(i)
        }
    }
    dfs(1);
    console.log(answer.size - 1)
    j += m;
}