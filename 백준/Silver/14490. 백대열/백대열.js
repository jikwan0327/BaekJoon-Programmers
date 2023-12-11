const fs = require('fs')
const [n, m] = fs.readFileSync('/dev/stdin').toString().split(':').map(Number)

function gcd(a, b) {
  var R;
  while ((a % b) > 0)  {
    R = a % b;
    a = b;
    b = R;
  }
  return b;
}

console.log(`${n/gcd(n, m)}:${m/gcd(n, m)}`)