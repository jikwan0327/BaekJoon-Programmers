const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const map = new Map()

input[1].split(' ').map(res => {
    map.set(res, 0)
})

for(let i = 2; i <= +input[0]+1; i++) {
    input[i].split(' ').map(res => map.set(res, map.get(res) + 1))
}

let arr = [...map]
arr.sort((a,b) => b[1] - a[1])

arr.map(res => console.log(res[0], res[1]))