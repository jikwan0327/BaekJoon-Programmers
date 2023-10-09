const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
input.pop()
let T = Number(input.shift())
let answer = ""

for(let i = 0; i < T; i++) {
    let arr = input[i*4+1].split(' ').sort((a, b) => a - b).map(Number)
    let arr2 = input[i*4+3].split(' ').map(Number)
    arr2.forEach(res => {
        let start = 0;
        let end = arr.length - 1;
        let mid;
        let success = false
        while(start <= end) {
            let mid = parseInt((start + end) / 2);
            if(arr[mid] == res) {
                success = true
                break;
            } else if(arr[mid] < res) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        success ? answer += '1\n' : answer += '0\n'
    })
}
console.log(answer)