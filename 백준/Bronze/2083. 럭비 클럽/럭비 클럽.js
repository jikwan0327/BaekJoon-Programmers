const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

for(let i = 0; i < input.length; i++) {
    const [name, age, weight] = input[i].split(' ')
    if(name =='#') break;
    if(age > 17 || weight >= 80) {
        console.log(name, 'Senior')
    } else {
        console.log(name, 'Junior')
    }
}