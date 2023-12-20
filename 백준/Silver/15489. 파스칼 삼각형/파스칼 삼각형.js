const fs = require('fs')
const [R, C, W] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number)

let arr = new Array(R+W).fill(0).map((_, idx) => new Array(idx+1).fill(0))
let answer = 0;

arr[0][0] = 1;
arr[1][0] = 1;
arr[1][1] = 1;

for(let i = 2; i < R+W; i++) {
    for(let j = 0; j <= i; j++) {
        if(j==0 || j == i) arr[i][j] = 1 
        else arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
    }
} 

for(let i = R-1; i < R+W-1; i++) {
    for(let j = C-1; j < C+i-R+1; j++) {
        answer += arr[i][j]
    }
}

console.log(answer)