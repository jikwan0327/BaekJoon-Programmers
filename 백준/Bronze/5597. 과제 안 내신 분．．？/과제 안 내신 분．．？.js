let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);
let arr = new Array(30).fill(0).map((_,idx) => idx +1)
input.pop()
input.sort((a, b) => a - b)
arr.map(res => {
    if(!input.includes(res)) {
        console.log(res)
    }
})