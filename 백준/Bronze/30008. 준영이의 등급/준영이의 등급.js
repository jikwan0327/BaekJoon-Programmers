let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let line1 = input[0].split(' ').map(Number)
let line2 = input[1].split(' ').map(Number)
let answer = ''
line2.map((res) => {
    let result = parseInt(res * 100 / line1[0])
    if(result <= 4) {
        answer += "1 ";
    } else if(result <= 11) {
        answer += "2 ";
    } else if(result <= 23) {
        answer += "3 ";
    } else if(result <= 40) {
        answer += "4 ";
    } else if(result <= 60) {
        answer += "5 ";
    } else if(result <= 77) {
        answer += "6 ";
    } else if(result <= 89) {
        answer += "7 ";
    } else if(result <= 96) {
        answer += "8 ";
    } else if(result <= 100) {
        answer += "9 ";
    }
})

console.log(answer)