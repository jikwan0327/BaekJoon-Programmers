const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = +input[0]
let graph = []
let answer = 0
let root;

for(let i = 0; i < n; i++) graph.push([])
input[1].split(' ').map(Number).map((res, idx) => {
    if(res == -1) return root = idx
    if(idx === +input[2]) return ;
    graph[res].push(idx)
})

if(+input[2] == root) return console.log(0)  

function dfs(x) {
    
    if(graph[x].length == 0) return answer++
    
    for(let res of graph[x]) {
        dfs(res)
    }
}

dfs(root)
console.log(answer)