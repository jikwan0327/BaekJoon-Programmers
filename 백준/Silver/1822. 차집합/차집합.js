const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
input.shift()
const map = new Map()

input[0].split(' ').map(Number).map((res) => {
    map.set(res, 1)
})

input[1].split(' ').map(Number).map((res) => {
    map.delete(res)
})

console.log(map.size)
let answer = []
for(let value of map) {
    answer.push(value[0])
}
console.log(answer.sort((a,b) => a - b).join(' '))