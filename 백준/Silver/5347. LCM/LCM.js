const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()

let GCD = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}

input.map(res => {
    const [num1, num2] = res.split(' ').map(Number)
    const gcd = GCD(num1, num2)
    console.log(gcd * num1/gcd * num2/gcd)
})