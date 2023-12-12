const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
input.shift()


function GCD(a, b){
  let tmp;
  while(b){
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}

input.map((res) => {
    let [a, b] = res.split(' ').map(Number)
    console.log(a/GCD(a, b)*b/GCD(a, b)*GCD(a, b))
})