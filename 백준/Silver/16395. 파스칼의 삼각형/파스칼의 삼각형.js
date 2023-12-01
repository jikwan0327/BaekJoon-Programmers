const fs = require('fs')
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)
const arr = new Array(n).fill(0).map((_, idx) => new Array(idx+1).fill(0))

arr[0][0] = 1;

for(let i = 1; i < n; i++) {
    for(let j = 0; j <= i; j++) {
        if(j == arr[i].length-1 || j == 0) {
            arr[i][j] = 1;
        } else {
            arr[i][j] = arr[i-1][j] + arr[i-1][j-1]
        }
    }
}

console.log(arr[n-1][m-1])