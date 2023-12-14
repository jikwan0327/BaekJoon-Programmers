const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const first = +input[0]
const second = input[1].split(' ').map(Number)
const map = new Map()

second.map((res) => {
    map.set(res, (map.get(res) || 0) + 1)
})

console.log(first - map.size)