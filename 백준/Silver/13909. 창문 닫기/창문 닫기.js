const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()
let result = 0

for(let i = 1; i <= input; i++) {
    if(i**2 <= input) result += 1;
    else break;
}

console.log(result)