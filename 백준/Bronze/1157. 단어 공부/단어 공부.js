const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().toUpperCase().split('')
input.pop()
const map = new Map()
let max = 0;
let answer;
let cnt = 0;

input.map((res) => {
    map.set(res, (map.get(res)||0)+1)
})

for(let res of map) {
    if(res[1] > max) {
        max = res[1]
        answer = res[0]
    }
}

for(let res of map) {
    if(res[1] == max) cnt++;
    if(cnt >= 2) return console.log('?')
}

console.log(answer)