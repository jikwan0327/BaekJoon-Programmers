const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
const arr = []
arr[0] = input[0]

for(let i = 1; i < input[0].length; i++) {
    arr[i] = arr[i-1].slice(1, arr[i-1].length)
}

console.log(arr.sort().join('\n'))