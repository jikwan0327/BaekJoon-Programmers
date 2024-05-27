const fs = require('fs')
const [n, l, w, h] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let start = 0;
let end = Math.max(l, w, h)

for(let i = 0; i <= 100; i++) {
    let mid = (start + end) / 2
    let count = Math.floor(l/mid) * Math.floor(w/mid) * Math.floor(h/mid)
    
    if(count >= n) {
        start = mid;
    } else {
        end = mid;
    }
}

console.log(end.toFixed(9))