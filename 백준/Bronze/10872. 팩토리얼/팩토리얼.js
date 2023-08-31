let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
function fact(n) {
    if(n == 0 || n == 1) return 1;
    return n * fact(n-1)
}

console.log(fact(input))