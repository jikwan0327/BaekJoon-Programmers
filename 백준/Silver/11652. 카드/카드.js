const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(BigInt)
input.pop()
input.shift()

const obj = new Map()
input.map(res => {
    obj.set(res, (obj.get(res) || 0) + 1)
})

let answer = BigInt(0)
let max = 0
for(let value of obj) {
    if(max < value[1]) {
        max = value[1]
        answer = value[0]
    } else if(max === value[1]) {
        value[0] < answer ? answer = value[0] : answer
    }
}
console.log(answer.toString())