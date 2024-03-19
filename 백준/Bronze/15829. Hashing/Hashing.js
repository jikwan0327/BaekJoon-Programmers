const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = +input[0]
const arr = input[1].split('')
let r = 1;
const M = 1234567891;
let hash = 0;

arr.map((res, idx) => {
    hash += (res.charCodeAt() - 96) * r
    r *= 31
    r %= M
    hash %= M
})

console.log(hash)