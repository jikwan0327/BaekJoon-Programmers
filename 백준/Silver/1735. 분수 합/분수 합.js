const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
let [n, m] = input[0].split(' ').map(Number)
let [k, i] = input[1].split(' ').map(Number)

let a = n * i + k * m 
let b = m * i

function GCD(a, b) {
    let tmp;
    while(b){
        tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}

console.log(a/GCD(a, b), b/GCD(a, b))