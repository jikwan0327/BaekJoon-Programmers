const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const map = new Map()
let answer = []
let len = input.length

input.map(res => {
    map.set(res, (map.get(res) || 0) + 1)
})

for(let [key, value] of map) {
    answer.push(`${key} ${(value/len*100).toFixed(4)}`)
}

console.log(answer.sort(function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}).join('\n'))