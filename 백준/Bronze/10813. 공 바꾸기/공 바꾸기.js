const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
input.shift()
input.pop()

const arr = new Array(n).fill(0).map((_, idx) => idx + 1)

input.map((res) => {
    const [x, y] = res.split(' ').map(Number)
    let temp = arr[x-1]
    arr[x-1] = arr[y-1]
    arr[y-1] = temp
})

console.log(arr.join(' '))