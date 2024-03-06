const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()

input.map(res => {
    const [n, k] = res.split(' ')
    console.log(k.slice(0, n-1) + k.slice(n, k.length))
})