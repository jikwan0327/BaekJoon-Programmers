const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const t = +input[0]
let i = 1;

function dfs(graph, x, y, n, m) {
    if(x <= -1 | x >= n | y <= - 1 | y >= m) return false;
    
    if(graph[y][x] === 1) {
        graph[y][x] = -1;
        dfs(graph, x + 1, y, n, m)
        dfs(graph, x - 1, y, n, m)
        dfs(graph, x, y + 1, n, m)
        dfs(graph, x, y - 1, n, m)
        return true;
    }
    return false;
}



for(let o = 0; o < t; o++) {
    const [n, m, k] = input[i].split(' ').map(Number)
    let graph = new Array(m).fill([]).map(res => new Array(n).fill(0))
    let answer = 0;
    i++
    for(let j = i; j < i + k; j++) {
        const [x, y] = input[j].split(' ').map(Number)
        graph[y][x] = 1
    }
    for(let j = i; j < i + k; j++) {
        const [x, y] = input[j].split(' ').map(Number)
        if(dfs(graph, x, y, n, m, answer)) answer++;
    }
    console.log(answer)
    i+=k
}