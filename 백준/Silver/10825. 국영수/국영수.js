let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
input.shift()

let arr = input.map(res => {
    return res.split(' ')
})

arr.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
}).sort((a, b) => b[3] - a[3]).sort((a, b) => a[2] - b[2]).sort((a, b) => b[1] - a[1])

console.log(arr.map(res => res[0]).join('\n'))