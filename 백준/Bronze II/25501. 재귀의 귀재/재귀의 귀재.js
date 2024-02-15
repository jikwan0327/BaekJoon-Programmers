const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift()
let total = 0;

function recursion(s, l, r) {
    total++;
    if(l >= r) return 1
    else if(s[l] != s[r]) return 0
    else return recursion(s, l+1, r-1)
}

function isPalindrome(s) {
    total = 0;
    return recursion(s, 0, s.length-1)
}

input.map(res => {
    console.log(isPalindrome(res), total)
})