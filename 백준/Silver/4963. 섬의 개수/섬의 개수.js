const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let line = 0;

function dfs(graph, x, y, w, h) {
    if(x <= -1 | x >= h | y <= -1 | y >= w) return false
    if(graph[x][y] == 1) {
        graph[x][y] = -1;
        dfs(graph, x + 1, y, w, h)
        dfs(graph, x - 1, y, w, h)
        dfs(graph, x, y + 1, w, h)
        dfs(graph, x, y - 1, w, h)
        dfs(graph, x + 1, y + 1, w, h)
        dfs(graph, x + 1, y - 1, w, h)
        dfs(graph, x - 1, y + 1, w, h)
        dfs(graph, x - 1, y - 1, w, h)
        return true
    }
    return false
}

while(input[line] !== '0 0') {
    const [w, h] = input[line].split(' ').map(Number)
    line++;
    let graph = []
    for(let i = line; i < line+h; i++) {
        graph.push(input[i].split(' ').map(Number))
    }
    
    let total = 0
    for(let i = 0; i < h; i++) {
        for(let j = 0; j < w; j++) {
            if(dfs(graph, i, j, w, h)) {total++;}
        }
    }
    
    console.log(total)
    line += h;
}