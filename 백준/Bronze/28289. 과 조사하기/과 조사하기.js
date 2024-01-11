const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
input.shift()
const students = [0, 0, 0, 0]

input.map(res => {
    const [g, c, n] = res.split(' ').map(Number)
    if(g == 1) students[3]++;
    else {
        if(c == 3)  students[1]++
        else if(c == 4) students[2]++
        else students[0]++;
    }
})
console.log(students.join('\n'))