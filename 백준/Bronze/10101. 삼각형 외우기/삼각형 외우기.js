const fs = require('fs')
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

if(a == 60 && b == 60 && c == 60) console.log('Equilateral')
else if(a + b + c == 180) {
    if((a == b) | (b == c) | (c == a)) console.log('Isosceles')
    else console.log('Scalene')
} else console.log('Error')