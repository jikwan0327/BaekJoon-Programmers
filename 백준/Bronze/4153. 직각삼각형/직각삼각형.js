const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.pop()

input.map(res => {
    const [n, m, k] = res.split(' ').map(Number).sort((a, b) => a - b)
    if(n**2 + m **2 == k ** 2) console.log('right')
    else console.log('wrong')
})