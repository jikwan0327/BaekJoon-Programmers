const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()

const map = new Map()

const arr = input[0].split(' ')
arr.map(res => {
    map.set(res, (map.get(res) || 0) + 1)
})

console.log(map.get(input[1]) || 0)