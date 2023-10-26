const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('.')
let result = []

for(let i = 0; i < input.length; i++) {
    input[i] = input[i].replace(/\n/g, '')
    let temp = new Array(input[i].length).fill('A')
    if((input[i].length - 2) % 4 == 0 && input[i].length > 1) {
        temp[input[i].length - 1] = 'B'
        temp[input[i].length - 2] = 'B'
    } else if(input[i].length % 2) {
        console.log(-1)
        return ;
    }
    
    result.push(temp.join(''))
}

console.log(result.join('.'))