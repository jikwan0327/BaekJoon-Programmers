function solution(prices) {
    var answer = [];    
    for(let i = 0; i < prices.length; i++) {
        let current = prices[i];
        let result = 0;
        for(let j = i + 1; j < prices.length; j++) {
            result += 1
            if(current > prices[j]) break;
        }
        answer.push(result)
    }
    return answer;
}