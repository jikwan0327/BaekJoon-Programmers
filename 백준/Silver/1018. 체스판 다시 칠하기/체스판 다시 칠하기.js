const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, m] = input.shift().split(' ').map(Number)
const arr = new Array(8).fill('B').map(res => new Array(8).fill('B'))
const arr2 = new Array(8).fill('B').map(res => new Array(8).fill('B'))
const result = input.map(res => res.split(''))
let answer = []

for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
        if((i + j) % 2) {
            arr[i][j] = 'W'   
        } else {
            arr2[i][j] = 'W'
        }
    }
}

function total(x, y) {
    let count = [0, 0];
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
             if(arr[i][j] != result[i + x][j + y]) {
                count[0]++
            } 
            if(arr2[i][j] != result[i + x][j + y] ){
                count[1]++;
            }
        }
    }
    return count;
}

for(let i = 0; i < n - 7; i++) {
    for(let j = 0; j < m - 7; j++) {
        answer = answer.concat(total(i, j)) 
    }
}

console.log(Math.min(...answer))