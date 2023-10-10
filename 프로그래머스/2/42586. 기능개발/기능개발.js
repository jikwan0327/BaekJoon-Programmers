function solution(progresses, speeds) {
    var answer = [];
    let result = []
    for(let i = 0; i < progresses.length; i++) {
        let a = Math.ceil((100 - progresses[i]) / speeds[i])
        if(result[0] < a) {
            answer.push(result.length)
            result = []
        }
        result.push(a)
    }
    if(result.length > 0) {
        answer.push(result.length)
        result = []
    }
    
    return answer;
}