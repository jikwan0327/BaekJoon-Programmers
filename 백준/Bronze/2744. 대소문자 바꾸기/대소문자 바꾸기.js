let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

function isLowerCase(str) {
  return str === str.toLowerCase();
}

let a = input.split('').map(res => {
    if(isLowerCase(res)) {
        return res.toUpperCase()
    } else {
        return res.toLowerCase()
    }
})

console.log(a.join(''))