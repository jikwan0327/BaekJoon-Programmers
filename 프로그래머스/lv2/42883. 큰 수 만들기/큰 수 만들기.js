function solution(number, k) {
    var answer = []
    let stack = []
    let arr = number.split('').map(Number)
    let i = 1;
    
    answer.push(arr[0])
    for(let i = 1; i < number.length; i++) {
        while(answer[answer.length-1] < arr[i] && stack.length != k)  {
        answer.pop()
        stack.push(arr[i])
    }
        answer.push(arr[i])
    } 
    
    return answer.filter((_, idx) => idx < number.length - k).join('');
}