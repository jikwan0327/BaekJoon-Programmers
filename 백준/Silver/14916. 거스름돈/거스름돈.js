const fs = require('fs')
let input = +fs.readFileSync('/dev/stdin').toString()
let result = 0
if(input < 5 && input%2!=0) return console.log(-1)
if(input%5%2) {
    result += parseInt(input/5) -1
    input -= (parseInt(input/5) - 1) * 5
    result += input/2
} else {
    result += parseInt(input/5)
    result += parseInt(input%5/2)
}


console.log(result)