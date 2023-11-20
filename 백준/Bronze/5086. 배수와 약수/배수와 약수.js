const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

for(let res of input) {
    let [a, b] = res.split(' ').map(Number)
    if(a == 0 && b == 0) return ;
    if(a%b==0) {
        console.log('multiple')
    } else if(b%a==0) {
        console.log('factor')
    } else {
        console.log('neither')
    }
}