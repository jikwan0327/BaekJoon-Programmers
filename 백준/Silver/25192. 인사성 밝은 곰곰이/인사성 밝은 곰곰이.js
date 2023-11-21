const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
let total = 0
const map = new Map()
input.pop()
input.shift()

input.map(res => {
    if(res !== 'ENTER') map.set(res, (map.get(res) || 0) + 1)
    else {
        total += map.size
        map.clear()
    }
})

console.log(total += map.size)