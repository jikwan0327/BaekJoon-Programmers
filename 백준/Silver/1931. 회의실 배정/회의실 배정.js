let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

let n = Number(input[0])
let arr = [];
let cnt = 1;

for(let i = 1; i <= n; i++) {
    arr.push(input[i].split(' ').map(Number))
}

arr.sort((a,b) => {
    if(a[1] !== b[1]){
        return a[1] - b[1]
    } else {
        return a[0] - b[0]
    }
})

let now = arr[0][1]

for(let i = 1; i < n; i++) {
    if(arr[i][0] >= now) {
        now = arr[i][1];
        cnt += 1;
    }
}
console.log(cnt)