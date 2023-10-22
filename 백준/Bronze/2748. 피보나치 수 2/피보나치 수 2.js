const fs = require('fs')
const input = Number(fs.readFileSync('/dev/stdin').toString())
const arr = new Array(91).fill(BigInt(0))
arr[1] = BigInt(1);

for(let i = 2; i <= input; i++) {
    arr[i] = arr[i-1] + arr[i-2]
}

console.log(arr[input].toString())