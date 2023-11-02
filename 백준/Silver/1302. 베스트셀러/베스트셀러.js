const fs = require('fs')
const input  = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
input.shift()
const map = new Map()

input.map(res => {
    map.set(res, (map.get(res) || 0) + 1)
})
let answer = ''
let result = 0
for(let value of map) {
    if(value[1] > result) {
        result = value[1]
        answer = value[0]
    } else if(value[1] == result) {
        let arr = [value, [answer, result]]
        arr.sort((a, b) => {
            if(a[0] < b[0]) return -1;
            if(a[0] > b[0]) return 1;
            if(a[0] === b[0]) return 0;
        })
        answer = arr[0][0]
        result = arr[0][1]
    }
}
console.log(answer)