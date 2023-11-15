const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const n = +input[0]
const arr = input[1].split(' ').map(Number)

let sum = [...arr]

for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
        if(arr[i] > arr[j]) {
            arr[i] = Math.max(arr[i], arr[j] + sum[i])
        }
    }
}

console.log(Math.max(...arr))