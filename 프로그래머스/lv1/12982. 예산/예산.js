function solution(d, budget) {
    var answer = 0;
    
    let leftBudget = budget;
    d.sort((a,b) =>  a - b)
    d.map((res) => {
        if(leftBudget - res >= 0) {
            leftBudget -= res
            answer += 1
        }
    })
    return answer;
}