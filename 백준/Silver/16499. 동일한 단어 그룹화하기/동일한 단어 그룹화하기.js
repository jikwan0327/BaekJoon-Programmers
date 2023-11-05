const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
input.shift()
const map = new Map()

input.map((res) => {
    map.set(res.split('').sort().join(''), 1)
})

console.log(map.size)