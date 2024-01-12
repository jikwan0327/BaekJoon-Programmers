const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

switch (input[0]) {
    case "fdsajkl;":
    case "jkl;fdsa":
        return console.log('in-out')
    case "asdf;lkj":
    case ";lkjasdf":
        return console.log('out-in')
    case "asdfjkl;":
        return console.log('stairs')
    case ";lkjfdsa":
        return console.log('reverse')
    default:
        return console.log('molu')
}