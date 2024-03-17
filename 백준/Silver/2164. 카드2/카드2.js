const fs = require('fs')
const input = +fs.readFileSync('/dev/stdin').toString()

const binArr = input.toString(2).split('')
binArr.shift()
const answer = parseInt(binArr.join(''), 2)

console.log(answer ? answer * 2 : input)