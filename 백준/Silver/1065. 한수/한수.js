const fs = require('fs')
let input = +fs.readFileSync('/dev/stdin').toString()
let count = 0

function isOne(x){
    let num = x.toString().split('').map(Number)
    if(num.length <= 2) return true
    let diff = num[1] - num[0]
    for(let i = 1; i <= num.length - 1; i++) {
        if((num[i] - num[i-1]) !== diff) return false
    }
    return true
}

for(let i = 1; i <= input; i++) {
    if(isOne(i)) count++;
}

console.log(count)