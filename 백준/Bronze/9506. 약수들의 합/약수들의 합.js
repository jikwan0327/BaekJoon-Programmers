const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
input.pop()

function rest(i, m) {
    if(m % i == 0) return true;
    return false
    
}

input.map(res => {
    let answer = []
    for(let i = 1; i < res; i++) {
        if(rest(i, res)) answer.push(i)
    }
    
    if(answer.reduce((arr, res) => arr + res) !== res) {
        console.log(res + ' is NOT perfect.')
    } else {
        console.log(res + ' = ' + answer.join(' + '))
    }
})