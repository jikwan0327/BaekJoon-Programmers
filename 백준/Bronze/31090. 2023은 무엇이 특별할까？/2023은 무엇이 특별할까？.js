const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

input.shift()

input.map(res => {
    if((res + 1) % (res % 100) == 0) console.log('Good')
    else console.log('Bye')
})