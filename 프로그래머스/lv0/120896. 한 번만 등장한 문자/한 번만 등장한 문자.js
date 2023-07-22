function solution(s) {
    var answer = s.split('').sort();
    
    
    for(let i = 0; i < s.length; i++) {
        if(answer[i] == answer[i+1]){
            answer = answer.filter((res) => res !== answer[i])
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        if(answer[i] == answer[i+1]){
            answer = answer.filter((res) => res !== answer[i])
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        if(answer[i] == answer[i+1]){
            answer = answer.filter((res) => res !== answer[i])
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        if(answer[i] == answer[i+1]){
            answer = answer.filter((res) => res !== answer[i])
        }
    }

    return answer.sort().join('');
}