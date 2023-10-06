let fs = require("fs");
const [A, B] = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

console.log(A + B)