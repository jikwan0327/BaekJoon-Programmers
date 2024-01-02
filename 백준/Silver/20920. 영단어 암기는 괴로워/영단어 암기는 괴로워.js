const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const map = new Map()
let arr = []
input.shift()
input.pop()

input.map(res => {
    map.set(res, (map.get(res)||0) + 1)
})

for(let i of map) {
    if(i[0].length >= m) {
        arr.push([i[0], i[1]])
    }
}

arr.sort((a, b) => {
    if(a[0] < b[0]) return -1;
    if(a[0] > b[0]) return 1;
    if(a[0] === b[0]) return 0;
})

arr.sort((a, b) => b[0].length - a[0].length)

arr.sort((a, b) => b[1] - a[1])

let answer = ''
arr.map(res => answer += res[0] + '\n')
console.log(answer)