function solution(babbling) {
    var answer = 0;
    const regex = /aya|ye|woo|ma/gi
    
    babbling.map((res) => {
        if(res.replace(regex, '').length == 0) answer += 1;
    })
    return answer;
}