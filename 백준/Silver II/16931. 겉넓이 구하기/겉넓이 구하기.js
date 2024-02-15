const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, m] = input[0].split(' ').map(Number)
input.shift()

const arr = input.map(res => res.split(' ').map(Number))

let total = n * m * 2

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m;  j++) {
        if(j != 0) total += Math.abs(arr[i][j] - arr[i][j-1])
        if(j == 0) total += arr[i][j]
        if(j == m - 1) total += arr[i][j]
    }
}

for(let i = 0; i < m; i++) {
    for(let j = 0; j < n;  j++) {
        if(j != 0) total += Math.abs(arr[j][i] - arr[j - 1][i])
        if(j == 0) total += arr[j][i]
        if(j == n - 1) total += arr[j][i]
    }
}

console.log(total)