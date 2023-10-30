const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)

for(let a = 0; a < 9; a++) {
    for(let b = a + 1; b < 9; b++) {
        for(let c = b + 1; c < 9; c++) {
            for(let d = c + 1; d < 9; d++) {
                for(let e = d + 1; e < 9; e++) {
                    for(let f = e + 1; f < 9; f++) {
                        for(let g = f + 1; g < 9; g++) {
                            if(input[a] + input[b] + input[c] + input[d] + input[e] + input[f] + input[g] === 100) 
                            return console.log([input[a], input[b], input[c], input[d], input[e], input[f], input[g]].sort((a,b) => a - b).join('\n'))
                        }
                    }
                }
            }
        }
    }
}