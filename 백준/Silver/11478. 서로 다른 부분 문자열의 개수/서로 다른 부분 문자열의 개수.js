const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()
const map = new Map()

for(let i = 1; i <= input.length; i++) {
    for(let j = 0; j < input.length-i; j++) {
        map.set(input.slice(j, j+i), 1)
    }
}

console.log(map.size)