let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let string = ''

for(let i = 1; i <= input; i++) {
    string += `${i}\n`
}

console.log(string)