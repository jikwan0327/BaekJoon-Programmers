function solution(numbers, direction) {
    var answer = [];
    var num;
    if(direction === "right"){ 
        num = numbers.pop();
        numbers.unshift(num);
    }
    if(direction === "left"){ 
        num = numbers.shift();
        numbers.push(num) 
    }
    return numbers
}