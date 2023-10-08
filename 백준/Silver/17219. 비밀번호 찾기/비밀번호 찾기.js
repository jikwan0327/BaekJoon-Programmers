let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [N, M] = input[0].split(' ').map(Number)
let result = new Map()

for(let i = 1; i <= N; i++) {
    let [site, password] = input[i].split(' ')
    result.set(site, password)
}

for(let i = N + 1; i < N + M + 1; i++) {
    if(result.has(input[i])) {
        console.log(result.get(input[i]))
    }
}