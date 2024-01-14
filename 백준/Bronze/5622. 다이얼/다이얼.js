const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('')
input.pop()
let total = 0

input.map(res => {
    switch(res) {
        case "A":
        case "B":
        case "C":
            return total += 3
        case "D":
        case "E":
        case "F":
            return total += 4
        case "G":
        case "H":
        case "I":
            return total += 5
        case "J":
        case "K":
        case "L":
            return total += 6
        case "M":
        case "N":
        case "O":
            return total += 7
        case "P":
        case "Q":
        case "R":
        case "S":
            return total += 8
        case "T":
        case "U":
        case "V":
            return total += 9
        case "W":
        case "X":
        case "Y":
        case "Z":
            return total += 10
        default:
            return;
    }
})

console.log(total)