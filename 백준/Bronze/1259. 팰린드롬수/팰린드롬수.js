const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.pop()

input.map(res => {
    const a = res.split('')
    if(a.reverse().join('') === res) console.log('yes')
    else console.log('no')
})