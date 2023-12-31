const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const t = +input[0]

for(let i = 0; i < t; i++) {
    let cnt = +input[i*3+2]
    let arr = input[i*3+3].replace('[', '').replace(']', '').split(',').map(Number)
    arr = arr.slice(0, cnt)
    let cmd = input[i*3+1].split('')
    let isError = false
    let isReverse = -1
    for(let j = 0; j < cmd.length; j++) {
        if(cmd[j] == 'R') isReverse *= -1
        else if(cmd[j] == 'D') {
            if(arr.length > 0) {
                if(isReverse > 0) arr.pop()
                else arr.shift()
            } else {
                isError = true
                break;
            }
        }
    }
    if(isReverse > 0) arr.reverse()
    if(isError) console.log('error')
    else console.log('['+arr.join(',')+']')
}