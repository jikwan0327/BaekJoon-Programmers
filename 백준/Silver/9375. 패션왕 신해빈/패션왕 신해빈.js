let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let test = +input[0];
let result = new Map()
let i = 1;
for(let j = 0; j < test; j++) {
    let n = Number(input[i]);
    let temp = i;
    i++;
    for(i; i < temp + n + 1; i++) {
        let [n, m] = input[i].split(' ')
        result.set(m, (result.get(m)||0) + 1)
    }
    let values = Array.from(result.values());
    console.log(values.reduce((arr, cur) => arr *= cur + 1, 1) - 1)
    result.clear()
}