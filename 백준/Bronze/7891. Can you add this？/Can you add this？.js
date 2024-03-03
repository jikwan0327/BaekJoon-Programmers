const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.shift()

input.map(res => {
    let [a, b] = res.split(' ').map(Number)
    console.log(a + b)
})