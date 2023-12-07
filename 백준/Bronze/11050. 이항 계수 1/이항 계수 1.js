const fs = require('fs')
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)

function fac(a) {
    if(a == 0 || a == 1) return 1;
    return a * fac(a-1)
}

console.log(fac(n)/fac(m)/fac(n-m))