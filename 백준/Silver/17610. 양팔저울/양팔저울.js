const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const k = +input.shift()
const arr = input.shift().split(' ').map(Number)
const arrTotal = arr.reduce((arr, a) => arr + a);
let visited = new Array(k).fill(false)
let success = new Set()

function dfs(idx, sum) {
    if(idx === k) {
        if(0 < sum || sum >= arrTotal) success.add(sum, 1)
    } 
    else {
        dfs(idx + 1, sum + arr[idx])
        dfs(idx + 1, sum)
        dfs(idx + 1, sum - arr[idx])
    }
}


dfs(0, 0)

console.log(arrTotal - success.size)