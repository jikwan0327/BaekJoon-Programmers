const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
let answer = 0

const alpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

alpha.map(res => {
    input = input.replaceAll(res, 'Q')
})

answer += input.split('').filter((res) => res != '-' && res != '=').length

console.log(answer)