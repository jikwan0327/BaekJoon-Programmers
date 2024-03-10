const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const t = input.shift()

for(let i = 0; i < t; i++) {
    const map = new Map()
    const n = +input[i+3*i]
    const arr = new Array(n).fill(0)
    const key1 = input[i+3*i+1].split(' ')
    const key2 = input[i+3*i+2].split(' ')
    const prv = input[i+3*i+3].split(' ')
    let answer = []
    key1.map((res, idx) => map.set(res, idx))
    const arr2 = key2.map((res) => map.get(res))
    arr2.map((res, idx) => answer[res] = prv[idx])
    console.log(answer.join(' '))
}