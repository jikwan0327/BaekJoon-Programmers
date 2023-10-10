let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let repeat = +input.shift()

function lowerBound(arr, target, start, end) {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
}

function upperBound(arr, target, start, end) {
    while (start < end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] > target) end = mid;
        else start = mid + 1;
    }
    return end;
}

function countByRange(arr, leftValue, rightValue) {
    let rightIndex = upperBound(arr, rightValue, 0, arr.length);
    let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
    return rightIndex - leftIndex;
}

for(let i = 0; i < repeat; i++) {
    let arr = input[i*3+1].split(' ').map(Number).sort((a,b) => a - b)
    let arr2 = input[i*3+2].split(' ').map(Number).sort((a,b) => a - b)
    let cnt = 0;
    arr.forEach((res) => {
        cnt += countByRange(arr2, 0, res - 1)
    })
    console.log(cnt)
}