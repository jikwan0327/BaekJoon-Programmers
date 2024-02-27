const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.pop()

input.map(res => {
    const [a, b] = res.split(' ').map(Number)
    console.log(a > b ? 'Yes' : "No")
})