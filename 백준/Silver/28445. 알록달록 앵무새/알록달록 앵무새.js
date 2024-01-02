const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
const map = new Map()
let arr = []

input.map(res => {
    const [a, b] = res.split(' ')
    map.set(a)
    map.set(b)
})

for(let res of map) {
    arr.push(res[0])
}
arr.sort()

for(let i of arr) {
    for(let j of arr) {
        console.log(i, j)
    }
}