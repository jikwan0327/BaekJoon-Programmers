const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)
const arr = Array(input[0]).fill().map(res => new Array(input[0]).fill(0))
let result = ''
let x = 0, y = -1;
let direction = 'B'

for(let i = input[0] ** 2; i > 0; i--) {
    switch(direction) {
        case "B":
            y++;
            if(y == input[0] || arr[y][x] != 0 ) {
                y--;
                x++;
                direction = "R";
                arr[y][x] = i;
            }
            else {
                arr[y][x] = i;
            }
            break;
        case "R":
            x++;
            if(x == input[0] || arr[y][x] != 0) {
                x--;
                y--;
                direction = "T";
                arr[y][x] = i;
            }
            else {
                arr[y][x] = i;
            }
            break;
        case "T":
            y--;
            if(y == -1 || arr[y][x] != 0) {
                y++;
                x--;
                direction = "L";
                arr[y][x] = i;
            }
            else {
                arr[y][x] = i;
            }
            break;
        case "L":
            x--;
            if(arr[y][x] != 0) {
                x++;
                y++;
                direction = "B";
                arr[y][x] = i;
            }
            else {
                arr[y][x] = i;
            }
            break;
    }
    if(i == input[1]) {
        result = `${y+1} ${x+1}`
    }
}
arr.map(res => console.log(res.join(' ')))

console.log(result)