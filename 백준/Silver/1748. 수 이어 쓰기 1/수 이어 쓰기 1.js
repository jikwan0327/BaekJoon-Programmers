const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()
let total = 0
let result = 0


for(let i = 1; i <= input.length-1; i++) {
    if(i != input.length-1) {
        total += 9*(10**(i-1))
        result += 9*(10**(i-1))*i
    } else {
        result += (input - total)*i
    }
}

console.log(result)