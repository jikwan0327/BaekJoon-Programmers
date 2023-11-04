const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const map = new Map()

for(let i = 1; i <= +input[0]; i++) {
    map.set(input[i], (map.get(input[i])||0) + 1)
}

for(let i = +input[0] + 1; i < +input[0] * 2; i++) {
    map.set(input[i], (map.get(input[i])||0) - 1)
}

for(let value of map) {
    if(value[1] == 1) {
        console.log(value[0]);
        break;
    }
}