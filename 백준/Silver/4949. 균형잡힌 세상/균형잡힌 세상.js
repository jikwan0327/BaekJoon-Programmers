const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
input.pop()
input.pop()

input.map(res => {
    const stack = []
    const words = res.split('')
    for(let i = 0; i < words.length; i++) {
      if(words[i] === '(' || words[i] === "[") {
            stack.push(words[i])
      } else if(words[i] === ")") {
        if(stack[stack.length-1] == '(') stack.pop();
        else {stack.push(words[i]);break;}
      } else if(words[i] === "]") {
        if(stack[stack.length-1] == '[') stack.pop()
        else {stack.push(words[i]);break;}
      }
    }
    if(stack.length>0) console.log('no')
    else console.log('yes')
})