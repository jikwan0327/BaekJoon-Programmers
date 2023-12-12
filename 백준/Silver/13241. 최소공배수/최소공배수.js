const fs = require('fs')
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)

let [a, b] = [n, m]
let tmp;
while(b){
    tmp = a % b;
    a = b;
    b = tmp;
}
console.log(n/a*m/a*a);
