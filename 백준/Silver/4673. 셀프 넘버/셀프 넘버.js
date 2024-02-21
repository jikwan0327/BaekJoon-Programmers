let arr = new Array(10000).fill(0).map((_, idx) => 10000 - idx)
let answer = []

arr.map(res => {
    answer.push(res.toString().split('').map(Number).reduce((arr, a) => arr + a) + res)
})

console.log(arr.filter(x => !answer.includes(x)).sort((a,b) => a - b).join('\n'))