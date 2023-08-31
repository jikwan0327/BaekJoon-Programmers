let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n, m] = input[0].split(' ').map(Number)

for(let i = 1; i <= n; i++) {
    let result = []
    let a = input[i].split(' ').map(Number)
    let b = input[i+n].split(' ').map(Number)
    for(let j = 0; j < m; j++) {
        result.push(a[j] + b[j])
    }
    console.log(result.join(' '))
}