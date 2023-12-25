const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
input.shift()
const map = new Map()
let arr = []
let answer = ''

input.map(res => {
    let extend = res.split('.')[1]
    map.set(extend, (map.get(extend) || 0) + 1)
})

for(let i of map) {
    arr.push(i)
}
arr.sort()
arr.map(res => answer += res.join(' ') + '\n' )

console.log(answer)